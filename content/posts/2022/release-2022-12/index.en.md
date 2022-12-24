---
title: "🎄🐄 Moocember Update 2022 - MUH-I Update (Bootstrap 5) "
date: 2022-12-24T09:30:10+02:00
draft: false

author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true
lightgallery: true

license: ""

tags: ["2022", "update", "changelog"]
categories: ["Updates"]

featuredImage: "/images/2022-12/mailcow_ui_login.en.png"
featuredImagePreview: "/images/2022-12/mailcow_ui_login.en.png"
---

## Introduction

**Moohoo everyone!**

To end the chaotic year 2022 in a worthy manner, the time has finally come.  The long awaited Bootstrap 5 update is finally here!

As already mentioned in some posts, this update marks only the turning point of the mailcow UI, because the new base (Bootstrap 5) will offer us many new possibilities and scope for new features in the future.

Because of the Bootstrap update the old UI was completely renewed and ported to the new version. So there might be some differences compared to the old UI.

Well, but enough about the introduction. Now we come to the actual changelog:

---

## Changelog

[NEW] Redesigned UI, based on Bootstrap 5
- Brand new Status Page! (Replaces the previous Status Page and summarizes it with new information).
- New integration of the new Docker API (allows generating the new diagrams on the new Status Page).
- Darkmode! (Thanks to @Foxly for contributing to the darkmode code).
- New loading animations.
- Redesign of UI components (buttons, tables, etc.).
- New position of the mail queue. Previously under: System -> Mail Queue (quite hidden). Now under: System -> Mail -> Mail Queue (below the quarantine button in the navbar).
- Optimized UI performance.

[NEW] The complete Docker API (which is used to control Docker containers within the stack) has been completely rewritten as part of the Bootstrap 5 update.

[NEW] ClamAV has been updated to Version 1.0. New Container Version: 1.60<br>
The changelog for the 1.0 version of ClamAV can be found here:
https://github.com/Cisco-Talos/clamav/releases/tag/clamav-1.0.0

[NEW] Nextcloud install script now installs Nextcloud 25. Additionally, the uninstall was fixed because the uninstall still removed the old tables(nc instead of oc).

[NEW] Our Alpine Linux based containers (php-fpm, netfilter, unbound, olefy, acme, dockerapi, watchdog) have been updated to Alpine 3.17.

[NEW] Many translation changes. Some strings have been renamed, others removed. However, German and English are 100% complete.

[FIX] Some Netfilter rules (related to Dovecot logins) were not recognized correctly before. These have been fixed. **RESET OF THE NETFILTER RULES WITHIN THE MAILCOW UI REQUIRED

[FIX] The `update-docker-compose.sh` script has been rebuilt to get the latest Docker-Compose version directly from GitHub instead of via our Servercow page.

[FIX] The bulk header map of RSPAMD has been adjusted and AWeber has been removed. This should prevent emails from said provider from being treated negatively directly.

[FIX] The message ID for Pushover has been added as information to the mailcow UI.

---

So, that it.

You can always find the complete Changelog over at GitHub: 
https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-12

We hope you like the new UI as much as we do. 

As always, your feedback is always welcome. So let's continue with the feedback collection. Only this time with more people giving us feedback :)

We also want to say a big thank you to YOU! You are the heart that keeps mailcow alive, whether it's your support on Telegram, in the forum, mailcow tutorials/guides or uploads to Youtube etc. about mailcow or simply that you use mailcow. THANK YOU, just THANK YOU!

With this in mind, the whole mailcow/tinc team wishes you a Merry Christmas, good food, a good time and a Happy New Year 2023.

*If there are no critical bugs the mailcow team will take a little break between Christmas and New Year*.

**Your mailcow team** <br>
> *Niklas*