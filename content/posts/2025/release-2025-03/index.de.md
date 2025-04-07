---
title: "💮🐮 Moorch 2025 Update | The Update which changed the Cow"
date: 2025-03-25T10:00:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["2025", "update", "changelog", "major"]
categories: ["Updates"]

---

# 2025-03b (Release vom 07.04.2025)

## Changelog

* [SOGo] Update to 5.12.0
* [Postfix] update postscreen_access.cidr by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/6443
* Fix sasl_logs by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6450
* [Web] Fix transport routing test by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6451
* [Netfilter] Downgrade to 1.61 by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6438
* Fix tiny typo by @sardaukar in https://github.com/mailcow/mailcow-dockerized/pull/6426
* [SOGo] Use JS for mailcow logout by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6439
* [Dovecot] Increase Timeout for HTTP Login Request by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6422
* [Web] Improve clarity of LDAP SSL/TLS settings by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6460

## Full Changelog
https://github.com/mailcow/mailcow-dockerized/compare/2025-03a...2025-03b

---

# 2025-03a (Release vom 27.03.2025)

## Bug Fixes

* [Nginx] Move conf.d include before SNI vhosts by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6411
* [Web] Use absolute paths for flag SVGs by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6410
* [Web] Check if mailbox is active before renaming by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6409
* [Swagger] Fix type property for /api/v1/add/bcc endpoint by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6408
* [Web] Fix oauth2 redirect after user login by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6407
* [Web] Fix SOGo access after Passwordless auth by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/6406
* fix(ui): Swap translations for oversized dropdown by @marvinruder in https://github.com/mailcow/mailcow-dockerized/pull/6402

## Full Changelog
https://github.com/mailcow/mailcow-dockerized/compare/2025-03...2025-03a

---

# 2025-03 (Release vom 25.03.2025)

**Moohoo zusammen,**  

Wir freuen uns, die Veröffentlichung von **mailcow: dockerized 2025-03** bekannt zu geben!

Dieses Release enthält Funktionen, die im Laufe des letzten Jahres im Nightly-Branch getestet wurden. Wenn du unseren [Nightly-Progress-Update](https://mailcow.email/posts/2025/nightly-progress/) verfolgt hast, kennst du möglicherweise bereits einige der unten aufgeführten Änderungen.

**Bitte stelle vor dem Update sicher, dass du ein aktuelles Backup deiner Installation hast.**

{{< admonition type=warning title="Warnung" >}}
Dieses Update verändert den Authentifizierungsprozess grundlegend.  
Wenn du das Update 2025-03 nicht anwenden möchtest, kannst du mit `./update.sh --legacy` zur Legacy-Branch wechseln.  
Die Legacy-Branch erhält **ausschließlich** Sicherheitsupdates bis Februar 2026.  
[Mehr Informationen zur Legacy-Branch](https://docs.mailcow.email/maintenance/update/#update-variants)
{{< /admonition >}}

## Breaking Changes

Die Logins für Administrator, Domain-Administrator und Benutzer wurden getrennt:

- **Administrator-Login:** `/admin`  
- **Domain-Administrator-Login:** `/domainadmin`  
- **Benutzer:** `/`

Der direkte SOGo-Login ist jetzt deaktiviert. Alle nicht authentifizierten Anfragen an `/SOGo` werden zu `/` umgeleitet.  
Benutzer müssen sich über den mailcow-Login anmelden.  
Administrator können festlegen, ob Benutzer nach dem Login zur mailcow-UI oder zu SOGo weitergeleitet werden sollen.

## Weitere wichtige Änderungen  

Alle Alpine-basierten Images wurden auf Alpine 3.21 aktualisiert.

## Neue Funktion

mailcow unterstützt jetzt **externe Identity Provider** für Authentifizierung.  
Diese Funktion ist optional – Administrator können einen externen Identity Provider konfigurieren, der parallel zur SQL-Datenbank genutzt werden kann.  
Es ist auch möglich, individuell festzulegen, welche Authentifizierungsquelle ein Benutzer verwenden soll.

Aktuell unterstützte Identity Provider:

1. **Keycloak** – [Dokumentation](https://docs.mailcow.email/manual-guides/mailcow-UI/u_e-mailcow_ui-keycloak/)  
2. **LDAP/AD** – [Dokumentation](https://docs.mailcow.email/manual-guides/mailcow-UI/u_e-mailcow_ui-ldap/)  
3. **Generic OIDC** – [Dokumentation](https://docs.mailcow.email/manual-guides/mailcow-UI/u_e-mailcow_ui-generic-oidc/)

## Verbesserungen

mailcow nutzt jetzt **Dovecots Passwort-Caching**, um die Serverlast bei Authentifizierungen zu reduzieren.

#### Benchmarks

| Caching | Authentifizierungsquelle | Serverlast (Peak) | Zeit für 2000 Logins (Sekunden) |
|---------|--------------------------|-------------------|----------------------------------|
| ❌      | SQL                      | ~13               | 91,24                            |
| ❌      | LDAP                     | ~4                | 37,94                            |
| ✅      | SQL                      | ~6                | 23,16                            |
| ✅      | LDAP                     | ~2                | 23,17                            |

## Full Changelog
https://github.com/mailcow/mailcow-dockerized/compare/2025-02...2025-03

---

Das war's für dieses Release! Wie immer empfehlen wir, eure mailcow-Installation auf dem neuesten Stand zu halten und regelmäßig Backups zu erstellen.  

Bleibt sicher und viel Spaß!  

Euer mailcow-Team von **The Infrastructure Company GmbH** (kurz **tinc**)
