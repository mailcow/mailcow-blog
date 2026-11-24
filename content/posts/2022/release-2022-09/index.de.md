---
title: "🍂🐄 Mootember Update 2022 - Quarantäne & Swagger UI Fix Update - Revision A | Änderungen"
date: 2022-09-30T10:30:10+02:00
draft: false

author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["Security", "Bugfix"]
categories: ["Updates"]
---

### 2022-09a (Release: 30.09.2022)
Änderungen:

+ Das Twig Template System auf welches mailcow baut wurde auf Version 3.4.3 aktualisiert und schließt damit [CVE-2022-39261](https://github.com/advisories/GHSA-52m2-vc4m-jj33).<br>
**Achtung: Diese CVE ist nicht kritisch für alle mailcow Users sondern dient lediglich der aktualität der Pakete**

<!--more-->

---

### 2022-09 (Release: 27.09.2022)

**Moohoo zusammen!**

Das offizielle September Update ist da und bringt dieses Mal leider nur ein kleines Update mit, welches aber trotzdem nicht zu unterschätzen ist.

Es wurde eine Sicherheitslücke in mailcow geschlossen. Mehr dazu hier in dem Artikel.

### Stabile Änderungen (stable Branch)

* GitHub Workflows security hardening von [@sashashura](https://github.com/sashashura) in https://github.com/mailcow/mailcow-dockerized/pull/4761
* Kleiner Schreibfehler im Update.sh Skript behoben von [@mindsolve](https://github.com/mindsolve) in https://github.com/mailcow/mailcow-dockerized/pull/4762
* Update quarantine_notify.py charset (Fixt die Quarantäne Nachrichten endlich wieder) von [@MAGICCC](https://github.com/MAGICCC) in https://github.com/mailcow/mailcow-dockerized/pull/4758 (Dies behebt https://github.com/mailcow/mailcow-dockerized/issues/4743)
* Übersetzungen (Türkisch) von der Weblate Community in https://github.com/mailcow/mailcow-dockerized/pull/4765
* Swagger Version wurde aktualisiert von [@ntimo](https://github.com/ntimo) in https://github.com/mailcow/mailcow-dockerized/pull/4763
* Senden-Als Verhalten verbessert von [@macwinnie](https://github.com/macwinnie) in https://github.com/mailcow/mailcow-dockerized/pull/4703

### Sicherheitslücke in Swagger UI

Kommen wir, bevor wir über die Nightly Updates reden, noch kurz zu der Swagger Sicherheitslücke.

Diese erlaubte es, ein Script über den Aufruf der URL zur Swagger API zu laden, welches die Seite so bspw. in ein Kreditkartenphishing Portal umwandelt.

Wir haben dazu ein CVE Fall aufgemacht: **CVE-2022-39258**

Auf GitHub könnt ihr die genaueren Hintergründe (allerdings nur auf Englisch, sorry dafür) lesen: https://github.com/mailcow/mailcow-dockerized/security/advisories/GHSA-vjgf-cp5p-wm45

Bevor jetzt aber die blanke Panik ausbricht von den bisherigen Sicherheitslücken, ist diese die Harmloseste.

Wir raten natürlich (wie immer) zu einem baldigen Update!

### Nightly Änderungen (Bootstrap 5 Update)

So, kommen wir nun zu den Nightly Updates, welche sich voll auf das Bootstrap 5 Update fokussieren:

* [NEU] Die Sieve ACL kann nun über die Massenaktionen in der mailcow UI umgeschaltet werden.
* [NEU] Ladeanimation für die Diagramme hinzugefügt.
* [NEU] Auf dem Dashboard werden nun die öffentlichen IP Adressen des Servers angezeigt (wird mithilfe von dig im Container bezogen).
* [FIX] Einige Layout korrekturen wurden vorgenommen (Vorallem Farben wurden angepasst).

Wie einige von euch eventuell daraus geschlossen haben, hören wir auf euer Feedback zum Bootstrap 5 Update. Wir sammeln dazu noch immer fleißig Feedback.

Entweder hier auf [GitHub](https://github.com/mailcow/mailcow-dockerized/discussions/4734), auf [Telegram](https://t.me/mailcow), im [Forum](https://community.mailcow.email/d/1914-feedback-auf-bootstrap-5-ui-update-gesucht) oder einfach per Mail an info@mailcow.email.

**Bedenkt: Die genannten Bootstrap 5 Änderungen betreffen (vorerst) nur die Nightly Builds.**

Lernt hier, wie auch Ihr Nightly Builds beziehen könnt: https://docs.mailcow.email/de/i_u_m/i_u_m_update/#neu-nightly-updates-beziehen oder nutzt die neue [Nightly Demo](https://nightly-demo.mailcow.email). 

Weitere Informationen sowie die Login Daten zur Demo findet ihr hier: https://docs.mailcow.email/de/#demos

---

Das wär es auch soweit.

Bis dahin, bleibt gesund und einen frohen #Hacktober

**Euer mailcow Team** <br>
*Niklas*