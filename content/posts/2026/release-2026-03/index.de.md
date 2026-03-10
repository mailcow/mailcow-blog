---
title: "🍀🐮 Moorch 2026 | forced 2FA, DNS-01, SOGo & Rspamd Updates"
date: 2026-03-10T08:00:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["2026", "update", "changelog", "major"]
categories: ["Updates"]

---

## 2026-03 (Release vom 10.03.2026)

**Moohoo zusammen!**

Wir freuen uns sehr, euch das **Update 2026-03** zu präsentieren!
Dieses Release bringt bedeutende **Sicherheitsverbesserungen** mit erzwungener 2FA-Einrichtung und Passwort-Update-Enforcement und **DNS-01-Challenge-Unterstützung** für ACME-Zertifikate.
Außerdem haben wir **SOGo** auf Version **5.12.5** aktualisiert (jetzt aus den Quellen gebaut) und **rspamd** auf **3.14.3-1**, zusammen mit zahlreichen Bugfixes und Verbesserungen.

**Ein besonderer Dank geht an die Philipps-Universität Marburg für das Sponsoring der Entwicklung der erzwungenen 2FA-Einrichtung und die Unterstützung der fortlaufenden Sicherheitsverbesserungen von mailcow.**

---

**⚠️ Wichtiger Hinweis:**
Dieses Update enthält viele Änderungen und Verbesserungen. Wir **empfehlen dringend, ein Backup** eurer mailcow-Installation vor dem Update zu erstellen, um auf der sicheren Seite zu sein.

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

Wie immer könnt ihr das vollständige Changelog auf GitHub einsehen: [2026-03 Release](https://github.com/mailcow/mailcow-dockerized/releases/tag/2026-03)

Das war's für dieses Release!
Wie immer empfehlen wir, eure mailcow-Installation auf dem neuesten Stand zu halten und eure Daten regelmäßig zu sichern.

Bleibt sicher und happy mailing!

Euer mailcow-Team von **The Infrastructure Company GmbH** (oder kurz **tinc**)
