---
title: "🛷 🐄 Moocember 2023 Update | Netfilter NFTables Support and Banlist Endpoint"
date: 2023-12-19T11:19:02+02:00
draft: false

author: Patrick Schult/FreddleSpl0it
authorLink: "https://github.com/FreddleSpl0it"
toc: true

license: ""

tags: ["2023", "update", "changelog"]
categories: ["Updates"]

---

## 2023-12a (Release am 29.12.2023)

### Changelog

* chore(deps): update dependency nextcloud/server to v28.0.1 by @renovate in https://github.com/mailcow/mailcow-dockerized/pull/5614
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5617
* [Postfix] Do not remove X-Mailer header by @feldsam in https://github.com/mailcow/mailcow-dockerized/pull/5504
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5622
* [Postfix] set smtpd_forbid_bare_newline = yes 

---

## 2023-12 (Release am 19.12.2023)

**Moo hoo zusammen!**

Wir haben vor den Feiertagen noch einige neue Netfilter Features für euch. 
Darüber hinaus kann der Watchdog nun Benachrichtigungen über Webhooks versenden. Dazu müssen einfach die Variablen `WATCHDOG_NOTIFY_WEBHOOK` und `WATCHDOG_NOTIFY_WEBHOOK_BODY` in der `mailcow.conf` entsprechend konfiguriert werden.

<!--more-->

### Changelog

* Update actions/stale action to v9 by @renovate in #5579
* Translations update from Weblate by @milkmaker in #5583
* [Netfilter] add nftables support by @FreddleSpl0it thanks to @amorfo77 in #5585
* [Web] add f2b_banlist endpoint by @FreddleSpl0it in #5313
* Watchdog: Allow sending notifications via webhooks by @felixoi in #4968
* Allow suppressing watchdog start notification by @smarsching in #5453
* Translations update from Weblate by @milkmaker in #5590
* Update dependency nextcloud/server to v28 by @renovate in #5589
* Translations update from Weblate by @milkmaker in #5591
* Translations update from Weblate by @milkmaker in #5598
* Guideline Improvement + Issue Template adjusting by @DerLinkman in #5602
* chore(deps): update alpine docker tag to v3.19 by @renovate in #5603

Wie man den Banlist Endpoint benutzt, ist hier beschrieben https://docs.mailcow.email/de/manual-guides/mailcow-UI/u_e-mailcow_ui-netfilter/#netfilter-entscheidungen-via-url-als-quelle-fur-firewall-blockregeln-bereitstellen.

Der vollständige Changelog, einschließlich der einzelnen Commits, ist für Interessierte jederzeit auf GitHub verfügbar:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-12

---

Wie immer ein riesiges Dankeschön an unsere großartige mailcow-Community für eure anhaltende Unterstützung und euer wertvolles Feedback.

Bleibt gesund.

Euer mailcow-Team
