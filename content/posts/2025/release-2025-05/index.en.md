---
title: "💐🐄 Mooay 2025 Update | Identity Provider Improvements and Bug Fixes"
date: 2025-05-13T10:25:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["2025", "update", "changelog", "major"]
categories: ["Updates"]

---


# 2025-05 (Release: 13th May 2025)

**Moohoo everyone!**

It’s update time again!

This release brings improvements to identity providers, new quick links on the login page, and a few important bug fixes in Rspamd, Dovecot, and the web UI.

## Features
- [Web] Add identity_provider option to disable auto-creation of users on Login ➡️ [PR #6530](https://github.com/mailcow/mailcow-dockerized/pull/6530)
- [Web] Add quick links to other login pages and mailcow login toggle ➡️ [PR #6521](https://github.com/mailcow/mailcow-dockerized/pull/6521)
- Allow additional domains in OAuth2 redirect URLs ➡️ [PR #6483](https://github.com/mailcow/mailcow-dockerized/pull/6483)
- feat(olefy): Allow disabling Olefy ➡️ [PR #6398](https://github.com/mailcow/mailcow-dockerized/pull/6398)

## Changes
- [Postfix] update postscreen_access.cidr ➡️ [PR #6509](https://github.com/mailcow/mailcow-dockerized/pull/6509)
- Replace bgp.he.net with bgp.tools ➡️ [PR #6376](https://github.com/mailcow/mailcow-dockerized/pull/6376)
- Translations update from Weblate ➡️ [PR #6463](https://github.com/mailcow/mailcow-dockerized/pull/6463)
- Translations update from Weblate ➡️ [PR #6478](https://github.com/mailcow/mailcow-dockerized/pull/6478)
- Update dependency Imagick/imagick to v3.8.0 ➡️ [PR #6480](https://github.com/mailcow/mailcow-dockerized/pull/6480)
- Translations update from Weblate ➡️ [PR #6502](https://github.com/mailcow/mailcow-dockerized/pull/6502)

## Bug Fixes
- fix: typo in default_template ➡️ [PR #6518](https://github.com/mailcow/mailcow-dockerized/pull/6518)
- Fix typo in rspamd rule in composites.conf ➡️ [PR #6515](https://github.com/mailcow/mailcow-dockerized/pull/6515)
- [Fix] Moving mails by functions.quarantine.inc.php to inbox failed ➡️ [PR #6506](https://github.com/mailcow/mailcow-dockerized/pull/6506)
- rspamd: remove .info from fishy tlds (default) ➡️ [PR #6342](https://github.com/mailcow/mailcow-dockerized/pull/6342)
- Update legacy admin dashboard links ➡️ [PR #6485](https://github.com/mailcow/mailcow-dockerized/pull/6485)
- [Web] Fix force password update at next Login ➡️ [PR #6487](https://github.com/mailcow/mailcow-dockerized/pull/6487)
- Check if skip_sogo is not set before redirecting to SOGo ➡️ [PR #6495](https://github.com/mailcow/mailcow-dockerized/pull/6495)
- [Dovecot] Fix EAS login issue with app passwords and improve auth cache handling in Dovecot ➡️ [PR #6488](https://github.com/mailcow/mailcow-dockerized/pull/6488)

## Full Changelog
https://github.com/mailcow/mailcow-dockerized/compare/2025-03...2025-05

---


That's all for this release! As always, we recommend keeping your mailcow installation up-to-date and backing up your data regularly.

Stay safe and enjoy!

Your mailcow Team from **The Infrastructure Company GmbH** (or shortly **tinc**)
