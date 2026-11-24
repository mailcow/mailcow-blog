---
title: "💪🐮6️⃣4️⃣ mailcow: dockerized (ARM64) ist nun im Nightly Branch erhältlich (Offene Beta)"
date: 2023-08-04T08:00:00+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["ARM64", "Nightly"]
categories: ["News"]

---

**Moohoo zusammen!**

Nein ihr träumt nicht, ja ihr seid wach und nein das ist kein Witz:

mailcow's ARM64 Unterstützung kann jetzt im Nightly als **BETA** getestet werden!

<!--more-->

> *Wow, das kam ja schneller als erwartet*

In der Tat! Denn lustigerweise einen Tag nach unserem letzten Blogpost zu diesem Thema wurde endlich der **ominöse** Bug in Rspamd gefixt und zack: Schon ist ARM64 am Start!

Sogar das Problem mit Dovecot und der Selbstkompilierung ist gelöst, danke an das Alpine Linux Project. Gut, wir haben es schon an einigen Stellen in mailcow verwendet, aber jetzt noch an einer Stelle mehr!

---

Ok, genug der Euphorie, kommen wir zur Praxis:

### Wie installiere ich mailcow für ARM64?
Die Installation der **BETA** (ich wiederhole das hier einfach nochmal) ist denkbar einfach:

1. Docker/Docker Compose, Git etc. wie gewohnt installieren (Abhängigkeiten)
2. mailcow klonen (wie üblich)
3. generate_config.sh ausführen und unter Branch "nightly" auswählen.
4. Docker images ziehen
5. mailcow starten (mit docker compose up -d)
6. Kurz warten
7. Einloggen und mailcow wie gewohnt benutzen!

Soweit der Plan. Allerdings möchte ich an dieser Stelle noch einmal darauf hinweisen, dass sich die ARM64-Unterstützung derzeit noch in der **BETA** befindet und es noch zu Bugs oder Abstürzen kommen kann.

Ebenso ist es möglich, dass nach einem Update (innerhalb Nightly) die E-Mail Daten nicht mehr funktionieren bzw. korrupt sind. Denn auch wenn sich auf den ersten Blick nicht viel getan zu haben scheint, ist die Multi Architektur nicht ohne mögliche Fehler.

Diese sind in unseren Versuchen zwar nie aufgetreten, wir wollen und können sie aber nicht völlig ausschließen.

*Haftungsausschluss: Das mailcow-Team übernimmt keine Haftung für Datenverluste. Die ARM64 Funktionalität befindet sich noch in der Entwicklung.

Bitte achtet beim Einspielen der Backups eurer x86 mailcow auf Rspamd Daten. Lasst diese am besten weg, da sie nicht Cross Arch kompatibel sind!

---

### Roadmap für die Vollversion
Endlich können mehr Leute (die Lust haben) mailcow auf ARM64 Geräten testen.

Das hilft auch uns sehr, da wir natürlich nicht alle Szenarien testen können und so auf Feedback aus der Community reagieren können.

Deshalb hier der Aufruf: Meldet uns Probleme! Nur so können wir diese beheben und das gesamte Produkt verbessern.

Egal ob per Mail, auf GitHub oder per Telegram: Feedback ist willkommen!

Denn so sieht die aktuelle Roadmap für den ARM64 Support aus:

Nachdem wir uns das Feedback der Community angehört und verarbeitet haben, werden wir damit beginnen, die ARM64-Kompatibilität in den normalen Masterbranch zu integrieren (für alle verfügbar zu machen).

Bis dahin gibt es aber noch einige andere Dinge rund um die ARM64 Einführung zu erledigen, wie z.B. Dokumentation oder die Umstellung der Issue Templates auf GitHub etc.

Das Ganze wird ab jetzt Stück für Stück passieren und immer weiter voranschreiten.

Also bitte nicht wundern, wenn zum Start der Open Beta noch nicht alles auf die Multiarchitektur umgestellt ist (Dokumentation z.B.).

Wir werden euch natürlich auf dem Laufenden halten, also bleibt dran!

Wer noch auf der Suche nach ARM64 Servern ist, dem können wir die Server von Hetzner wärmstens empfehlen. (Keine Werbung! Wir haben unsere Tests auf selbst bezahlten Hetzner ARM64 Cloud Servern durchgeführt).

---

Gut, dann hätten wir das. Sonst noch was? Lasst mich überlegen... äh... erstmal nicht.

Bleibt wie immer gesund, habt Spaß an der IT und genießt die Zeit.

**Euer mailcow Team**
> *Niklas* bzw. *DerLinkman*