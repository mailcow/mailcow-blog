---
title: "🎂🐮 Happy Moothday: 10 Jahre mailcow"
date: 2026-12-09T09:00:00+01:00
draft: false
author: The Infrastructure Company GmbH
description: "Am 9. Dezember 2016 ging der erste Commit von mailcow: dockerized online. Ein Blick zurück, das Jahr 2026 im Überblick, unser neuer Auftritt und was als Nächstes kommt."
featuredImage: "featured.jpg"
toc: true
license: ""
tags: ["Community"]
categories: ["News"]
---

**Moohoo zusammen!**

Heute vor zehn Jahren, am 9. Dezember 2016, ging der erste Commit von mailcow: dockerized online. Die Commit-Nachricht war kurz: „mailcow dockerized“. Daraus ist ein Mailserver geworden, der heute für Unternehmen, Verwaltungen, Vereine und viele Privatpersonen läuft.

Danke an alle, die mailcow nutzen, testen, Fehler melden, übersetzen, im Forum und auf Telegram helfen oder das Projekt finanziell unterstützen. Ohne euch gäbe es diesen Geburtstag nicht.

Zum Jubiläum gibt es auch etwas Neues zu sehen: mailcow.email hat einen neuen Look.

## mailcow.email im neuen Look

[Servercow](https://servercow.de) hat 2026 ein neues Design bekommen. Seit [Update 2026-10]({{< relref "/posts/2026/release-2026-10" >}}) bringt die mailcow UI das passende **servercow-Theme** mit (*System → Konfiguration → UI-Anpassung*). Jetzt zieht auch diese Seite nach: eigenes Theme, gleiche Farben und Schriften, klarere Struktur.

- **Startseite:** das aktuelle Release mit Update-Befehl, die neuesten Beiträge und die Roadmap auf einen Blick.
- **Neuigkeiten und Releases getrennt:** Die [Release Notes]({{< relref "/releases" >}}) sind nach Jahren sortiert. Jeder Versions-Chip führt direkt zum Release auf GitHub.
- **Roadmap:** eine neue [Seite]({{< relref "/roadmap" >}}) mit allem, was geplant, in Entwicklung oder im Nightly-Test ist.
- **Verifizierte VPS-Anbieter:** jetzt als Übersicht mit Standorten, Architektur und Mail-Ports.
- **Einheitliche Kategorien und Tags**, damit ihr auch ältere Beiträge schnell findet.
- **Dunkelmodus und Sprachumschalter** oben rechts.
- **Produkte:** Im Menü findet ihr, was wir als Entwickler von mailcow über Servercow anbieten: managed mailcow, Support-Pakete, Dedicated Piler und BackupcowMX.

## Zehn Jahre in Kürze

Die ersten mailcow-Konzepte entstanden 2015, damals noch ohne Docker. Am 9. Dezember 2016 startete André Peters (andryyy) mailcow: dockerized. Von Anfang an lief jeder Dienst in einem eigenen Container, und von Anfang an stand mailcow unter der GPLv3. Schon in der ersten Woche waren Postfix, Dovecot, Rspamd, SOGo, MariaDB und Memcached dabei.

| Jahr | Was passiert ist |
|---|---|
| 2016 | Erster Commit am 9. Dezember |
| 2017 | Sync-Jobs mit imapsync, erste API, 2FA, ClamAV, Unbound, ACME-Container, `update.sh` und Watchdog. Die Architektur, wie wir sie heute kennen, steht damit schon Ende 2017. |
| 2018 | Dovecot 2.3, aus Fail2ban wird Netfilter |
| 2019 | Volltextsuche mit Solr, Olefy prüft Office-Makros |
| 2020 | SOGo 5, WebAuthn als Beta |
| 2021 | Am 1. April übernimmt The Infrastructure Company (tinc) die Weiterentwicklung. Ofelia ersetzt Cron, PHP 8 kommt. |
| 2022 | Monatliche Releases mit Tags nach dem Schema JJJJ-MM, Docker Compose v2, die UI wechselt auf Bootstrap 5 |
| 2023 | Keycloak, generisches OIDC und ARM64. Die Doku zieht nach [docs.mailcow.email](https://docs.mailcow.email) um. |
| 2024 | Flatcurve ersetzt Solr für die Volltextsuche |
| 2025 | Images kommen von ghcr.io, MTA-STS für ausgehende Mails mit postfix-tlspol |
| 2026 | Gruppen, Identity-Provider-Sync, neues imapsync, mehrere API-Keys und das servercow-Theme |

**In Zahlen** (Stand Ende November 2026):

- fast **7.900 Commits** von fast **400 Mitwirkenden**
- über **13.800 Sterne** und fast **1.900 Forks** auf GitHub
- fast **100 Releases** seit Januar 2022
- aus **11 Containern** beim Start wurden **18**

## Das war 2026

2026 gab es **17 Releases**, von [2026-01]({{< relref "/posts/2026/release-2026-01" >}}) bis [2026-11b]({{< relref "/posts/2026/release-2026-11" >}}), mit über 400 Commits von fast 40 Mitwirkenden. Die wichtigsten Änderungen:

### Zusammenarbeit und Identitäten

- **Gruppen** (2026-11): Verteiler, Senden als Gruppe, geteilte Postfächer ohne gemeinsames Passwort sowie Kalender und Adressbücher für Gruppen in SOGo.
- **Identity-Provider-Sync** (2026-11) mit Keycloak und LDAP/AD: Gruppen und Mitglieder kommen aus dem IdP, auf Wunsch mit Offboarding.
- **Aliase:** Senderechte für Aliase lassen sich einstellen (2026-01), Aliase mit externen Zielen lassen sich per ACL und global abschalten (2026-09).

### Sicherheit und Anmeldung

- **Erzwungene 2FA-Einrichtung und Passwortwechsel** (2026-03). Danke an die Philipps-Universität Marburg, die diese Entwicklung gesponsert hat.
- Admins können **ActiveSync und DAV** je Postfach einschränken (2026-01).
- Netfilter zählt fehlgeschlagene Logins **aller Protokolle**, dazu kommt ein Rate-Limit für 2FA (2026-11).
- Dazu viele Sicherheitsupdates, oft als schnelle Revisions-Releases (a, b, c).

### Zertifikate und Zustellung

- **DNS-01-Challenge** für Let's-Encrypt-Zertifikate (2026-03), damit sind auch Wildcard-Zertifikate möglich.
- **MTA-STS für Alias-Domains** (2026-01).

### Migration und Automatisierung

- **Neues imapsync** (2026-11): wiederverwendbare Sync-Quellen, OAuth2 für Microsoft 365 und Google, parallele Jobs.
- **Mehrere API-Keys** (2026-11), jeweils mit Lese- oder Schreibrechten und eigener IP-Allowlist.

### Oberfläche

- **Bootstrap 5.3 und Theme-System** (2026-10): Eigene Themes überstehen Updates, das servercow-Theme ist dabei, und die Login-Seiten zeigen die Rolle farbig an.
- Passwörter lassen sich auf den Login-Seiten ein- und ausblenden (2026-09).

### Unter der Haube

- Postfix läuft auf **Debian 13 (Trixie)**, aktuell mit Postfix 3.10.
- Rspamd ging von 3.14 auf **4.2**. SOGo bauen wir jetzt **aus den Quellen**, aktuell 5.12.13.
- Nginx 1.30, Unbound 1.26, Redis 7.4, und das PHP-Image basiert auf Alpine 3.24.

### Im Team

Im Mai hat sich [DerLinkman (Niklas)]({{< relref "/posts/2026/derlinkman-leave" >}}) nach vielen Jahren aus dem Team verabschiedet. Danke für alles, was du für mailcow getan hast!

Alle Details findet ihr in den [Release Notes]({{< relref "/releases" >}}).

## Wie es weitergeht

Auf der neuen [Roadmap]({{< relref "/roadmap" >}}) seht ihr, woran wir arbeiten. Ein paar Punkte daraus:

- **Im Nightly-Test:** granulare Backups mit restic-Snapshots, Aufbewahrung (Retention) in der UI, eine optimierte Archiv-Anbindung und Mail-Policies, also Regeln, wer wohin senden und von wo empfangen darf.
- **In Entwicklung:** PHP 8.5 und ECDSA-Zertifikate.
- **Geplant:** Dovecot 2.4, MariaDB 11, externe Datenbank und externer ClamAV, Compose-Profiles statt `SKIP_*`, JMAP, eine API für Domain-Admins und Benutzer und ein mailcow-CLI-Tool.

Wer früh testen möchte, schaut in die [Nightly-Demo](https://nightly-demo.mailcow.email) oder stellt ein Testsystem mit `./update.sh --nightly` auf den Nightly-Kanal. Für den Produktivbetrieb bleibt stable der richtige Kanal.

## Danke!

mailcow ist Open Source und bleibt es. Dass das Projekt seit zehn Jahren wächst, verdanken wir euch:

- allen, die Code, Übersetzungen und Dokumentation beitragen,
- allen, die im [Forum](https://community.mailcow.email) und auf [Telegram](https://t.me/mailcow) anderen helfen,
- allen, die mit einer [Stay Awesome License](https://cp.servercow.de/product/mailcow-stay-awesome-lizenz-sal) oder über [GitHub Sponsors](https://github.com/sponsors/mailcow) die Entwicklung finanzieren,
- und allen, die mailcow einsetzen und weiterempfehlen.

Auf die nächsten zehn Jahre! SMTP gibt es seit 1982. Es hat unzählige Todesprognosen überlebt und denkt nicht ans Aufhören. Wir auch nicht. Wir sehen uns zum 20.! Moo! 🐮

Euer mailcow-Team von **The Infrastructure Company GmbH** (kurz **tinc**)
