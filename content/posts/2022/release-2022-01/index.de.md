---
title: "📰🐄 Jan(moo)uary Update 2022 - Das U2F --> WebAuthn (2FA) Update | Änderungen"
date: 2022-01-21T14:55:47+01:00
draft: false

author: "Niklas Meyer"
description: "Patchnotes für das Januar 2022 Update"
  
categories: ["Updates"]
tags: ["2022", "update", "änderungen"]
---

**Moohoo** an alle, Niklas hier mit dem neuesten Changelog für unsere geliebte mailcow E-Mail-Software!

Diesen Monat gibt es einen großen Brocken an Änderungen, einige davon sogar sehr wichtig in Bezug auf 2FA, aber dazu später mehr.

Zuallererst möchten wir uns bei euch für eure Treue und Zusammenarbeit bedanken, denn ohne euch wäre das mailcow-Projekt nicht da, wo es jetzt ist ❤️.

Wir möchten uns auch dafür entschuldigen, dass wir erst jetzt ein neues Update veröffentlichen (Master-Branch-Release), denn einige der in diesem Update enthaltenen Fehlerbehebungen (SOGo z.B. mit dem ausgegrauten Speichern-Button in den Weiterleitungen oder der Olefy-Ping-Fix, der einen Konsolen-Spam behebt) sollten eigentlich schon behoben sein... Wir versprechen an dieser Stelle Besserung!

Ihr denkt wahrscheinlich schon: "Kürzer bitte?"... ist schon gut! Hier sind die Änderungen (in Kurzform!)

---
#### Sehr wichtige Änderungen:
Mit dem Update im Januar 2022 wird die bisher verwendete **U2F API (für die 2-Faktor-Authentifizierung)** durch die neuere **WebAuthn API** ersetzt.

**Was bedeutet das für Euch?**
Nun, wenn ihr bereits einen FIDO2-Sicherheitsschlüssel als 2FA über U2F registriert habt und das Update anwendet, werdet Ihr mit einer Meldung begrüßt, die besagt, dass der FIDO2-Schlüssel noch über U2F läuft und daher als 2FA aus dem Konto entfernt wird. **Aber keine Sorge!** Sobald Ihr wieder in der Admin Oberläche seit, könnt Ihr denselben Schlüssel einfach erneut registrieren, aber diesmal als WebAuthn (nicht U2F).

Der Vorgang ist derselbe, sogar die Position der Schaltfläche zum Starten der Registrierung ist die gleiche, so dass Ihr in der Lage sein solltet, den Schlüssel ohne Probleme einrichten und verwenden zu können.

Vielen Dank an **@FreddleSpl0it** für die Implementierung!

[In unserer Dokumentation finden Sie genauere Informationen dazu](https://mailcow.github.io/mailcow-dockerized-docs/de/manual-guides/mailcow-UI/u_e-mailcow_ui-tfa/ "In unserer Dokumentation findet Ihr genauere Informationen dazu.")

#### Wichtige Änderungen:
- Sogo wurde auf Version 5.5.0 aktualisiert. Juhu, endlich keine ausgegrauten Schaltflächen mehr in den Untermenüs!
- Der log4j-Fix (in Solr) wurde nochmals verbessert. Auf Anraten des [Bundesamtes für Sicherheit in der Informationstechnik](https://www.bsi.bund.de/SharedDocs/Warnmeldungen/DE/CB/2022/01/warnmeldung_cb-k21-1264_update_20.html "Bundesamt für Sicherheit in der Informationstechnik") haben wir die betroffene log4j-Klasse entfernt. **Der Solr-Container war zu keinem Zeitpunkt aus dem Internet erreichbar**.
- Auf Anraten des [Bundesamtes für Sicherheit in der Informationstechnik](https://www.bsi.bund.de/SharedDocs/Warnmeldungen/DE/TW/2022/01/warnmeldung_tw-t22-0012.html) haben wir **ClamAV auf 0.103.5** aktualisiert, da es *anfällig für einen Denial of Service Angriff* war.
- Im Olefy-Container ist der lästige Ping-Fehler (Spam von Olefy in der Konsole) nun endlich behoben! Danke an **@16bitsysop** für den Fix! --> Fehlerbehebung [#4401](https://github.com/mailcow/mailcow-dockerized/issues/4401 "#4401")
- Durch das Update auf Alpine 3.15 oder höher hat der acme-Container den SSL-Ordner geändert (Auch schon sporadisch bei acme-mailcow 1:79), dies wurde von **@mkuron** behoben. Vielen Dank dafür. --> Behebung des Problems [#4392](https://github.com/mailcow/mailcow-dockerized/issues/4392 "#4392")
- Wir haben die Fehler in Bezug auf GeoIP und netfilter behoben (oder besser gesagt **@marcvorwerk**) --> Fehlerbehebung [#2668](https://github.com/mailcow/mailcow-dockerized/issues/2668 "#2668")

---

**Es gab noch viel mehr!** Aber das würde hier den Rahmen sprengen, werft einfach einen Blick auf den [Release](https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-01), dann seht ihr das ganze Ausmaß.

Nochmals vielen Dank an alle **Mitwirkenden und Spender**.

Im Namen des Servercow/mailcow/tinc-Teams wünschen wir Ihnen (wo auch immer Ihr seit) einen angenehmen Morgen, Mittag oder Abend und **bleibt gesund**!

