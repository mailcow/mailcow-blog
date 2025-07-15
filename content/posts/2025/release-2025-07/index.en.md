---
title: "🔥🐄 Mooly Update 2025 | Security Update"
date: 2025-07-15T08:00:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["2025", "update", "changelog"]
categories: ["Updates"]

---


# 2025-07 (Release: 15th July 2025)

**Moohoo everyone!**

It’s update time again!  
This time with a small but important update.

## ⚠️ Security Notice
This update addresses a critical vulnerability that allowed Remote Code Execution (RCE) by authenticated admin users. All users are strongly advised to update. A CVE will follow the next Days.

## Changes

* Compose: add SELinux label to `mysql-socket-vol` – [PR #6560](https://github.com/mailcow/mailcow-dockerized/pull/6560)
* \[Postfix] Update `postscreen_access.cidr` – [PR #6573](https://github.com/mailcow/mailcow-dockerized/pull/6573)
* \[Postfix] Update `postscreen_access.cidr` – [PR #6611](https://github.com/mailcow/mailcow-dockerized/pull/6611)
* \[ACME] Remove deprecated `ACME_CONTACT` variable – [PR #6617](https://github.com/mailcow/mailcow-dockerized/pull/6617)
* \[Dovecot] Use Jinja2 sandbox for notification rendering – [PR #6631](https://github.com/mailcow/mailcow-dockerized/pull/6631)
* Translations update from Weblate – [PR #6548](https://github.com/mailcow/mailcow-dockerized/pull/6548)
* Translations update from Weblate – [PR #6552](https://github.com/mailcow/mailcow-dockerized/pull/6552)
* Translations update from Weblate – [PR #6582](https://github.com/mailcow/mailcow-dockerized/pull/6582)
* Translations update from Weblate – [PR #6589](https://github.com/mailcow/mailcow-dockerized/pull/6589)
* Translations update from Weblate – [PR #6599](https://github.com/mailcow/mailcow-dockerized/pull/6599)
* Translations update from Weblate – [PR #6600](https://github.com/mailcow/mailcow-dockerized/pull/6600)
* Translations update from Weblate – [PR #6601](https://github.com/mailcow/mailcow-dockerized/pull/6601)
* Translations update from Weblate – [PR #6609](https://github.com/mailcow/mailcow-dockerized/pull/6609)
* Translations update from Weblate – [PR #6614](https://github.com/mailcow/mailcow-dockerized/pull/6614)
* Translations update from Weblate – [PR #6622](https://github.com/mailcow/mailcow-dockerized/pull/6622)
* Translations update from Weblate – [PR #6629](https://github.com/mailcow/mailcow-dockerized/pull/6629)



## Full Changelog
https://github.com/mailcow/mailcow-dockerized/compare/2025-05...2025-07

---


That's all for this release! As always, we recommend keeping your mailcow installation up-to-date and backing up your data regularly.

Stay safe and enjoy!

Your mailcow Team from **The Infrastructure Company GmbH** (or shortly **tinc**)
