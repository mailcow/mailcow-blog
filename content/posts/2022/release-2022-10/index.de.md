---
title: "🌰🐄 Muhktober Update 2022 - Übersetzungs Überarbeitung + Multithreaded Backup/Restore Skript Update"
date: 2022-10-25T10:30:10+02:00
draft: false

author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2022", "update", "changelog"]
categories: ["Updates"]
---

**Moohoo zusammen!**

Wir bewegen uns in großen Schritten Richtung Jahresende und obwohl das Bootstrap 5 UI Update noch etwas länger auf sich warten lässt (Danke für eure Geduld übrigens!) gibt es auch heute wieder ein kleineres aber feines mailcow Update für euch.

<!--more-->

### Stabile Änderungen (stable Branch)

+ Der nervige Netfilter Bug, welcher dafür sorgte, dass unendlich SNAT Regeln angelegt werden wurde gefixt. Danke an [@mnin](https://github.com/mnin) siehe PR: [#4724](https://github.com/mailcow/mailcow-dockerized/pull/4724)
+ Die mailcow spricht nun fließend Chinesisch! Im selben Atemzug wurden die Sprachdateien angepasst, so dass Sie der ISO Norm 639-1 entsprechen. Für euch ändern wird sich aber nichts, da alle bisherigen Übersetzungen erhalten bleiben. Danke an [@tomy0000000](https://github.com/tomy0000000) siehe PR: [#4657](https://github.com/mailcow/mailcow-dockerized/pull/4657)
+ Redis wurde auf Version 7 aktualisiert. Danke an [@ethrgeist](https://github.com/ethrgeist) siehe PR: [#4815](https://github.com/mailcow/mailcow-dockerized/pull/4815)
+ Rspamd wurde auf Version 3.3.2 aktualisiert. Danke an [@DerLinkman](https://github.com/DerLinkman) siehe PR: [#4816](https://github.com/mailcow/mailcow-dockerized/pull/4816)
+ Das Backup/Restore Skript unterstützt nun auch Multithreading. Weitere Informationen entnehmt ihr bitte den [Docs](https://docs.mailcow.email). Danke an [@DerLinkman](https://github.com/DerLinkman) siehe PR: [#4806](https://github.com/mailcow/mailcow-dockerized/pull/4806)

### Nightly Änderungen (Bootstrap 5 Update)

Die Nightly Updates enthalten auch alle oben genannten Funktionen. Die speziellen Nightly Änderungen beziehen sich primär auf das anstehende Bootstrap 5 Update:

* [**NEU**] Der "Vorherige Seite" Knopf der Unterseiten ist jetzt ebenfalls oben platziert (als nur unten)
* [**NEU**] Es gibt nun in den Aktions Dropdowns einen "Alle Ein/ausklappen" Button, welcher die Tabellen in dem jeweiligen Fenster ein/ausklappt (besonders für Mobile interessant)
* [**ÄNDERUNG**] Der Hauptmenüpunkt "E-Mail Konfiguration", sowie der darunter liegende (gleichnamige) Punkt wurden umbennant um dopplungen der Namen zu vermeiden.
* [**NEU**] Die Position der Mail Queue hat sich geändert. Sie befindet sich nun im Dropdown unter dem umbenannten Punkt "E-Mail" (direkt unter Quarantäne).
* [**FIX**] Das generelle Verhalten der einzelnen Tabellen wurde optimiert.

Das Bootstrap 5 Update hat mittlerweile ein ETA. Wir peilen (spätestens) das 2022-12 Update an, wie einige auf Twitter bereits richtig gesagt hatten quasi als Weihnachtsgeschenk. Bis dahin sammeln wir dazu noch immer fleißig Feedback um das UI noch weiter zu optimieren.

Reicht Feedback entweder auf [GitHub](https://github.com/mailcow/mailcow-dockerized/discussions/4734), auf [Telegram](https://t.me/mailcow), im [Forum](https://community.mailcow.email/d/1914-feedback-auf-bootstrap-5-ui-update-gesucht) oder einfach per Mail an info@mailcow.email ein.

**Bedenkt: Die genannten Bootstrap 5 Änderungen betreffen (vorerst) nur die Nightly Builds.**

Lernt hier, wie auch Ihr Nightly Builds beziehen könnt: https://docs.mailcow.email/de/i_u_m/i_u_m_update/#neu-nightly-updates-beziehen oder nutzt die neue [Nightly Demo](https://nightly-demo.mailcow.email). 

Weitere Informationen sowie die Login Daten zur Demo findet ihr hier: https://docs.mailcow.email/de/#demos

---

Das wär es auch soweit.

Bis dahin, bleibt gesund und bis zum nächsten Update.

**Euer mailcow Team** <br>
*Niklas*