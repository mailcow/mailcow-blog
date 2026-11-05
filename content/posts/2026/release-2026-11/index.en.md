---
title: "🍂🐮 Moovember 2026 | Feature & Security Update: Mailbox Groups, imapsync Rework & SOGo 5.12.13"
date: 2026-11-05T11:30:00+01:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["2026", "update", "changelog", "major"]
categories: ["Updates"]

---

## 2026-11 (Release: 5th November 2026)

**Moohoo everyone!**

The **2026-11 Update** brings several new features and security fixes. New are mailbox groups and shared mailboxes, identity provider sync, a reworked imapsync and multiple API keys.

{{< admonition type=danger title="Backup" open=true >}}
**Please create a [backup](https://docs.mailcow.email/backup_restore/b_n_r-backup/) before updating.**
{{< /admonition >}}

{{< admonition type=warning title="Important security update" open=true >}}
**We strongly recommend updating as soon as possible.**
Among other issues, this release fixes a **remote code execution (RCE)** vulnerability that can be exploited by authenticated admins and domain admins. Details on the fixed issues will be published early next week. Please read the breaking changes before updating.

**Workaround** until you can update: limit access to admin and domain admin accounts.
{{< /admonition >}}

### ⚠️ Breaking Changes

* **Sync job API:** `add/syncjob` needs a `source_id`, the server fields (`host1`, `port1`, `enc1`, `authmech1`) are no longer accepted or returned. Existing jobs are migrated automatically. If you create or read sync jobs through the API, update your client: create a source with `add/syncjob_source` (or look it up with `get/syncjob_source/all`) and pass its `source_id`. ➡️ API docs on your own mailcow at `https://<your-mailcow>/api`
* **Request body limit:** 64 MB for the UI and API, `NGINX_MAX_BODY_SIZE` (default `128m`) for SOGo, ActiveSync and DAV. If you raised the Postfix message size limit, set `NGINX_MAX_BODY_SIZE` in `mailcow.conf` above it and run `docker compose up -d`. ➡️ [Docs](https://docs.mailcow.email/manual-guides/Postfix/u_e-postfix-attachment_size/)
* **Custom nginx locations** (`data/conf/nginx/site.*.custom`) are now limited to 64 MB as well. Apps under the mailcow host (e.g. Nextcloud under a path) reject larger uploads with `413`, own server blocks in `data/conf/nginx/*.conf` are not affected. Add `client_max_body_size` to your location (e.g. `client_max_body_size 0;` for no limit) and run `docker compose restart nginx-mailcow`.

### 🔐 Security

* **SOGo 5.12.13**, an upstream security release ➡️ [Release notes](https://github.com/Alinto/sogo/releases/tag/SOGo-5.12.13)
* Several security fixes in mailcow (details next week)
* Fail2ban counts failed logins of all protocols (IMAP, POP3, SMTP, Sieve, EAS, DAV), 2FA rate limit

### 🚀 New Features

* **Mailbox groups:** distribution lists, send-as, shared mailboxes and SOGo calendars/address books for groups. ➡️ [Docs](https://docs.mailcow.email/manual-guides/mailcow-UI/u_e-mailcow_ui-groups/)
* **Identity provider sync** (Keycloak, LDAP/AD): groups and members, optional offboarding. ➡️ [Docs](https://docs.mailcow.email/manual-guides/mailcow-UI/u_e-mailcow_ui-idp-sync/)
* **imapsync rework:** sync sources, OAuth2 for Microsoft 365 and Google, parallel jobs, certificate check of the source server, imapsync 2.314. ➡️ [Docs](https://docs.mailcow.email/post_installation/firststeps-sync_jobs_migration/)
* **API keys:** multiple keys with read-only or read-write access and their own IP allowlist. Keys from `mailcow.conf` are shown as locked service keys. ➡️ [Docs](https://docs.mailcow.email/manual-guides/mailcow-UI/u_e-mailcow_ui-api/)

### What's Changed

#### Features

* [Web][Dovecot] Rework imapsync: sync sources, OAuth2, Python runner by @FreddleSpl0it ➡️ [PR #7546](https://github.com/mailcow/mailcow-dockerized/pull/7546)
* [Web] Rework API keys: multiple keys + locked service keys from mailcow.conf by @FreddleSpl0it ➡️ [PR #7547](https://github.com/mailcow/mailcow-dockerized/pull/7547)
* [Web][Dovecot][SOGo][DockerApi] Add mailbox groups, shared mailboxes and identity provider sync by @FreddleSpl0it ➡️ [PR #7566](https://github.com/mailcow/mailcow-dockerized/pull/7566)
* [Netfilter] Rework: robust bans, no restart loops, identity provider outages are no failed logins by @FreddleSpl0it ➡️ [PR #7567](https://github.com/mailcow/mailcow-dockerized/pull/7567)
* [Web] Add Netfilter unban all button by @FreddleSpl0it ➡️ [PR #7593](https://github.com/mailcow/mailcow-dockerized/pull/7593)

#### Fixes & Security

* Fixes for the reworks: imapsync, logins/netfilter, groups, startup, hardening by @FreddleSpl0it ➡️ [PR #7589](https://github.com/mailcow/mailcow-dockerized/pull/7589)
* [SOGo] Update to 5.12.13 by @FreddleSpl0it ➡️ [PR #7590](https://github.com/mailcow/mailcow-dockerized/pull/7590)

#### Updates

* Update Alpine Images to 3.24 by @FreddleSpl0it ➡️ [PR #7563](https://github.com/mailcow/mailcow-dockerized/pull/7563)
* [Rspamd] Update to 4.2.3 by @FreddleSpl0it ➡️ [PR #7569](https://github.com/mailcow/mailcow-dockerized/pull/7569)
* [ACME][Dockerapi][Dovecot][Olefy][PHP][Rspamd][SOGo][Unbound][Watchdog] Update image tags by @FreddleSpl0it ➡️ [PR #7572](https://github.com/mailcow/mailcow-dockerized/pull/7572)
* [Web] Update composer libraries by @FreddleSpl0it ➡️ [PR #7568](https://github.com/mailcow/mailcow-dockerized/pull/7568)
* Update redis Docker tag to v7.4.12 by @renovate[bot] ➡️ [PR #7555](https://github.com/mailcow/mailcow-dockerized/pull/7555)
* Update dependency tianon/gosu to v1.20 by @renovate[bot] ➡️ [PR #7551](https://github.com/mailcow/mailcow-dockerized/pull/7551)
* [Postfix] update postscreen_access.cidr by @milkmaker ➡️ [PR #7584](https://github.com/mailcow/mailcow-dockerized/pull/7584)

#### Translations

* Translations update from Weblate by @milkmaker ➡️ [PR #7542](https://github.com/mailcow/mailcow-dockerized/pull/7542)

### Full Changelog
[https://github.com/mailcow/mailcow-dockerized/compare/2026-10...2026-11](https://github.com/mailcow/mailcow-dockerized/compare/2026-10...2026-11)

---

Stay safe and enjoy!

Your mailcow Team from **The Infrastructure Company GmbH** (or shortly **tinc**)
