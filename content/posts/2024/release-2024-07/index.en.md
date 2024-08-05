---
title: "🔥🐄 Mooly Update 2024 | Security Update"
date: 2024-08-05T09:08:00+02:00
draft: false

author: FreddleSpl0it
authorLink: "https://github.com/FreddleSpl0it"
toc: true

license: ""

tags: ["2024", "update", "changelog"]
categories: ["Updates"]

---

## 2024-07 (Release on 5th August 2024)

**Moohoo** everyone!

With the Mooly update, three security vulnerabilities in mailcow will be closed.

1. CVE-2024-41958 - Two-Factor Authentication (2FA) Bypass Vulnerability
2. CVE-2024-41959 - XSS Vulnerability via API Logs
3. CVE-2024-41960 - XSS Vulnerability via Relay Hosts Configuration

### Changelog

* Do not add MAILCOW_WHITE on failed DMARC
* [Postfix] update postscreen_access.cidr
* Security fixes

The full changelog, including individual commits, is available on GitHub for those interested:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2024-07

---

Thanks to **Julian B., Software Secured** and **Patrik Mayor, Ukatemi Technologies Plc** for reporting the security vulnerabilities.
Please always ensure your email server is up to date with patches!

Stay healthy and happy mailing.

Your mailcow team
> FreddleSpl0it