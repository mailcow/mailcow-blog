---
title: "🎃🐄 Mooktober 2023 Update | Domainwide Footer, cURL Fixes und mehr - Revision A"
date: 2023-10-12T11:11:32+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: []
categories: ["Updates"]

---

## 2023-10a (Veröffentlicht am 12. Oktober 2023)

### Changelog
+ Wir haben das falsch verwendete clamav-Tag in der docker-compose.yml korrigiert. Jetzt verwendet ihr wirklich ClamAV 1.0.3 LTS!
+ Wir haben die Neustart-Aktion aus dem Abschnitt `depends_on` (verbunden mit der unbound Healthcheck-Logik) aus der docker-compose.yml entfernt. Ältere Versionen von Docker Compose v2 waren nicht in der Lage, den Stack mit diesen Einstellungen zu starten. (Bitte haltet eure Systeme auf dem neuesten Stand!!!!)

---

## 2023-10 (Veröffentlicht am 12. Oktober 2023)

**~~Moo~~Boo hoo zusammen!**

Es ist wieder Gruselsaison und wir hoffen, dass ihr alle bereit seid, die Halloween-Saison zu feiern.

Aber mailcow liefert euch auch einiges an süßes (saures kann seperat "erworben" werden und ist nicht in diesem Update enthalten), was den Stack betrifft.

Dieses Mal ziemlich umfangreich!

<!--more-->

Von UI-Verbesserungen (vor allem für alle Darkmode-Fans wie mich) über domainweite Footer bis hin zu allgemeinen Verbesserungen und Fixes rund um den gesamten Stack haben wir einiges mitgebracht.

Also lasst uns beginnen oder?

### Changelog

- Eine Menge UI-Verbesserungen wurden hinzugefügt:
  + Ihr könnt jetzt zwei UI-Logos hochladen (eins für den Light- und eins für den Darkmode).
  + Verbesserungen im Darkmode (Farbverbesserungen im UI).
  + Styling-Verbesserungen im Allgemeinen.
  + Bessere mobile Ansicht der mailcow UI.
  + Ihr könnt nun die meisten Tabellen (Mailboxen, Domains, Aliase etc.) nach Domains filtern, um eine bessere Übersicht zu erhalten.
- Innerhalb der mailcow UI gibt es eine neue Option zur Verwendung eines domainweiten Footers. Sie kann verwendet werden, um eine Signatur unter alle E-Mails zu setzen, die von einer bestimmten E-Mail-Domain gesendet werden.
- Die main.cf (von Postfix) wird nun korrekt aktualisiert, sobald Ihr einige Optionen mit der `$myhostname` Variable hinzufügt. Zuvor wurden sie entfernt, was nicht der Fall sein sollte.
- Wir haben die hohe Last des dockerapi Containers behoben, die mit 2023-08 eingeführt wurde.
- Der X-Moo Tag (der bei der Verwendung von Subadressen hinzugefügt wird) wird nun nur noch dann hinzugefügt, wenn es wirklich notwendig ist, dies war ein kleines unkritisches Sicherheitsproblem.
- Die generate_config.sh checkt nun korrekt den gewünschten Git-Zweig aus, was vorher nicht der Fall war.
- http2 wurde aus den Listen-Optionen von Nginx entfernt, um die Meldung über die "Deprecation" beim Start von NGINX zu entfernen.
- Wir haben die Hash-Bucket-Größe von 64 auf 512 erhöht, da einige Domain-Namen beim Start von NGINX mit der vorherigen Einstellung zu einem Absturz geführt hätten.
- Es wurde eine verbesserte FQDN-Prüfung während der generate_config- und update.sh-Prozesse implementiert.
- ClamAV wurde auf LTS 1.0.3 aktualisiert.
- Wir haben ein Problem mit ACLs bei der Erstellung von Domänen/Postfächern behoben, welches mailcow veranlasste, den Fallback-Wert des SQL-Schemas für die ACLs zu setzen, wenn keine ACLs explizit gesetzt wurden.
- Dovecot wurde auf 2.3.21 aktualisiert.
- Wir haben alle Container-Images, die cURL enthalten, aktualisiert, um die Sicherheitsprobleme mit den cURL-Versionen vor Version 8.4.0 zu beheben.
- Es wurde ein Unbound Healthcheck beim Start von Compose hinzugefügt. Dieser wartet darauf, dass Unbound voll funktionsfähig ist, bevor er Container startet, die DNS-Auflösungen benötigen (Postfix, ClamAV, acme).
- EAS-Bodys sind nun durchsuchbar. Diese Option wurde in SOGo aktiviert. Sie wird von uns als **experimentelles** Feature deklariert und eventuell wieder entfernt, wenn sie mehr Ärger als Spaß macht.
- Aktualisierungen einiger interner PHP-FPM Komponenten.

Puh, das war VIEL, aber wir sind fertig für dieses Update.

Wie immer: Das vollständige Changelog, einschließlich der einzelnen Commits, ist für Interessierte jederzeit auf GitHub verfügbar:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-10

---

Wie immer ein riesiges Dankeschön an unsere großartige mailcow-Community für eure anhaltende Unterstützung und euer wertvolles Feedback.

Bleibt gesund, fröhliches Mailing und eine tolle Spooktober-Saison!

Euer mailcow-Team