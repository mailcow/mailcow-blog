---
title: "💮🐮 Moorch 2025 Update | The Update which changed the Cow"
date: 2025-03-25T10:00:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["2025", "update", "changelog", "major"]
categories: ["Updates"]

---

# 2025-03b (Release: 7th April 2025)

## Changelog

* [SOGo] Update to 5.12.0
* [Postfix] update postscreen_access.cidr by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/6443
* Fix sasl_logs by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6450
* [Web] Fix transport routing test by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6451
* [Netfilter] Downgrade to 1.61 by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6438
* Fix tiny typo by @sardaukar in https://github.com/mailcow/mailcow-dockerized/pull/6426
* [SOGo] Use JS for mailcow logout by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6439
* [Dovecot] Increase Timeout for HTTP Login Request by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6422
* [Web] Improve clarity of LDAP SSL/TLS settings by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6460

## Full Changelog
https://github.com/mailcow/mailcow-dockerized/compare/2025-03a...2025-03b

---

# 2025-03a (Release: 27th March 2025)

## Bug Fixes

* [Nginx] Move conf.d include before SNI vhosts by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6411
* [Web] Use absolute paths for flag SVGs by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6410
* [Web] Check if mailbox is active before renaming by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6409
* [Swagger] Fix type property for /api/v1/add/bcc endpoint by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6408
* [Web] Fix oauth2 redirect after user login by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6407
* [Web] Fix SOGo access after Passwordless auth by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6406
* fix(ui): Swap translations for oversized dropdown by @marvinruder in https://github.com/mailcow/mailcow-dockerized/pull/6402

## Full Changelog
https://github.com/mailcow/mailcow-dockerized/compare/2025-03...2025-03a

---

# 2025-03 (Release: 25th March 2025)

**Moohoo everyone,**

We are happy to announce the release of **mailcow: dockerized 2025-03**!

This release includes features that have been tested in the nightly branch over the past year. If you’ve been following our [nightly progress update](https://mailcow.email/posts/2025/nightly-progress/), you may already be familiar with some of the changes listed below.

**Before updating, please ensure you have a current backup of your installation.**

{{< admonition type=warning title="Warning" >}}
This update heavily changes the authentication process. If you don’t want to apply the 2025-03 update, you can switch to the legacy branch with `./update.sh --legacy`.  
The legacy branch will **only** receive security updates until February 2026.  
[Read more about the legacy branch](https://docs.mailcow.email/maintenance/update/#update-variants)
{{< /admonition >}}

## Breaking Changes

Logins for Administrator, Domain Administrator, and Users have been separated:

- **Administrator Login:** `/admin`  
- **Domain Administrator Login:** `/domainadmin`  
- **Users:** `/`

Direct SOGo login is now disabled. All unauthenticated requests to `/SOGo` will be redirected to `/`.  
Users must use the mailcow login.  
Administrators can define whether a user should be redirected to the mailcow UI or SOGo after login.

## Other Notable Changes

- All Alpine-based images have been updated to Alpine 3.21.
- 2FA protected mailboxes will need an app password for authentication with mail protocols.

## New Feature

mailcow now supports **external Identity Providers** for authentication.  
This is optional — administrators can configure an external identity provider, which can be used alongside the SQL database for authentication.  
You can even configure which authentication source a specific user should use.

Currently supported Identity Providers:

1. **Keycloak** – [Documentation](https://docs.mailcow.email/manual-guides/mailcow-UI/u_e-mailcow_ui-keycloak/)  
2. **LDAP/AD** – [Documentation](https://docs.mailcow.email/manual-guides/mailcow-UI/u_e-mailcow_ui-ldap/)  
3. **Generic OIDC** – [Documentation](https://docs.mailcow.email/manual-guides/mailcow-UI/u_e-mailcow_ui-generic-oidc/)

## Improvements

mailcow now uses **Dovecot's password caching** to reduce authentication-related load.

### Benchmarks

| Caching | Auth Source | Server Load Peak | Time for 2000 Logins (seconds) |
|---------|-------------|------------------|-------------------------------|
| ❌      | SQL         | ~13              | 91.24                         |
| ❌      | LDAP        | ~4               | 37.94                         |
| ✅      | SQL         | ~6               | 23.16                         |
| ✅      | LDAP        | ~2               | 23.17                         |

## Full Changelog
https://github.com/mailcow/mailcow-dockerized/compare/2025-02...2025-03

---


That's all for this release! As always, we recommend keeping your mailcow installation up-to-date and backing up your data regularly.

Stay safe and enjoy!

Your mailcow Team from The Infrastructure Company GmbH (or shortly tinc)
