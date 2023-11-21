---
title: "🏮🐄 Moovember 2023 Update | Quarantäne Hotfix (Security), Rspamd 3.7.4, Synchronisationsjobs und Domain Wide Footer Fixes"
date: 2023-11-21T11:11:32+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2023", "update", "changelog"]
categories: ["Updates"]

---

**Moo hoo zusammen!**

Die Weihnachtszeit fängt langsam an und schon stehen wir wieder mit einem Update vor der Tür.

Vor ab gilt hier: Idealerweise updaten (wenn Quarantäne in Benutzung), da eine schwerwiegende Sicherheitslücke gepatcht ist. Eine genaue CVE Nummer folgt noch.

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