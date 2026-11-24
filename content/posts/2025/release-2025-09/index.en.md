---
title: "🍂🐄 Mootember Update 2025 | MTA-STS Support, SOGo 5.12.3, Rspamd 3.12.1, and More - Revision A"
date: 2025-09-10T11:30:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["Rspamd", "SOGo", "MTA-STS"]
categories: ["Updates"]

---

# 2025-09c (Revision C Release from 7th October 2025)

## Changes
- [SOGo][Web] SOGo URL Encryption support ➡️ [PR #6758](https://github.com/mailcow/mailcow-dockerized/pull/6758)
- [Nginx] do not invert ENABLE_IPV6 ➡️ [PR #6762](https://github.com/mailcow/mailcow-dockerized/pull/6762)
- [Web] Remove Port from HTTP_HOST ➡️ [PR #6760](https://github.com/mailcow/mailcow-dockerized/pull/6760)
- [Web] Allow wildcard subdomains for MTA-STS ➡️ [PR #6759](https://github.com/mailcow/mailcow-dockerized/pull/6759)
- [Web] set cookie SameSite attribute to Lax ➡️ [PR #6766](https://github.com/mailcow/mailcow-dockerized/pull/6766)
- [Web] Rename PHP Cookie to MCSESSID ➡️ [PR #6767](https://github.com/mailcow/mailcow-dockerized/pull/6767)
- Update GitHub's issue template ➡️ [PR #6772](https://github.com/mailcow/mailcow-dockerized/pull/6772)
- Clearer message to install required tool, e.g. jq ➡️ [PR #6764](https://github.com/mailcow/mailcow-dockerized/pull/6764)
- Make domain description field readonly when no ACL ➡️ [PR #6789](https://github.com/mailcow/mailcow-dockerized/pull/6789)
- Show "Never" by default if no last-modified date saved ➡️ [PR #6788](https://github.com/mailcow/mailcow-dockerized/pull/6788)
- Hide relayhosts when ACL does not allow ➡️ [PR #6787](https://github.com/mailcow/mailcow-dockerized/pull/6787)
- Fix several SQL statements ➡️ [PR #6786](https://github.com/mailcow/mailcow-dockerized/pull/6786)
- Fixed wrong footer escaping for certain characters ➡️ [PR #6782](https://github.com/mailcow/mailcow-dockerized/pull/6782)
- Rename password fields for AppPasswords same way for consistency ➡️ [PR #6781](https://github.com/mailcow/mailcow-dockerized/pull/6781)
- Fixed password complexity check for AppPasswords creation/edit ➡️ [PR #6780](https://github.com/mailcow/mailcow-dockerized/pull/6780)
- Remove debug console.log calls ➡️ [PR #6779](https://github.com/mailcow/mailcow-dockerized/pull/6779)
- Enable HTTPS redirect by default on new setups ➡️ [PR #6777](https://github.com/mailcow/mailcow-dockerized/pull/6777)
- [Helpers] Fix cold-standby digits in compose project names and inclusion of docker-compose.override.yml ➡️ [PR #6800](https://github.com/mailcow/mailcow-dockerized/pull/6800)
- Fix enabling of ipv6 when updating ➡️ [PR #6791](https://github.com/mailcow/mailcow-dockerized/pull/6791)
- Update variable name for prometheus-exporter security token ➡️ [PR #6776](https://github.com/mailcow/mailcow-dockerized/pull/6776)
- Fixed typo in lang de-de ➡️ [PR #6765](https://github.com/mailcow/mailcow-dockerized/pull/6765)
- Fix typos in config by ➡️ [PR #6792](https://github.com/mailcow/mailcow-dockerized/pull/6792)
- chore(deps): update actions/stale action to v10.1.0 ➡️ [PR #6806](https://github.com/mailcow/mailcow-dockerized/pull/6806)
- [Postfix] update postscreen_access.cidr ➡️ [PR #6801](https://github.com/mailcow/mailcow-dockerized/pull/6801)
- Translations update from Weblate ➡️ [PR #6771](https://github.com/mailcow/mailcow-dockerized/pull/6771)
- Translations update from Weblate ➡️ [PR #6794](https://github.com/mailcow/mailcow-dockerized/pull/6794)
- Translations update from Weblate ➡️ [PR #6785](https://github.com/mailcow/mailcow-dockerized/pull/6785)
- Translations update from Weblate ➡️ [PR #6790](https://github.com/mailcow/mailcow-dockerized/pull/6790)
- Translations update from Weblate ➡️ [PR #6793](https://github.com/mailcow/mailcow-dockerized/pull/6793)
- Translations update from Weblate ➡️ [PR #6743](https://github.com/mailcow/mailcow-dockerized/pull/6743)
- Translations update from Weblate ➡️ [PR #6749](https://github.com/mailcow/mailcow-dockerized/pull/6749)

## Full Changelog
https://github.com/mailcow/mailcow-dockerized/compare/2025-09b...2025-09c

---

# 2025-09b (Revision B Release from 12th September 2025)

This update fixes startup issues with the NGINX container that occurred when `ENABLE_IPV6=true` was set in the `mailcow.conf`.

## Bug Fixes
- [NGINX] Disable IPv6 support in Nginx configuration ➡️ [PR #6736](https://github.com/mailcow/mailcow-dockerized/pull/6736)
- [SOGo] Drop deprecated sogo_update_password sql trigger if it still exists ➡️ [PR #6727](https://github.com/mailcow/mailcow-dockerized/pull/6727)
- [Web] remove unused bcc dest column from alias table ➡️ [PR #6726](https://github.com/mailcow/mailcow-dockerized/pull/6726)
- [Core] ipv6_controller improvement + fix modules handling ➡️ [PR #6722](https://github.com/mailcow/mailcow-dockerized/pull/6722)

## Full Changelog
https://github.com/mailcow/mailcow-dockerized/compare/2025-07...2025-09b

---

# 2025-09a (Revision A Release from 10th September 2025)

This update fixes crashes in the `create_cold_standby` script and prevents running the `update` / `generate-config` scripts from a directory that is not the mailcow root.

It also improves detection and handling of the newly introduced IPv6 controller and now correctly recognizes Docker versions greater than 28 (reducing required `daemon.json` settings).

Full changelog:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2025-09a

---

# 2025-09 (Release: 10th September 2025)

**Moohoo everyone!**

We're excited to bring you the **2025-09 Update**!  
This release delivers **new features, component updates, and the usual round of bug fixes**.  

{{< admonition type=warning title="Important" open=true >}}  
mailcow now requires `jq` to be installed on the host system in order to operate with the redesigned IPv6 controller.  
If it's missing, please install it **before** running the update, this tool is mandatory and will not be removed in a future release.  
{{< /admonition >}}

{{< admonition type=warning title="Important" open=true >}}  
This update introduces a brand-new container: **`postfix-tlspol-mailcow`**,  which adds outbound **MTA-STS support** to Postfix.    

After updating, verify that the new container is running correctly by  reviewing the logs:  
```
docker compose logs -f --tail 200 postfix-tlspol-mailcow
```

If you encounter **CPU Problems** or **continuous restarts**, rebuild the image manually:  
```
docker build -t ghcr.io/mailcow/postfix-tlspol:1.0 data/Dockerfiles/postfix-tlspol
docker compose up -d
```  
{{< /admonition >}}


## Features
- [Rspamd][Web] Internal alias support ➡️ [PR #6713](https://github.com/mailcow/mailcow-dockerized/pull/6713)
- [Postfix][Web] add mta-sts support ➡️ [PR #6686](https://github.com/mailcow/mailcow-dockerized/pull/6686)
- [Helper-Scripts] Add prometheus exporter and grafana dashboard for mailcow ➡️ [PR #6314](https://github.com/mailcow/mailcow-dockerized/pull/6314)
- [DB][Web] optimize qhandler by keeping SHA2 in new column qhash ➡️ [PR #6556](https://github.com/mailcow/mailcow-dockerized/pull/6556)
- [Web] Add delimiter_action to mailbox and mailbox_template add/edit admin forms ➡️ [PR #6620](https://github.com/mailcow/mailcow-dockerized/pull/6620)
- [Core] modules splitting + ipv6 nat rewrite ➡️ [PR #6634](https://github.com/mailcow/mailcow-dockerized/pull/6634)

## Updates
- [SOGo] update to 5.12.3 ➡️ [Commit 360fe03](https://github.com/mailcow/mailcow-dockerized/commit/360fe0349734098bd9da75841c8cd221fbf8c32f)
- [Rspamd] update rspamd to 3.12.1 ➡️ [PR #6643](https://github.com/mailcow/mailcow-dockerized/pull/6643)

## Bug Fixes
- [Clamd] Changed clamavs tmp folder structure ➡️ [PR #6698](https://github.com/mailcow/mailcow-dockerized/pull/6698)
- [Rspamd] only recreate external_services.conf file if it was deleted ➡️ [PR #6717](https://github.com/mailcow/mailcow-dockerized/pull/6717)
- [Dovecot] imapsync gets correct timeouts from imapsync_runner.pl ➡️ [PR #6682](https://github.com/mailcow/mailcow-dockerized/pull/6682)
- [Web] Fix multiple PHP Warnings present in "stock" installation ➡️ [PR #6651](https://github.com/mailcow/mailcow-dockerized/pull/6651)
- [Dovecot] Prevent user login if protocol access has been disabled ➡️ [PR #6716](https://github.com/mailcow/mailcow-dockerized/pull/6716)
- [Web] Only include mailcow_info in JS when mailcow_cc_username is set ➡️ [PR #6715](https://github.com/mailcow/mailcow-dockerized/pull/6715)
- [Rspamd] Add boundary if present when applying domain-wide footer ➡️ [PR #6714](https://github.com/mailcow/mailcow-dockerized/pull/6714)
- [Rspamd] Do not increment rate limit for emails from user to himself ➡️ [PR #6706](https://github.com/mailcow/mailcow-dockerized/pull/6706)
- [Web] rename login placeholder for mailbox to email address ➡️ [PR #6693](https://github.com/mailcow/mailcow-dockerized/pull/6693)
- [Watchdog] use dig instead of check_dns ➡️ [PR #6685](https://github.com/mailcow/mailcow-dockerized/pull/6685)
- [Rspamd] Fill module name for set_pre_result actions ➡️ [PR #6630](https://github.com/mailcow/mailcow-dockerized/pull/6630)
- [Netfilter] fix negative timer, no unbanning of IPs ➡️ [PR #6575](https://github.com/mailcow/mailcow-dockerized/pull/6575)


## Full Changelog
https://github.com/mailcow/mailcow-dockerized/compare/2025-07...2025-09

---


That's all for this release! As always, we recommend keeping your mailcow installation up-to-date and backing up your data regularly.

Stay safe and enjoy!

Your mailcow Team from **The Infrastructure Company GmbH** (or shortly **tinc**)
