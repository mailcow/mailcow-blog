---
title: "🌷🐄 Mooai Update 2023 - Revision A (⚠️ Sicherheitsupdate KRITISCH ⚠️)"
date: 2023-05-30T09:30:10+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["Security", "Hotfix"]
categories: ["Updates"]

---

**Moohoo zusammen!**

Ein sehr dringendes Sicherheitsupdate für mailcow (2023-05a) wurde soeben veröffentlicht.

Wir bitten dringend darum, dieses Update einzuspielen, da diese Sicherheitslücke bereits seit längerer Zeit (vor 2020) im Code schlummert.

<!--more-->

Grob gesagt handelt es sich bei dieser Sicherheitslücke um einen Fehler im Passwort Parsing seitens Dovecot und mailcow.

Genauere Informationen sowie ein Proof of Concept wird es in den nächsten Tagen in einem **CVE** geben.

Es gibt **keinen** Workaround für dieses Problem!

### Changelog

- Das Nextcloud Skript installiert nun Nextcloud 26.0.2 bzw. updatet es darauf (falls gewünscht).
- Im Dovecot wurde eine kritische Sicherheitslücke geschlossen, die erlaubt hatte sich via einer Passwortänderung unerlaubt Zugriff zu einem anderen Postfach zu schaffen. Hierzu folgt die Tage eine eigenständige CVE samt POC.
- In den Dockerfiles wurde der Maintainer von André auf tinc (The Infrastructure Company GmbH) gesetzt

Wie immer gilt, der volle Changelog auch mit den einzelnen Commits ist für Interessenten jederzeit auf GitHub abrufbar:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-05a

---

Bitte sorgt bei eurem E-Mail Server **immer** für einen aktuellen Patchlevel!

Ansonsten gilt, was immer gilt:

Bleibt gesund und happy Mailing!

Euer mailcow Team
> Niklas aka. DerLinkman