---
title: "🎃🐄 Mooctober 2023 Update | Domainwide Footer, cURL Fixes and more - Revision A"
date: 2023-10-12T11:11:32+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2023", "update", "changelog"]
categories: ["Updates"]

---

## 2023-10a (Released 12th October 2023)

### Changelog

+ We've fixed the wrongly used clamav tag inside the docker-compose.yml. Now you are really using ClamAV 1.0.3 LTS!
+ We've removed the restart action from the `depends_on` section (tied to the unbound healthcheck logic) from the docker-compose.yml. Older Versions of Docker Compose v2 would not be able to start the stack with those settings set. (Please keep your systems up to date!!!!)

---

## 2023-10 (Released 12th October 2023)

**~~Moo~~Boo hoo everyone!**

It's spooky season again and we hope you're all ready to celebrate the Halloween season this year.

However mailcow is also delivering you with some treats (tricks "sold" seperately and not included in this update) regarding the stack.

This time it's quite huge!

<!--more-->

From UI Improvements (especially for all Darkmode fans like myself) over Domainwide footers to general Improvements and fixes roundabout the hole stack we have a lot to tell.

So let's begin should we?

### Changelog

- A lot of UI Improvements have been added:
    + You can now upload two ui logos (one for light- and one for darkmode).
    + Darkmode Enhancements (Color Improvements in UI).
    + Styling Enhancements in General.
    + Better Mobile view of mailcow UI.
    + You can now filter the most tables (mailboxes, domains, aliases etc.) by Domains for a better view.
- Inside mailcow UI there is a new option to use a Domain wide footer. It can be used to add a signature under all e-mails you send from a specific email domain.
- The main.cf (of Postfix) will now be correctly updated once you add some options with `$myhostname` Variable. Previously it was removed, which should not be the case.
- We fixed the high load of the dockerapi container which has been introduced with 2023-08.
- The X-Moo Tag (added if you used subaddressing) is now only added if really necessary, this was a small non critical security issue.
- The generate_config.sh is now correctly checking out the desired git branch, which was not the case before.
- http2 has been removed on the listen options of nginx to remove the deprecation message during the NGINX startup.
- We increased the hash bucket size from 64 to 512 as some domain names would have caused NGINX to crash during startup with that previous setting.
- A improved FQDN check during the generate_config and update.sh processes have been implemented.
- ClamAV have been updated to LTS 1.0.3.
- We fixed a issue with ACLs on domain/mailbox creation which causes mailcow to set a fallback value of the SQL schemata if no ACLs were set.
- Dovecot has been updated to 2.3.21.
- We updated all Container Images which include cURL to fix the Security issues with the cURL Releases before Version 8.4.0
- A Unbound Healthcheck on compose startup has been added. This will wait for unbound to be fully working before it is starting up containers which need DNS resolutions (Postfix, ClamAV, acme).
- EAS Bodys are now searchable. This option has been activated within SOGo. It is declared as a **experimental** feature by us and maybe removed if it will make more trouble than fun.
- Updates of some internal PHP-FPM Components.

Whew, that was ALOT but we are done for this update.

As always: The full changelog, including the individual commits, is available on GitHub at any time for those interested:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-10

---

As always, a huge thank you to our great mailcow community for your continued support and valuable feedback.

Stay healthy, happy mailing and a great spooktober season!

Your mailcow team