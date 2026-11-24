---
title: "🐄💮 März Update 2022 – ClamAV, Dovecot & Olefy Update | Änderungen"
date: 2022-03-02T16:48:00+01:00
draft: false
author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"

license: ""

tags: ["Bugfix", "Dovecot", "ClamAV", "Olefy"]
categories: ["Updates"]
---

**Moohoo zusammen**, der März ist da und am Ende des Monats ist dann auch wieder Frühling. Sicherlich waren die letzten Tage für euch genauso beängstigend wie für uns.

🇺🇦 **Ukraine, wir stehen hinter euch!**

Kommen wir nun zum März Update unserer mailcow. 
Spoiler vorab, so voll und umfangreich ist das März Update nicht aber es sind einige nette Updates im Bezug auf die Langzeit enthalten (ich schaue dich an ClamAV und Olefy!).

Also, legen wir los!

---
Docker Image Änderungen:
- Dovecot wurde auf 1.161 geupdated (Imapsync + Dovecot Update)
- Olefy wurde auf 1.9 geupdated (Olefy Update)
- Rspamd wurde auf 1.80 geupdated (Olefy Update)
- ClamAV wurde auf 1.44 geupdated

Wichtige Änderungen:
- ClamAV wurde auf Version 0.104.2 geupdated, mit dieser Version sind wir auf lange Sicht abgesichert (Tschüss 0.103.X). Geändert hat sich eigentlich nur der Docker Image Prozess, der Rest läuft wie gewohnt. Falls nicht gerne ein Issue öffnen auf GitHub!
- Dovecot wurde auf 2.3.18 geupdated. Dies bringt uns auch näher an den Umstieg von Solr auf Xapian, mehr dazu, wenn wir an einem brauchbaren Punkt sind.
- Der IMAPSync wurde auf Version 2.178 geupdated (innerhalb von Dovecot).
- Oletools wurden auf einen neuen Upstream geändert (nutzt nun  @decalage2's repository)

Kleinere Änderungen:
- Die geänderten Doku Pfade (intern) wurden nicht in der mailcow UI angepasst, so dass ihr eine 404 Seite gesehen habt. Dies wurde behoben.
- Der WATCHDOG_NOTIFY_EMAIL String hatte bei einer leeren Variable eine Warnung in der Console (beim starten des Stacks) ausgegeben, diese wurde entfernt, da der String nun (wenn leer) auf NULL gesetzt wird.
- Wir haben die nsyslog-ng Version auf 3.28 aktualisiert (behebt eine Warnung in der Konsole direkt nach dem Start von Dovecot)

---

Aktuell war folgendes nie wichtiger: **Bleibt gesund** und noch viel wichtiger: **passt auf euch auf!**