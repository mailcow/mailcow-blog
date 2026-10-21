---
title: "🎃🐮 Mooctober 2026 | PHP 8.2.35, SOGo 5.12.12 & Nginx 1.30.6"
date: 2026-10-21T19:30:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["2026", "update", "changelog", "major"]
categories: ["Updates"]

---

## 2026-10 (Veröffentlichung: 21. Oktober 2026)

**Moohoo zusammen!**

Wir freuen uns, euch das **Update 2026-10** zu präsentieren!
Dieses Release aktualisiert **PHP auf 8.2.35**, **SOGo auf 5.12.12** und **Nginx auf 1.30.6**. Alle drei Updates schließen Sicherheitslücken. Dazu gibt es eine überarbeitete Web-UI: **Bootstrap 5.3.8**, ein neues **Theme-System** samt **servercow-Theme** und farbig markierte Login-Seiten.

---

**⚠️ Wichtiger Hinweis:**
Alle drei Komponenten-Updates sind Security-Releases:

* **PHP 8.2.35** ist ein außerplanmäßiges Sicherheits-Release des PHP-Projekts und behebt zwei kritische Lücken im PHP-Core (CVSS 9.2). Zusätzlich deaktivieren wir `session.upload_progress`, das mailcow nicht nutzt.
* **SOGo 5.12.12** behebt eine IDOR-Lücke (Insecure Direct Object Reference), die alle bisherigen SOGo-Versionen betrifft.
* **Nginx 1.30.6** behebt fünf Lücken, darunter Buffer Overflows bei `alias` mit `rewrite` und in der Script-Auswertung sowie eine Session-Fälschung bei TLS-Session-Tickets.

**Wir empfehlen dringend, eure mailcow-Installation zeitnah auf diese Version zu aktualisieren.**

---

**ℹ️ Hinweis für eigene LDAP-Quellen in SOGo:**
SOGo/SOPE 5.12.12 prüft bei LDAP über SSL jetzt das Zertifikat. Die Standardinstallation von mailcow ist nicht betroffen. Wer in `data/conf/sogo/plist_ldap.sh` eine eigene LDAP-Quelle mit `ldaps://` und selbstsigniertem Zertifikat eingetragen hat, muss `?tlsVerifyMode=None` an den Host anhängen, z. B. `ldaps://10.0.2.15:636?tlsVerifyMode=None`.

---

### 🎨 UI-Theming

Nebenbei haben wir das Theming der mailcow-UI umgebaut: Themes liegen jetzt als eigene Ordner unter `data/web/css/themes/` und überstehen damit auch Updates. Das Standard-Aussehen bleibt unverändert. Neu mitgeliefert wird das **servercow-Theme**, das ihr unter **System > Konfiguration > UI-Anpassung** auswählen könnt.

---

### New Features

* Feat/update UI by @FreddleSpl0it ➡️ [PR #7520](https://github.com/mailcow/mailcow-dockerized/pull/7520)
  * Bootstrap 5.1.3 → 5.3.8
  * Theme-System: eigene Themes unter `data/web/css/themes/<name>/`, auswählbar unter **System > Konfiguration > UI-Anpassung**
  * Neues **servercow-Theme**
  * Login-Seiten mit farbiger Markierung und eigenem Icon je Rolle (Benutzer, Domain-Admin, Admin)

### Updates & Security

* [PHP] Update base to Alpine 3.24, build PECL extensions from GitHub by @FreddleSpl0it ➡️ [PR #7534](https://github.com/mailcow/mailcow-dockerized/pull/7534)
* [SOGo] Update to 5.12.12 by @FreddleSpl0it ➡️ [PR #7536](https://github.com/mailcow/mailcow-dockerized/pull/7536)
* [Nginx] Update to 1.30.6 by @FreddleSpl0it ➡️ [PR #7535](https://github.com/mailcow/mailcow-dockerized/pull/7535)

### Updates

* Translations update from Weblate by @milkmaker ➡️ [PR #7525](https://github.com/mailcow/mailcow-dockerized/pull/7525)
* Translations update from Weblate by @milkmaker ➡️ [PR #7527](https://github.com/mailcow/mailcow-dockerized/pull/7527)

### Full Changelog
[https://github.com/mailcow/mailcow-dockerized/compare/2026-09a...2026-10](https://github.com/mailcow/mailcow-dockerized/compare/2026-09a...2026-10)

---

Das war's für dieses Release!
Wie immer empfehlen wir, eure mailcow-Installation auf dem neuesten Stand zu halten und eure Daten regelmäßig zu sichern.

Bleibt sicher und happy mailing!

Euer mailcow-Team von **The Infrastructure Company GmbH** (oder kurz **tinc**)
