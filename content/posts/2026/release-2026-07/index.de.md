---
title: "🏖️🐮 Mooly 2026 | Postfix 3.10.12, Rspamd 4.1.0 & Nginx 1.30.3"
date: 2026-08-18T09:00:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["Major", "Postfix", "Rspamd", "Nginx"]
categories: ["Updates"]

---

## 2026-07b (Veröffentlichung: 18. August 2026)

Dieses Revisions-Update aktualisiert **Redis auf 7.4.10**, **SOGo auf 5.12.10** und **ClamAV auf 1.4.6** und behebt damit mehrere sicherheitsrelevante Probleme in diesen Komponenten. Außerdem enthält es **kleinere Härtungen an der Web-UI und an Nginx** sowie ein paar kleinere Fixes.

**Wir empfehlen dringend, eure mailcow-Installation auf diese Version zu aktualisieren.**

### Updates & Security

* [Redis] Update to 7.4.10 by @FreddleSpl0it ➡️ [PR #7425](https://github.com/mailcow/mailcow-dockerized/pull/7425)
* [SOGo] Update to 5.12.10 by @FreddleSpl0it ➡️ [PR #7422](https://github.com/mailcow/mailcow-dockerized/pull/7422)
* [Clamd] Update to 1.4.6 by @FreddleSpl0it ➡️ [PR #7415](https://github.com/mailcow/mailcow-dockerized/pull/7415)
* [Web] Minor hardening across web UI and nginx by @FreddleSpl0it ➡️ [PR #7426](https://github.com/mailcow/mailcow-dockerized/pull/7426)

### Bug Fixes

* [Dovecot] Remove legacy DeltaChat auto-filing sieve rule by @FreddleSpl0it ➡️ [PR #7423](https://github.com/mailcow/mailcow-dockerized/pull/7423)

### Updates

* [Postfix] update postscreen_access.cidr by @milkmaker ➡️ [PR #7394](https://github.com/mailcow/mailcow-dockerized/pull/7394)
* update README.md sponsors by @MaximalBenedikt ➡️ [PR #7392](https://github.com/mailcow/mailcow-dockerized/pull/7392)
* update README.md sponsors by @MaximalBenedikt ➡️ [PR #7393](https://github.com/mailcow/mailcow-dockerized/pull/7393)
* Translations update from Weblate by @milkmaker ➡️ [PR #7400](https://github.com/mailcow/mailcow-dockerized/pull/7400)

### New Contributors

* @MaximalBenedikt made their first contribution ➡️ [PR #7392](https://github.com/mailcow/mailcow-dockerized/pull/7392)

### Full Changelog
[https://github.com/mailcow/mailcow-dockerized/compare/2026-07a...2026-07b](https://github.com/mailcow/mailcow-dockerized/compare/2026-07a...2026-07b)

---

## 2026-07a (Veröffentlichung: 30. Juli 2026)

Dieses Revisions-Update behebt mehrere **sicherheitsrelevante Probleme** in mailcow, aktualisiert **rspamd auf 4.1.4** und schließt **CVE-2026-42533** in Nginx. Letztere war für mailcow nicht zwingend kritisch, wir aktualisieren aber trotzdem sicherheitshalber. Außerdem haben wir noch ein paar Bugs behoben.

**Wir empfehlen dringend, eure mailcow-Installation so schnell wie möglich auf diese Version zu aktualisieren.**

**Wichtiger Hinweis:** Die mailcow-bezogenen CVE-Identifikatoren werden spätestens nächste Woche veröffentlicht.

### Updates & Security

* [Rspamd] update to 4.1.4 by @FreddleSpl0it ➡️ [PR #7386](https://github.com/mailcow/mailcow-dockerized/pull/7386)
* Fix nginx CVE-2026-42533 by @SYNLINQ ➡️ [PR #7358](https://github.com/mailcow/mailcow-dockerized/pull/7358)
* Hardening mailcow by @FreddleSpl0it ➡️ [PR #7387](https://github.com/mailcow/mailcow-dockerized/pull/7387)
* Update actions/stale action to v11 by @renovate[bot] ➡️ [PR #7375](https://github.com/mailcow/mailcow-dockerized/pull/7375)

### Bug Fixes

* fix: restore subject display in quarantine overview by @oidipos ➡️ [PR #7367](https://github.com/mailcow/mailcow-dockerized/pull/7367)
* [Nginx] only bind IPv6 default_server when ENABLE_IPV6 is set by @smpaz7467 ➡️ [PR #7343](https://github.com/mailcow/mailcow-dockerized/pull/7343)
* [Web] fix add/time_limited_alias silently discarding requests and validity by @smpaz7467 ➡️ [PR #7345](https://github.com/mailcow/mailcow-dockerized/pull/7345)
* [Web] return sender_acl in get/mailbox API by @smpaz7467 ➡️ [PR #7348](https://github.com/mailcow/mailcow-dockerized/pull/7348)
* fix: cors allowed origins settings validation by @fallmo ➡️ [PR #7333](https://github.com/mailcow/mailcow-dockerized/pull/7333)
* [Web] harden CORS origin matching and add Vary: Origin by @FreddleSpl0it ➡️ [PR #7385](https://github.com/mailcow/mailcow-dockerized/pull/7385)
* [Web] Move mailcow update check to server side by @FreddleSpl0it ➡️ [PR #7388](https://github.com/mailcow/mailcow-dockerized/pull/7388)
* [Web] Create default mailbox template with eas and dav access by @FreddleSpl0it ➡️ [PR #7389](https://github.com/mailcow/mailcow-dockerized/pull/7389)
* [ACME] Skip mta-sts certificate request when MTA-STS is not active for a domain by @FreddleSpl0it ➡️ [PR #7390](https://github.com/mailcow/mailcow-dockerized/pull/7390)

### New Contributors

* @oidipos made their first contribution ➡️ [PR #7367](https://github.com/mailcow/mailcow-dockerized/pull/7367)
* @smpaz7467 made their first contribution ➡️ [PR #7343](https://github.com/mailcow/mailcow-dockerized/pull/7343)
* @fallmo made their first contribution ➡️ [PR #7333](https://github.com/mailcow/mailcow-dockerized/pull/7333)

### Full Changelog
[https://github.com/mailcow/mailcow-dockerized/compare/2026-07...2026-07a](https://github.com/mailcow/mailcow-dockerized/compare/2026-07...2026-07a)

---

## 2026-07 (Release vom 13.07.2026)

**Moohoo zusammen!**

Wir freuen uns sehr, euch das **Update 2026-07** zu präsentieren!
Dieses Release bringt gleich mehrere große Sprünge auf einmal: Unser **Postfix**-Container migriert von **Debian Bookworm auf Trixie** und läuft nun mit **Postfix 3.10.12**. Außerdem aktualisieren wir **rspamd** auf die **Version 4.1.0** (ein Major-Sprung von 3.x), aktualisieren **SOGo auf 5.12.9** und **Nginx auf 1.30.3**. Dazu kommen einige kleinere UI-Fixes und die üblichen Übersetzungs- und Postscreen-Updates.

---

**⚠️ Wichtiger Hinweis:**
Dieses Update enthält signifikante Änderungen an den zugrundeliegenden Container-Images (u.a. der Sprung von Debian 12 auf Debian 13 im Postfix-Container und ein Major-Upgrade von rspamd). Wir **empfehlen dringend, ein Backup** eurer mailcow-Installation vor dem Update zu erstellen, um auf der sicheren Seite zu sein.

---

### New Features

* postfix: migrate from bookworm to trixie by @DerLinkman ➡️ [PR #7323](https://github.com/mailcow/mailcow-dockerized/pull/7323)
* Update RSPAMD version to 4.1.0 in Dockerfile by @dragoangel ➡️ [PR #7172](https://github.com/mailcow/mailcow-dockerized/pull/7172)
* [Rspamd] Migrate metadata_exporter to multipart formatter by @FreddleSpl0it ➡️ [PR #7283](https://github.com/mailcow/mailcow-dockerized/pull/7283)
* [SOGo] Update to 5.12.9 by @goodygh ➡️ [PR #7267](https://github.com/mailcow/mailcow-dockerized/pull/7267)
* [Nginx] Update to 1.30.3 by @FreddleSpl0it ➡️ [PR #7305](https://github.com/mailcow/mailcow-dockerized/pull/7305)

### Bug Fixes

* Refresh SOGo view after mailbox activation by @ibobgunardi ➡️ [PR #7277](https://github.com/mailcow/mailcow-dockerized/pull/7277)
* Fix force_tfa not available in mailbox template #7216 by @Snafu ➡️ [PR #7275](https://github.com/mailcow/mailcow-dockerized/pull/7275)
* Escape generated password in mobileconfig by @mkuron ➡️ [PR #7212](https://github.com/mailcow/mailcow-dockerized/pull/7212)
* ui, fail2ban fix german ban_list_info translation by @goodygh ➡️ [PR #7265](https://github.com/mailcow/mailcow-dockerized/pull/7265)
* Refined wording for displaying of active settings on quarantine page by @ralfbergs ➡️ [PR #7326](https://github.com/mailcow/mailcow-dockerized/pull/7326)

### Updates

* [Postfix] update postscreen_access.cidr by @milkmaker ➡️ [PR #7269](https://github.com/mailcow/mailcow-dockerized/pull/7269)
* [Postfix] update postscreen_access.cidr by @milkmaker ➡️ [PR #7311](https://github.com/mailcow/mailcow-dockerized/pull/7311)
* Translations update from Weblate by @milkmaker ➡️ [PR #7262](https://github.com/mailcow/mailcow-dockerized/pull/7262)
* Translations update from Weblate by @milkmaker ➡️ [PR #7263](https://github.com/mailcow/mailcow-dockerized/pull/7263)
* Translations update from Weblate by @milkmaker ➡️ [PR #7302](https://github.com/mailcow/mailcow-dockerized/pull/7302)
* Update dependency php/pecl-mail-mailparse to v3.2.0 by @renovate[bot] ➡️ [PR #7189](https://github.com/mailcow/mailcow-dockerized/pull/7189)
* Update dependency composer/composer to v2.10.1 by @renovate[bot] ➡️ [PR #7193](https://github.com/mailcow/mailcow-dockerized/pull/7193)
* Update dependency composer/composer to v2.10.2 by @renovate[bot] ➡️ [PR #7312](https://github.com/mailcow/mailcow-dockerized/pull/7312)
* Update alpine Docker tag to v3.24 by @renovate[bot] ➡️ [PR #7280](https://github.com/mailcow/mailcow-dockerized/pull/7280)
* Update actions/checkout action to v7 by @renovate[bot] ➡️ [PR #7300](https://github.com/mailcow/mailcow-dockerized/pull/7300)
* Update actions/stale action to v10.4.0 by @renovate[bot] ➡️ [PR #7322](https://github.com/mailcow/mailcow-dockerized/pull/7322)
* Update devops-infra/action-pull-request action to v1.2.1 by @renovate[bot] ➡️ [PR #7258](https://github.com/mailcow/mailcow-dockerized/pull/7258)
* Update devops-infra/action-pull-request action to v1.3.0 by @renovate[bot] ➡️ [PR #7272](https://github.com/mailcow/mailcow-dockerized/pull/7272)
* Update devops-infra/action-pull-request action to v1.4.0 by @renovate[bot] ➡️ [PR #7321](https://github.com/mailcow/mailcow-dockerized/pull/7321)

### New Contributors

* @ibobgunardi made their first contribution ➡️ [PR #7277](https://github.com/mailcow/mailcow-dockerized/pull/7277)
* @Snafu made their first contribution ➡️ [PR #7275](https://github.com/mailcow/mailcow-dockerized/pull/7275)
* @ralfbergs made their first contribution ➡️ [PR #7326](https://github.com/mailcow/mailcow-dockerized/pull/7326)

### Full Changelog
[https://github.com/mailcow/mailcow-dockerized/compare/2026-05c...2026-07](https://github.com/mailcow/mailcow-dockerized/compare/2026-05c...2026-07)

---

Das war's für dieses Release!
Wie immer empfehlen wir, eure mailcow-Installation auf dem neuesten Stand zu halten und eure Daten regelmäßig zu sichern.

Bleibt sicher und happy mailing!

Euer mailcow-Team von **The Infrastructure Company GmbH** (oder kurz **tinc**)
