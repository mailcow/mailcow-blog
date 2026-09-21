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

## 2026-09 (Veröffentlichung: 21. September 2026)

**Moohoo zusammen!**

Wir freuen uns, euch das **Update 2026-09** zu präsentieren!
Dieses Release aktualisiert **Unbound auf 1.26.1**, **SOGo auf 5.12.11** und **Redis auf 7.4.11**. Außerdem wird der **postfix-tlspol**-Container auf **Debian Trixie** und **Version 1.11.0** aktualisiert. Abgerundet wird das Ganze von zwei kleinen Features in der Web-UI und einer Handvoll Bugfixes.

---

**⚠️ Wichtiger Hinweis:**
Alle drei Komponenten-Updates sind Security-Releases. Unbound schließt unter anderem **CVE-2026-81642** (CVSS 9.1), einen Heap-Buffer-Overflow im DNSSEC-Validator; der betroffene Codepfad wird bei jeder eingehenden Mail betreten. SOGo behebt Password-Reset-Poisoning und mehrere XSS-Lücken.

**Wir empfehlen dringend, eure mailcow-Installation zeitnah auf diese Version zu aktualisieren.**

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

Das war's für dieses Release!
Wie immer empfehlen wir, eure mailcow-Installation auf dem neuesten Stand zu halten und eure Daten regelmäßig zu sichern.

Bleibt sicher und happy mailing!

Euer mailcow-Team von **The Infrastructure Company GmbH** (oder kurz **tinc**)
