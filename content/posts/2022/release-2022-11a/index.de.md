---
title: "🚚🐄 Muhvember Update 2022 - Sogo 5.8.0, Rspamd 3.4.0 and PHP 8.1 Update | Revision B"
date: 2022-12-12T09:30:10+02:00
lastmod: 2022-12-13T09:30:10+02:00
draft: false

author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2022", "update", "changelog", "bugfix"]
categories: ["Updates","Hotfix"]
---

**Moohoo zusammen!**

Aus gegebenem Anlass (dem <del>2022-11a</del> 2022-11b Update) gibt es hier einmal die Changelogs bzw. Änderungen des besagten <del>2022-11a</del> 2022-11b Updates, sowie die Änderungen der Major Version (2022-11).

> *Wir haben bereits 2022-11b released!*

<!--more-->

### Stabile Änderungen (stable Branch 2022-11b)

+ CalDav sollte jetzt wieder wie zuvor unter MacOS funktionieren. Neue SOGo-Image-Version (in der docker-compose.yml): 1.113.
+ Einige Benutzer konnten update.sh nicht mehr verwenden, weil der DNS-Lookup-Timeout zu niedrig war. Dieser wurde von 3 auf 6 erhöht! <br>*Hinweis: Eine vernünftige und schnelle DNS-Auflösung ist für einen Mailserver essentiell!*

Weitere Informationen sowie die genauen PRs findet ihr auf GitHub: https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-11b

### Stabile Änderungen (stable Branch 2022-11)

+ Ein undokumentierter API Endpunkt (/api/v1/get/mailbox/all/domain.tld) wurde den API Docs (mailcow integriert) hinzugefügt.
+ Der PHP Container wurde auf Version 8.1 aktualisiert. Zusätzlich wurden einige Optimierungen am Dockerfile vorgenommen. Neue Image Version (in der docker-compose.yml): 1.80
+ Für die Pushover Funktionalität gab es ein größeres Update, welches neue Sounds uvm. für Pushover hinzufügt.
+ RSPAMD wurde auf Version 3.4 (endlich) aktualisiert. Wir hatten im 2022-10 Update ja bereits RSPAMD geupdated, dieses jedoch mit 2022-10a wieder entfernt. Nun ist es aber stabil drin! Neue Image Version (in der docker-compose.yml): 1.91
+ SOGo wurde auf Version 5.8.0 aktualisiert. Dies behebt den lange gemeldeten Battery Drain (Hoher Akkuverbrauch) Bug auf iOS 16 oder höher. Neue Image Version (in der docker-compose.yml): 1.112
+ Die update.sh ist nun Proxy fähig! Der bisherige Ping Check wurde mit einem DNS Check ersetzt.
+ Einige kleinere Anpassungen wie bspw. Übersetzungsanpassungen oder Typos wurden ebenfalls korrigiert.


Weitere Informationen sowie die genauen PRs findet ihr auf GitHub: https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-11

### Stabile Änderungen (stable Branch 2022-11a)

+ Die IMAPSYNC Jobs werden nun nicht mehr automatisch deaktiviert, sollte der zu fetchende Server nicht erreichbar bzw. die Zugangsdaten falsch sein. Neue Image Version von Dovecot (in der docker-compose.yml): 1.21
+ Sowie kleine Übersetzungskorrekturen

Weitere Informationen sowie die genauen PRs findet ihr auf GitHub: https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-11a

### Nightly Änderungen (nightly Branch)

Wir nähern uns mit sehr großen Schritten dem letzten großen mailcow Update für 2022. Dem Bootstrap 5 (fortan BS5) bzw. MUH-I Update!
Dementsprechend wurde in den letzten Wochen noch ein wenig am Feinschliff der neuen UI gewerkelt. Auch wenn es so wirken mag, dass das große 2022-12 Update die UI einmalig anfasst und danach nie wieder ist dies nicht ganz korrekt. Das neue BS5 Update markiert nur den Anfang weiterer UI optimierungen in naher zukunft.

Wie immer sind die neuen Änderungen der UI bereits auf der Nightly Demo mailcow Instanz bzw. dem Nightly Branch zu finden.

---

So, ich hoffe sehr, dass ihr euch auch schon sehr auf das neue UI Update freut so wie wir! Natürlich wird in dem 2022-12 Update auch noch mehr neben BS5 enthalten sein, nur schon mal vorweg ;)

Bis dahin, bleibt gesund und bis zum nächsten Update.

**Euer mailcow Team** <br>
> *Niklas*