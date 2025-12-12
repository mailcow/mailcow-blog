---
title: "🎄🐮 Moocember 2025 | Just another bugfix update - Revision A"
date: 2025-12-09T08:55:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["2025", "update", "changelog"]
categories: ["Updates"]

---

{{< admonition warning >}}
If you are using Docker Compose v5, please make sure that you first apply these small fixes in order to prevent the update.sh script from failing:

```bash
git fetch origin/master
git checkout origin/master update.sh
```

Without this, the update script will tell you, that your docker compose version is unsupported, even if you are using v5.

This is due to a small typo in the version check that has been fixed but may need to be applied manually if you are on Docker Compose v5 already.
{{< /admonition >}}

## 2025-12a (Release: 12th December 2025)

### Fixed Issues and Improvements

- A duplicate or plaintext login notice is no longer generated, restoring correct display.
- The previously adjusted cron syntax for sa-rules download has been reverted in ofelia due to unexpected side effects.
- The backup system now pre-pulls the required image to ensure the latest available version is always used.
- Password verification now supports the PBKDF2-SHA512 hash algorithm, providing improved compatibility especially for FreeIPA environments.

As always, you can see the full changelog on GitHub: https://github.com/mailcow/mailcow-dockerized/releases/tag/2025-12a

---

## 2025-12 (Release: 9th December 2025)

**Moohoo everyone!**

We're excited to bring you the **2025-12 Update**!  
This release focuses on bug fixes and minor improvements to enhance your mailcow experience.

### 🌐 New Languages & Translation Updates

- Vietnamese added to the UI.
- Multiple updated translations from Weblate, improving overall internationalization.

### ⚙️ System Improvements

- Backup performance boosted: Switched from pigz to zstd for faster, more efficient compression.
- Backup container updated to Debian Trixie.
- Cronjobs revised: Compose now uses standard cron syntax, SOGo credentials for cron tasks were fixed.

### 📨 Mail Server & Security Enhancements

- Postfix: Updated postscreen_access.cidr to improve unwanted connection handling.
- Postfix TLS Policy Companion upgraded to latest Version 1.8.22.
- API fix: Missing break in CORS switch caused save operations to hang, now resolved.
- Security header cleanup: Removed deprecated X-XSS-Protection header.
- Nginx hardening: Nginx version is now fully hidden in HTTP context.

### 🧩 Web UI Improvements

- Danish language entry correctly ordered in the interface.
- Spam aliases can now be made permanent.

### 🔧 PHP & Performance

- PHP JIT disabled, since it provides no advantage in this environment and may cause issues.

---

As always you can see the full changelog here: https://github.com/mailcow/mailcow-dockerized/releases/tag/2025-12

That's all for this release!  
As always, we recommend keeping your mailcow installation up-to-date and backing up your data regularly.

Stay safe and enjoy!

Your mailcow Team from **The Infrastructure Company GmbH** (or shortly **tinc**)
