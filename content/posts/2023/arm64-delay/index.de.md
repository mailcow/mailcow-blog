---
title: "💪🐮6️⃣4️⃣ mailcow: dockerized (ARM64) Entwicklung stagniert. Wird nicht mehr stabil 2023 erscheinen"
date: 2023-10-13T08:00:00+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["ARM64"]
categories: ["News"]

---

**Moohoo zusammen!**

Wir melden uns einmal wieder mit neuen Informationen zu dem aktuellen ARM64 Thema.

Leider sind das keine guten, wie Ihr vielleicht schon aus der Überschrift entnehmen könnt...

<!--more-->

Nach der anfänglichen Euphorie zum Auftakt der ARM64 Nightly Releases, kehrt nun die bittere Realität ein: So kompatibel wie ursprünglich gedacht ist das alles leider nicht.

### Was ist passiert?

Nun, nachdem wir die Nightly Releases zu ARM64 released haben ist uns etwas mit der Migration von alten Mails aufgefallen: Sie können trotz dem selben Crypt Key **NICHT** entschlüsselt werden.
Das ist erst nicht aufgefallen, da wir unsere Tests mit der Migration von alten E-Mails im Mai bereits erfolgreich testeten, nur konnte da noch keiner Ahnen, dass sich in der Zwischenzeit einiges an den Paketen im Betriebssystem ändern würde.

### Wo hakt es?

Wir tippen auf die Umstellung von OpenSSL 1.1.1X auf OpenSSL 3.X, welche auch in der Zwischenzeit veröffentlichten Debian 12 und Alpine 3.17+ mittlerweile enthalten ist, denn diese war damals nicht in unseren Tests drin, weshalb das auch damals klappte.

Nur sind wir uns in dieser These nicht zu 100% sicher. Es wäre jedoch die einzigste logische Erklärung, da der Rest exakt identisch geblieben ist.

Ja, selbst der Private Key, welcher zum Verschlüsseln benutzt wird ist exakt der selbe, permissions, users ebenso.

Das Kuriose ist nämlich auch: Neue Mails, welche Dovecot mit OpenSSL 3.X empfängt kann er ohne Probleme ver-/entschlüsseln mit dem Key...

### Ein Problem was auch x86 betreffen kann in Zukunft

Wir müssen dafür eine Lösung finden, die für alle Seiten angenehm ist und im Idealfall keinen weiteren Input von euch den Nutzern benötigt, denn genau das selbe Problem wird uns auch auf x86 auf die Füße fallen.

Denn aktuell nutzt mailcow noch Debian 11 als Basis Images für Dovecot. Und, wir erinnern uns, Debian 11 hat noch OpenSSL 1.1.1X, wo es ja auch alles super mit klappt. Debian 12 hat OpenSSL 3.X... klingelt bei euch etwas? Korrekt, wir haben dort (bereits Nachstellbar) das selbe Problem. An der Architektur liegt es also nicht (immerhin eine gute Nachricht...) aber das wird in Zukunft definitiv Thema werden.

Wir sind aktuell noch in der tieferen Analyse zu dem Thema OpenSSL 3.X und dem Crypt Key Dilema von Dovecot, weswegen wir mit ziemlicher Sicherheit sagen können:

**armcow64 kommt nicht mehr 2023 stabil raus**

Glaubt mir eines: Ich hasse es diese Ankündigung machen zu müssen, aber wir wollen euch natürlich nicht im Regen stehen lassen zu dem Thema, da einige gefragt haben.

Der ARM64 Support bleibt aber nach wie vor im Nightly, sprich weiteres Testen ist natürlich weiterhin möglich.

Und natürlich schauen wir uns auch weiter zu diesem Problem um, um Lösungen zu finden die für alle Seiten gut sind.

---

Danke, dass ihr den ARM64 Support bis hierher so gut aufgenommen habt.

Wir bedauern alle zu tiefst diese Ankündigung hier machen zu müssen.

Ansonsten gilt das, was auch immer gilt: Happy Mailing und bleibt Gesund!

**Euer mailcow Team**
> *Niklas* bzw. *DerLinkman*