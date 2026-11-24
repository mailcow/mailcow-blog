---
title: "From Microsoft 365 to mailcow: migrating mailboxes with the new sync jobs"
date: 2026-11-24T09:00:00+01:00
draft: false
author: The Infrastructure Company GmbH
description: "Since update 2026-11, sync jobs fetch mailboxes from Microsoft 365 via OAuth2. Step by step: the Entra ID app, the sync source, the sync jobs and the switch-over."
keywords: ["Microsoft 365", "Exchange Online", "migration", "imapsync", "OAuth2", "sync jobs", "mailcow"]
featuredImage: "/images/2026/November/m365-migration-sync-jobs.jpg"
images: ["/images/2026/November/m365-migration-sync-jobs.jpg"]
toc: true
license: ""
tags: ["imapsync"]
categories: ["Guides"]
---

**Moohoo everyone!**

Many of you come to mailcow because you no longer want your email in Microsoft 365. The biggest part of the move is almost always the mailboxes. That's why we reworked the sync jobs completely in [update 2026-11]({{< relref "/posts/2026/release-2026-11" >}}): they now sign in to Microsoft 365 directly via **OAuth2** and can run in parallel.

In this post we show you step by step how to move your mailboxes from Microsoft 365 to mailcow.

<!--more-->

## What's new in sync jobs?

- **Sync sources:** you add the source server once as a source and use it in as many sync jobs as you like. Presets fill in the settings for Microsoft 365, Google and many other providers.
- **OAuth2 for Microsoft 365 and Google:** Exchange Online no longer accepts IMAP with username and password. The sync jobs therefore sign in with an OAuth2 token. mailcow renews the tokens automatically, even during long runs.
- **Two ways:** as an admin, you move the whole organisation with an app, and nobody has to sign in. Or every user signs in to Microsoft once themselves.
- **Parallel runs:** up to 32 sync jobs run at the same time, optionally with a bandwidth limit per process. Priorities and "Schedule next" set the order.
- **Certificate check:** mailcow verifies the certificate of the source server.
- **Status at a glance:** the list shows the last result of every job, for example "Success" or "OAuth token not ready", and the log of the last run.

Under the hood, imapsync 2.314 does the work.

## Thunderbird or eM Client instead of Outlook

{{< admonition tip "Our recommendation" >}}
Use the move to switch your mail client too: we recommend [Thunderbird](https://docs.mailcow.email/client/client-thunderbird/) or [eM Client](https://docs.mailcow.email/client/client-emclient/). Both connect mail, calendars and contacts from mailcow directly, without any add-in. Thunderbird is free and open source, eM Client is available for Windows, macOS, Android and iOS.
{{< /admonition >}}

We advise against Outlook: newer versions can only be set up with mailcow by hand, ActiveSync doesn't work there, and calendars and contacts need an add-in. If you have to stay with Outlook, the [Outlook guide](https://docs.mailcow.email/client/client-outlook/) shows how to set it up.

## Before you start

1. **Update mailcow:** you need version 2026-11 or newer. As always, update with `./update.sh`.
2. **Add domains and mailboxes in mailcow:** in the web interface or via the [API](https://docs.mailcow.email/manual-guides/mailcow-UI/u_e-mailcow_ui-api/). Make sure the target mailboxes have enough quota.
3. **Enable IMAP in Exchange Online:** for every source mailbox in the Microsoft 365 admin center under *Users → Mail → Manage email apps*.
4. **Optionally allow more parallel runs:** under *System → Configuration → Options → Sync jobs*, field "Max. parallel sync processes" (default 1).

## Option A: move the whole organisation

This option is for admins and domain admins who move many mailboxes at once. mailcow signs in with an app that has access to all source mailboxes. Nobody has to sign in to Microsoft.

1. In the **Microsoft Entra admin center**, register a new app under *App registrations*.
2. Under *API permissions*, add the application permission `IMAP.AccessAsApp` of "Office 365 Exchange Online" (tab "APIs my organization uses") and grant admin consent.
3. Under *Certificates & secrets*, create a client secret.
4. Register the app in Exchange Online and give it access to the source mailboxes, using the Exchange Online PowerShell. `<OBJECT_ID>` is the object ID of the app under *Enterprise applications*, not the one under *App registrations*:

    ```powershell
    New-ServicePrincipal -AppId <APPLICATION_ID> -ObjectId <OBJECT_ID>
    Add-MailboxPermission -Identity "user@contoso.com" -User <OBJECT_ID> -AccessRights FullAccess
    ```

    Run the second command for every mailbox you want to move. Microsoft describes these steps in detail in [Authenticate an IMAP, POP or SMTP connection using OAuth](https://learn.microsoft.com/en-us/exchange/client-developer/legacy-protocols/how-to-authenticate-an-imap-pop-smtp-application-by-using-oauth).
5. In mailcow, go to *E-Mail → Configuration → Sync jobs*, add a source with the preset **"Microsoft 365 (Client credentials)"** and enter the tenant (tenant ID or a domain of the tenant), the client ID and the client secret.
6. Add a sync job for every mailbox: choose the target mailbox in mailcow, select the source and enter the address of the Microsoft 365 mailbox as "Remote username (source)". You don't need a password.

With many mailboxes, it's easiest to create the sync jobs via the API (`add/syncjob` with the `source_id` of the source).

## Option B: every user moves their own mailbox

Here every user signs in once with their Microsoft 365 account. This works well if users should create their sync jobs themselves.

1. In the **Microsoft Entra admin center**, register a new app and add the platform "Web" with the redirect URI `https://<MAILCOW_HOSTNAME>/syncjob-oauth`.
2. Under *API permissions*, add the delegated permissions `IMAP.AccessAsUser.All`, `offline_access`, `openid`, `email` and `profile` of "Microsoft Graph". Best grant admin consent right away, otherwise every user has to agree when signing in.
3. Under *Certificates & secrets*, create a client secret.
4. In mailcow, add a source with the preset **"Microsoft 365 (User login)"**, enter the tenant, the client ID and the client secret, and share the source with the domains or mailboxes that need it.
5. When creating the sync job, the user clicks **"Sign in with the provider"** and signs in with the Microsoft 365 account. The browser must allow pop-ups for mailcow.

The sign-in only works if mailcow is opened via `MAILCOW_HOSTNAME`.

## Switching over without losing mail

1. **Let it sync:** the sync jobs run again and again at the interval you set. In the meantime, everyone keeps working in Microsoft 365 as usual, and new mail is picked up in the next run.
2. **Prepare DNS:** lower the TTL of the MX and Autodiscover records a few days in advance.
3. **Switch over:** point MX, SPF, DKIM, DMARC and Autodiscover to mailcow.
4. **Final run:** once the DNS change has propagated everywhere, let the sync jobs run one last time, then deactivate them.

Sync jobs only copy email. Export calendars and contacts as ICS and vCard files and import them in SOGo.

## Troubleshooting

| Message | What helps |
|---|---|
| "OAuth token not ready" on a sync job (user login) | Open the sync job, click "Sign in with the provider", sign in again and save |
| "Token failed" on an app source | Check the tenant, client ID, client secret and permissions, then click "Refresh token now" |
| "Wrong username or password" with an app source | Is IMAP enabled for the mailbox? Does the app have full access to the mailbox? Did you use the object ID of the *enterprise application*? |
| "Target mailbox is over quota" | Raise the quota of the target mailbox in mailcow |
| "Sign in with the provider" fails | Read the reason next to the button. If a 2FA setup or password change is pending in mailcow, finish it first. |

You'll find all details, including Google Workspace, in the [sync jobs documentation](https://docs.mailcow.email/post_installation/firststeps-sync_jobs_migration/).

## No server of your own, or need a hand?

Don't want to run your own server? With [managed mailcow](https://cp.servercow.de/product/managed-mailcow) you get your own mailcow, run by us, the developers of mailcow. If you run mailcow yourself and need help with the move, our [support packages](https://servercow.de/en/mailcow/#help) are there for you.

Good luck with the move and happy mailing!

Your mailcow Team from **The Infrastructure Company GmbH** (or shortly **tinc**)
