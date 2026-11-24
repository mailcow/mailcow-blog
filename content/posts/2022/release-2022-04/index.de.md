---
title: "🐄🐰 Moopril 2022 - ClamAV, Rspamd, SOGo Update | Änderungen"
date: 2022-04-05T10:42:00+01:00
draft: false
author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"

license: ""

tags: ["Bugfix", "Rspamd", "SOGo", "ClamAV"]
categories: ["Updates"]
---

**Moohoo zusammen!**

Das April-Update ist da, mit einer Reihe von Neuerungen für Ihren reibungslosen E-Mail-Flow.

Diesen Monat haben wir 3 Komponenten-Updates (ClamAV, SOGo und Rspamd) und ein paar kleinere Korrekturen, die wie folgt sind:

---

#### Wichtige Änderungen
- Wir haben SOGo im mailcow Stack auf Version 5.5.1 geupdated. Neben den SOGo Bugfixes ([Hier zu finden](https://github.com/inverse-inc/sogo/releases/tag/SOGo-5.5.1 "Hier zu finden")) wurde die mailcow Datenbank Struktur etwas angepast um für das Update 5.5.2 bereit zu sein. <br>**Hinweis:** Das 5.5.2 update wird (vermutlich) teil des 2022-04a Updates sein, wenn inverse dieses im April veröffentlicht.

- Rspamd wurde auf 3.2.1 aktualisiert. ([Detailiertere Patchnotes finden sich hier](https://rspamd.net/announce/2022/03/26/rspamd-3.2.html)).

- Die mailcow nutzt nun die offiziellen ClamAV Docker Container. Aus diesem Grund gibt es nun ein neues Volume (clamd-db-vol-1) in welchem die Signaturen für ClamAV aufbewahrt werden. Diese Änderungen erlauben es uns ClamAV schneller und effizienter nach release in die mailcow zu integrieren. **Hinweis:** Die ClamAV Version der mailcow ist noch immer 0.104.2. Die neue Version 0.105 wird teil der mailcow sein, sobald diese veröffentlicht wurde.

---
#### Kleinere Änderungen
- Autodiscover ist nun mit App Passwörtern kompatibel.
- Die Postmap Access List wurde auf einen neueren Stand gebracht.
- Neue Französische Übersetzungen.

---

Schaut euch die komplette Liste der Änderungen noch einmal bei Github an: [Hier klicken](https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-04 "Hier klicken")


Wir hoffen euch geht es gut und ihr seid gesund.

Ganz egal wo ihr auch seid: Passt auf euch auf! 


