---
title: "🌌🐮 Mooai 2022 Update - Das Tag Update | Revision C - Änderungen"
date: 2022-05-12T09:23:00+02:00
draft: false
author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"

license: ""

tags: ["Bugfix"]
categories: ["Updates"]
---

### 2022-05c
Wir sind es wieder (nochmal)!

Diesmal haben wir das 2022-05c Update veröffentlicht, welches ein sehr kleines Update ist.

Es hat die API wieder ein wenig verändert. Diesmal aus Sicherheitsgründen.

Geht rüber zu GitHub, um das vollständige Changelog zu sehen: 
https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-05c

Bleibt gesund

*Niklas*

---

### 2022-05b
Wir sind es wieder!

Heute haben wir ein kleines API Update, das sich hauptsächlich auf die UI konzentriert.

Wie einige von euch berichtet haben, funktionieren die API-Aufrufe für Domains/Mailboxen nicht mehr, wenn kein Tag gesetzt ist.

Dies ist nun behoben.

Außerdem haben wir eine kleine Änderung an der Benutzeroberfläche vorgenommen. Wusstet ihr schon, dass es ein kleines Plus-Symbol auf der linken Seite einer Domain/Mailbox gibt? Nein? Keine Sorge, es war ein wenig schwer zu sehen... bis jetzt :)

Wie immer gibt es auch zu diesem Update eine eigene Release Seite auf GitHub: https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-05b

Das war's im Grunde... oh nein, warte, eine Sache noch!
Wir haben jetzt die mailcow Version in unser Bug Reporting Formular auf GitHub aufgenommen. Wenn ihr also einen Bug melden wollt, füllt bitte auch die Versionszeile im Issue-Formular aus.

Das war's dann auch schon!

Nochmals vielen Dank für alle Mitwirkenden und mailcow Nutzer/Admins.

Euer mailcow Team

*Niklas*

---

### 2022-05a
Hallo nochmal Leute,

wir haben gerade den ersten Hotfix für 2022-05 veröffentlicht.

Er behebt einen kritischen UI Bug, der nach dem Update 2022-05 zu einer Unerreichbarkeit der UI führte.

Das Problem war ein fehlender Platzhalter, der dazu führte, dass ein wichtiger Ordner aus dem Git Repository gelöscht wurde, der für die Anzeige der UI benötigt wird.

Wir entschuldigen uns dafür.

Euer mailcow Team

*Niklas*

---

### 2022-05

> *Das neue mailcow update 2022-05 hier ist!*<br>
**Yoda, in einem Paralleluniversum**

Wie dem auch sei, haben wir diesen Monat wieder neue Sachen für die mailcow für euch.
Also: Lasst uns loslegen oder?

#### Tags
Dank der Hilfe von [@FredleSpl0it](https://github.com/FreddleSpl0it "@FredleSpl0it") besitzt die mailcow nun Tags. Tags? Ja Tags! Diese können zum Filtern bzw. suchen verwendet werden. Hinzufügen könnt ihr diese entweder, indem ihr eine Domain/Mailbox bearbeitet oder eine neue anlegt. In beiden Fällen lacht euch der Tags Bereich an.

---

#### SOGo 5.6.0
Hab gehört es gibt ne neue SOGo Version? Jep! Und die haben wir auch bereits an Bord. Genauere Infos dazu entnehmt ihr bitte den offiziellen Changelogs von inverse (den SOGo Entwicklern):  https://github.com/inverse-inc/sogo/releases/tag/SOGo-5.6.0

---

#### Barrierefreiheit (Bildschirmleser)
[@mkuron](https://github.com/mkuron "@mkuron") hat die mailcow nun noch ein wenig zugänglicher für blinde Menschen gemacht. (Respekt an der Stelle für alle, welche trotz dieser Einschränkung Spaß an der IT Welt haben).

---

#### Update.sh Änderung
Wir haben einen neuen Parameter für das Update.sh-Skript implementiert, der die Online-Prüfung zu Beginn des Update-Prozesses überspringt. Dies war für einige Leute nicht möglich, da alle ICMP-Verbindungen von und zur Mailcow blockiert wurden. Verwendet einfach den Parameter --skip-ping-check, wenn ihr das Update.sh-Skript ausführen (aber nur, wenn ihr wirklich keine ICMP-Verbindungen zu und von eurer mailcow erlaubt).

---

#### Neue API Möglichkeiten

Wir haben die API erweitert. Jetzt kann man Domains nach Tags suchen. Außerdem wurde eine API-Schnittstelle mit der Versionierung der Mailcow hinzugefügt. Für detailliertere API Informationen werft einfach einen Blick auf die extra API Seite eurer mailcow (eure.mailcow.domain/api).

Danke an [@lars-net](https://github.com/larsl-net "@lars-net") und [@FredleSpl0it](https://github.com/FreddleSpl0it "@FredleSpl0it") für diese Änderungen.

---

Für eine detailliertere oder granularere Struktur des Updates, schaut bitte auf die GitHub Seite:

Das war's für diesen Monat.

Wir sehen uns im Juni oder früher wieder (sollte es kritische Bugs geben...).

Bleibt gesund

*Niklas*

