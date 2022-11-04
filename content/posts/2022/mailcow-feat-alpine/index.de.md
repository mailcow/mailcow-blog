---
title: "[GUIDE] mailcow feat. Alpine Linux = ❤️"
subtitle: "Ein kleiner Guide für die Installation von mailcow auf Alpine Linux"
description: "Ein kleiner Guide für die Installation von mailcow auf Alpine Linux"
date: 2022-11-04T10:00:00+01:00
draft: false
author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

images: ["/images/mailcow-feat-alpine.jpg","/images/mailcow-feat-alpine_preview.jpg"]
featuredImage: "/images/mailcow-feat-alpine.jpg"
featuredImagePreview: "/images/mailcow-feat-alpine_preview.jpg"

categories: ["Guides"]
tags: ["Alpine", "Installation", "Tutorial"]
---

<!--more-->

**Moohoo zusammen!**

Heute einmal kein Updatelog sondern ein Guide!

Und zwar zum Thema: mailcow auf Alpine Linux installieren, denn obwohl die Kompatibilität noch nicht 100% gewährleistet ist klappt mailcow auf Alpine ziemlich gut!

### Einleitung

Wenn ihr euch mal mit der Linux Welt beschäftigt habt werden euch vermutlich die ein oder anderen Betriebssysteme über den Weg gelaufen sein und vielleicht schon mal den Namen `Alpine Linux` gehört haben.

Denn was Alpine Linux im vergleich zu anderen Distributionen ausmacht ist ihr Leichtgewicht. *Hast du die anderen Distributionen gerade fett genannt?* - **NEIN!**.

So kommt Alpine in der grundausgabe gerade einmal mit unter 60 Paketen daher wohingegen Debian mit knapp 400 Paketen (ca.) daher kommt.

Auch die generelle Auslastung der Systeme ist mit Alpine im schnitt deutlich geringer. (Kommt auf den Anwendungsfall an)

  > Doch warum hier dieses Tutorial?

Eine gute Frage! Alpine ist im vergleich zu anderen Distributionen nämlich ein wenig anders aufgebaut. Wir werden euch hier in diesem Guide jedoch nur die Steps ab Alpine installation erklären und nicht auch, wie ihr Alpine installieren könnt.

---

### apk als Paketmanager (Basics)

Alpine Linux setzt auf `apk` als Paketmanager, welcher zwar um einiges (und dabei meine ich wirklich *einiges*) schneller ist jedoch auch vom Handling her etwas weird wirkt, wenn man sich damit noch nicht befasst hat.

So wird beispielsweise mit `apk update` die aktuellste Paketliste geladen anstatt wie auf Systemen mit `apt` eben mit `apt update`.

Auch beim Upgradeprozess der Pakete gibt es einen Unterschied. Dort ist die Syntax dann `apk upgrade` anstatt `apt upgrade`.

Neue Pakete werden mit `apk add PAKETNAME` anstatt `apt install PAKETNAME` installiert. Das ist drastisch anders, aber man gewöhnt sich dran.

Letzte Sache: Pakete löschen tun wir in Alpine mit `apk del PAKETNAME`.

Gut, Crash Course über apk erledigt. Jetzt kann es losgehen!

---

### Die wichtigsten Pakete (git, Docker, Docker Compose) installieren.

Alles klar, die Basics zu apk kennen wir nun, also legen wir mit der mailcow Installation los.

Zuerst installieren wir die Pakete git, Docker, Docker Compose und nano, wobei letzteres meine präferenz für Texteditoren ist und ihr auch was anderes nehmen könnt.

Installiert werden die Pakete wie folgt:

```
apk update
apk upgrade

apk add git docker docker-cli-compose nano
```

Alright die Pakete sind da. Nun müssen wir Docker noch zu den Startprogrammen hinzufügen. Dies klappt ein wenig anders als bei Debian oder anderen Linux Betriebssystemen.

Nämlich kommt bei Alpine Linux rc als systemctl Ersatz zum Einsatz.

Die Syntax zum hinzufügen des Docker Dienstes zum Startup lautet:

```
rc-update add docker default # Fügt Docker den Startprogrammen hinzu

rc-service docker start # Startet den Docker Daemon

```
---

### Systempakete von Busybox auf GNU Ändern bzw. Installieren

mailcow braucht zwingend einige GNU Tools um auf Alpine lauffähig zu sein.

Aber keine Sorge, welche das sind und wie ihr sie bekommt zeige ich euch jetzt.

Kurz was wir brauchen: `grep`, `sed`, `coreutils`, `findutils` sowie `bash` und `curl` fürs ausführen der mailcow Skripte.

Diese installieren bzw aktualisieren (denn einige der Pakete sind schon drauf, jedoch eben nur Busybox) wir mit folgenden Befehlen:

```
apk add --no-cache --upgrade grep sed coreutils findutils bash curl
```

Haben wir diese Pakete nun installiert können wir mailcow endlich deployen!

---

### mailcow Deployen

Ok, die Installation von mailcow erfolgt hier wie gewohnt.

1. Sprich erst das Git Repo in `/opt` Klonen mit:

  ```
  git clone https://github.com/mailcow/mailcow-dockerized
  ```

2. Dann die `generate_config.sh` als root ausführen (`./generate_config.sh`)<br>
  **Achtet auf die umask 0022!!**

3. Euren FQDN (Full Qualified Domain Name) in der `generate_config.sh` Prompt eingeben und die Zeitzone anpassen (wenn nicht schon korrekt vom Skript erkannt).

4. Alle Container Images mit `docker compose pull` herunterladen.

5. *Optional*: Eventuelle Resourcenhungrige Komponenten wie SOLR, CLAMAV (bei wenig RAM) deaktivieren in der `mailcow.conf`.

6. Die mailcow mit `docker compose up -d` starten.

7. *Empfohlen, wenn v6 aktiv*: Die native Docker IPv6 Konnektivität aktivieren. Dazu das `update.sh` Skript einmal ausführen und die Frage mit dem nativen IPv6 in Docker bejahen.<br>
   **ACHTUNG!** *Diese Option nur dann aktivieren, wenn ihr IPv6 auch auf eurem System aktiviert habt, da es sonst zu Segmentation Faults mit Alpine Linux kommen kann, sollten kein IPv6 Adresse anliegen!* 

8. *Empfohlen, wenn kein v6 anliegt*: Die Deaktivierung von IPv6 im mailcow Stack (siehe [https://docs.mailcow.email/de/post_installation/firststeps-disable_ipv6/](https://docs.mailcow.email/de/post_installation/firststeps-disable_ipv6/))

---

### Epilog

Solltet ihr dieser Anleitung gefolgt sein dürfte eure mailcow jetzt erfolgreich auf einem schlanken und sehr schnellen Linux OS laufen. Allerdings solltet ihr diese Installation bzw. die Wartung dieser nicht so auf die leichte Schüppe nehmen, da sich Alpine anders verhält in bestimmten Punkten.

Auch kann es während der Nutzung zu Fehlern kommen, welche noch nicht von uns entdeckt wurden, weswegen wir euch regelmäßige Backups empfehlen. (Das klappt übrigens auch wie gewohnt mit den Crontab Backups aus [unseren Docs](https://docs.mailcow.email/de/backup_restore/b_n_r-backup/#cronjob))

Entdeckte Fehler in Alpine könnt ihr uns gerne melden. Es kann jedoch sein, dass diese nicht lösbar sind aufgrund der anderen Lib Bibliothek `musl` im Vergleich zu der bekannten Bibliothek `glibc`. Schaut euch dazu gerne die offizielle Wiki Seite von musl bzw glibc an: https://wiki.musl-libc.org/functional-differences-from-glibc.html

---
**Verwendete Bilder**:

- Thumbnail Background <a href="https://www.freepik.com/free-vector/white-background-with-blue-tech-hexagon_4775334.htm#query=technology%20background&position=25&from_view=search&track=sph">von starline auf Freepik</a>
- Alpine Logo vom Alpine Linux Development Team
- mailcow Logo von Uns ;)