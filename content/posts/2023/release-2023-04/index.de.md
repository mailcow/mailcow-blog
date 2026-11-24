---
title: "🥚🐄 Moopril Update 2023 - SOGo 5.8.2, Rspamd 3.5 und mehr | Revision A"
date: 2023-04-03T09:30:10+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["Rspamd", "SOGo"]
categories: ["Updates"]

featuredImage: "/images/2023/April/netfilter_incremental_de.png"
featuredImagePreview: "/images/2023/April/netfilter_incremental_de.png"

---

### Update 2023-04a

Wir haben gerade einen Hotfix für das 2023-04 Update veröffentlicht.

Es löst das Problem mit Nextcloud, welches sich nicht auf Version 26 Updaten ließ, da Version 25 kein PHP 8.2 kann, 26 allerdings schon.

---

### Update 2023-04

**Moohoo zusammen!**

Es geht weiter mit unseren Updates für mailcow, diesmal hauptsächlich zum Beitrag der generellen Stabilität und Usability des Stacks.

Legen wir los:

- SOGo wurde auf Version 5.8.2 aktualisiert. Einige dürften einen Fehler von macOS Ventura und CalDav mitbekommen haben, dieser führte dazu, dass die Kalendar App von macOS keine SOGo Kalender entdecken konnte und darauf hin einfach probierte neue Kalender mit dem Namen am Remote Server anzulegen (was natürlich fehlschlug, da der Kalender ja bereits existierte).
Des Weiteren sollten in dem Update auf 5.8.2 noch weitere Probleme behoben worden sein, einen vollständigen Changelog von SOGo findet ihr hier: https://github.com/Alinto/sogo/releases/tag/SOGo-5.8.1 & https://github.com/Alinto/sogo/releases/tag/SOGo-5.8.2
- Rspamd wurde auf Version 3.5 aktualisiert. Einen Vollständigen Changelog von Rspamd selbst findet ihr hier: https://github.com/rspamd/rspamd/releases/tag/3.5
- Der mailcow Netfilter wurde um eine exponentielle Ban Zeit Funktion erweitert. D.h. gebannte IPs/Subnetze können (auf Wunsch) nun exponentiell verlängern. So werden vermeintliche Angreifer länger ausgesperrt ehe Sie es erneut probieren können.
- Der Vmail Index löscht sich nun auch, sobald eine Mailbox final gelöscht wurde vom mailcow Server, dies war vorher nicht so.
- PHP wurde auf Version 8.2 aktualisiert.
- Nextcloud (in mailcow) wurde auf Version 26 angehoben.
- Für Nextcloud gab es noch eine anpassung in der nextcloud.conf des NGINX Server, um den Sicherheitsanforderungen von Nextcloud gerecht zu werden.
- Es wurden einige kleinere Broken Pipe Fehler in den Skripten von mailcow entfernt, diese traten auf, wenn der Urandom Befehl (zum Passwort generieren) unsauber abgebrochen wurde, bzw. die Meldung nicht versteckt wurde.
- Diverse weitere Optimierungen.

---

Wie immer gilt, der volle Changelog auch mit den einzelnen Commits ist für Interessenten jederzeit auf GitHub abrufbar:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-04

Ansonsten gilt das, was sonst auch immer gilt:

Bleibt gesund und happy Mailing!

Euer mailcow Team
> Niklas aka. DerLinkman