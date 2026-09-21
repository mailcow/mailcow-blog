---
title: "🍂🐮 Mootember 2026 | Unbound 1.26.1, SOGo 5.12.11 & Redis 7.4.11"
date: 2026-09-21T10:45:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["2026", "update", "changelog", "major"]
categories: ["Updates"]

---

## 2026-09 (Release: 21st September 2026)

**Moohoo everyone!**

We're happy to present the **2026-09 Update**!
This release bumps **Unbound to 1.26.1**, **SOGo to 5.12.11** and **Redis to 7.4.11**. On top of that, the **postfix-tlspol** container moves to **Debian Trixie** and **version 1.11.0**. Rounding things off are two small web UI features and a handful of bug fixes.

---

**⚠️ Important Note:**
All three component updates are security releases. Unbound fixes **CVE-2026-81642** (CVSS 9.1) among others, a heap buffer overflow in the DNSSEC validator; the affected code path is exercised by every incoming mail. SOGo addresses password reset poisoning and multiple XSS issues.

**We strongly recommend updating your mailcow instance to this version as soon as possible.**

---

### New Features

* [Web] Add ACL + global switch to disable external alias goto by @FreddleSpl0it ➡️ [PR #7428](https://github.com/mailcow/mailcow-dockerized/pull/7428)
* [Web] Add show/hide password toggle on login pages by @FrauJulian ➡️ [PR #7342](https://github.com/mailcow/mailcow-dockerized/pull/7342)

### Bug Fixes

* Fix #7150: passwd-verify.lua wipes auth cache during any nginx outage by @wryfi ➡️ [PR #7290](https://github.com/mailcow/mailcow-dockerized/pull/7290)
* [Web] use absolute RHS names in generated DNS zonefile by @smpaz7467 ➡️ [PR #7347](https://github.com/mailcow/mailcow-dockerized/pull/7347)
* [Web] redirect deep links to the matching login page by @smpaz7467 ➡️ [PR #7349](https://github.com/mailcow/mailcow-dockerized/pull/7349)
* [Web] show external sender addresses regardless of authsource by @smpaz7467 ➡️ [PR #7376](https://github.com/mailcow/mailcow-dockerized/pull/7376)
* [Web] translate password errors in the forced password change modal by @smpaz7467 ➡️ [PR #7344](https://github.com/mailcow/mailcow-dockerized/pull/7344)

### Updates & Security

* [Unbound] Update to 1.26.1 by @FreddleSpl0it ➡️ [PR #7473](https://github.com/mailcow/mailcow-dockerized/pull/7473)
* [SOGo] Update to 5.12.11 by @FreddleSpl0it ➡️ [PR #7475](https://github.com/mailcow/mailcow-dockerized/pull/7475)
* Update redis Docker tag to v7.4.11 by @renovate[bot] ➡️ [PR #7432](https://github.com/mailcow/mailcow-dockerized/pull/7432)
* postfix-tlspol: upgrade to trixie + 1.11.0 update by @DerLinkman ➡️ [PR #7334](https://github.com/mailcow/mailcow-dockerized/pull/7334)

### Updates

* [Postfix] update postscreen_access.cidr by @milkmaker ➡️ [PR #7450](https://github.com/mailcow/mailcow-dockerized/pull/7450)
* Translations update from Weblate by @milkmaker ➡️ [PR #7431](https://github.com/mailcow/mailcow-dockerized/pull/7431)
* Translations update from Weblate by @milkmaker ➡️ [PR #7457](https://github.com/mailcow/mailcow-dockerized/pull/7457)
* Translations update from Weblate by @milkmaker ➡️ [PR #7460](https://github.com/mailcow/mailcow-dockerized/pull/7460)

### New Contributors

* @wryfi made their first contribution ➡️ [PR #7290](https://github.com/mailcow/mailcow-dockerized/pull/7290)
* @FrauJulian made their first contribution ➡️ [PR #7342](https://github.com/mailcow/mailcow-dockerized/pull/7342)

### Full Changelog
[https://github.com/mailcow/mailcow-dockerized/compare/2026-07b...2026-09](https://github.com/mailcow/mailcow-dockerized/compare/2026-07b...2026-09)

---

That's all for this release!
As always, we recommend keeping your mailcow installation up-to-date and backing up your data regularly.

Stay safe and enjoy!

Your mailcow Team from **The Infrastructure Company GmbH** (or shortly **tinc**)
