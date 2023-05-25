---
title: "🌷🐄 Mooai Update 2023 - IMAP Performance + general Tweaks Update"
date: 2023-05-25T09:30:10+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2023", "update", "changelog", "ARM64", "Performance"]
categories: ["Updates", "News"]

---

**Moohoo everyone!**

It's on with our updates for mailcow, this time (once again) mainly to improve the overall stability and usability of the stack, but also to improve IMAP performance.

Let's go:

### Changelog

- For Dovecot, the `maildir_very_dirty_syncs` option has been enabled by default. This allows much faster IMAP retrieval than before. In the mailcow docs we have created a new page about this. This describes the exact reasons for the performance boost as well as cases where the feature should be disabled: https://docs.mailcow.email/manual-guides/Dovecot/u_e-dovecot-performance.
- Fixed a bug in the BCC Map setting in the UI, this messed up the dropdown once a selection was made. Also, it was not possible to select aliases as a local target.
- In the user view (Spam Aliases) the aliases were displayed in the wrong order, this has been fixed.
- A problem in the Rspamd table (especially on devices with smaller screens) caused display errors in the user interface. For example, the spam value and scan time were not displayed. This is now fixed.
- In the user view, the tabs displayed now match the ACLs set.
- When clicking on "Show user's active filters" in the user view, an error message was displayed instead of the set Sieve filters. From now on, the user's active Sieve filters are displayed here as expected.
- A display error where a deleted mailbox (from which it was possible to send as another mailbox) was still displayed in the "Send as" drop-down list has been fixed.
- An automatic update of the accesslist for postscreen has been set up for Postfix via GitHub. This automatically updates the list every month (then rolled out with new updates from mailcow).
- Old SASL logs were not correctly removed from the database. This is now the case.
- The UI now shows the architecture used under the hostname of your mailcow instance. This is in preparation for ARM64 support (see below for current status).
- Some typos and links have been corrected.

As always, the full changelog with the individual commits is available on GitHub:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-05

---

Ok, that's all about the changelog so far. Let me say a few words about ARM64:

### ARM64 Status Update

The bad news first: ARM64 is not yet in the nightly build and will not make it before June 2023.

The good news: Some people are already testing with ARM64 and report no major problems so far, except for some incompatibilities of the hyperscans by Rspamd. This means that mailcow runs very well on ARM64 so far. I have also run these tests and come to a similar conclusion.

However, since we are making some major changes in the way Docker images are built with the move to ARM64, it will unfortunately take a little while before we can incorporate this into the nightly builds for everyone. This is because from the moment ARM64 support is integrated into the nightly of mailcow, the Docker images should also have the same versioning as the images in the nightly and not like now e.g. `arm64-dev`. This means a change for us and especially a preparation for the dual OS architecture design on the part of the Docker images.

Because the plan is (so far it can be kept) that for ARM64 and x86 users NOTHING changes in the way of updating/installing mailcow.

Also (as mentioned above) there is currently a somewhat major bug with Rspamd and ARM64, but this is in prospect of being fixed. If this is the case we can start integrating it into Nightly, which is expected to be early/mid June 2023.

When it is done, we will of course announce it everywhere and inform you.

---

So, enough rambling, have a nice morning/lunch/evening or whenever you read this....

Otherwise, what always applies:

Stay healthy and happy mailing!

Your mailcow Team
> Niklas aka. DerLinkman