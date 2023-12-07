---
title: "🏮🐄 Moovember 2023 Update A | Ratelimit Fixes und Domain Wide Footer Fixes"
date: 2023-11-21T11:11:32+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2023", "update", "changelog"]
categories: ["Updates"]

---

## 2023-11a (Release am 07.12.2023)

### Changelog

* [Update.sh] Fix repo change when running in forced mode by @DerLinkman in https://github.com/mailcow/mailcow-dockerized/pull/5552
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5557
* [Web] add /api/v1/get/spam-score endpoint by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/5482
* Update dependency nextcloud/server to v27.1.4 by @renovate in https://github.com/mailcow/mailcow-dockerized/pull/5559
* [Web][Rspamd] domain wide footer improvements and custom mailbox attributes by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/5555
* Detect docker compose version of form v2.x by @startnow65 in https://github.com/mailcow/mailcow-dockerized/pull/5562
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5567
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5569
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5573
* [Postfix] update postscreen_access.cidr by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5570
* [Rspamd] Fixed Ratelimit forced by global ratelimits by @DerLinkman in https://github.com/mailcow/mailcow-dockerized/pull/5577
* [UI] Fixed showing of "disabled" placeholder for ratelimits in domains by @DerLinkman in https://github.com/mailcow/mailcow-dockerized/commit/550b88861f7a6dc8651659ceb894e111f49d76ab
* Update Rspamd Image to 1.94 by @DerLinkman in https://github.com/mailcow/mailcow-dockerized/commit/03aaf4ad76898cebb5ad83cde2a7ca769410f8be

---

## 2023-11 (Release am 21.11.2023)

**Moo hoo zusammen!**

Die Weihnachtszeit fängt langsam an und schon stehen wir wieder mit einem Update vor der Tür.

Vor ab gilt hier: Idealerweise updaten (wenn Quarantäne in Benutzung), da eine schwerwiegende Sicherheitslücke gepatcht ist.

<!--more-->

### Changelog

+ Rspamd wurde auf Version 3.7.4 aktualisiert
+ In den Synchronisationsjobs ist nun ein Dry-Mode Button implementiert, welcher die Synchronisation einer Mailbox testet.
+ Ebenfalls gibt es in den Synchronisationsjobs nun den gültigen Parameter `--f1f2` sollte man einen Mail Ordner in einen anders benahmten Mailordner synchronisieren wollen.
+ Ein Problem, welches Anhänge und den Domain Wide Footer betrifft wurde behoben. Dies hatte zur folge, dass Anhänge zerstört wurden, wenn der Domain Wide Footer gesetzt war.
+ Ein Skript zur generation eines CAA Records wurde im helper-scripts Ordner angelegt.
+ Die Nextcloud Version wurde auf 27.1.3 aktualisiert. Zusätzlich wurde die NGINX Seite der Nextcloud an die neuen Anforderungen angepasst und für Nutzer des Nextcloud Skriptes im helper-scripts Ordner ausgerollt.
+ Ein neues Sieve Template wurde bei dem Filter Menü der mailcow UI angelegt.
+ utf-8 Kodierte Passwörter werden nun in den Syncjobs korrekt verarbeitet.
+ Das update.sh Skript wurde optimiert um besser auf Docker Images reagieren zu können, welche keinem Standard Versionstagging folgen (bspw. die Nightly Images), diese werden nun korrekt mit entfernt.
+ Diverse neue Übersetzungen
+ **und eine kritische Sicherheitslücke wurde geschlossen, welche die Quarantäne UI in mailcow betrifft**, eine CVE folgt.

Dadurch, dass wir hier eine kritische Lücke geschlossen haben empfehlen wir natürlich zu Updaten. Solltet ihr die Quarantäne Funktion der mailcow nicht nutzen könnt ihr dieses Update in der Theorie jedoch auslassen. **Allerdings empfehlen wir immer euer System aktuell zu halten!**

Wie immer: Der vollständige Changelog, einschließlich der einzelnen Commits, ist für Interessierte jederzeit auf GitHub verfügbar:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-11

---

Wie immer ein riesiges Dankeschön an unsere großartige mailcow-Community für eure anhaltende Unterstützung und euer wertvolles Feedback.

Bleibt gesund.

Euer mailcow-Team