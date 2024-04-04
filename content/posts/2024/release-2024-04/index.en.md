---
title: "🥚🐄 Moopril Update 2024 | Security Update"
date: 2024-04-04T09:30:00+02:00
draft: false

author: Patrick Schult/FreddleSpl0it
authorLink: "https://github.com/FreddleSpl0it"
toc: true

license: ""

tags: ["2024", "update", "important", "security"]
categories: ["Updates"]

---

## 2024-04 (Release April 4th, 2024)

**Moohoo** Everyone!

With the Moopril update, two security vulnerabilities in mailcow will be closed.
1. CVE-2024-31204: XSS Vulnerability via Exception Handler
2. CVE-2024-30270: Path Traversal and Arbitrary Code Execution Vulnerability

Additionally, SOGo has been updated to version 5.10.0, and a bug in the domain-wide footer has been fixed.

### Changelog

* chore(deps): update thollander/actions-comment-pull-request action to v2.5.0 by @renovate in https://github.com/mailcow/mailcow-dockerized/pull/5747
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5762
* sogo: upgrade to 5.10.0 by @DerLinkman in https://github.com/mailcow/mailcow-dockerized/pull/5765
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5777
* [Web]Small change about zh-cn translation by @aaadddfgh in https://github.com/mailcow/mailcow-dockerized/pull/5789
* [Postfix] update postscreen_access.cidr by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5770
* Remove one GmbH in Dockerfiles by @MAGICCC in https://github.com/mailcow/mailcow-dockerized/pull/5743
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5810
* Update French translation by @yvan-algoo in https://github.com/mailcow/mailcow-dockerized/pull/5805
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5813
* [Postfix] update postscreen_access.cidr by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5811
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5815
* [Rspamd] Set local_addrs lo mailcow networks by @dragoangel in https://github.com/mailcow/mailcow-dockerized/pull/5812
* [Rspamd] milter update Content-Type and Content-Transfer-Encoding header by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/5751
* [Web] fix exception handler and rspamd_maps function by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/5818

The complete changelog, including individual commits, is available on GitHub for those interested:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2024-04

---

Thanks to [Paul Gerste](https://github.com/paul-gerste-sonarsource) from [Sonar](https://www.sonarsource.com/) for reporting the security vulnerabilities.
Please always ensure your email server is up to date with patches!

Stay healthy and happy mailing.

Your mailcow team
> Patrick
