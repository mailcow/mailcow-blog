---
title: "🐥🐄 Febmooary 2024 Update | ClamAV Security Update"
date: 2024-02-15T10:53:22+02:00
draft: true

author: Patrick Schult/FreddleSpl0it
authorLink: "https://github.com/FreddleSpl0it"
toc: true

license: ""

tags: ["2024", "update", "changelog", "clamav", "clamd", "security"]
categories: ["Updates"]

---

## 2024-02 (Release 15th February 2024)

**Moohoo** Everyone!

With Febmooary, further recently released security vulnerabilities in mailcow have been addressed. These are the following security vulnerabilities in the ClamAV service that were fixed with version 1.2.2:
1. CVE-2024-20290: Fixed a possible heap overflow read bug in the OLE2 file parser that could cause a denial-of-service (DoS) condition.
2. CVE-2024-20328: Fixed a possible command injection vulnerability in the "VirusEvent" feature of ClamAV's ClamD service.

In the default configuration, mailcow is not affected by the **CVE-2024-20328** vulnerability, as the `VirusEvent` in the ClamAV configuration is not activated.

Further information at: https://blog.clamav.net/2023/11/clamav-130-122-105-released.html

Otherwise, we also have a few bug fixes for you.

### Changelog

- ClamAV update to version 1.2.2
- The Domain Wide Footer function now includes Alias Domains as well
- Domain names are now displayed in the Domain Table, in addition to the Punycode format, also in the Human Readable format
- Netfilter now respects the maximum ban time

The complete changelog, including individual commits, is available on GitHub for those interested:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2024-02

---

As always, we thank our wonderful mailcow community for your ongoing support and valuable feedback.

Stay healthy and happy mailing.

Your mailcow team
> Patrick
