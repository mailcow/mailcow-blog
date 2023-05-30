---
title: "🌷🐄 Mooay Update 2023 - Revision A (⚠️ CRITICAL security update ⚠️)"
date: 2023-05-30T09:30:10+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2023", "update", "changelog", "security", "hotfix", "important"]
categories: ["Updates", "Hotfix"]

---

**Moohoo everyone!**

A very urgent security update for mailcow (2023-05a) has just been released.

We urge you to apply this update as this vulnerability has been lurking in the code for quite some time (before 2020).

<!--more-->

Roughly speaking, this vulnerability is a password parsing bug on the part of Dovecot and mailcow.

More detailed information as well as a proof of concept will be available in a **CVE** in the next few days.

There is **NO** workaround for this problem!

### Changelog

- The Nextcloud script now installs Nextcloud 26.0.2 or updates to it (if desired).
- A critical vulnerability in Dovecot was closed, which allowed unauthorized access to another mailbox via a password change. A separate CVE and POC will follow in a few days.
- In the Dockerfiles the maintainer was changed from Andrè to tinc (The Infrastructure Company GmbH).

As always, the full changelog with the individual commits is available on GitHub:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-05a

---

Please make sure that your e-mail server **always** has a current patch level!

Otherwise, what always applies:

Stay healthy and happy mailing!

Your mailcow Team
> Niklas aka. DerLinkman