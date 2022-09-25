---
title: "📰🐄 Jan(moo)uary Update 2022 - Revision A (2022-01a) 🪲 | Patchnotes"
date: 2022-02-01T15:28:32+01:00
draft: false
author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"

license: ""

tags: ["2022", "update", "changelog", "bugfix"]
categories: ["Updates"]
---

**Moohoo** everyone.

Today we are releasing the first hotfix for the 2022-01 Update.

This has changed:

---

#### Additions:
- We´ve added a Version Tag which is located at the bottom of the mailcow UI (It now shows the current release tag you are on!) Isn´t that crazy? (https://github.com/mailcow/mailcow-dockerized/pull/4437)

---

#### Changes:
- The passwordless SOGo Authentication is now supporting calender invitations and calender/contact subscriptions (https://github.com/mailcow/mailcow-dockerized/pull/4439)
- The Autoreply Schedule for SOGo has been changed from 24h to 5m (https://github.com/mailcow/mailcow-dockerized/pull/4441)

---

#### Fixes:
- We fixed a bug with the FIDO2 Passwordless Authentication (https://github.com/mailcow/mailcow-dockerized/pull/4440)

---

To include the latest patches from inverse we updated the SOGo Container to the latest nightly build (2022-02-01). **It´ll keep the same Tag as the previous release**.
