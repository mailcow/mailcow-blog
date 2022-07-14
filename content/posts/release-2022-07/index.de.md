---
title: "☀️🐄 Mooli Update 2022 - 2FA Flow Update | Änderungen"
date: 2022-07-14T08:30:10+02:00
draft: false

author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true

tags: ["2022", "update", "changelog", "bugfix"]
categories: ["Updates"]
---

**Moohoo zusammen!**

Es ist wieder einmal Update Zeit, etwas später als bisher (darauf gehe ich später noch etwas ein) aber trotzdem vollgepackt mit einigen Änderungen:

### 2FA Änderungen

- Die 2FA ist nun auch für Mailbox User im UI möglich (bisher war dies den Administratoren vorbehalten).
- Ebenfalls ist es jetzt möglich mehrere 2FA Möglichkeiten für ein Account zu aktivieren. <br>*Hinweis: Es wird nur eine verwendet, die vom User ausgewählt wird.*
- Es gibt ein schönes neues Menü bei zur Auswahl der verfügbaren 2FA Optionen.

Das Update wurde von [@FreddleSpl0it](https://github.com/FreddleSpl0it) (Patrick) entwickelt. Danke dafür :)

Apropos Patrick, er ist seit Anfang Juni offizielles Mitglied der tinc und widmet sich nun intensiver der mailcow Entwicklung und dem ganzen hier drum herum!

Also lest ihr eventuell auch bald mal was von Ihm hier auf der Blogseite 😊

---

Gut, wo waren wir? Ach genau! Bei den weiteren Änderungen neben der neuen 2FA möglichkeiten:

### Docker Image Änderungen (mailcow Stack)

- SOGo (nicht unsere Software, wird oft gefragt) wurde auf Version 5.7.0 aktualisiert. In der mailcow wurde dies im Docker Image sogo:1.109 implementiert. Der offizielle Changelog seitens SOGo gibt es hier: [https://github.com/inverse-inc/sogo/releases/tag/SOGo-5.7.0](https://github.com/inverse-inc/sogo/releases/tag/SOGo-5.7.0). Danke an [@MAGICCC](https://github.com/MAGICCC) fürs Updaten.
- Im ClamAV Container wurde der Healthcheck so umgebaut, dass dieser nun auch dann healthy ist, wenn ClamAV überhaupt nicht genutzt wird. (Ist durch das Wechseln auf die offiziellen Images wohl kaputt gegangen). Dies ist im Image clamav:1.53 enthalten! Danke an [@mritzmann](https://github.com/mritzmann) fürs implementieren.
- Dovecot wurde auf 2.3.19.1 geupdated ([Changelog](https://dovecot.org/doc/NEWS)). Dies kommt mit dem Docker Image dovecot:1.17 mit.

### Diverse Änderungen/Fixes

- Das update.sh Skript updated nun nicht mehr ungefragt die installierte docker-compose Version. Dies wurde von einigen Usern angemerkt, danke dafür!
- Ebenfalls im update.sh Skript kann nun auch nur die docker-compose Version geupdated werden (mit --update-compose). Diese Funktion wurde im cold_standby.sh Skript implementiert, sodass die Zielmaschine neben dem Docker Image Aufräumprozess nun auch ein Update von docker-compose bekommt.
- Ein Lua Crash mit SOGo wurde in RSPAMD gefixt. Danke an [@andryyy](https://github.com/andryyy)
- In den SyncJobs wurde die Standardmailbox (welche immer erscheint, bei einem neuen Job) entfernt. So kann das ganze nicht mehr in ein falsches Postfach gehen ausversehen. Danke an [@RafaelKr](https://github.com/RafaelKr)
- Es konnte eine Blanke Seite im Browser angezeigt werden, wenn die WebUI mit /user aufgerufen wurde, aber kein Benutzer angemeldet war. Das wurde behoben. Danke an [@mhofer117](https://github.com/mhofer117)

---

Puh, mir tun die Finger vom schreiben weh 🙃

Aber egal, das war es für dieses Mal.

Wenn ihr den [kompletten Changelog](https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-07) lesen wollt könnt ihr das (wie immer) gerne auf GitHub machen.

Nun aber noch ein paar Worte zu den Major Updates 1x im Monat:

### Der Update Zyklus

Bisher war es ja so, dass diese am ersten Dienstag im Monat erscheinen. Wir haben aber festgestellt, dass die Update Qualität und Quantität stagniert und auch die generellen Tests etwas zu kurz kamen. Natürlich sind die Updates nicht immer 100% Fehlerfrei und bei einem Open-Source Projekt ist das Feedback der Community ja umso wichtiger, aber wir wollen trotzdem aus eigenem Ermessen sagen können: "*Jawohl, das Update ist soweit fertig getestet und auf den gängigsten Installationsarten funktional.*", was uns eben dazu geführt hat keinen festen Termin mehr für ein Major Update im Monat nennen zu wollen.

Es wird trotzdem monatlich mindestens ein größeres Feature Update geben, nur nicht mehr an einem festen Tag wie bisher.

### Aussicht auf die Zukunft

Dennoch, wir planen für das August Update eine neue Art von Updates: die Nightly Updates! Diese erlauben es uns, euch neue Features oder Major Änderungen testen zu lassen bevor diese richtig produktiv für alle gehen.

Dazu wird es im update.sh Skript die Möglichkeit geben zwischen **stable** und **nightly** zu wechseln (macht aber vorher immer ein Backup, denn *Kein Backup, kein Mitleid!*).

Als erster großer Nightly Test steht das neue **Bootstrap 5 Update** an, welches dann voraussichtlich im *September 2022* für alle im Stable Build landen soll.

Mehr zu den nightly Tests gibt es dann, wenn es soweit ist.

---

Gut, genug euer Ohr abgekaut! (*Sagt man bei einem Lesetext wirklich Ohr abgekaut oder eher Auge ausgebrannt?*)

Bleibt jedenfalls gesund und passt auf euch auf!

**Euer mailcow Team** <br>
*Niklas*