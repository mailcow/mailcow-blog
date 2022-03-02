---
title: "🐄💮 Moorch Update 2022 – ClamAV, Dovecot & Olefy Update | Patchnotes"
date: 2022-03-02T16:48:00+01:00
draft: false
author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"

tags: ["2022", "update", "changelog", "bugfix"]
categories: ["Updates"]
---

**Moohoo everyone**, March is here and by the end of the month it will be spring again. 
Surely the last few days were as scary for you as they were for us.

🇺🇦 **Ukraine, we are standing with you!**

Let's move on to the March update of our mailcow. 
Spoilers ahead, the March update is not that full and extensive but there are some nice updates included in terms of long term (I'm looking at you ClamAV and Olefy!).

So let's get to it!

---
#### Docker Image Changes:
- Dovecot has been updated to 1.161 (Imapsync + Dovecot update).
- Olefy was updated to 1.9 (Olefy Update)
- Rspamd was updated to 1.80 (Olefy update)
- ClamAV was updated to 1.44

#### Important changes:
- ClamAV has been updated to version 0.104.2, with this version we are secured for the long term (bye bye 0.103.X). Actually only the Docker image process has changed, the rest is running as usual. If not please open an issue on GitHub!
- Dovecot has been updated to 2.3.18. This also brings us closer to moving from Solr to Xapian, more on that when we get to a viable point.
- IMAPSync has been updated to version 2.178 (within Dovecot).
- Oletools have been changed to a new upstream (now uses @decalage2's repository).

#### Minor changes:
- The changed doc paths (internal) were not adjusted in the mailcow UI, so you saw a 404 page. This has been fixed.
- The WATCHDOG_NOTIFY_EMAIL string had been giving a warning in the console (when starting the stack) if the variable was empty, this has been removed as the string is now set to NULL (if empty).
- We´ve Updated the nsyslog-ng Version to 3.28 (fixes a warning in console right after Dovecot started)

---

Currently, the following has never been more important: **stay healthy and even more important: take care of you!**

