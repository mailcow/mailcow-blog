---
title: "🍀🐮 Moorch 2026 | forced 2FA, DNS-01, SOGo & Rspamd Updates - Revision A"
date: 2026-03-10T08:00:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["2026", "update", "changelog", "major"]
categories: ["Updates"]

---

## 2026-03a (Release: 13th March 2026)

### Bug Fixes and Improvements

This small update fixes issues related to LDAP and Keycloak authentication, as well as problems with the new ACME DNS-01 challenge feature.

* [Web] Fix LDAP/Keycloak login TypeError - missing JSON decode for attributes by @FreddleSpl0it ➡️ [PR #7123](https://github.com/mailcow/mailcow-dockerized/pull/7123)
* [ACME] Fix wildcard certificate conflict with MAILCOW_HOSTNAME by @FreddleSpl0it ➡️ [PR #7124](https://github.com/mailcow/mailcow-dockerized/pull/7124)
* [ACME] Skip autodiscover/mta-sts subdomains covered by wildcard certificates by @FreddleSpl0it ➡️ [PR #7134](https://github.com/mailcow/mailcow-dockerized/pull/7134)
* Fix theme localStorage collision with rspamd UI by @rezzorix ➡️ [PR #7121](https://github.com/mailcow/mailcow-dockerized/pull/7121)
* Translations update from Weblate by @milkmaker ➡️ [PR #7130](https://github.com/mailcow/mailcow-dockerized/pull/7130)


As always, you can view the complete changelog on GitHub: [2026-03a Release](https://github.com/mailcow/mailcow-dockerized/releases/tag/2026-03a)

---

## 2026-03 (Release: 10th March 2026)

**Moohoo everyone!**

We're thrilled to present the **2026-03 Update**!
This release brings significant **security enhancements** with forced 2FA setup and password update enforcement and **DNS-01 challenge support** for ACME certificates.
We've also upgraded **SOGo** to version **5.12.5** (now built from source) and **rspamd** to **3.14.3-1**, along with numerous bug fixes and improvements.

**Special thanks to Philipps-Universität Marburg for sponsoring the development of the forced 2FA setup feature and supporting the continued security improvements of mailcow.**

---

**⚠️ Important Notice:**
This update contains a lot of changes and improvements. We **strongly recommend creating a backup** of your mailcow installation before upgrading to be on the safe side.

---

### New Features

* [Web] Add forced 2FA setup and password update enforcement by @FreddleSpl0it ➡️ [PR #7077](https://github.com/mailcow/mailcow-dockerized/pull/7077)
* Add skip feature to mailcow admin password reset script by @HichemAK ➡️ [PR #7078](https://github.com/mailcow/mailcow-dockerized/pull/7078)
* feat: Implement passwordless autodiscover endpoint by @DerLinkman ➡️ [PR #6976](https://github.com/mailcow/mailcow-dockerized/pull/6976)
* acme: add DNS challenges by @cjlapao ➡️ [PR #6912](https://github.com/mailcow/mailcow-dockerized/pull/6912) [(Documentation)](https://docs.mailcow.email/post_installation/firststeps-ssl-dns/)
* [SOGo] Build SOGo from source with security patches by @FreddleSpl0it ➡️ [PR #7086](https://github.com/mailcow/mailcow-dockerized/pull/7086)
* [SOGo] Update to 5.12.5 by @FreddleSpl0it ➡️ [PR #7098](https://github.com/mailcow/mailcow-dockerized/pull/7098)
* [Rspamd] Update to 3.14.3-1 by @FreddleSpl0it ➡️ [PR #7100](https://github.com/mailcow/mailcow-dockerized/pull/7100)

### Bug Fixes

* Fix lua script sub-addressing by @DocFraggle ➡️ [PR #7037](https://github.com/mailcow/mailcow-dockerized/pull/7037)
* Document qitem endpoint in openapi.yaml for editing quarantine mails by @jonprocter ➡️ [PR #7047](https://github.com/mailcow/mailcow-dockerized/pull/7047)
* check_dns: better time measurement by @maxi322 ➡️ [PR #6695](https://github.com/mailcow/mailcow-dockerized/pull/6695)
* fix: show stopped and failed containers in dashboard and API by @JeremieCrinon ➡️ [PR #7082](https://github.com/mailcow/mailcow-dockerized/pull/7082)
* Bump alpine version of netfilter by @jovobe ➡️ [PR #7060](https://github.com/mailcow/mailcow-dockerized/pull/7060)
* [Web] Add missing EAS and DAV protocol options to mailbox bulk actions by @FreddleSpl0it ➡️ [PR #7088](https://github.com/mailcow/mailcow-dockerized/pull/7088)
* [Web] switch from GET to POST for datatable requests by @FreddleSpl0it ➡️ [PR #7089](https://github.com/mailcow/mailcow-dockerized/pull/7089)
* [SOGo][Web] use incremental updates for mailbox/alias/resource sync in sogo_static_view by @FreddleSpl0it ➡️ [PR #7093](https://github.com/mailcow/mailcow-dockerized/pull/7093)

### Updates

* Translations update from Weblate by @milkmaker ➡️ [PR #7040](https://github.com/mailcow/mailcow-dockerized/pull/7040)
* Translations update from Weblate by @milkmaker ➡️ [PR #7055](https://github.com/mailcow/mailcow-dockerized/pull/7055)
* Translations update from Weblate by @milkmaker ➡️ [PR #7069](https://github.com/mailcow/mailcow-dockerized/pull/7069)
* Translations update from Weblate by @milkmaker ➡️ [PR #7091](https://github.com/mailcow/mailcow-dockerized/pull/7091)
* Translations update from Weblate by @milkmaker ➡️ [PR #7095](https://github.com/mailcow/mailcow-dockerized/pull/7095)
* [Postfix] update postscreen_access.cidr by @milkmaker ➡️ [PR #7042](https://github.com/mailcow/mailcow-dockerized/pull/7042)
* [Postfix] update postscreen_access.cidr by @milkmaker ➡️ [PR #7084](https://github.com/mailcow/mailcow-dockerized/pull/7084)
* Update actions/stale action to v10.2.0 by @renovate[bot] ➡️ [PR #7062](https://github.com/mailcow/mailcow-dockerized/pull/7062)
* Update docker/build-push-action action to v7 by @renovate[bot] ➡️ [PR #7097](https://github.com/mailcow/mailcow-dockerized/pull/7097)
* chore(deps): update dependency composer/composer to v2.9.5 by @renovate[bot] ➡️ [PR #6457](https://github.com/mailcow/mailcow-dockerized/pull/6457)
* chore(deps): update docker/setup-qemu-action action to v4 by @renovate[bot] ➡️ [PR #7092](https://github.com/mailcow/mailcow-dockerized/pull/7092)
* chore(deps): update docker/login-action action to v4 by @renovate[bot] ➡️ [PR #7094](https://github.com/mailcow/mailcow-dockerized/pull/7094)
* chore(deps): update docker/setup-buildx-action action to v4 by @renovate[bot] ➡️ [PR #7096](https://github.com/mailcow/mailcow-dockerized/pull/7096)

### New Contributors

* @HichemAK made their first contribution ➡️ [PR #7078](https://github.com/mailcow/mailcow-dockerized/pull/7078)
* @jonprocter made their first contribution ➡️ [PR #7047](https://github.com/mailcow/mailcow-dockerized/pull/7047)
* @JeremieCrinon made their first contribution ➡️ [PR #7082](https://github.com/mailcow/mailcow-dockerized/pull/7082)
* @jovobe made their first contribution ➡️ [PR #7060](https://github.com/mailcow/mailcow-dockerized/pull/7060)
* @cjlapao made their first contribution ➡️ [PR #6912](https://github.com/mailcow/mailcow-dockerized/pull/6912)

### Full Changelog
[https://github.com/mailcow/mailcow-dockerized/compare/2026-01...2026-03](https://github.com/mailcow/mailcow-dockerized/compare/2026-01...2026-03)

---

As always you can see the full changelog here: [2026-03 Release](https://github.com/mailcow/mailcow-dockerized/releases/tag/2026-03)

That's all for this release!
As always, we recommend keeping your mailcow installation up-to-date and backing up your data regularly.

Stay safe and enjoy!

Your mailcow Team from **The Infrastructure Company GmbH** (or shortly **tinc**)
