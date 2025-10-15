---
title: "🎃🐄 Mooctober 2025 Update | Rspamd 3.13.2 and Redis Security Update"
date: 2025-10-15T08:55:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["2025", "update", "changelog"]
categories: ["Updates"]

---

# 2025-10 (Release: 15th October 2025)

**Moohoo everyone!**

We're excited to bring you the **2025-10 Update**!  
This release includes several bug fixes and updates **Rspamd** to version **3.13.2** and **Redis** to version **7.4.6**.

The Redis update addresses [CVE-2025-49844](https://github.com/redis/redis/security/advisories/GHSA-4789-qfc9-5f9q).  
**We recommend updating your installation**, but there is no need to panic.  
The vulnerability can only be exploited by an **authenticated user**.
In mailcow, Redis is used **locally only** and is **protected by a password**, meaning an attacker would need both **system access** and the **Redis credentials** to take advantage of this issue.


### Features
* [Web] Show app passwords for successful logins on user page ➡️ [PR #6821](https://github.com/mailcow/mailcow-dockerized/pull/6821)
* [Web] Add password verification when setting recovery email ➡️ [PR #6836](https://github.com/mailcow/mailcow-dockerized/pull/6836)
* [Core] Optimize PHP-FPM opcache: more aggressive caching and enable JIT ➡️ [PR #6783](https://github.com/mailcow/mailcow-dockerized/pull/6783)

### Updates
* [Rspamd] update to 3.13.2 ➡️ [PR #6830](https://github.com/mailcow/mailcow-dockerized/pull/6830)
* [Redis] update to 7.4.6 ➡️ [PR #6829](https://github.com/mailcow/mailcow-dockerized/pull/6829)
* [Dependencies] update php/pecl-mail-mailparse to v3.1.9 ➡️ [PR #6798](https://github.com/mailcow/mailcow-dockerized/pull/6798)
* [Dependencies] update krakjoe/apcu to v5.1.27 ➡️ [PR #6696](https://github.com/mailcow/mailcow-dockerized/pull/6696)
* [Translations] update pt-br language ➡️ [PR #6803](https://github.com/mailcow/mailcow-dockerized/pull/6803)
* [Translations] update from Weblate ➡️ [PR #6826](https://github.com/mailcow/mailcow-dockerized/pull/6826)

### Bug Fixes
* [LDAP] Fix autodiscover when using attribute mapping templates ➡️ [PR #6797](https://github.com/mailcow/mailcow-dockerized/pull/6797)
* [Web] Fix SOGo redirection after login ➡️ [PR #6828](https://github.com/mailcow/mailcow-dockerized/pull/6828)

### Full Changelog
[https://github.com/mailcow/mailcow-dockerized/compare/2025-09c...2025-10](https://github.com/mailcow/mailcow-dockerized/compare/2025-09c...2025-10)

---


That's all for this release!  
As always, we recommend keeping your mailcow installation up-to-date and backing up your data regularly.

Stay safe and enjoy!

Your mailcow Team from **The Infrastructure Company GmbH** (or shortly **tinc**)
