---
title: "🌷🐄 Mooai Update 2023 - IMAP Performance + general Tweaks Update"
date: 2023-05-25T09:30:10+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2023", "update", "changelog", "ARM64", "Performance"]
categories: ["Updates"]

---

**Moohoo zusammen!**

Es geht weiter mit unseren Updates für mailcow, diesmal (wieder einmal) hauptsächlich, um die allgemeine Stabilität und Benutzerfreundlichkeit des Stacks zu verbessern, aber auch, um die IMAP-Performance zu verbessern.

Los geht's:

### Changelog

- Für Dovecot wurde die Option `maildir_very_dirty_syncs` standardmäßig aktiviert. Dies ermöglicht eine deutlich schnellere IMAP-Abfrage als bisher. In den mailcow Docs haben wir dazu eine neue Seite erstellt. Diese beschreibt die genauen Gründe für den Performance-Boost sowie Fälle, in denen das Feature abgeschaltet werden sollte: https://docs.mailcow.email/de/manual-guides/Dovecot/u_e-dovecot-performance
- Ein Fehler in der BCC Map Einstellung im UI wurde behoben, dieser brachte das Dropdown durcheinander, sobald eine Auswahl getroffen wurde. Außerdem war es nicht möglich, Aliase als lokales Ziel auszuwählen.
- In der Benutzeransicht (Spam Aliase) wurden die Aliase in der falschen Reihenfolge angezeigt, dies wurde behoben.
- Ein Problem in der Rspamd-Tabelle (vor allem auf Geräten mit kleineren Bildschirmen) führte zu Darstellungsfehlern in der Benutzeroberfläche. So wurden z.B. der Spamwert und die Scanzeit nicht angezeigt. Dies ist nun behoben.
- In der Benutzeransicht stimmen die angezeigten Tabs nun mit den gesetzten ACLs überein.
- Wenn in der Benutzeransicht auf "Aktive Filter des Benutzers anzeigen" geklickt wurde, wurde statt der eingestellten Sieve-Filter eine Fehlermeldung angezeigt. Ab sofort werden hier die aktiven Sieve-Filter des Benutzers wie erwartet angezeigt.
- Ein Darstellungsfehler, bei dem ein gelöschtes Postfach (aus dem gesendet werden konnte als anderes Postfach) noch in der Dropdown-Liste "Senden als" angezeigt wurde, wurde behoben.
- Es wurde eine automatische Aktualisierung der Mailbox-Liste für Postfix über GitHub eingerichtet. Diese aktualisiert die Liste automatisch jeden Monat (wird dann mit neuen Updates von mailcow ausgerollt).
- Alte SASL Logs wurden bisher nicht korrekt aus der Datenbank entfernt. Dies ist nun der Fall.
- Im UI wird nun unter dem Hostnamen von mailcow die verwendete Architektur angezeigt. Dies dient als Vorbereitung für die ARM64-Unterstützung (aktueller Status dazu weiter unten).
- Einige Tippfehler und Links wurden korrigiert.

Wie immer gilt, der volle Changelog auch mit den einzelnen Commits ist für Interessenten jederzeit auf GitHub abrufbar:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-05

---

Ok, das wäre so weit alles zum Changelog. Lasst mich noch kurz ein Wort zu ARM64 verlieren:

### ARM64 Status Update

Die schlechte Nachricht zuerst: ARM64 ist noch nicht im Nightly Build und wird es auch nicht vor Juni 2023 schaffen.

Die gute Nachricht: Einige testen bereits fleißig mit ARM64 herum und berichten bisher von keinen größeren Problemen, abgesehen von einigen Inkompatibilitäten der Hyperscans seitens Rspamd. Das bedeutet im Umkehrschluss, dass mailcow auf ARM64 bisher sehr gut läuft. Auch ich habe diese Tests bereits durchgeführt und bin zu einem ähnlichen Ergebnis gekommen.

Da wir aber mit dem Umstieg auf ARM64 ein paar größere Änderungen in der Art und Weise wie die Docker Images gebaut werden einbauen, wird es leider ein wenig dauern bis wir das für alle in die Nightly Builds einbauen können. Denn ab dem Zeitpunkt, an dem der ARM64-Support im Nightly von mailcow integriert ist, sollen die Docker-Images auch die gleiche Versionierung wie die Images im Nightly haben und nicht wie jetzt z.B. `arm64-dev`. Das bedeutet für uns eine Umstellung und vor allem eine Vorbereitung auf den dualen Aufbau der OS-Architekturen seitens der Docker-Images.

Denn der Plan sieht so aus (bisher kann der auch eingehalten werden), dass sich für ARM64 und x86 User NICHTS an der Art und Weise der Update/Installation von mailcow ändert.

Außerdem gibt es (wie oben schon erwähnt) momentan einen etwas größeren Bug mit Rspamd und ARM64, der aber in Aussicht steht gefixt zu werden. Sollte dies der Fall sein können wir mit der Integration in Nightly beginnen, was voraussichtlich Anfang/Mitte Juni 2023 sein wird.

Wenn es soweit ist, werden wir es natürlich überall ankündigen und euch informieren.

---

So, genug geschwafelt, einen schönen Morgen/Mittag/Abend oder wann auch immer ihr das hier lest...

Ansonsten gilt, was immer gilt:

Bleibt gesund und happy Mailing!

Euer mailcow Team
> Niklas aka. DerLinkman