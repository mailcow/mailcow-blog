---
title: "🥚🐄 Moopril Update 2024 | Sicherheitsupdate"
date: 2024-04-04T09:30:00+02:00
draft: false

author: Patrick Schult/FreddleSpl0it
authorLink: "https://github.com/FreddleSpl0it"
toc: true

license: ""

tags: ["Security"]
categories: ["Updates"]

---

## 2024-04 (Release vom 04.04.2024)

**Moohoo** Alle zusammen!

Mit dem Moopril Update werden zwei Sicherheitslücken in der mailcow geschlossen.
1. CVE-2024-31204: XSS Vulnerability via Exception Handler
2. CVE-2024-30270: Path Traversal and Arbitrary Code Execution Vulnerability

Außerdem wurde SOGo auf die Version 5.10.0 aktualisiert und ein Fehler in der domainweiten Fußzeile wurde behoben.

### Changelog

* chore(deps): update thollander/actions-comment-pull-request action to v2.5.0 by @renovate in https://github.com/mailcow/mailcow-dockerized/pull/5747
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5762
* sogo: upgrade to 5.10.0 by @DerLinkman in https://github.com/mailcow/mailcow-dockerized/pull/5765
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5777
* [Web]Small change about zh-cn translation by @aaadddfgh in https://github.com/mailcow/mailcow-dockerized/pull/5789
* [Postfix] update postscreen_access.cidr by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5770
* Remove one GmbH in Dockerfiles by @MAGICCC in https://github.com/mailcow/mailcow-dockerized/pull/5743
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5810
* Update French translation by @yvan-algoo in https://github.com/mailcow/mailcow-dockerized/pull/5805
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5813
* [Postfix] update postscreen_access.cidr by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5811
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5815
* [Rspamd] Set local_addrs lo mailcow networks by @dragoangel in https://github.com/mailcow/mailcow-dockerized/pull/5812
* [Rspamd] milter update Content-Type and Content-Transfer-Encoding header by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/5751
* [Web] fix exception handler and rspamd_maps function by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/5818

Der vollständige Changelog, einschließlich der einzelnen Commits, ist für Interessierte jederzeit auf GitHub verfügbar:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2024-04

---

Ein großes Dankeschön an [Paul Gerste](https://github.com/paul-gerste-sonarsource) von [Sonar](https://www.sonarsource.com/) für das Melden der Sicherheitslücken.
Vergesst nicht, euren E-Mail-Server immer auf dem neuesten Stand zu halten!

Bleibt gesund und frohes Mailing.

Euer mailcow-Team
> Patrick
