---
title: "🏮🐄 Moovember | Mailbox Rename, SOGo 5.11.1, Rspamd 3.10.2, and More | Revision A"
date: 2024-11-07T12:00:00+02:00
draft: false

author: FreddleSpl0it
authorLink: "https://github.com/FreddleSpl0it"
toc: true

license: ""

tags: ["2024", "update", "changelog"]
categories: ["Updates"]

---

# 2024-11a Update (Released on November 12, 2024)

### Updates

- **SOGo**: Updated to version 5.11.2, including security updates.<br>
 ➡️ [PR #6156](https://github.com/mailcow/mailcow-dockerized/pull/6156)

- **PHP-FPM**: Ensures actual, consistent use of the fixed DNS lookup module for cURL within the container + workaround for a broken debug page affecting some users.<br>
 ➡️ [PR #6159](https://github.com/mailcow/mailcow-dockerized/pull/6159)

### Improvements

- **update.sh**: If an old `dns_blocklists.cf` exists, users will be **prompted once** to delete it to allow proper regeneration.<br>
 ➡️ [PR #6154](https://github.com/mailcow/mailcow-dockerized/pull/6154)

- **Language**: Improved Chinese translations.<br>
 ➡️ [PR #6151](https://github.com/mailcow/mailcow-dockerized/pull/6151)

---

# 2024-11 Update (Released on 7th November 2024)

**Moohoo** everyone!

November brings a fresh update to mailcow, packed with a new feature, security updates, enhancement and components updates

### Mailbox Rename Feature
With the new mailbox rename feature, admins now have the ability to rename the local part of a mailbox. Since this is a new feature, a warning will prompt users to back up their data before proceeding, ensuring added safety.
➡️ [PR #6045](https://github.com/mailcow/mailcow-dockerized/pull/6045)

### Security

- **twig Security Update**
  We've upgraded twig to version 3.14.0 to address recent security vulnerabilities.<br>
  https://github.com/advisories/GHSA-6j75-5wfj-gh66<br>
  ➡️ [PR #6071](https://github.com/mailcow/mailcow-dockerized/pull/6071)

### Enhancements

- **dovecot Lazy Expunge**
  The `lazy_expunge` plugin is now bundled within mailcow. It is disabled by default, but can be activated by modifying dovecot's extra.cf
  ➡️ [PR #6112](https://github.com/mailcow/mailcow-dockerized/pull/6112)

- **X-Original-To Header in postfix**
  Postfix now includes the `X-Original-To` header by default.
  ➡️ [PR #6110](https://github.com/mailcow/mailcow-dockerized/pull/6110)

- **Display Last SSO Login**
  Admins can now view the last SSO login time directly in the mailbox table.
  ➡️ [PR #5724](https://github.com/mailcow/mailcow-dockerized/pull/5724)

- **TLS Compatibility for Legacy Systems**
  Added a patch to support TLS 1.0/1.1 in OpenSSL, improving compatibility for users with legacy systems requiring older TLS versions.
  ➡️ [PR #6105](https://github.com/mailcow/mailcow-dockerized/pull/6105)

- **Redis for PHP-FPM Sessions**
  PHP-FPM now uses redis as its session store.
  ➡️ [PR #6044](https://github.com/mailcow/mailcow-dockerized/pull/6044)

- **Rspamd mime Types Configuration**
  The `mime_types.conf` file of Rspamd has been updated.
  ➡️ [PR #6013](https://github.com/mailcow/mailcow-dockerized/pull/6013)

- **Vacation Auto-Reply Fix in SOGo**
  A problem was fixed where the start and end dates of vacation auto-replies in SOGo were shifted by one day in the Sieve filter.
  ➡️ [PR #6057](https://github.com/mailcow/mailcow-dockerized/pull/6057)

### Updates

- **Rspamd Update to 3.10.2**
   Rspamd was updated to version 3.10.2
  ➡️ [PR #6122](https://github.com/mailcow/mailcow-dockerized/pull/6122)

- **PHP-FPM Base OS Update to Alpine 3.20**
  PHP-FPM base OS was updated to Alpine 3.20.
  ➡️ [PR #6106](https://github.com/mailcow/mailcow-dockerized/pull/6106)

- **SOGo Update to 5.11.1**
  SOGo was updated to version 5.11.1.
  ➡️ [PR #6109](https://github.com/mailcow/mailcow-dockerized/pull/6109)

<br><br>
The full changelog, including individual commits, is available on GitHub for those interested:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2024-11

---

That’s all for this release! As always, we recommend keeping your mailcow installation up-to-date and backing up your data regularly.

Stay safe and enjoy!

Your mailcow Team
*FreddleSpl0it*
