---
title: "💪🐮 armcow64: dockerized (mailcow on ARM64) kommt"
date: 2023-05-08T08:00:00+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2023", "ARM64"]
categories: ["News"]

featuredImage: "/images/2023/May/arm64_announcement.jpg"
featuredImagePreview: "/images/2023/May/arm64_announcement.jpg"

---

**Moohoo zusammen!**

Der aufkommende Hype zu ARM64 hat auch das mailcow Team nicht kaltgelassen und so ist es mir dementsprechend eine Freude zu sagen:

**mailcow bekommt eine ARM64 Unterstützung**

<!--more-->

Natürlich fragen sich jetzt (zurecht) einige: "Ist ja alles schön und gut aber wie sieht das mit der Kompatibilität zur normalen x86 mailcow aus?"

Die bisherigen Tests zeigen: Es bleibt alles so wie es ist (und es wird sich auch nichts dran rütteln). Sowohl die mailcow Konfigurationen als auch die mailcow Daten *sollten* kompatibel sein zu der ARM64 Version.

Das bedeutet, dass auch eine Migration von x86 auf ARM64 möglich ist.

### Eigenes Repository oder doch nativ im Hauptrepository?
Wir können aktuell davon ausgehen, dass mailcow on ARM64 (oder armcow64: dockerized, sucht euch was aus) ohne Probleme im Hauptrepository auf GitHub koexistieren kann und beide Versionen dasselbe Patchlevel verwenden werden.

Dies würde bedeuten, dass lediglich die jeweiligen Images (ab dem Launch der ARM64 Variante, nicht rückwirkend) darüber entscheiden, welche Plattform benutzt werden kann und welche nicht.

An den eigentlichen Systemanforderungen (siehe Docs) wird sich aber erstmal nichts ändern, da nach wie vor mailcow nicht auf kleinen bzw. Geräten unter 4 GB RAM ausgeführt werden sollte.

---

Viel bla bla wieder aber wann kommt ARM64 Support für mailcow denn nun?

Auch hier werden wir wieder die Nightly Testphase benutzen, um generelles Feedback der Community zu sammeln, damit das Feature so gut wie möglich zum offiziellen Release erscheint.

Ein genaues Release Datum steht aktuell noch nicht fest, seit aber gewiss, dass es so lange nicht mehr dauern wird. Wenn wir gründlich Testen rechne ich mit einem Release im Q3 2023 für alle.

Aber das kann sich noch ändern (sowohl positiv als auch negativ). Ich hoffe, Ihr habt da Verständnis für.

Danke für eure Zeit!

*P.S: Die ARM64 Kompatibilität scheint mehr Aufmerksamkeit zu erregen als ursprünglich gedacht! Finden wir super! Danke an alle, die darüber berichten oder sich einfach darauf freuen!*

**Euer mailcow Team** <br>
> *Niklas* bzw. *DerLinkman*