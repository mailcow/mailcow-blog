---
title: "🌕🐄 Mooni Update 2022 - Das Docker Compose v2 Update (Teil I) | Änderungen"
date: 2022-06-07T12:07:10+02:00
draft: false

author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2022", "update", "changelog", "bugfix"]
categories: ["Updates"]
---

**Moohoo zusammen!**

Heute haben wir für euch wieder ein dickes fettes Update Paket zusammengestellt, welches neben generellen Container Updates eine große Änderung mit sich bringt:

**Docker Compose v2 Unterstützung!!!**

Doch fangen wir erstmal mit dem kleinkram an:

### Kleinere Änderungen

- ClamAV nutzt nun Version 0.105 (die neuste zum Release Zeitpunkt).
- Postfix wurde auf Version 3.5.6 geupdated.
- netfilter, acme, dockerapi, olefy, watchdog, unbound und phpfpm wurden auf Alpine Linux 3.16 geupdated.

### Größere Änderungen
- Wie versprochen kommt mit dem 2022-06 Update ein kleines aber feines UI Update, welches die generelle UI Performance verbessert. *Hinweis: Die Spürbarkeit der Verbesserungen kann je nach Mailbox/Domain Anzahl variieren.*
- Die mailcow unterstützt absofort Docker Compose v2! Näheres kommt jetzt:

### Docker Compose v2 (endlich)
Jap, richtig gelesen endlich ist die mailcow auch mit Docker Compose v2 kompatibel! Doch warum jetzt Docker Compose v2? Werden sich sicherlich einige von euch fragen.
Nun die Sache ist ziemlich einfach und schnell erklärt: "Docker Compose v1 alt (deprecated), Docker Compose v2 neu (von Docker selbst gepflegt)".

Die Installation von Compose v2 kann anhand der abgeänderten Dokumentation ([klicke hier](https://mailcow.github.io/mailcow-dockerized-docs/de/i_u_m/i_u_m_install/)) entnommen werden.

Docker Compose v1 verliert seinen offiziellen Support seitens Docker im Oktober 2022, die mailcow hingegen unterstützt Compose v1 jedoch noch bis Dezember 2022 (dem 2022-12 Update). 
> *Deswegen auch Compose v2 Part 1 Update, aber psst*

Ab Dezember ist dann ein Update auf Compose v2 **zwingend erforderlich**, solltet ihr mailcow weiter nutzen wollen.

Sonst noch was? Ach ja! Beim Thema IPv6 gibt es auch eine wichtige Änderung, nämlich wird ab sofort (bis Dezember) das Webinterface standardmäßig nur noch über IPv4 erreichbar sein.
Aber keine Sorge, mit Hilfe der [Anleitung](https://mailcow.github.io/mailcow-dockerized-docs/de/post_installation/firststeps-ip_bindings/#ipv6-binding) könnt ihr die Erreichbarkeit wieder herstellen. 

Warum das so gemacht werden muss und nicht (wie alles andere) Plug and Play mäßig weiterhin funktioniert? Nun recht simpel: Die beiden Compose Versionen interpretieren die docker-compose.yml teilweise etwas anders. Eigentlich ist alles beim alten geblieben und das funktioniert auch wunderbar, jedoch mit dem genannten IPv6 Binding gab es leider Probleme diese Option im Dual Support aufrecht zu erhalten. **Ab Dezember 2022 wird die IPv6 Konnektivität dann wieder standardmäßig aktiviert (wie bisher).**

> Wie viel Text wollt ihr schreiben? <br>
> Antwort: Ja

---

Ok das war es dann aber auch diesmal.

Wenn ihr den [kompletten Changelog](https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-06) lesen wollt könnt ihr das (wie immer) gerne auf GitHub machen.

Bleibt gesund.

**Euer mailcow Team** <br>
*Niklas*