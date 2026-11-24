---
title: "🐄🛡️ January 2026 Update | Limited EAS/DAV Access and Restricted Alias Sending"
date: 2026-01-29T08:00:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["Major"]
categories: ["Updates"]

---

## 2026-01 (Release: 29th January 2026)

**Moohoo everyone!**

We're excited to bring you the **2026-01 Update**!  
This release introduces new **access control features** for Exchange ActiveSync and WebDAV, along with **enhanced alias sending restrictions**.  
Additionally, we've upgraded **rspamd** to version **3.14.1** and added several usability improvements.

### New Features

* Support for PBKDF2-SHA512 hash algorithm in verify_hash() (FreeIPA compatibility) (issue 6646) by @Ashitaka57 ➡️ [PR #6905](https://github.com/mailcow/mailcow-dockerized/pull/6905)
* rspamd: upgrade to 3.14.1, trixie rebuild + bcc forwarded hosts fix by @DerLinkman ➡️ [PR #6958](https://github.com/mailcow/mailcow-dockerized/pull/6958)
* Add MTA-STS support for alias domains by @Copilot ➡️ [PR #6972](https://github.com/mailcow/mailcow-dockerized/pull/6972)
* Configurable displayName(s) - Fixes issue #6489 by @bluewalk ➡️ [PR #6980](https://github.com/mailcow/mailcow-dockerized/pull/6980)
* [Web] Disable login UI on autoprotocol domains by @DiscoNova ➡️ [PR #6867](https://github.com/mailcow/mailcow-dockerized/pull/6867)
* [Web] Allow admins to limit EAS and DAV access for mailbox users by @FreddleSpl0it ➡️ [PR #7022](https://github.com/mailcow/mailcow-dockerized/pull/7022)
* feat: allow preset of passwords via environment vars by @moregeek ➡️ [PR #7007](https://github.com/mailcow/mailcow-dockerized/pull/7007)
* [Postfix] Configurable send permissions for alias addresses by @FreddleSpl0it ➡️ [PR #7021](https://github.com/mailcow/mailcow-dockerized/pull/7021)

### Bug Fixes

* ui: fix global filters ui tickbox reappearing by @DerLinkman ➡️ [PR #6966](https://github.com/mailcow/mailcow-dockerized/pull/6966)
* Prevent duplicate/plaintext login announcement rendering by @Copilot ➡️ [PR #6963](https://github.com/mailcow/mailcow-dockerized/pull/6963)
* fix: Password for mobileconfig that conforms to password-complexity policy by @psuet ➡️ [PR #6990](https://github.com/mailcow/mailcow-dockerized/pull/6990)

### Updates

* [Postfix] update postscreen_access.cidr by @milkmaker ➡️ [PR #6987](https://github.com/mailcow/mailcow-dockerized/pull/6987)
* Translations update from Weblate by @milkmaker ➡️ [PR #6965](https://github.com/mailcow/mailcow-dockerized/pull/6965)
* Translations update from Weblate by @milkmaker ➡️ [PR #7002](https://github.com/mailcow/mailcow-dockerized/pull/7002)
* Translations update from Weblate by @milkmaker ➡️ [PR #7014](https://github.com/mailcow/mailcow-dockerized/pull/7014)
* Translations update from Weblate by @milkmaker ➡️ [PR #7020](https://github.com/mailcow/mailcow-dockerized/pull/7020)
* chore(deps): update peter-evans/create-pull-request action to v8 by @renovate[bot] ➡️ [PR #6953](https://github.com/mailcow/mailcow-dockerized/pull/6953)
* chore(deps): update dependency krakjoe/apcu to v5.1.28 by @renovate[bot] ➡️ [PR #6947](https://github.com/mailcow/mailcow-dockerized/pull/6947)
* chore(deps): update dependency imagick/imagick to v3.8.1 by @renovate[bot] ➡️ [PR #6927](https://github.com/mailcow/mailcow-dockerized/pull/6927)
* chore(deps): update dependency phpredis/phpredis to v6.3.0 by @renovate[bot] ➡️ [PR #6901](https://github.com/mailcow/mailcow-dockerized/pull/6901)
* chore(deps): update dependency php-memcached-dev/php-memcached to v3.4.0 by @renovate[bot] ➡️ [PR #6837](https://github.com/mailcow/mailcow-dockerized/pull/6837)
* chore(deps): update dependency tianon/gosu to v1.19 by @renovate[bot] ➡️ [PR #6710](https://github.com/mailcow/mailcow-dockerized/pull/6710)

### Full Changelog
[https://github.com/mailcow/mailcow-dockerized/compare/2025-12a...2026-01](https://github.com/mailcow/mailcow-dockerized/compare/2025-12a...2026-01)

---

As always you can see the full changelog here: [2026-01 Release](https://github.com/mailcow/mailcow-dockerized/releases/tag/2026-01)

That's all for this release!  
As always, we recommend keeping your mailcow installation up-to-date and backing up your data regularly.

Stay safe and enjoy!

Your mailcow Team from **The Infrastructure Company GmbH** (or shortly **tinc**)