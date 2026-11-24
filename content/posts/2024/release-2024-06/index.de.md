---
title: "🌙🐄 Mooni Update 2024 | Flatcurve Update Phase 1 - Revision C"
date: 2024-06-27T09:30:00+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["Full-text search"]
categories: ["Updates"]

---

## 2024-06c (Release vom 12.07.2024)

+ Wir haben und nach einigem hin und her (sorry dafür...) nun doch dazu entschieden, den betroffenen PHP Container auf einer Version die lauffähig (ja die gab es :D) war zu belassen, so lange bis wir nach tieferen Tests bestätigen können, dass es mit einem gepatchten Alpine endlich funktioniert... solange bleibt der Container zunächst "freezed". Der neue Container sorgte bei allen Roundcube usern dazu, dass besagtes nicht mehr funktionierte. Schuld waren hier die Berechtigungen. Da wir nicht ausschließen können, dass nicht noch mehr dadurch bei Third Party Apps kaputt gehen könnte haben wir die Version schließlich zurückgenommen.
+ Wir haben einen Fehler in der UI gelöst, welcher das Versions Modal nicht mehr korrekt geöffnet hat. Es wurde zwar geöffnet allerdings wurde man auch direkt zur Release Seite weitergeleitet, was damit besagtes Modal unnötig macht... 

## 2024-06b (Release vom 12.07.2024)
+ Regulärer Ausdruck im Backup/Restore Skript verbessert, sollte nun Zahlen wie 10, 20 usw. unterstützen.
+ Der PHP Container wurde auf Basis von Debian 12 gebaut. Dies (sollte, bitte... der Bug ist echt nervig...) endlich die Probleme die einige von euch hatten bzgl. Blanker mailcow UI oder fehlerhaften Container Werten innerhalb der Ui (etc.) beheben. Wir sind aber nach wie vor dran, das Problem im Alpine Container zu identifizieren, damit wir langfristig wieder die Alpine Basis nutzen können (Aufgrund der kleineren Container Größe).
+ In der Web UI wurde die WIP Warnung für die ARM64 Versionen entfernt. Ist mittlerweile (eigentlich schon von Anfang an...) stabil! Danke an alle, die das nutzen!
+ Postfix's Postcreen Access List wurde aktualisiert auf Stand 1. Juli 2024.

## 2024-06a (Release vom 27.06.2024)

+ Rollback der kaputten Übersetzungen
+ Fehlerhafter cURL Request innerhalb des PHP-FPM Containers behoben, erzeugt durch einen c-ares Fehler im Container

## 2024-06 (Release vom 27.06.2024)

**Moohoo** alle zusammen!

Nach unserem [Statement](https://mailcow.email/de/posts/2024/development-change/) ist es mal wieder Zeit, euch ein Update zu bescheren.

Diesmal auch mit ein paar zusätzlichen Informationen:

### ⚠️ Kritische Änderungen

#### Postfix TLS 1.1, TLS 1.0 Wegfall
Im Zuge des 2024-06 Updates wurde Postfix auf 3.7.10 und Debian 12 aktualisiert. Zeitgleich wird mit diesem Update eine Kommunikation zwischen den SMTP-Servern auf mindestens TLS Version 1.2 vorausgesetzt.
Damit schaffen wir die älteren TLS-Versionen 1.0 und 1.1 als Verschlüsselungsversion ab.
<!--more-->

Die Verbindung zu Dovecot wurde bereits 2020 auf TLS 1.2 limitiert (standardmäßig) und Analysen von uns und unseren Community-Mitgliedern haben gezeigt, dass die Mehrheit der sicheren E-Mail-Server in der Welt mindestens TLS 1.2, wenn nicht sogar schon TLS 1.3, nutzen und nur ein ganz kleiner Prozentsatz nicht.

Da es natürlich sein kann, dass besagte TLS 1.0/TLS 1.1 Versionen in einigen Ausnahmefällen noch benötigt werden, haben wir unsere Dokumentation, um diese wieder zu aktivieren, dementsprechend angepasst: https://docs.mailcow.email/de/manual-guides/u_e-reeanble-weak-protocols/.

Wir behalten uns vor, nach einigen Wochen/Monaten Laufzeit diese Änderung für alle wieder zurückzunehmen, sollte die generelle öffentliche Meinung dementsprechend ausfallen, da wir dann mehr Daten haben, mit denen wir arbeiten können.

#### Flatcurve als neue Volltextsuch-Engine (FTS)
Wie bereits vor Monaten (oder sogar schon Jahren... oh man, wie schnell doch die Zeit vergeht) wird mailcow in naher Zukunft (Dezember 2024, um genau zu sein) ihre FTS Engine von Apache Solr auf eine neue Engine umbauen, welche in zukünftigen Dovecot-Versionen (2.4 und darüber) als Standard-FTS-Engine für Dovecot seitens der Entwickler Einzug erhalten wird.

Diese tauft sich Flatcurve und nutzt Xapian als Unterbau. Technischer will ich jetzt nicht werden, allerdings bietet diese neue Engine eine deutlich bessere Indexierungsmöglichkeit für eigentlich alle Systeme, ja auch die Low-End-Systeme, sodass wir den Wechsel hier mit dem Update begonnen haben.

{{< admonition type=question title="**Was heißt das nun für mich als Solr-Nutzer?**" open=true >}}

Nun, zunächst einmal noch nichts, da Solr bis Dezember 2024 noch in mailcow enthalten sein wird, allerdings wird mit dem Dezember-Update Solr restlos mit Flatcurve ausgetauscht bzw. bestehende mailcow-Installationen auf die neue Engine zwingend angepasst.

Dies hat zur Folge, dass jegliche Solr-Indexe nicht mehr kompatibel sind und ein kompletter FTS-Reindex notwendig ist.

Um ein Chaos zum Dezember vorzubeugen, haben wir deshalb bereits jetzt die Möglichkeit gegeben, auf die neue FTS-Engine umzustellen und damit dann jetzt schon innerhalb der nächsten Monate einen Reindex der FTS-Indexe aufbauen zu lassen.

Mehr dazu, wie man die neue Engine bis Dezember im Voraus aktivieren kann, erfahrt ihr hier in der angepassten Dokumentation: https://docs.mailcow.email/de/manual-guides/Dovecot/u_e-dovecot-fts/#fts-flatcurve-experimentell-seit-2024-06

{{< /admonition >}}

{{< admonition type=notice title="Hinweis" open=true >}}
Zum Dezember-Update 2024 entfällt die manuelle Aktivierung der neuen FTS-Engine.
{{< /admonition >}}

#### Wegfall des Nextcloud-Skripts und Support für Installationen innerhalb mailcows

Ebenfalls zum Dezember 2024 kündigen wir die Unterstützung für das mitgelieferte Nextcloud-Helper-Skript ab.

Dies hat unter anderem den Grund, dass sich Nextcloud auch immer weiterentwickelt und mit weiteren Versionen auch weitere neue PHP-Module aktiviert braucht. 

Da wir für mailcow allerdings nur die PHP-Module aktivieren wollen, die wir brauchen und somit etwaige Schleusentore für Schadsoftware usw. zulassen wollen, ist das suboptimal für uns...

Zudem finden wir, dass ein Nextcloud-Server nicht mehr in das Konzept von mailcow passt.

Mittlerweile ist das Aufsetzen einer Nextcloud aber auch ebenso einfach wie von mailcow, da sich Nextcloud auch in dem Bereich stark weiterentwickelt hat und so bspw. die AIO (All in One) Lösung für Docker anbietet (ebenfalls Open Source), die sich für Nextclouds Komponenten um alles kümmert.

Weswegen wir uns zu diesem Schritt entschieden haben.

{{< admonition type=question title="**Was heißt das nun für mich als Nextcloud-Helper-Skript-Nutzer?**" open=true >}}

Auch hier zunächst noch nichts, allerdings ist der Support bzw. die Unterstützung dafür zum Dezember-2024-Update abgezählt.

Ab dann werden wir das Helper-Skript für Nextcloud **nicht mehr mit ausliefern**, was eine Wartung der Nextcloud (Updates) erschwert und etwaige Einstellungen für den NGINX/PHP-Container nicht mehr einbauen bzw. etwaige Änderungen aus der Vergangenheit revidieren, wenn diese nicht auch für mailcow selbst interessant/relevant sind.

Dies wird auf lange Sicht den Betrieb von Nextcloud innerhalb mailcows stark einschränken, sodass eine Migration der Daten und Datenbanken dahingehend erforderlich wird.

**WICHTIG: mailcow wird KEINE Migrations-Tools bzw. Support bereitstellen, welche die Migration einer Nextcloud-Installation aus mailcow hinaus abdeckt.**

{{< /admonition >}}

{{< admonition type=warning title="**Hinweis zur Nextcloud-Authentifizierung via mailcow**" open=true >}}

Diese ist von unserem Plan, das Helper-Skript und damit den Support von unserer Seite bzgl. Nextcloud in mailcow zu betreiben, nicht betroffen.

Eine Authentifizierung via mailcow für Nextcloud wird auch im Nachhinein noch möglich sein.

{{< /admonition >}}


---

So, das Wichtigste vorab geklärt... kommen wir nun zu den restlichen Änderungen (grob und kompakt heruntergebrochen):

### Changelog

* Es wurden einige Fehler im Rspamd korrigiert, bspw. wurde die SORBS BL entfernt, da diese nicht mehr weitergeführt wird.
* Es wurden Fehler in der mailcow-UI behoben, welche dazu geführt hatten, dass sich der Login eines Benutzers in der UI (nicht SOGo, SMTP, IMAP usw.) auf teilweise 5 Minuten gestreckt hatte.
* Es wurden alle Docker Compose `version`-Sektionen aus allen Docker Compose-Dateien entfernt, damit die Deprecation-Meldung von Docker nicht mehr auftaucht.
* Für Dovecot wurde der kaputte SpamAssassin-Spammap-Download für Rspamd behoben, nachdem sich dort die URL geändert hatte.
* Es ist nun möglich, via mailcow.conf die Generation von SSL-Zertifikaten für autoconfig, autodiscover Subdomains zu deaktivieren.
* Es wurden Logging-Anpassungen am Postfix vorgenommen, um die Logs etwas aufzuräumen.
* Übersetzungsaktualisierungen.

Der vollständige Changelog, einschließlich der einzelnen Commits, ist für Interessierte jederzeit auf GitHub verfügbar:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2024-06

---

Wir melden uns bei Zeit für weitere News & Update-Informationen.

Bleibt gesund und frohes Mailing.

Euer mailcow-Team

*Niklas/DerLinkman*