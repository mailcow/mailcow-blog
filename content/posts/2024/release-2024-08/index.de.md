---
title: "🕶️🐄 Moogust Update 2024 | Passwort vergessen?, SOGo 5.11, Rspamd 3.9.1 und mehr | Revision A"
date: 2024-08-15T14:30:00+02:00
draft: false

author: DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2024", "update", "changelog"]
categories: ["Updates"]

---

# 2024-08a (Released am 20.08.2024)

### Dovecot auf 2.3.21.1 aktualisiert
{{< admonition type=warning title="Achtung" open=true >}}
Dieser Release enthält Patches für Dovecot (Version 2.3.21.1), welche zwei Sicherheitslücken innerhalb von Dovecot schließen.

**Eine Installation wird dringend empfohlen!**

Siehe Release Notes Dovecot: [https://github.com/dovecot/core/blob/release-2.3.21/NEWS](https://github.com/dovecot/core/blob/release-2.3.21/NEWS)
{{< /admonition >}}

### Sonstige Änderungen
- Es wurden Fehler beim Parsen der Docker-Versionsnummer im `generate-config.sh` sowie im `update.sh`-Skript behoben.
- Einige Dockerfiles wurden refactored (hat keine Auswirkung auf den Betrieb, dient nur der zukünftigen Weiterentwicklung).
- Für Dovecot wurde eine Exit Condition eingebaut, die den Download von sa-rules betrifft. Bisher war es so, dass der Download erfolgreich sein musste, da Dovecot anderenfalls nicht startete. Nun ist es so, dass der Download nach einigen Versuchen abgebrochen wird, Dovecot aber trotzdem startet.
- In Docker-Containern, die das Tool `mysqladmin` verwendet haben, wurde auf das neuere Tool `mariadb-admin` mit derselben Funktion gewechselt, um zukünftige Kompatibilitätsprobleme vorzubeugen.
- In den Bash-Skripten werden einige Bash-Variablen nun korrekt behandelt (Quoting), und einige seltsame nicht-UTF-8-Zeichen wurden ersetzt.
- Durch das Rspamd-Update auf 3.9.1 wurde die UTF-8-Dekodierung in den Pushover- sowie den Quarantäne-Systemen beschädigt, was bei Emojis im Header zu unerwarteten Ergebnissen führen konnte. Dies wurde behoben.

---


# 2024-08 (Released am 15.08.2024)

**Moohoo** alle zusammen!

Der August ist da, und auch mailcow beschert euch ein größeres Update für den (hoffentlich bei euch nicht zu heißen) August.

Dieses Mal sind einige größere Änderungen mit an Bord, die wir euch hiermit vorstellen wollen:
<!--more-->

### Das „Passwort vergessen?“ Feature

In der Vergangenheit schon öfter angefragt, nun endlich da: Wir präsentieren das „Passwort vergessen?“ Feature.

Wir möchten uns an dieser Stelle nochmal herzlich bei der Jugendstiftung Baden-Württemberg bedanken, welche dieses Feature komplett gesponsert hat!

Mit dieser Funktion ist es den Nutzern (vorausgesetzt, die Admins haben die Berechtigung dafür nicht deaktiviert) möglich, sich für ihr Hauptpasswort (wichtig, kein App-Passwort!!) eine „Passwort vergessen“-E-Mail zuschicken zu lassen.

Um das Feature zu aktivieren, sind einige Vorkehrungen zu treffen, die ihr auf unserer dafür angefertigten Dokumentationsseite sehen könnt: [https://docs.mailcow.email/de/manual-guides/mailcow-UI/u_e-mailcow_ui-forgot_password/](https://docs.mailcow.email/de/manual-guides/mailcow-UI/u_e-mailcow_ui-forgot_password/)

### SOGo wurde auf 5.11.0 aktualisiert

Ihr liebt SOGo-Updates, das wissen wir :). Mit dem 2024-08 Update nimmt auch das neueste SOGo-Update (Stand 14.08.2024) 5.11.0 seinen Platz in SOGo ein. Für die, die es interessiert, hier der Changelog von SOGo: [https://github.com/Alinto/sogo/releases/tag/SOGo-5.11.0](https://github.com/Alinto/sogo/releases/tag/SOGo-5.11.0)

### Rspamd wurde auf 3.9.1 aktualisiert

Auch Rspamd erhält mit dem 2024-08 Update eine neue Version innerhalb von mailcow. Auf Anraten unseres Rspamd-Experten (Danke Drago!) haben wir mit dem Rspamd-Update auf Version 3.9.X gewartet. Warum? Nun, weil sich mit Version 3.9.0 der Speicherverbrauch der erlernten Bayes-Daten um ganze 350 % verringert hat (in etwa). Das bedeutet eine deutlich schmalere Redis DB für alle neuen Installationen! Für alle bestehenden mailcow-Installationen empfehlen wir dringend, die Bayes-Datenbank einmalig zurückzusetzen. Grund hierfür ist ein potenzielles Überlernen des Bayes-Filters, das nicht automatisch behoben wird. Auch wenn nicht-zentrale Tokens nach einer gewissen Zeit ablaufen, bleiben persistierte „Core Tokens“ bestehen, die das Modell weiterhin beeinflussen können.

Ein Zurücksetzen der Bayes-Datenbank hilft, mögliche Überlernungsprobleme zu vermeiden und stellt sicher, dass euer Spam-Filter optimal und ohne Verzerrungen arbeitet. Nach dem Zurücksetzen kann das Bayes-Modell frisch trainiert werden, um wieder präzise Spam-Erkennungen durchzuführen.

So geht’s: [https://docs.mailcow.email/de/manual-guides/Rspamd/u-e-rspamd-work-with-spamdata/#bayes-daten-zurucksetzen](https://docs.mailcow.email/de/manual-guides/Rspamd/u-e-rspamd-work-with-spamdata/#bayes-daten-zurucksetzen)

**Dieser Schritt ist nicht notwendig, sondern dient nur als Empfehlung!**

### mailcow setzt nun Docker ab Version 24.X.X mindestens voraus

Wie die Überschrift besagt, haben wir uns dazu entschieden, bei mailcow-Neuinstallationen zwingend mindestens Docker-Version 24.X.X vorauszusetzen und bei bestehenden mailcow-Versionen einen Hinweis einzubauen, wenn diese eine ältere Docker-Version als 24.X.X verwenden.

Dies hat technische Gründe für zukünftige Änderungen, die den Docker-Daemon evtl. betreffen könnten.

---

### Weitere Änderungen

- Der Watchdog escaped nun korrekt den Betreff und/oder den eigentlichen Inhalt.
- Automatisierte Installationen auf Low-Memory-Systemen sollten nun durchlaufen. Möglich macht dies die Übergabe der SKIP_SOLR- bzw. SKIP_CLAMD-Variablen als Environment Variable.
- Es wurden kleinere Korrekturen an der `update.sh` vorgenommen (Rechtschreibfehler usw.).
- Es wurde ein Fehler behoben, der dazu geführt hat, dass der acme-mailcow-Container nicht mehr mit den anderen Containern via cURL kommunizieren konnte (hier sind wir weiterhin dran, es gibt vielversprechende Erkenntnisse dahingehend).
- Die Spamhaus DQS Listen werden nun auch bei Rspamd reingeladen, wenn der SPAMHAUS_DQS_KEY in der `mailcow.conf` aktiviert wurde. Dies erhöht die Spamabwehr.
- Es wurde ein Bug gefixt, der in der mailcow-UI nach Aktivierung der neuen FTS Engine auftrat und ein Postfach gelöscht wurde.
- Im Unbound-Container wurden die Healthchecks überarbeitet.
- Apropos FTS Engine: Es wurde ein Bug der maximalen Länge einer E-Mail-Adresse gelöst, der dazu führte, dass es Fehlermeldungen bei zu langen E-Mails gab.
- Wir haben unsere Contribution Guidelines auf GitHub angepasst.

---

So, das wäre es für dieses Update.

Wie immer gilt: Denkt an regelmäßige mailcow- und System-Updates und auch an Backups!

Bleibt gesund.

Euer mailcow Team  
*Niklas aka. DerLinkman*