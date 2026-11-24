---
title: "⚡🐄 Janmuhary 2025 Update | Das Update was die Volltextsuche ändert (und Nextcloud rauswirft)"
date: 2025-02-04T14:40:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["Major", "Full-text search"]
categories: ["Updates"]

---

## 2025-01a (Release vom 04.02.2025)

**Nginx Korrekturen**

+ Fixes "invalid password" triggering when opening `/rspamd` [Issue #6275](https://github.com/mailcow/mailcow-dockerized/issues/6275)

+ Invert SKIP container condition for SOGo and Rspamd [commit 97890b71f1f328fe3c9a101a6eece7e3bdb954e6](https://github.com/mailcow/mailcow-dockerized/pull/6291/commits/97890b71f1f328fe3c9a101a6eece7e3bdb954e6)

+ Add environment variable to enable redirection of HTTP Connections to HTTPS (see [docs](https://docs.mailcow.email/manual-guides/u_e-80_to_443/)) [commit e645f931dc04c8b8754927d90275a2e77a03931d](https://github.com/mailcow/mailcow-dockerized/pull/6291/commits/e645f931dc04c8b8754927d90275a2e77a03931d)

+ Use separate Vhosts for additional server names [PR #6290](https://github.com/mailcow/mailcow-dockerized/pull/6290)

**Sicherheitsupdate**

Dieses Update enthält einen Sicherheitsfix für die Passwort-Zurücksetzen Funktion. Um diese Schwachstelle auszunutzen, muss die Passwort-Zurücksetzen Funktion von Admins aktiviert sein, und das Opfer muss eine konfigurierte E-Mail Adresse für das Zurücksetzen des Passworts haben. Zudem muss der Angreifer gültige E-Mail Adressen kennen und ist auf bestimmte Nutzerinteraktionen angewiesen.
Eine CVE wird nächste Woche veröffentlicht und kann dann hier eingesehen werden: [Security Advisories](https://github.com/mailcow/mailcow-dockerized/security/advisories?state=published).

**Postfix**

+ Remove discontinued Nixspam DNSBL [PR #6260](https://github.com/mailcow/mailcow-dockerized/pull/6260)

+ Added master.pid removal and startsecs to supervisord [PR #6284](https://github.com/mailcow/mailcow-dockerized/pull/6284)

**Clamd Update**

+ Update to 1.4.2 + build from source instead using alpine packages [commit 60a2270d1e7d0985901378bea83295b3df6bf127](https://github.com/mailcow/mailcow-dockerized/pull/6291/commits/60a2270d1e7d0985901378bea83295b3df6bf127)


Für einen umfassenden Überblick über alle Änderungen verweisen wir auf den [Changelog bei Github](https://github.com/mailcow/mailcow-dockerized/compare/2025-01...2025-01a)

---

{{< admonition danger >}}
Dieses mailcow Update enthält gravierende Änderungen an diversen Komponenten. Bitte fertigt vor dem Update ein Backup an und sichert eure Konfigurationen.
{{< /admonition >}}

**Muuhuuu alle zusammen**

Wir haben die Winterpause genutzt und euch ein neues Update mitgebracht.

Wie angekündigt beherbergt es unter anderem die neue Volltextsuch-Engine "Flatcurve" und einige weitere Neuerungen.

Da die Changelogs dieses Mal durchaus üppig sind, sparen wir uns diesmal die Kleinigkeiten und hauen direkt die großen Brocken raus:

### Neue Volltextsuche

Mit 2025-01 sagt SOLR in mailcow adieu. Es wird mit Flatcurve ersetzt, welche anders als SOLR nicht auf einen extra Container beruht, sondern direkt im Kern von Dovecot eingearbeitet ist.

Die Abschaltung von Solr bringt nicht nur auf Systemen mit wenig RAM eine Volltextsuche, sondern bietet langfristige Unterstützung des Dovecot Quellcodes, da genau diese Engine mit 2.4 (der nächsten Dovecot Major Version) Standard wird und auch Solr bei Dovecot als deprecated betitelt wird.

#### Was ändert sich für mich?

Mit der Umstellung patcht mailcow die mailcow.conf selbstständig und entfernt alle SOLR Parameter aus dieser Datei. Zeitgleich werdet ihr auch gefragt, ob Ihr eure alten SOLR Docker Volumes entfernen wollt, da diese unused sind und nicht länger benötigt werden.

Ebenfalls werden die neuen Parameter hinzugefügt, welche da wären:

- SKIP_FTS
- FTS_PROCS
- FTS_HEAP

Diese Werte können von dem Administrator nach Bedarf geändert werden, eine genauere Bedeutung der einzelnen Parameter findet ihr auf der neugeschriebenen Dokumentationsseite: https://docs.mailcow.email/de/manual-guides/Dovecot/u_e-dovecot-fts/

{{< admonition info >}}
Nach dem mailcow Update auf 2025-01 und der Umstellung auf Flatcurve wird FTS sicherheitshalber automatisch deaktiviert. Sollte Interesse bestehen, eine Volltextsuche zu verwenden, muss einmalig der `SKIP_FTS` Wert von `y` auf `n` geändert werden und mailcow mit `docker compose up -d` neugestartet werden. 
{{< /admonition >}}

Der Wechsel auf die neue FTS Engine bewirkt aber auch, dass alle bisherigen Indexe nutzlos sind und neuindexiert werden müssen. Durch die neue Implementation der FTS Engine passiert das entweder automatisch, sobald ein Postfach mehr als 20 neue Mails empfangen hat, sprich die Postfächer aktiv genutzt werden, oder eben manuell. Auch das steht in der neuen Dokumentationsseite.

{{< admonition warning >}}
Der Indexierungsprozess ist recht CPU lastig, sodass CPU Spikes auftreten können, wundert euch also daher nicht, solltet ihr eure mailcow Systeme im Monitoring beobachten, was das sein kann.
{{< /admonition >}}

### Eigene NGINX Images -> Neue NGINX Konfigurationen
Das Update bringt auch Änderungen mit dem mailcow integrierten NGINX mit. Statt bisher auf das latest NGINX Image zu setzen, bauen wir nun unsere eigenen Images.

Dies hat den Hintergrund, dass wir die NGINX Konfigs nun mit jinja2 Templates generieren, statt bisher kompliziert über Bash.

So können wir langfristig einfacher neue und vorallem komplexere NGINX Konfigurationen in mailcow integrieren.

{{< admonition warning >}}
Die Erstellung von Custom Seiten o.Ä. funktionieren nach demselben Schema wie bisher.

Allerdings wurde die Dokumentation um einen neuen Schritt zum Deaktivieren von IPv6 angepasst, für alle interessant die (warum auch immer) IPv6 in mailcow deaktiviert haben.
{{< /admonition >}}

### Nextcloud ist raus (innerhalb mailcows)

Eigentlich zu Dezember 2024 abgekündigt, fliegt mit 2025-01 nun das Nextcloud Helper Skript raus, welches Nextcloud in mailcow integriert. 

Dies bedeutet, dass wir diese Installationsweise nicht mehr supporten, weder per Community noch per Premium Paid Support.

Bestehende Nextcloud Instanzen innerhalb mailcows funktionieren weiterhin, allerdings können nun fehlende PHP Module, die nicht mehr extra nur für Nextcloud eingebaut wurden, eine reibungslose Nutzung behindern.

In jedem Fall ist eine Migration auf eine Standalone Cloud bzw. eine Nextcloud Docker Instanz empfehlenswert.

{{< admonition info >}}
**Jegliche Pull Requests oder Issues bzgl. einer Nextcloud Reintegration oder der Implementation von speziell für Nextcloud benötigten Submodulen werden sofort abgelehnt bzw. geschlossen.**
{{< /admonition >}}

### Redis ist nun mit Passwort gesichert

Auch eine Neuerung ist die Absicherung Redis mit einem Passwort. Dies hat für den regulären mailcow Betrieb ohne Sonderlocken keine Auswirkung. Externe Apps oder Webseiten, welche den Redis von mailcow mitverwendet, müssen hier das Passwort (welches automatisch generiert wird und in der mailcow.conf zu finden ist) mit angeben.

### Schließung einer Sicherheitslücke

Ebenfalls wurde eine Sicherheitslücke geschlossen, welche allerdings nur dann ausgenutzt werden konnte, wenn ein Angreifer bereits Zugriff auf den Browser des Opfers hatte. Genauere Details sowie die CVE davon folgen in Kürze.

### Temporäre E-Mail Aliasse sind nun mit einer Beschreibung erstellbar

Das Update 2025-01 bringt eine neue Funktion mit, welche es euch ermöglicht, bei Spamaliasen auch Beschreibungen hinzuzufügen, ideal, wenn ihr notieren wollt, wofür dieser genutzt wurde/wird.

{{< admonition info >}}
**Diese Funktion ist nur für neu angelegte Aliase verfügbar.** Die Kommentare können im Nachhinein nicht mehr geändert werden.
{{< /admonition >}}

### Änderung der Externen Fail2Ban Endpunkt URL

Diese hat sich seit dem Update 2025-01 geändert und muss neu aus der Admin UI entnommen werden.

Das Abrufen der neuen Banliste erfolgt nun über eine eigens dafür geschriebene PHP-Datei, welche zur Pfadänderung führt.

---

Natürlich wurden auch kleinere Bugs/Glitches behoben, diese würden aber jetzt den Rahmen sprengen... schaut euch, wenn es euch interessiert, aber gerne den kompletten GitHub Changelog an: https://github.com/mailcow/mailcow-dockerized/releases/2025-01

Selbstverständlich werden wir (sollte es größere bzw. häufig aufgetretene Probleme geben) auch zeitnah Fixes dafür in den klassischen a, b, c Revisionen releasen.

Bis dahin, bleibt gesund...

Happy mailing

Euer mailcow Team der The Infrastructure Company GmbH (oder kurz tinc)