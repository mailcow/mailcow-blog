---
title: "🥚🐄 Moopril Update 2023 - SOGo 5.8.2, Rspamd 3.5 and more | Revision A"
date: 2023-04-03T09:30:10+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2023", "update", "changelog"]
categories: ["Updates"]

featuredImage: "/images/2023/April/netfilter_incremental_en.png"
featuredImagePreview: "/images/2023/April/netfilter_incremental_en.png"

---

### Update 2023-04a

We've just released a hotfix update for the 2023-04 update.

It solves the problem with Nextcloud, which could not be updated to version 26, because version 25 does not support PHP 8.2, but 26 does.

---

### Update 2023-04

**Moohoo everyone**

It's on with our updates for mailcow, this time mainly to contribute to the general stability and usability of the stack.

Let's get started:

- SOGo has been updated to version 5.8.2. Some might have noticed a bug in macOS Ventura and CalDav, which caused the macOS calendar app to not detect any SOGo calendars and simply tried to create new calendars with the name on the remote server (which of course failed, because the calendar already existed).
Furthermore the update to 5.8.2 should have fixed some more problems, a complete changelog of SOGo can be found here: https://github.com/Alinto/sogo/releases/tag/SOGo-5.8.1 & https://github.com/Alinto/sogo/releases/tag/SOGo-5.8.2
- Rspamd has been updated to version 3.5. A full changelog of Rspamd itself can be found here: https://github.com/rspamd/rspamd/releases/tag/3.5
- The mailcow netfilter has been extended by an exponential ban time function. I.e. banned IPs/subnets can now lengthen their ban time exponentially (if desired). This means that would-be attackers are banned for longer before they can try again.
- The Vmail index now also deletes itself as soon as a mailbox is finally deleted from the mailcow server, this was not the case before.
- PHP was updated to version 8.2.
- Nextcloud (in mailcow) was upgraded to version 26.
- For Nextcloud there was an adjustment in the nextcloud.conf of the NGINX server to meet the security requirements of Nextcloud.
- Removed some minor broken pipe errors in mailcow scripts, which occurred when the urandom command (to generate password) was not properly aborted or the message was not hidden.
- Various other optimizations.

---

As always, the full changelog with the individual commits is available on GitHub at any time:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-04

Otherwise, the same applies as always:

Stay healthy and happy mailing!

Your mailcow Team
> Niklas aka. DerLinkman