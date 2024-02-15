---
title: "🐥🐄 Febmooary 2024 Update | ClamAV Sicherheitsupdate"
date: 2024-02-15T10:53:22+02:00
draft: false

author: Patrick Schult/FreddleSpl0it
authorLink: "https://github.com/FreddleSpl0it"
toc: true

license: ""

tags: ["2024", "update", "changelog", "clamav", "clamd", "security"]
categories: ["Updates"]

---

## 2024-02 (Release vom 15.02.2024)

**Moohoo** Alle zusammen!

Mit dem Febmooary werden weitere, erst kürzlich veröffentlichte, Sicherheitslücken in der mailcow geschlossen. Dabei handelt es sich um die folgenden Sicherheitslücken im ClamAV Dienst, welche mit der Version 1.2.2 behoben wurden:
1. CVE-2024-20290: Fixed a possible heap overflow read bug in the OLE2 file parser that could cause a denial-of-service (DoS) condition.
2. CVE-2024-20328: Fixed a possible command injection vulnerability in the "VirusEvent" feature of ClamAV's ClamD service.

In der Standardkonfiguration ist mailcow nicht von der Sicherheitslücke **CVE-2024-20328** betroffen, da das `VirusEvent` in der ClamAV Konfiguration nicht aktiviert ist.

Weitere Informationen unter: https://blog.clamav.net/2023/11/clamav-130-122-105-released.html

Ansonsten haben wir noch ein paar Bug fixes für euch im Gepäck.

### Changelog

- ClamAV Update auf Version 1.2.2
- Die Domain Wide Footer Funktion schließt nun auch Alias Domains mit ein
- Domain Names werden in der Domain Tabelle, neben dem Punycode Format jetzt auch im Human Readable Format angezeigt
- Netfilter respektiert nun die maximale Bannzeit

Der vollständige Changelog, einschließlich der einzelnen Commits, ist für Interessierte jederzeit auf GitHub verfügbar:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2024-02

---

Wie immer bedanken wir uns bei unsere großartige mailcow Community für eure anhaltende Unterstützung und euer wertvolles Feedback.

Bleibt gesund und frohes Mailing.

Euer mailcow-Team
> Patrick
