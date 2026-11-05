---
title: "🍂🐮 Moovember 2026 | Feature & Security Update: Mailbox Groups, imapsync Rework & SOGo 5.12.13"
date: 2026-11-05T11:30:00+01:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["2026", "update", "changelog", "major"]
categories: ["Updates"]

---

## 2026-11 (Veröffentlichung: 5. November 2026)

**Moohoo zusammen!**

Das **Update 2026-11** bringt mehrere neue Features und Sicherheitsfixes. Neu sind Gruppen und geteilte Postfächer, eine Identity-Provider-Synchronisation, ein überarbeitetes imapsync und mehrere API-Keys.

{{< admonition type=danger title="Backup" open=true >}}
**Bitte erstellt vor dem Update ein [Backup](https://docs.mailcow.email/de/backup_restore/b_n_r-backup/).**
{{< /admonition >}}

{{< admonition type=warning title="Wichtiges Sicherheitsupdate" open=true >}}
**Wir empfehlen dringend, so bald wie möglich zu aktualisieren.**
Dieses Release behebt unter anderem eine **Remote-Code-Execution-Lücke (RCE)**, die angemeldete Admins und Domain-Admins ausnutzen können. Details zu den behobenen Lücken veröffentlichen wir Anfang nächster Woche. Lest vor dem Update bitte die Breaking Changes.

**Workaround**, bis ihr aktualisieren könnt: Zugang zu Admin- und Domain-Admin-Konten einschränken.
{{< /admonition >}}

### ⚠️ Breaking Changes

* **Sync-Job-API:** `add/syncjob` braucht eine `source_id`, die Server-Felder (`host1`, `port1`, `enc1`, `authmech1`) werden weder angenommen noch zurückgegeben. Bestehende Jobs werden automatisch migriert. Wer Sync Jobs über die API anlegt oder ausliest, muss seinen Client anpassen: Quelle mit `add/syncjob_source` anlegen (oder mit `get/syncjob_source/all` suchen) und deren `source_id` übergeben. ➡️ API-Doku auf der mailcow unter `https://<mailcow-host>/api`
* **Größenlimit für Anfragen:** 64 MB für UI und API, `NGINX_MAX_BODY_SIZE` (Standard `128m`) für SOGo, ActiveSync und DAV. Wer das Nachrichtenlimit von Postfix erhöht hat, setzt `NGINX_MAX_BODY_SIZE` in der `mailcow.conf` darüber und führt `docker compose up -d` aus. ➡️ [Doku](https://docs.mailcow.email/de/manual-guides/Postfix/u_e-postfix-attachment_size/)
* **Eigene nginx-Locations** (`data/conf/nginx/site.*.custom`) sind jetzt ebenfalls auf 64 MB begrenzt. Apps unter dem mailcow-Host (z. B. Nextcloud unter einem Pfad) lehnen größere Uploads mit `413` ab, eigene Server-Blöcke in `data/conf/nginx/*.conf` sind nicht betroffen. `client_max_body_size` in der Location setzen (z. B. `client_max_body_size 0;` für kein Limit) und `docker compose restart nginx-mailcow` ausführen.

### 🔐 Sicherheit

* **SOGo 5.12.13**, ein Sicherheits-Release von SOGo ➡️ [Release Notes](https://github.com/Alinto/sogo/releases/tag/SOGo-5.12.13)
* Mehrere Sicherheitsfixes in mailcow (Details nächste Woche)
* Fail2ban zählt fehlgeschlagene Logins aller Protokolle (IMAP, POP3, SMTP, Sieve, EAS, DAV), Rate-Limit für 2FA

### 🚀 Neue Features

* **Gruppen:** Verteilerlisten, Senden als Gruppe, geteilte Postfächer sowie SOGo-Kalender und -Adressbücher für Gruppen. ➡️ [Doku](https://docs.mailcow.email/de/manual-guides/mailcow-UI/u_e-mailcow_ui-groups/)
* **Identity-Provider-Synchronisation** (Keycloak, LDAP/AD): Gruppen und Mitglieder, optionales Offboarding. ➡️ [Doku](https://docs.mailcow.email/de/manual-guides/mailcow-UI/u_e-mailcow_ui-idp-sync/)
* **imapsync-Überarbeitung:** Sync-Quellen, OAuth2 für Microsoft 365 und Google, parallele Jobs, Zertifikatsprüfung des Quellservers, imapsync 2.314. ➡️ [Doku](https://docs.mailcow.email/de/post_installation/firststeps-sync_jobs_migration/)
* **API-Keys:** mehrere Keys mit Lese- oder Lese-Schreib-Zugriff und eigener IP-Allowlist. Keys aus der `mailcow.conf` erscheinen als gesperrte Service-Keys. ➡️ [Doku](https://docs.mailcow.email/de/manual-guides/mailcow-UI/u_e-mailcow_ui-api/)

### What's Changed

#### Features

* [Web][Dovecot] Rework imapsync: sync sources, OAuth2, Python runner by @FreddleSpl0it ➡️ [PR #7546](https://github.com/mailcow/mailcow-dockerized/pull/7546)
* [Web] Rework API keys: multiple keys + locked service keys from mailcow.conf by @FreddleSpl0it ➡️ [PR #7547](https://github.com/mailcow/mailcow-dockerized/pull/7547)
* [Web][Dovecot][SOGo][DockerApi] Add mailbox groups, shared mailboxes and identity provider sync by @FreddleSpl0it ➡️ [PR #7566](https://github.com/mailcow/mailcow-dockerized/pull/7566)
* [Netfilter] Rework: robust bans, no restart loops, identity provider outages are no failed logins by @FreddleSpl0it ➡️ [PR #7567](https://github.com/mailcow/mailcow-dockerized/pull/7567)
* [Web] Add Netfilter unban all button by @FreddleSpl0it ➡️ [PR #7593](https://github.com/mailcow/mailcow-dockerized/pull/7593)

#### Fixes & Security

* Fixes for the reworks: imapsync, logins/netfilter, groups, startup, hardening by @FreddleSpl0it ➡️ [PR #7589](https://github.com/mailcow/mailcow-dockerized/pull/7589)
* [SOGo] Update to 5.12.13 by @FreddleSpl0it ➡️ [PR #7590](https://github.com/mailcow/mailcow-dockerized/pull/7590)

#### Updates

* Update Alpine Images to 3.24 by @FreddleSpl0it ➡️ [PR #7563](https://github.com/mailcow/mailcow-dockerized/pull/7563)
* [Rspamd] Update to 4.2.3 by @FreddleSpl0it ➡️ [PR #7569](https://github.com/mailcow/mailcow-dockerized/pull/7569)
* [ACME][Dockerapi][Dovecot][Olefy][PHP][Rspamd][SOGo][Unbound][Watchdog] Update image tags by @FreddleSpl0it ➡️ [PR #7572](https://github.com/mailcow/mailcow-dockerized/pull/7572)
* [Web] Update composer libraries by @FreddleSpl0it ➡️ [PR #7568](https://github.com/mailcow/mailcow-dockerized/pull/7568)
* Update redis Docker tag to v7.4.12 by @renovate[bot] ➡️ [PR #7555](https://github.com/mailcow/mailcow-dockerized/pull/7555)
* Update dependency tianon/gosu to v1.20 by @renovate[bot] ➡️ [PR #7551](https://github.com/mailcow/mailcow-dockerized/pull/7551)
* [Postfix] update postscreen_access.cidr by @milkmaker ➡️ [PR #7584](https://github.com/mailcow/mailcow-dockerized/pull/7584)

#### Translations

* Translations update from Weblate by @milkmaker ➡️ [PR #7542](https://github.com/mailcow/mailcow-dockerized/pull/7542)

### Full Changelog
[https://github.com/mailcow/mailcow-dockerized/compare/2026-10...2026-11](https://github.com/mailcow/mailcow-dockerized/compare/2026-10...2026-11)

---

Bleibt sicher und happy mailing!

Euer mailcow-Team von **The Infrastructure Company GmbH** (oder kurz **tinc**)
