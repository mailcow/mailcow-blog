---
title: "🔥🐄 Mooly Update 2024 | Sicherheitsupdate"
date: 2024-08-05T09:08:00+02:00
draft: false

author: FreddleSpl0it
authorLink: "https://github.com/FreddleSpl0it"
toc: true

license: ""

tags: ["Security"]
categories: ["Updates"]

---

## 2024-07 (Release vom 05.08.2024)

**Moohoo** Alle zusammen!

Mit dem Mooly Update werden drei Sicherheitslücken in der mailcow geschlossen.

1. CVE-2024-41958 - Two-Factor Authentication (2FA) Bypass Vulnerability
2. CVE-2024-41959 - XSS Vulnerability via API Logs
3. CVE-2024-41960 - XSS Vulnerability via Relay Hosts Configuration

### Changelog

* Do not add MAILCOW_WHITE on failed DMARC
* [Postfix] update postscreen_access.cidr
* Security fixes

Der vollständige Changelog, einschließlich der einzelnen Commits, ist für Interessierte jederzeit auf GitHub verfügbar:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2024-07

---

Ein großes Dankeschön an **Julian B., Software Secured** und **Patrik Mayor, Ukatemi Technologies Plc** für das Melden der Sicherheitslücken.
Vergesst nicht, euren E-Mail-Server immer auf dem neuesten Stand zu halten!

Bleibt gesund und frohes Mailing.

Euer mailcow-Team
> FreddleSpl0it