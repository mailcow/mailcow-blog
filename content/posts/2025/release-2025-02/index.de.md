---
title: "🐥🐄 Febmooary 2025 Update | Rspamd and MariaDB Update"
date: 2025-02-27T13:20:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["2025", "update", "changelog", "major"]
categories: ["Updates"]

---

**Moohoo zusammen!**  

Es ist wieder Zeit für ein Update.  

Dieses Mal haben wir **Rspamd auf 3.11-2 aktualisiert**, **MariaDB auf 10.11 angehoben** und **unsere Docker-Images von Docker Hub nach GitHub verschoben**.  
Kein großes Ding, aber ein paar wichtige Änderungen.  

### Wichtiger Fix: Dovecot & Netfilter  

Bisher erlaubte Dovecot mehrere fehlgeschlagene Anmeldeversuche innerhalb einer einzigen Sitzung, ohne dass Netfilter dies korrekt erkannte. Dieses Problem wurde nun behoben.  

📌 **Aktion erforderlich:** Admins sollten die **Fail2Ban-Regex-Filter zurücksetzen**:  
*System → Konfiguration → Optionen → Fail2Ban-Parameter → Regex-Filter erweitern → „Auf Standard zurücksetzen“ klicken*  

### MariaDB-Upgrade – Jetzt auf 10.11  

Wir haben MariaDB von **10.5 auf 10.11** aktualisiert.  

❗ **Achtung:**  
- Bitte **ändert die MariaDB-Version nicht manuell** in der `docker-compose.yml`, da dies zu einer Beschädigung der Datenbank führen kann, wenn der Code nicht entsprechend angepasst wurde.  
- **Ein Downgrade ist nicht möglich!** Sobald eure Datenbank auf 10.11 migriert wurde, gibt es keinen Weg zurück auf 10.5.  

### Docker-Images jetzt auf GitHub  

Docker Hub hat neue Ratenlimits eingeführt, daher haben wir beschlossen, unsere eigenen **mailcow-Docker-Images in die GitHub Container Registry (GHCR)** zu verlagern.  

💡 Mehr Infos zu den Docker-Einschränkungen findet ihr hier https://docs.docker.com/docker-hub/usage/  

### Weitere Änderungen

- Fix check_prs_if_on_staging workflow by @MAGICCC in ➡️ [PR #6286](https://github.com/mailcow/mailcow-dockerized/pull/6286)
- Update generate_config.sh version checking for wider compatibility by @digitalhen in ➡️ [PR #6270](https://github.com/mailcow/mailcow-dockerized/pull/6270)
- chore(deps): update devops-infra/action-pull-request action to v0.6.0 by @renovate in ➡️ [PR #6302](https://github.com/mailcow/mailcow-dockerized/pull/6302)
- Ffdhe2048 by @dragoangel in ➡️ [PR #6223](https://github.com/mailcow/mailcow-dockerized/pull/6223)
- Adding lines to docker-compose.yml to allow for simpler SOGo web client UI customisation by @Babybatrick in ➡️ [PR #6220](https://github.com/mailcow/mailcow-dockerized/pull/6220)
- Translations update from Weblate by @milkmaker in ➡️ [PR #6307](https://github.com/mailcow/mailcow-dockerized/pull/6307)
- Update Rspamd to 3.11.0 and enable SMTPUTF8 for outgoing mail by @dragoangel in ➡️ [PR #6216](https://github.com/mailcow/mailcow-dockerized/pull/6216)
- [Mariadb] Update to 10.11 (LTS) by @DerLinkman in ➡️ [PR #5152](https://github.com/mailcow/mailcow-dockerized/pull/5152)
- Move sed cmd to remove discontinued DNSBLs by @MAGICCC in ➡️ [PR #6315](https://github.com/mailcow/mailcow-dockerized/pull/6315)
- [Dovecot][Netfilter] Fix dovecot failed login regex by @FreddleSpl0it in ➡️ [PR #6309](https://github.com/mailcow/mailcow-dockerized/pull/6309)
- rspamd: upgraded rspamd to 3.11.0-2 (incl. NIXSPAM Removal) by @DerLinkman in ➡️ [PR #6328](https://github.com/mailcow/mailcow-dockerized/pull/6328)
- Fix #2752 - Allow domain recipients for address rewrite by @PseudoResonance in ➡️ [PR #6155](https://github.com/mailcow/mailcow-dockerized/pull/6155)
- compose: use ghcr.io for new/current mailcow docker images by @DerLinkman in ➡️ [PR #6332](https://github.com/mailcow/mailcow-dockerized/pull/6332)
- Prompt user before applying major updates by @FreddleSpl0it in ➡️ [PR #6330](https://github.com/mailcow/mailcow-dockerized/pull/6330)
- use ghcr.io for backupimage by @MAGICCC in ➡️ [PR #6333](https://github.com/mailcow/mailcow-dockerized/pull/6333)
- Fix #5892 - Adding a domain wide footer leads to broken attachments
- Fix #6305 - Use Redis ACL user quota_notify with restricted access ➡️ [Commit ef2f5f7](https://github.com/mailcow/mailcow-dockerized/commit/ef2f5f7be0c2992580c1290e36d08bb73348600e)
- Fix incorrect session lifetime in sogo-auth.php ➡️ [Commit aaa7e4a](https://github.com/mailcow/mailcow-dockerized/commit/aaa7e4a184e2126bc0fa76e600cebb984aff29dc)
- [Nginx] Add support for trusted proxies via env var ➡️ [Commit a567d5d](https://github.com/mailcow/mailcow-dockerized/commit/a567d5dc3193286684fdf0b7cf287817bdfe6581)
- [Redis] Add support for masterauth via env var ➡️ [Commit 351f4ce](https://github.com/mailcow/mailcow-dockerized/commit/351f4ce787542b05dab8ad5c39c00429ef02233b)

The full changelog, including individual commits, is available on GitHub for those interested:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2025-02

---

Das war's für dieses Release! Wie immer empfehlen wir, eure mailcow-Installation auf dem neuesten Stand zu halten und regelmäßig Backups zu erstellen.  

Bleibt sicher und viel Spaß!  

Euer mailcow-Team von **The Infrastructure Company GmbH** (kurz **tinc**)
