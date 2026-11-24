---
title: "🎄🐮 Moozember 2025 | Ein weiteres Bugfix-Update - Revision A"
date: 2025-12-09T08:55:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["Bugfix"]
categories: ["Updates"]

---


{{< admonition warning >}}
Wenn ihr Docker Compose v5 verwendet, stellt bitte sicher, dass ihr zuerst diese kleinen Korrekturen anwendet, um zu verhindern, dass das update.sh-Skript fehlschlägt:

```bash
git fetch
git checkout origin/master update.sh
```

Ohne dies wird euch das Update-Skript mitteilen, dass eure Docker Compose-Version nicht unterstützt wird, selbst wenn ihr v5 verwendet.

Dies liegt an einem kleinen Tippfehler in der Versionsprüfung, der zwar behoben wurde, aber möglicherweise manuell angewendet werden muss, wenn ihr bereits Docker Compose v5 nutzt.
{{< /admonition >}}

## 2025-12a (Veröffentlichung: 12. Dezember 2025)

### Behobene Probleme und Verbesserungen

- Ein doppelter beziehungsweise im Klartext ausgegebener Login Hinweis wird nicht mehr erzeugt, wodurch die Darstellung wieder korrekt ist.
- Die zuvor angepasste Cron Syntax für den Download der sa-rules wurde in ofelia rückgängig gemacht, da sie unerwartete Nebenwirkungen verursacht hatte.
- Das Backup System lädt nun das benötigte Image vor, um sicherzustellen, dass immer die aktuellste verfügbare Version verwendet wird.
- Die Passwortprüfung unterstützt jetzt den Hash Algorithmus PBKDF2-SHA512, wodurch insbesondere Umgebungen mit FreeIPA eine verbesserte Kompatibilität erhalten.

Wie immer könnt ihr das vollständige Changelog auf GitHub einsehen: https://github.com/mailcow/mailcow-dockerized/releases/tag/2025-12a

---

## 2025-12 (Veröffentlichung: 9. Dezember 2025)

**Moohoo zusammen!**

Wir freuen uns, euch das **2025-12 Update** zu präsentieren!  
Dieses Release konzentriert sich auf Fehlerbehebungen und kleinere Verbesserungen, um eure mailcow-Erfahrung zu optimieren.

### 🌐 Neue Sprachen & Übersetzungsaktualisierungen

- Vietnamesisch wurde zur Benutzeroberfläche hinzugefügt.
- Mehrere aktualisierte Übersetzungen von Weblate verbessern die Internationalisierung insgesamt.

### ⚙️ Systemverbesserungen

- Backup-Performance verbessert: Umstellung von pigz auf zstd für schnellere und effizientere Komprimierung.
- Backup-Container auf Debian Trixie aktualisiert.
- Cronjobs überarbeitet: Compose verwendet nun Standard-Cron-Syntax, SOGo-Zugangsdaten für Cron-Aufgaben wurden korrigiert.

### 📨 Mailserver & Sicherheitsverbesserungen

- Postfix: postscreen_access.cidr aktualisiert, um die Behandlung unerwünschter Verbindungen zu verbessern.
- Postfix TLS Policy Companion auf die neueste Version 1.8.22 aktualisiert.
- API-Fix: Fehlende Break-Anweisung im CORS-Switch führte zu hängenden Speichervorgängen, nun behoben.
- Sicherheitsheader-Bereinigung: Veralteter X-XSS-Protection-Header entfernt.
- Nginx-Härtung: Nginx-Version wird nun im HTTP-Kontext vollständig verborgen.

### 🧩 Weboberflächen-Verbesserungen

- Dänischer Spracheintrag in der Benutzeroberfläche korrekt sortiert.
- Spam-Aliase können jetzt permanent gemacht werden.

### 🔧 PHP & Performance

- PHP JIT deaktiviert, da es in dieser Umgebung keinen Vorteil bietet und möglicherweise Probleme verursacht.

---

Wie immer könnt ihr das vollständige Changelog auf GitHub einsehen: https://github.com/mailcow/mailcow-dockerized/releases/tag/2025-12


Das war's für dieses Release!  
Wie immer empfehlen wir, eure mailcow-Installation auf dem neuesten Stand zu halten und eure Daten regelmäßig zu sichern.

Bleibt sicher und happy mailing!

Euer mailcow-Team von **The Infrastructure Company GmbH** (oder kurz **tinc**)