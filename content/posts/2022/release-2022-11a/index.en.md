---
title: "🚚🐄 Moovember Update 2022 - Sogo 5.8.0, Rspamd 3.4.0 and PHP 8.1 Update | Revision B"
lastmod: 2022-12-13T09:30:10+02:00
date: 2022-12-12T09:30:10+02:00
draft: false

author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2022", "update", "changelog", "bugfix"]
categories: ["Updates","Hotfix"]
---

**Moohoo everyone!**

Due to the <del>2022-11a</del> 2022-11b update, here are the changelogs of the <del>2022-11a</del> 2022-11b update and the changes of the major version (2022-11).

> *We´ve released 2022-11b already!*

<!--more-->


### Stable changes (stable Branch 2022-11b)

+ CalDav should now work like before on MacOS again. New SOGo image version (in the docker-compose.yml): 1.113.
+ Some users could no longer use update.sh because the DNS lookup timeout was too low. This was increased from 3 to 6! <br>*Note: A reasonable and fast DNS resolution is essential for a mail server!*

You can find more information and the exact PRs on GitHub: https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-11b


### Stable changes (stable Branch 2022-11a)

+ The IMAPSYNC jobs are no longer automatically deactivated if the server to be fetched is not available or the credentials are incorrect. New image version of Dovecot (in the docker-compose.yml): 1.21.
+ Translation corrections were also made.

You can find more information and the exact PRs on GitHub: https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-11a


### Stable changes (stable Branch 2022-11)

+ An undocumented API endpoint (/api/v1/get/mailbox/all/domain.tld) was added to the API docs (mailcow integrated).
+ The PHP container was updated to version 8.1. Additionally, some optimizations were made to the dockerfile. New image version (in the docker-compose.yml): 1.80
+ The Pushover functionality got a major update, which adds new sounds and more for Pushover.
+ RSPAMD was updated to version 3.4 (finally). We already updated RSPAMD in the 2022-10 update, but removed it again with 2022-10a due to some issues with the 3.3 Version of RSPAMD. But now it is stable and live in mailcow! New image version (in the docker-compose.yml): 1.91.
+ SOGo has been updated to version 5.8.0. This fixes the long reported Battery Drain bug on iOS 16 or later. New image version (in the docker-compose.yml): 1.112.
+ The update.sh is now proxy capable! The previous ping check has been replaced with a DNS check.
+ Some minor adjustments like translation improvements or typos were also corrected.


You can find more information and the exact PRs on GitHub: https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-11

### Nightly changes (nightly Branch)

We are approaching the last big mailcow update for 2022 with huge steps: The Bootstrap 5 (from now on called BS5) or MUH-I update!
Accordingly, the last few weeks have been spent fine-tuning the new UI. Even though it may seem that the big 2022-12 update touches the UI once and then never again this is not quite correct. The new BS5 update only marks the beginning of further UI optimizations in the near future.

As always, the new UI changes can already be found on the Nightly Demo mailcow instance or the Nightly Branch.

---

So, I really hope that you are also looking forward to the new UI update as much as we are! Of course, in the 2022-12 update include even more besides BS5, just in advance ;)

Until then, stay healthy.

**Your mailcow Team** <br>
> *Niklas*