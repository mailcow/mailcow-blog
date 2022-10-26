---
title: "⚠️ 2022-10a | Critical stability update ⚠️"
date: 2022-10-26T09:30:10+02:00
draft: false

author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2022", "update", "changelog", "bugfix"]
categories: ["Updates","Hotfix"]
---

**Moohoo everyone!**

Yesterday (on 25th October 2022) we´ve released the 2022-10 update. 
This Update here contains a critical error with the spam filtering for several (not many), which ensures that no more emails can go out or come in.

We strongly advise you to update your mailcow installation which is updated with the 2022-10 update!!

<!--more-->

### Stable changes (stable Branch)

+ RSPAMD Crashes or refuses to work for some (leads to non-delivery of emails) --> This has been fixed by using the previous RSPAMD version.
+ The netfilter problem still existed --> This was fixed. The wrong image file was specified in the docker-compose.yml, which did not have the fix yet.
+ Fixed a bug with the French language in the mailcow UI that caused the UI to freeze during alias creation/editing.
+ A bug in the quarantine view where it happened that some emails could not be parsed has been fixed

You can find more information and the exact PRs on GitHub: https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-10a

---

We apologize for any problems that may have been caused.

Until then, stay healthy and until the next update.

**Your mailcow Team** <br>
*Niklas*