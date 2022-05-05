---
title: "🌌🐮 Mooai 2022 Update - Das Tag Update | Änderungen"
date: 2022-05-05T10:34:00+01:00
draft: false
author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"

tags: ["2022", "update", "changelog", "bugfix"]
categories: ["Updates"]
---

> *Das neue mailcow update 2022-05 hier ist!*<br>
**Yoda, in einem Paralleluniversum**

Wie dem auch sei, haben wir diesen Monat wieder neue Sachen für die mailcow für euch.
Also: Lasst uns loslegen oder?

### Was ist neu?

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

