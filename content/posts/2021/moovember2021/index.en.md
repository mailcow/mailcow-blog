---
title: "🐄 Moovember 2021 - Patchnotes"
date: 2021-12-03T09:49:47+01:00
draft: false

author: "Niklas Meyer"
authorLink: "https://github.com/DerLinkman"
description: "Patchnotes for the November 2021 Update"
  
categories: ["Updates"]
tags: ["2021", "update", "changelog"]
---

**Moohoo everyone!**

Niklas here to present you the latest news around our lovely mailcow :)

Let's get started, shall we?

--- 
#### Major changes from November 2021 for the mailcow stack:
- SOGo update to 5.3.0
- Dovecot update to 2.3.17
- ClamAV update to 0.103.4
- [Web] Auto-generated app passwords for Apple configuration profiles

Please consider updating your mailcow stack to ensure a stable environment.

---
#### All changes from November 2021 for the mailcow stack (newest to oldest):
**30th November 2021:**
- [SOGo] Update Image (Docker Image for mailcow stack)

**29th November 2021:**
- Translations update from Weblate (Pull request: [#4351](https://github.com/mailcow/mailcow-dockerized/pull/4351 "#4351"))

**28th November 2021:**
- [web] Fix several raw html flags in twig (Pull request: [#4325](https://github.com/mailcow/mailcow-dockerized/pull/4325 "#4325"))
- [web] fixed html in alerts 
- [README] Separate build badges
- Translations update from Weblate (Pull requests: [#4347](https://github.com/mailcow/mailcow-dockerized/pull/4347 "#4347") & [#4346](https://github.com/mailcow/mailcow-dockerized/pull/4346 "#4346"))

**27th November 2021:**
- Translations update from Weblate (Pull request: [#4345](https://github.com/mailcow/mailcow-dockerized/pull/4345 "#4345"))
- [README] Added build + translation badge
- [Web] Updated lang.de.json (Pull request: [#4344](https://github.com/mailcow/mailcow-dockerized/pull/4344 "#4344"))
- [CI] Run tests on staging branch
- [API] Updated docs for transport route
- [Web] Updated lang.de.json (Pull request: [#4343](https://github.com/mailcow/mailcow-dockerized/pull/4343 "#4343"))

**26th November 2021:**
- [Web] Fix lang strings
- [Web] Change lang strings inding in 0
- [web] Delete XMPP references from langfiles ([#4338](https://github.com/mailcow/mailcow-dockerized/pull/4338 "#4338"))

**22th November 2021:**
- Update SOGo to 5.3.0 (Pull request: [#4330](https://github.com/mailcow/mailcow-dockerized/pull/4330 "#4330"))

**18th November 2021:**
- [MariaDB] Further increase connections
- [Rspamd] Return CAB to archive_extensions
- [Rspamd] Adjust CAB score detection

**15th November 2021:**
- [Config] Fix link, fixes (Issue: [#4322](https://github.com/mailcow/mailcow-dockerized/issues/4322 "#4322"))

**14th November 2021:**
- [ClamAV] Change mirror for Dockerfile
- [Dovecot] v2.3.17
- [Web] Auto-generated app passwords for Apple configuration profiles (Pull request: [#4316](https://github.com/mailcow/mailcow-dockerized/pull/4316 "#4316"))

**12th November 2021:**
- Add missing API endpoint to openapi.yaml (Pull request: [#4320](https://github.com/mailcow/mailcow-dockerized/pull/4320 "#4320"))

**11th November 2021:**
- [ClamAV] Update to 0.103.4 (Pull request: [#4314](https://github.com/mailcow/mailcow-dockerized/pull/4314 "#4314"))

---
As this is our last changelog for 2021, the whole tinc (The Infrastructure Company) team wishes you a 🎄 **Merry Christmas** 🎁 and a 🎆 **Happy New Year 2022** 🥂.
 
*May the next year be with you!*