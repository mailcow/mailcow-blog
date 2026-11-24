---
title: "🐝🐮 Mooay 2026 | Just another security update - Revision C"
date: 2026-05-12T08:00:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["Security"]
categories: ["Updates"]

---

## 2026-05c (Release: 26th May 2026)

This update fixes **CVE-2026-33278** in unbound and bumps **Nginx to version 1.30.2**.

**We strongly recommend updating to this version.**

### Bug Fixes

* fix unbound CVE-2026-33278 by @SYNLINQ ➡️ [PR #7252](https://github.com/mailcow/mailcow-dockerized/pull/7252)
* [Nginx] Update to 1.30.2 by @FreddleSpl0it ➡️ [PR #7259](https://github.com/mailcow/mailcow-dockerized/pull/7259)

### Updates

* Translations update from Weblate by @milkmaker ➡️ [PR #7245](https://github.com/mailcow/mailcow-dockerized/pull/7245)
* Update actions/stale action to v10.3.0 by @renovate[bot] ➡️ [PR #7242](https://github.com/mailcow/mailcow-dockerized/pull/7242)
* Update devops-infra/action-pull-request action to v1.1.2 by @renovate[bot] ➡️ [PR #7247](https://github.com/mailcow/mailcow-dockerized/pull/7247)
* Update devops-infra/action-pull-request action to v1.1.3 by @renovate[bot] ➡️ [PR #7253](https://github.com/mailcow/mailcow-dockerized/pull/7253)
* Update devops-infra/action-pull-request action to v1.2.0 by @renovate[bot] ➡️ [PR #7254](https://github.com/mailcow/mailcow-dockerized/pull/7254)


### Full Changelog
[https://github.com/mailcow/mailcow-dockerized/compare/2026-05b...2026-05c](https://github.com/mailcow/mailcow-dockerized/compare/2026-05b...2026-05c)

---

## 2026-05b (Release: 21st May 2026)

This update bumps **Nginx to version 1.30.1**.

### Bug Fixes

* [Web] escape HTML in quarantine table by @FreddleSpl0it ➡️ [PR #7241](https://github.com/mailcow/mailcow-dockerized/pull/7241)

### Updates

* [Nginx] Update to 1.30.1 by @FreddleSpl0it ➡️ [PR #7240](https://github.com/mailcow/mailcow-dockerized/pull/7240)
* Add Uzbek language by @Jahongir-Qurbonov ➡️ [PR #7224](https://github.com/mailcow/mailcow-dockerized/pull/7224)
* Translations update from Weblate by @milkmaker ➡️ [PR #7228](https://github.com/mailcow/mailcow-dockerized/pull/7228)
* Update devops-infra/action-pull-request action to v1.1.1 by @renovate[bot] ➡️ [PR #7234](https://github.com/mailcow/mailcow-dockerized/pull/7234)

### Full Changelog
[https://github.com/mailcow/mailcow-dockerized/compare/2026-05a...2026-05b](https://github.com/mailcow/mailcow-dockerized/compare/2026-05a...2026-05b)

---

## 2026-05a (Release: 13th May 2026)

### Bug Fixes

This update bumps **SOGo to version 5.12.8** and thereby addresses **4 security issues**. Further details can be found in the [SOGo release notes](https://www.sogo.nu/news/2026/sogo-v5128-released.html).

**We strongly recommend updating to this version.**

* [SOGo] Update to 5.12.8 by @FreddleSpl0it ➡️ [PR #7226](https://github.com/mailcow/mailcow-dockerized/pull/7226)

### Full Changelog
[https://github.com/mailcow/mailcow-dockerized/compare/2026-05...2026-05a](https://github.com/mailcow/mailcow-dockerized/compare/2026-05...2026-05a)

---

## 2026-05 (Release: 12th May 2026)

**Moohoo everyone!**

We're presenting the **2026-05 Update**!
This small but important release addresses a **security-related issue** in the web frontend and ships the usual updates for Postscreen and our Weblate translations.

**We strongly recommend updating to this version.**

**Important Note:** The associated CVE identifier will be published separately at a later date.

---

### Bug Fixes

* [Web] escape HTML in sieve filter edit view and queue manager by @FreddleSpl0it ➡️ [PR #7220](https://github.com/mailcow/mailcow-dockerized/pull/7220)

### Updates

* [Postfix] update postscreen_access.cidr by @milkmaker ➡️ [PR #7177](https://github.com/mailcow/mailcow-dockerized/pull/7177)
* [Postfix] update postscreen_access.cidr by @milkmaker ➡️ [PR #7209](https://github.com/mailcow/mailcow-dockerized/pull/7209)
* Translations update from Weblate by @milkmaker ➡️ [PR #7190](https://github.com/mailcow/mailcow-dockerized/pull/7190)
* Translations update from Weblate by @milkmaker ➡️ [PR #7218](https://github.com/mailcow/mailcow-dockerized/pull/7218)

### Full Changelog
[https://github.com/mailcow/mailcow-dockerized/compare/2026-03b...2026-05](https://github.com/mailcow/mailcow-dockerized/compare/2026-03b...2026-05)

---

That's all for this release!
As always, we recommend keeping your mailcow installation up-to-date and backing up your data regularly.

Stay safe and enjoy!

Your mailcow Team from **The Infrastructure Company GmbH** (or shortly **tinc**)
