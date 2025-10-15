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

# 2025-10 (Release vom 15.10.2025)

**Moohoo zusammen!**  

Wir freuen uns, euch das **2025-10 Update** präsentieren zu können!  
Diese Version enthält mehrere Fehlerbehebungen und aktualisiert **Rspamd** auf Version **3.13.2** sowie **Redis** auf Version **7.4.6**.

Das Redis-Update behebt die Sicherheitslücke [CVE-2025-49844](https://github.com/redis/redis/security/advisories/GHSA-4789-qfc9-5f9q).  
**Wir empfehlen, eure Installation zu aktualisieren**, aber es besteht kein Grund zur Panik.  
Die Schwachstelle kann nur von einem **authentifizierten Benutzer** ausgenutzt werden.
In mailcow wird Redis **ausschließlich lokal** verwendet und ist **durch ein Passwort geschützt**, sodass ein Angreifer sowohl **Systemzugriff** als auch die **Redis-Zugangsdaten** benötigen würde, um diese Sicherheitslücke auszunutzen.

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

Das war es für dieses Release!  
Wie immer empfehlen wir, eure mailcow-Installation auf dem neuesten Stand zu halten und regelmäßig Backups zu erstellen.

Bleibt sicher und viel Spaß!

Euer mailcow-Team von **The Infrastructure Company GmbH** (kurz **tinc**)
