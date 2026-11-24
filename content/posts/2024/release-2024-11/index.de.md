---
title: "🏮🐄 Moovember | Mailbox Rename, SOGo 5.11.1, Rspamd 3.10.2 und mehr | Revision B"
date: 2024-11-07T12:00:00+02:00
draft: false

author: FreddleSpl0it
authorLink: "https://github.com/FreddleSpl0it"
toc: true

license: ""

tags: ["Rspamd", "SOGo"]
categories: ["Updates"]

---

# 2024-11b Update (Released am 15. November 2024)

### Korrekturen

- **mysql**: Bei neuen mailcow Installationen, welche die neuste MariaDB 10.5 (standard) verwendet haben, hat ein zu geringer `thread_stack` Wert dazu geführt, dass die mailcow Datenbank nicht erstellt wurde. Wir haben den Wert daher auf 192k angehoben (von vorher 128k).<br>
➡️ [PR #6172](https://github.com/mailcow/mailcow-dockerized/pull/6172)

- **SOGo**: Bei einem Passwort Reset (ausgelöst durch den User selber via Passwort vergessen?) wird nun auch direkt das neue Passwort im SOGo gesetzt.<br>
➡️ [PR #6164](https://github.com/mailcow/mailcow-dockerized/pull/6164)

- **Mailbox Rename**: Die Mailbox wird nun auch bei Cluster Systemen (keine Anleitung, kein Support!!!) korrekt umbenannt, überall...<br>
➡️ [PR #6165](https://github.com/mailcow/mailcow-dockerized/pull/6165)

---

# 2024-11a Update (Released am 12. November 2024)

### Aktualisierungen

- **SOGo**: Aktualisierung auf Version 5.11.2 inkl. Sicherheitsupdates.<br>
 ➡️ [PR #6156](https://github.com/mailcow/mailcow-dockerized/pull/6156)

- **PHP-FPM**: Wirkliche, wirkliche Nutzung des gefixten DNS Lookup Moduls für cURL innerhalb des Containers.<br>
 ➡️ [PR #6159](https://github.com/mailcow/mailcow-dockerized/pull/6159)

### Verbesserungen

- **update.sh**: Sollte eine alte `dns_blocklists.cf` existieren, wird der Nutzer **einmalig** nach der Löschung dieser gefragt, damit diese korrekt regeneriert wird.<br>
 ➡️ [PR #6154](https://github.com/mailcow/mailcow-dockerized/pull/6154)

- **Sprache**: Die Chinesische Sprache wurde verbessert.<br>
 ➡️ [PR #6151](https://github.com/mailcow/mailcow-dockerized/pull/6151)

---

# 2024-11 Update (Released am 7. November 2024)

**Moohoo** alle zusammen!

Der November bringt ein frisches Update für mailcow, vollgepackt mit einem neuen Feature, Sicherheitsupdates, Verbesserungen und Aktualisierungen.

### Mailbox Rename Feature
Mit dem neue mailbox rename feature haben Admins nun die Möglichkeit, den lokalen Teil einer Mailbox umzubenennen. Da dieses Feature neu ist, wird ein Warnhinweis angezeigt, der dazu auffordert, vorher ein Backup zu erstellen, um auf der sicheren Seite zu bleiben.
➡️ [PR #6045](https://github.com/mailcow/mailcow-dockerized/pull/6045)

### Sicherheit

- **twig Security Update**
  Wir haben twig auf Version 3.14.0 aktualisiert, um eine kürzlich veröffentlichte Sicherheitslücke zu beheben.<br>
  https://github.com/advisories/GHSA-6j75-5wfj-gh66<br>
  ➡️ [PR #6071](https://github.com/mailcow/mailcow-dockerized/pull/6071)

### Verbesserungen

- **dovecot Lazy Expunge**
  Das `lazy_expunge` Plugin ist jetzt in mailcow enthalten. Es ist standardmäßig deaktiviert, kann aber durch Änderung von dovecots extra.cf aktiviert werden.
  ➡️ [PR #6112](https://github.com/mailcow/mailcow-dockerized/pull/6112)

- **X-Original-To Header in postfix**
  Postfix enthält jetzt standardmäßig den `X-Original-To` Header.
  ➡️ [PR #6110](https://github.com/mailcow/mailcow-dockerized/pull/6110)

- **Letzten SSO Login anzeigen**
  Admins können jetzt die Uhrzeit des letzten SSO Logins direkt in der Mailbox Tabelle einsehen.
  ➡️ [PR #5724](https://github.com/mailcow/mailcow-dockerized/pull/5724)

- **TLS Kompatibilität für Legacy Systeme**
  Wir haben einen Patch hinzugefügt, der TLS 1.0/1.1 in OpenSSL unterstützt und so die Kompatibilität für Benutzer mit älteren Systemen verbessert, die ältere TLS-Versionen erfordern.
  ➡️ [PR #6105](https://github.com/mailcow/mailcow-dockerized/pull/6105)

- **Redis für PHP-FPM Sessions**
  PHP-FPM nutzt jetzt redis als Session Store.
  ➡️ [PR #6044](https://github.com/mailcow/mailcow-dockerized/pull/6044)

- **Rspamd mime Types Konfiguration**
  Die `mime_types.conf` Datei von Rspamd wurde aktualisiert.
  ➡️ [PR #6013](https://github.com/mailcow/mailcow-dockerized/pull/6013)

- **Auto-Reply Fix für Abwesenheitsbenachrichtigungen in SOGo**
  Ein Problem wurde behoben, bei dem Start- und Enddatum der Abwesenheitsbenachrichtigungen in SOGo im Sieve-Filter um einen Tag verschoben wurden.
  ➡️ [PR #6057](https://github.com/mailcow/mailcow-dockerized/pull/6057)

### Aktualisierungen

- **Rspamd Update auf Version 3.10.2**
  Rspamd wurde auf Version 3.10.2 aktualisiert.
  ➡️ [PR #6122](https://github.com/mailcow/mailcow-dockerized/pull/6122)

- **PHP-FPM Basis OS Update auf Alpine 3.20**
  PHP-FPM Basis OS wurde auf Alpine 3.20 aktualisiert.
  ➡️ [PR #6106](https://github.com/mailcow/mailcow-dockerized/pull/6106)

- **SOGo Update auf Version 5.11.1**
  SOGo wurde auf Version 5.11.1 aktualisiert.
  ➡️ [PR #6109](https://github.com/mailcow/mailcow-dockerized/pull/6109)


<br><br>
Der vollständige Changelog, einschließlich der einzelnen Commits, ist für Interessierte jederzeit auf GitHub verfügbar:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2024-11

---

Das war's für dieses Update! Wie immer empfehlen wir, mailcow und euer System regelmäßig zu aktualisieren und Backups zu machen.

Bleibt sicher und viel Spaß!

Euer mailcow Team
*FreddleSpl0it*
