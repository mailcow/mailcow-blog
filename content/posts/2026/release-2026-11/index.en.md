---
title: "🍂🐮 Moovember 2026 | Feature & Security Update: Mailbox Groups, imapsync Rework & SOGo 5.12.13"
date: 2026-11-19T17:50:00+01:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["Security", "Major", "SOGo", "imapsync"]
categories: ["Updates"]

---

## 2026-11b (Release: 19th November 2026)

This revision update brings **PHP 8.2.36**, which fixes several **security issues** in PHP. The issues rated critical don't affect mailcow in its default configuration, but we recommend updating anyway.

### Updates & Security

* [PHP] Update to 8.2.36 by @FreddleSpl0it ➡️ [Commit e349058](https://github.com/mailcow/mailcow-dockerized/commit/e34905807f4f614ed71b00e0c0775fdc728db6ba)
* Translations update from Weblate by @milkmaker ➡️ [PR #7674](https://github.com/mailcow/mailcow-dockerized/pull/7674)

### Full Changelog
[https://github.com/mailcow/mailcow-dockerized/compare/2026-11a...2026-11b](https://github.com/mailcow/mailcow-dockerized/compare/2026-11a...2026-11b)

---

## 2026-11a (Release: 19th November 2026)

This revision update fixes several **security issues**: **Nginx 1.30.7**, **ClamAV 1.4.7** and rebuilt images for **brotli CVE-2026-111497** (Postfix 3.10.13). The update script also no longer disables IPv6 on hosts with a public IPv6 address.

**We strongly recommend updating your mailcow installation to this version as soon as possible.**

### Updates & Security

* [Nginx] Update to 1.30.7 by @FreddleSpl0it ➡️ [Commit df325fc](https://github.com/mailcow/mailcow-dockerized/commit/df325fc15f3250c5698e9044f96fceb7844e0005)
* [ClamAV] Update to 1.4.7 by @FreddleSpl0it ➡️ [Commit 959df2e](https://github.com/mailcow/mailcow-dockerized/commit/959df2e72c5dc202c0bb7464d9ee4f0a129464ff)
* [Nginx][Clamd][Postfix] Rebuild images for brotli CVE-2026-111497 (CISA KEV) by @woodfairy ➡️ [PR #7610](https://github.com/mailcow/mailcow-dockerized/pull/7610)
* [Update.sh] Keep ENABLE_IPV6 as set, do not disable IPv6 on hosts with a public IPv6 address by @FreddleSpl0it ➡️ [PR #7641](https://github.com/mailcow/mailcow-dockerized/pull/7641)
* [Web] force_tfa did not prevent removing 2FA by @FreddleSpl0it ➡️ [PR #7630](https://github.com/mailcow/mailcow-dockerized/pull/7630)
* [Web] Fix forced WebAuthn TFA enrollment storing an empty credential by @wbilalz400 ➡️ [PR #7516](https://github.com/mailcow/mailcow-dockerized/pull/7516)
* [Web] Domain admins saw sender aliases of other domains by @FreddleSpl0it ➡️ [PR #7637](https://github.com/mailcow/mailcow-dockerized/pull/7637)
* [Dovecot] Mask Redis password in trim_logs output by @peterschwps ➡️ [PR #7581](https://github.com/mailcow/mailcow-dockerized/pull/7581)
* [Dovecot][Rspamd] Bump Docker images by @FreddleSpl0it ➡️ [Commit c90e7a9](https://github.com/mailcow/mailcow-dockerized/commit/c90e7a9dc08dbfe764013d5d6be137c4e9298b3d)
* [Postfix-TLSPol] Update to 1.14.5 by @FreddleSpl0it ➡️ [PR #7628](https://github.com/mailcow/mailcow-dockerized/pull/7628)
* Translations update from Weblate by @milkmaker ➡️ [PR #7623](https://github.com/mailcow/mailcow-dockerized/pull/7623)
* Translations update from Weblate by @milkmaker ➡️ [PR #7654](https://github.com/mailcow/mailcow-dockerized/pull/7654)

### Bug Fixes

* [Update] Fix update.sh deleting mailcow's own MASQUERADE rule by @philippderdiedas ➡️ [PR #7500](https://github.com/mailcow/mailcow-dockerized/pull/7500)
* [Update] Restart update.sh automatically after it updated itself by @FreddleSpl0it ➡️ [PR #7642](https://github.com/mailcow/mailcow-dockerized/pull/7642)
* [Rspamd] Mails between 50 and 100 MiB were deferred forever by @FreddleSpl0it ➡️ [PR #7627](https://github.com/mailcow/mailcow-dockerized/pull/7627)
* [Rspamd] Quarantine stored nothing without Q_EXCLUDE_DOMAINS by @FreddleSpl0it ➡️ [PR #7632](https://github.com/mailcow/mailcow-dockerized/pull/7632)
* [Rspamd] Domain footer broke DKIM for mail without Content-Transfer-Encoding by @FreddleSpl0it ➡️ [PR #7635](https://github.com/mailcow/mailcow-dockerized/pull/7635)
* [Rspamd] WHITELISTED_FWD_HOST was skipped at the reject threshold by @FreddleSpl0it ➡️ [PR #7636](https://github.com/mailcow/mailcow-dockerized/pull/7636)
* [Rspamd] Sub-addressing: read the tag from the original SMTP recipient by @FreddleSpl0it ➡️ [PR #7626](https://github.com/mailcow/mailcow-dockerized/pull/7626)
* [Rspamd] write full DBL rule when SPAMHAUS_DQS_KEY is set by @apio-sys ➡️ [PR #7488](https://github.com/mailcow/mailcow-dockerized/pull/7488)
* [Rspamd] Remove the URLhaus and MalwareBazaar maps retired by abuse.ch by @FreddleSpl0it ➡️ [PR #7640](https://github.com/mailcow/mailcow-dockerized/pull/7640)
* [Rspamd] Remove MX check overrides that rspamd ignores by @FreddleSpl0it ➡️ [PR #7639](https://github.com/mailcow/mailcow-dockerized/pull/7639)
* [Dockerapi] Group IMAP grants: set ACLs only on existing folders by @FreddleSpl0it ➡️ [PR #7621](https://github.com/mailcow/mailcow-dockerized/pull/7621)
* [Dockerapi] Group IMAP grants: also set ACLs on folders of new mailboxes by @FreddleSpl0it ➡️ [PR #7673](https://github.com/mailcow/mailcow-dockerized/pull/7673)
* [Web] API: complete OpenAPI docs, add route tests, update Swagger UI to 5.34.1 by @FreddleSpl0it ➡️ [PR #7648](https://github.com/mailcow/mailcow-dockerized/pull/7648)
* [Web][Dovecot] Mailbox list and API: show the last SOGo login by @FreddleSpl0it ➡️ [PR #7624](https://github.com/mailcow/mailcow-dockerized/pull/7624)
* [Web] Update "Last modified" when tags of a domain or mailbox change by @FreddleSpl0it ➡️ [PR #7625](https://github.com/mailcow/mailcow-dockerized/pull/7625)
* [Web] Autodiscover: no ActiveSync when autodiscoverType is imap by @FreddleSpl0it ➡️ [PR #7631](https://github.com/mailcow/mailcow-dockerized/pull/7631)
* [Nginx] Send Basic auth challenge for unauthenticated ActiveSync requests by @ThxGiving ➡️ [PR #7530](https://github.com/mailcow/mailcow-dockerized/pull/7530)
* [Nginx] Edit and quarantine links: allow a trailing slash by @FreddleSpl0it ➡️ [PR #7629](https://github.com/mailcow/mailcow-dockerized/pull/7629)
* [Web] Forwarding hosts: store IPv6 addresses in canonical form by @FreddleSpl0it ➡️ [PR #7633](https://github.com/mailcow/mailcow-dockerized/pull/7633)
* [Web] Template lists: sort size columns numerically by @FreddleSpl0it ➡️ [PR #7638](https://github.com/mailcow/mailcow-dockerized/pull/7638)
* [Web] Table UI polish (icon centering, tag heights, sort headers) by @pReya ➡️ [PR #7540](https://github.com/mailcow/mailcow-dockerized/pull/7540)
* [Web] Keycloak: accept Base64-encoded mailcow_password by @FreddleSpl0it ➡️ [PR #7634](https://github.com/mailcow/mailcow-dockerized/pull/7634)
* [Web] Keycloak: skip introspection of an expired admin token and reuse the new one by @jorgeavlobo ➡️ [PR #7544](https://github.com/mailcow/mailcow-dockerized/pull/7544)
* [Web] Fix ignore_ssl_error key in identity provider settings by @junkerderprovinz ➡️ [PR #7548](https://github.com/mailcow/mailcow-dockerized/pull/7548)

### New Contributors

* @ThxGiving made their first contribution ➡️ [PR #7530](https://github.com/mailcow/mailcow-dockerized/pull/7530)
* @apio-sys made their first contribution ➡️ [PR #7488](https://github.com/mailcow/mailcow-dockerized/pull/7488)
* @jorgeavlobo made their first contribution ➡️ [PR #7544](https://github.com/mailcow/mailcow-dockerized/pull/7544)
* @woodfairy made their first contribution ➡️ [PR #7610](https://github.com/mailcow/mailcow-dockerized/pull/7610)
* @peterschwps made their first contribution ➡️ [PR #7581](https://github.com/mailcow/mailcow-dockerized/pull/7581)
* @junkerderprovinz made their first contribution ➡️ [PR #7548](https://github.com/mailcow/mailcow-dockerized/pull/7548)
* @pReya made their first contribution ➡️ [PR #7540](https://github.com/mailcow/mailcow-dockerized/pull/7540)
* @wbilalz400 made their first contribution ➡️ [PR #7516](https://github.com/mailcow/mailcow-dockerized/pull/7516)
* @philippderdiedas made their first contribution ➡️ [PR #7500](https://github.com/mailcow/mailcow-dockerized/pull/7500)

### Full Changelog
[https://github.com/mailcow/mailcow-dockerized/compare/2026-11...2026-11a](https://github.com/mailcow/mailcow-dockerized/compare/2026-11...2026-11a)

---

## 2026-11 (Release: 5th November 2026)

**Moohoo everyone!**

The **2026-11 Update** brings several new features and security fixes. New are mailbox groups and shared mailboxes, identity provider sync, a reworked imapsync and multiple API keys.

{{< admonition type=danger title="Backup" open=true >}}
**Please create a [backup](https://docs.mailcow.email/backup_restore/b_n_r-backup/) before updating.**
{{< /admonition >}}

{{< admonition type=warning title="Important security update" open=true >}}
**We strongly recommend updating as soon as possible.**
Among other issues, this release fixes a **remote code execution (RCE)** vulnerability that can be exploited by authenticated admins and domain admins. Details on the fixed issues will be published early next week. Please read the breaking changes before updating.

**Workaround** until you can update: limit access to admin and domain admin accounts.
{{< /admonition >}}

### ⚠️ Breaking Changes

* **Sync job API:** `add/syncjob` needs a `source_id`, the server fields (`host1`, `port1`, `enc1`, `authmech1`) are no longer accepted or returned. Existing jobs are migrated automatically. If you create or read sync jobs through the API, update your client: create a source with `add/syncjob_source` (or look it up with `get/syncjob_source/all`) and pass its `source_id`. ➡️ API docs on your own mailcow at `https://<your-mailcow>/api`
* **Request body limit:** 64 MB for the UI and API, `NGINX_MAX_BODY_SIZE` (default `128m`) for SOGo, ActiveSync and DAV. If you raised the Postfix message size limit, set `NGINX_MAX_BODY_SIZE` in `mailcow.conf` above it and run `docker compose up -d`. ➡️ [Docs](https://docs.mailcow.email/manual-guides/Postfix/u_e-postfix-attachment_size/)
* **Custom nginx locations** (`data/conf/nginx/site.*.custom`) are now limited to 64 MB as well. Apps under the mailcow host (e.g. Nextcloud under a path) reject larger uploads with `413`, own server blocks in `data/conf/nginx/*.conf` are not affected. Add `client_max_body_size` to your location (e.g. `client_max_body_size 0;` for no limit) and run `docker compose restart nginx-mailcow`.

### 🔐 Security

* **SOGo 5.12.13**, an upstream security release ➡️ [Release notes](https://github.com/Alinto/sogo/releases/tag/SOGo-5.12.13)
* Several security fixes in mailcow (details next week)
* Fail2ban counts failed logins of all protocols (IMAP, POP3, SMTP, Sieve, EAS, DAV), 2FA rate limit

### 🚀 New Features

* **Mailbox groups:** distribution lists, send-as, shared mailboxes and SOGo calendars/address books for groups. ➡️ [Docs](https://docs.mailcow.email/manual-guides/mailcow-UI/u_e-mailcow_ui-groups/)
* **Identity provider sync** (Keycloak, LDAP/AD): groups and members, optional offboarding. ➡️ [Docs](https://docs.mailcow.email/manual-guides/mailcow-UI/u_e-mailcow_ui-idp-sync/)
* **imapsync rework:** sync sources, OAuth2 for Microsoft 365 and Google, parallel jobs, certificate check of the source server, imapsync 2.314. ➡️ [Docs](https://docs.mailcow.email/post_installation/firststeps-sync_jobs_migration/)
* **API keys:** multiple keys with read-only or read-write access and their own IP allowlist. Keys from `mailcow.conf` are shown as locked service keys. ➡️ [Docs](https://docs.mailcow.email/manual-guides/mailcow-UI/u_e-mailcow_ui-api/)

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

Stay safe and enjoy!

Your mailcow Team from **The Infrastructure Company GmbH** (or shortly **tinc**)
