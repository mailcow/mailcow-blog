---
title: "🎄🐄 Muhzember Update 2022 - MUH-I Update (Bootstrap 5) "
date: 2022-12-24T09:30:10+02:00
draft: false

author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true
lightgallery: true

license: ""

tags: ["2022", "update", "changelog"]
categories: ["Updates"]

featuredImage: "/images/2022-12/mailcow_ui_login.de.png"
featuredImagePreview: "/images/2022-12/mailcow_ui_login.de.png"

---

## Vorwort

**Moohoo zusammen!**

Um das chaotische Jahr 2022 gebührend zu beenden ist es endlich soweit.  Das lang erwartete Bootstrap 5 Update ist endlich da!

Wie bereits in einigen Posts angesprochen markiert dieses Update nur den Wendepunkt des mailcow UI, denn die neue Basis (Bootstrap 5) wird uns in Zukunft viele neue Möglichkeiten und Spielraum für neue Features bieten.

Da durch das Bootstrap Update die bishere UI komplett erneuert bzw. auf die neue Version Portiert wurde kann es zu Abweichungen im Vergleich zur alten UI kommen.

Gut, aber genug zum Vorwort. Kommen wir nun zu dem eigentlichen Changelog:

---

## Changelog

[NEU] Überarbeitete UI, basierend auf Bootstrap 5
- Brandneue Status Page! (Ersetzt die bisherige Status Page und fasst diese mit neuen Informationen zusammen).
- Neue Integration der neuen Docker API (ermöglicht das generieren der neuen Diagramme auf der neuen Status Seite).
- Darkmode! (Danke an @Foxly fürs Beisteuern am Darkmode Code).
- Vorlagen für Domains und Mailboxen. 
- Neue Lade Animationen.
- Redesign der UI Komponenten (Buttons, Tabellen uvm.).
- Neue Position der Mail Queue. Vorher unter: System -> Mail Queue (recht versteckt). Nun unter: System -> Mail -> Mail Queue (unterhalb des Quarantäne Knopfes in der Navbar).
- Optimiertere Performance der UI.

[NEU] Die komplette Docker API (welche zur Steuerung der Docker Container innerhalb des Stacks dient) wurde im Rahmen des Bootstrap 5 Updates komplett neugeschrieben.

[NEU] ClamAV wurde auf Version 1.0 aktualisiert. Neue Container Version: 1.60<br>
Der Changelog zur 1.0 Version von ClamAV lässt sich hier finden:
https://github.com/Cisco-Talos/clamav/releases/tag/clamav-1.0.0

[NEU] Nextcloud Installierskript installiert nun Nextcloud 25. Zusätzlich wurde die Deinstallation gefixt, da die Deinstallation noch die alten Tabellen(nc anstatt oc) entfernte.

[NEU] Unsere auf Alpine Linux basierende Container (php-fpm, netfilter, unbound, olefy, acme, dockerapi, watchdog) wurden auf Alpine 3.17 aktualisiert.

[NEU] Viele Übersetzungsänderungen. Einige Strings wurden umbenannt, andere Entfernt. Deutsch und Englisch sind jedoch zu 100% komplett.

[FIX] Einige Netfilter Regeln (im Bezug auf Dovecot Logins) wurden vorher nicht mehr richtig erkannt. Diese wurden gefixt. **RESET DER NETFILTER REGELN INNERHALB DER MAILCOW UI ERFORDERLICH**

[FIX] Das `update-docker-compose.sh` Skript wurde so umgebaut, dass es direkt von GitHub die aktuellste Docker-Compose Version bezieht anstatt bisher über unsere Servercow Seite.

[FIX] Die Bulk Header Map von RSPAMD wurde angepasst und AWeber wurde entfernt. Damit sollten E-Mails von besagtem Anbieten nicht direkt negativ behandelt werden.

[FIX] Die Message-ID für Pushover wurde als Information der mailcow UI nachträglich hinzugefügt.

---

## Danksagung

So, damit sind wir am Ende angekommen.

Den kompletten Changelog gibt es wie gewohnt auf GitHub: 
https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-12

Wir hoffen euch gefällt die neue UI so sehr wie uns. 

Wie immer ist euer Feedback hier gerne erwünscht. Sprich fahren wir mit der Feedback sammelei fort. Nur diesmal mit mehr Leuten, die uns Feedback geben :)

Ebenfalls wollen WIR, EUCH unseren großen Dank aussprechen! Ihr seit das Herz, was mailcow am leben lässt, sei es euer Support auf Telegram, im Forum, ihr mailcow Anleitungen/Guides schreibt bzw. auf Youtube etc. hochladet oder einfach nur, dass ihr mailcow nutzt. DANKE, einfach nur DANKE!

In diesem sinne wünscht euch das ganze mailcow/tinc Team ein frohes Weihnachtsfest, gutes Essen, eine gute Zeit sowie einen guten Rutsch ins Jahr 2023.

*Sollten keine kritischen Fehler auftauchen nimmt auch das mailcow Team in der Zeit zwischen Weihnachten und Neujahr eine kleine Pause ein*

**Euer mailcow Team** <br>
> *Niklas*