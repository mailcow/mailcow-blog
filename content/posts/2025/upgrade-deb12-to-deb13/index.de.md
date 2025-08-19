---
title: "Kurzanleitung: Upgrade von Debian 12 auf Debian 13 für mailcow-Server"
date: 2025-08-19
draft: false
tags: ["Debian", "Upgrade", "mailcow", "Exim", "Postfix"]
categories: ["Guides"]
author: The Infrastructure Company GmbH
toc: true

featuredImage: "/images/2025/August/guide_debian_upgrade12-13.webp"

license: ""
---

**Moohoo, liebe Community!**

Mit der Veröffentlichung von **Debian 13 (Trixie)** stellt sich für euch als Administrator:innen die Frage: *Wie führt ihr ein Dist-Upgrade von Debian 12 (Bookworm) reibungslos durch – insbesondere auf Systemen mit mailcow?*  
Ein oft übersehener Stolperstein: **Exim**.

<!--more-->

## Wichtige Hinweise vor dem Upgrade
Debian 13 installiert standardmäßig den **Exim4 Mail Transfer Agent**. 

Dies betrifft sowohl Neuinstallationen als auch Upgrades, wenn Exim in Abhängigkeiten oder „Standardpaketen“ enthalten ist.

Wie ihr wisst, verwendet mailcow Postfix, das standardmäßig (und gemäß RFC-Standard, unveränderbar) auf Port 25 lauscht.

Das Problem: **Exim auf dem Host belegt ebenfalls Port 25**. 

Dadurch kann der postfix-mailcow-Container nicht korrekt starten und keine E-Mails senden oder empfangen.

## Upgrade durchführen

{{< admonition success >}}
Ein guter Systemadministrator erstellt vor dem Upgrade immer ein Backup. :)
{{< /admonition >}}

Das Dist-Upgrade erfolgt wie gewohnt:

```bash
sed -i 's/bookworm/trixie/g' /etc/apt/sources.list
apt update
apt upgrade
apt full-upgrade
```

{{< admonition danger >}}
**Achtung**: Überprüft auch externe APT-Quellen, wie z. B. Docker. Der oben genannte SED-Befehl ändert **nur** die Basis-OS-Quellen!
{{< /admonition >}}

Ein anschließender Neustart (`reboot`) ist erforderlich, damit alle Dienste mit den neuen Versionen laufen.

## Exim nach dem Neustart entfernen (falls vorhanden)
Nach dem Neustart könnte Exim installiert sein und Port 25 auf dem Host belegen.  
Überprüft dies mit:

```bash
ss -tulpn | grep :25
```

Falls Exim angezeigt wird, führt bitte Folgendes aus:

```bash
# Exim deinstallieren
apt purge exim4 exim4-base exim4-config exim4-daemon-light
```

Optional könnt ihr verbleibende Konfigurationsreste entfernen:

```bash
apt autoremove --purge
```

Eine erneute Überprüfung mit:

```bash
ss -tulpn | grep :25
```

...sollte bestätigen, dass Exim nicht mehr auf Port 25 lauscht.

## Fazit
Beim Upgrade von **Debian 12 auf Debian 13** ist auf mailcow-Systemen besondere Vorsicht geboten, insbesondere in Bezug auf den **Exim-Mailserver**, der standardmäßig installiert wird.  
Da Postfix in einer modernen mailcow Installation ausschließlich im Container via Docker läuft, ist Exim auf dem Host nicht nur überflüssig, sondern blockiert auch Port 25.  
Durch die rechtzeitige Deinstallation von Exim steht einem reibungslosen Betrieb von mailcow auf Debian 13 (Trixie) aber nichts im Wege.

---

Bis dahin...

Bleibt gesund und happy mailing!

**Euer mailcow Team**