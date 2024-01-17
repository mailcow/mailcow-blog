---
title: "🦾6️⃣4️⃣ 🐄 Janmuhary 2024 Update | Das Multiarch (x86 + ARM64) & Performance Update"
date: 2024-01-17T11:19:02+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2024", "update", "changelog", "ARM64", "major"]
categories: ["Updates"]

featuredImage: "/images/2024/January/release-arm64.jpg"
featuredImagePreview: "/images/2024/January/release-arm64.jpg"

---

**Moohoo** Alle zusammen!

Wir hoffen ihr hattet einen guten Start in das noch junge 2024. Wie bereits im vorfeld auf Social Media (X/Twitter: [@mailcow_email](https://x.com/mailcow_email), Mastodon: [@doncow@mailcow.social](https://mailcow.social/@doncow)) angekündigt erscheint heute endlich das lang ersehnte ARM64 bzw. Multiarch Update worauf wir langezeit mit höhen und tiefen hingearbeitet haben.

<!--more-->

Um die Frage direkt im vorfeld zu klären: Ändern tut sich für alle bestehenden mailcow Installationen nichts (zumindest nicht geplant). Dieses Update läuft ebenfalls wie alle bisherigen Updates ab ohne manuelle Anpassungen eurerseits. mailcow bleibt im Umfang genauso wie bisher auch, nur, dass wir ab heute auch eine neue Nutzerschaft willkommen heißen können: **die ARM64 User**.

Falls ihr neu dabei seid: "Hallo 👋, schön dass ihr hier seid!".

Und an alle die, die überlegen auf ARM64 zu switchen: "Danke, dass ihr neue und effizientere Techniken nutzt 😁".

Falls ihr euch fragt: "Gibt es irgendetwas zu beachten bei der Installation/Migration? auf die neue Plattform?" Außer die Dokumentation (wie in der Regel immer) zu lesen nicht! Denn dabei werdet ihr feststellen, dass sich die Installation von mailcow gar nicht verändert hat!

Aber genug der langen Rede, was hat sich denn nun alles geändert? Schauen wir doch mal:

{{< admonition type=warning title="Achtung">}}
**Bitte erstellt sicherheitshalber ein komplettes mailcow Backup bevor Ihr das Update durchführt!** <br>
Schäden können auch nach unzähligen erfolgreich abgeschlossenen Tests durch die Unterbau Änderungen **nicht** ausgeschlossen werden!!<br>
Es gilt: *Kein Backup, kein Mitleid*
{{< /admonition >}}

### Changelog

- mailcow ist nun ARM64 kompatibel:
    - Einige mailcow Unterbauten wurden umgebaut, um auf ARM64 und x86 parallel lauffähig zu sein, darunter Dovecot, SOGo, Rspamd, Clamd.
    - **ALLE** Docker Images (beginnend mit dem 2024-01 Update) sind nun für x86 und ARM64 (aarch64) verfügbar.
    - Die Migrations- und Backupskripte wurden angepasst um diskrepanzen bei den Architekturen zu erkennen und Maßnahmen zu ergreifen, welche beim Architekturwechsel zu einem Crash seitens mailcow führen könnten, sollten diese nicht beachtet werden (Rspamd Cashing Volume wird ausgelassen).

- Alle auf Alpine basierenden mailcow Komponenten wurden auf Alpine 3.19 aktualisiert. (Danke an @MAGICCC und @DerLinkman).

- Serverseitiges Processing für das Laden von den Domain- und Mailbox-Tabellen wurde eingefügt. mailcows mit vielen Domains und oder Mailboxen sollten nun deutlich responsiver sein in der Bedienung der Web-UI (Danke an @feldsam fürs Implementieren!).

- Für SOGo wurde eine Option standartmäßig aktiviert, welche Bilder aus Signaturen nicht nochmal extra als Anhang anhängt, was bisher der Fall war. (Danke an den mittlerweile gelöschten User (auf GitHub)).

- Die Postscreen Access List wurde aktualisiert (Stand 01.01.2024)

- Einige Übersetzungen wurden überarbeitet.

---

Ich erinnere gerne nochmal daran, euch einen riesen gefallen zu tun und einfach mal ein Backup vor dem Update zu machen. Zwar haben wir natürlich ausgiebig die ganzen Änderungen getestet aber es kann natürlich gerade bei stark angepassten Installationen zu Fehlern kommen. Haltet das einfach im Hinterkopf :)

Ansonsten wie immer ein riesiges Dankeschön an unsere großartige mailcow-Community für eure anhaltende Unterstützung und euer wertvolles Feedback.

Wir werden uns spätestens im Februar wieder sehen zu einem neuen Update. Ob es das LDAP Update im Februar wird steht noch nicht fest, wir halten euch da natürlich auf dem laufenden.

Anonsten bleibt gesund und frohes Mailing.

Euer mailcow-Team
> Niklas

*Bild von <a href="https://pixabay.com/de/users/bbaaer-1679131/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1799310">Samuel</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1799310">Pixabay</a>*