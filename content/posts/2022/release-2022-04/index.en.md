---
title: "🐄🐰Moopril 2022 - ClamAV, Rspamd, SOGo Update | Patchnotes"
date: 2022-04-05T10:42:00+01:00
draft: false
author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"

tags: ["2022", "update", "changelog", "bugfix"]
categories: ["Updates"]
---

**Moohoo everyone!**

The April update is here with a bunch of new stuff for your flawless E-Mail Flow.

This month we have 3 component updates (ClamAV, SOGo and Rspamd) and a few minor fixes which are as follows:

---

#### Major Changes
- We have updated SOGo in the mailcow stack to 5.5.1. Besides the SOGo fixes ([see here](https://github.com/inverse-inc/sogo/releases/tag/SOGo-5.5.1 "see here")) the mailcow database structure has been tweaked a bit to be ready for the upcoming 5.5.2 update! <br>**Note: The 5.5.2 update will be part of the 2022-04a update as soon as it is released by inverse (most likely).**

- We have updated Rspamd to 3.2.1. ([More detailed patch notes can be found here](https://rspamd.net/announce/2022/03/26/rspamd-3.2.html "More detailed patch notes can be found here")).

- The ClamAV components in mailcow now use the official container of ClamAV itself. For this reason there is now another volume (clamd-db-vol-1) in which the signatures of ClamAV are stored during freshclam. This allows us to roll out future ClamAV versions faster and in a more space efficient way. **Note:** ClamAV still uses version 0.104.2. Version 0.105 will be part of the mailcow as soon as it is released.

---
#### Minor Changes
- Autodiscover is now compatible with App Passwords.
- The Postmap Access List has been updated to a newer state.
- New French translations.

---

Take a look at the full release page of the Update at Github: [Click here](https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-04 "Click here")


We hope you are all safe and sound.

No matter where you are, take care of yourselves. 

