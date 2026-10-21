---
title: "🎃🐮 Mooctober 2026 | PHP 8.2.35, SOGo 5.12.12 & Nginx 1.30.6"
date: 2026-10-21T19:30:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["2026", "update", "changelog", "major"]
categories: ["Updates"]

---

## 2026-10 (Release: 21st October 2026)

**Moohoo everyone!**

We're happy to present the **2026-10 Update**!
This release bumps **PHP to 8.2.35**, **SOGo to 5.12.12** and **Nginx to 1.30.6**, and all three updates fix security issues. On top of that, the web UI gets a refresh: **Bootstrap 5.3.8**, a new **theme system** including a **servercow theme**, and color-coded login pages.

---

**⚠️ Important Note:**
All three component updates are security releases:

* **PHP 8.2.35** is an out-of-band security release by the PHP project fixing two critical issues in the PHP core (CVSS 9.2). In addition, we disable `session.upload_progress`, which mailcow does not use.
* **SOGo 5.12.12** fixes an IDOR (Insecure Direct Object Reference) vulnerability affecting all previous SOGo versions.
* **Nginx 1.30.6** fixes five vulnerabilities, including buffer overflows when using `alias` with `rewrite` and in script evaluation, and session forgery with TLS session tickets.

**We strongly recommend updating your mailcow instance to this version as soon as possible.**

---

**ℹ️ Note for custom LDAP sources in SOGo:**
SOGo/SOPE 5.12.12 now verifies the certificate for LDAP over SSL. The default mailcow setup is not affected. If you added your own LDAP source in `data/conf/sogo/plist_ldap.sh` using `ldaps://` with a self-signed certificate, append `?tlsVerifyMode=None` to the host, e.g. `ldaps://10.0.2.15:636?tlsVerifyMode=None`.

---

### 🎨 UI Theming

Along the way, we reworked the theming of the mailcow UI: themes now live in their own folders in `data/web/css/themes/` and survive updates. The default look stays unchanged. A new **servercow theme** is included, which you can select in **System > Configuration > Customize**.

---

### New Features

* Feat/update UI by @FreddleSpl0it ➡️ [PR #7520](https://github.com/mailcow/mailcow-dockerized/pull/7520)
  * Bootstrap 5.1.3 → 5.3.8
  * Theme system: custom themes in `data/web/css/themes/<name>/`, selectable in **System > Configuration > Customize**
  * New **servercow theme**
  * Login pages with a colored marker and an icon per role (user, domain admin, admin)

### Updates & Security

* [PHP] Update base to Alpine 3.24, build PECL extensions from GitHub by @FreddleSpl0it ➡️ [PR #7534](https://github.com/mailcow/mailcow-dockerized/pull/7534)
* [SOGo] Update to 5.12.12 by @FreddleSpl0it ➡️ [PR #7536](https://github.com/mailcow/mailcow-dockerized/pull/7536)
* [Nginx] Update to 1.30.6 by @FreddleSpl0it ➡️ [PR #7535](https://github.com/mailcow/mailcow-dockerized/pull/7535)

### Updates

* Translations update from Weblate by @milkmaker ➡️ [PR #7525](https://github.com/mailcow/mailcow-dockerized/pull/7525)
* Translations update from Weblate by @milkmaker ➡️ [PR #7527](https://github.com/mailcow/mailcow-dockerized/pull/7527)

### Full Changelog
[https://github.com/mailcow/mailcow-dockerized/compare/2026-09a...2026-10](https://github.com/mailcow/mailcow-dockerized/compare/2026-09a...2026-10)

---

That's all for this release!
As always, we recommend keeping your mailcow installation up-to-date and backing up your data regularly.

Stay safe and enjoy!

Your mailcow Team from **The Infrastructure Company GmbH** (or shortly **tinc**)
