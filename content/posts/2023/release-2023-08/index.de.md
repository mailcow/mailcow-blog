---
title: "🌻 🐄 Moogust Update 2023 - Spamhaus DQS Hotfixes"
date: 2023-08-03T11:11:32+02:00
draft: false

author: Patrick Schult/FreddleSpl0it
authorLink: "https://github.com/FreddleSpl0it"
toc: true

license: ""

tags: ["2023", "update", "changelog", "DQS", "Spamhaus", "DNSBL", "hotfix"]
categories: ["Updates"]

---

## 2023-08 (Release vom 03.08.2023)

**Moohoo zusammen!**

Ich hoffe, dass ihr es noch nicht satt habt, Updates durchzuführen.<br>
Das 2023-08 Release ist da und enthält einige Hotfixes für das neue Spamhaus DQS-Feature.<br>
**Wenn ihr Spamhaus DQS nicht verwendet und bisher keine Probleme mit dem 2023-07 Update hattet, müsst ihr dieses Update nicht installieren.**<br>

Da dieses Release nur Hotfixes enthält, gibt es nicht viel darüber zu sagen, außer einer Sache.<br>
Wenn ihr Postscreen DNSBL überhaupt nicht nutzen möchtet, könnt ihr den **Inhalt** der Datei `data/conf/postfix/dns_blocklists.cf` löschen und leer lassen.<br>
Um alle Änderungen an dieser Datei rückgängig zu machen, löscht die **Datei** einfach und startet Postfix neu.<br>


### Changelog

- Fix main.cf merging order
- [Postfix] rework dns_blocklists.cf generation
- Add postscreen_dnsbl_reply_map to avoid disclosure of DQS key

Der volle Changelog auch mit den einzelnen Commits ist für Interessenten jederzeit auf GitHub abrufbar:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-08

---


Wie immer ein riesiges Dankeschön an unsere großartige mailcow-Community für eure andauernde Unterstützung und wertvollen Rückmeldungen.

Bleibt gesund und happy Mailing!

Euer mailcow Team
