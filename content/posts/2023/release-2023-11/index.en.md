---
title: "🏮🐄 Moovember 2023 Update Revision A | Ratelimit Fixes, Domain Wide Footer Fixes"
date: 2023-11-21T11:11:32+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2023", "update", "changelog"]
categories: ["Updates"]

---

## 2023-11a (Release 07th December 2023)

### Changelog

* [Update.sh] Fix repo change when running in forced mode by @DerLinkman in https://github.com/mailcow/mailcow-dockerized/pull/5552
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5557
* [Web] add /api/v1/get/spam-score endpoint by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/5482
* Update dependency nextcloud/server to v27.1.4 by @renovate in https://github.com/mailcow/mailcow-dockerized/pull/5559
* [Web][Rspamd] domain wide footer improvements and custom mailbox attributes by @FreddleSpl0it in https://github.com/mailcow/mailcow-dockerized/pull/5555
* Detect docker compose version of form v2.x by @startnow65 in https://github.com/mailcow/mailcow-dockerized/pull/5562
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5567
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5569
* Translations update from Weblate by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5573
* [Postfix] update postscreen_access.cidr by @milkmaker in https://github.com/mailcow/mailcow-dockerized/pull/5570
* [Rspamd] Fixed Ratelimit forced by global ratelimits by @DerLinkman in https://github.com/mailcow/mailcow-dockerized/pull/5577
* [UI] Fixed showing of "disabled" placeholder for ratelimits in domains by @DerLinkman in https://github.com/mailcow/mailcow-dockerized/commit/550b88861f7a6dc8651659ceb894e111f49d76ab
* Update Rspamd Image to 1.94 by @DerLinkman in https://github.com/mailcow/mailcow-dockerized/commit/03aaf4ad76898cebb5ad83cde2a7ca769410f8be

---

## 2023-11 (Release 21st November 2023)

**Moo hoo everyone!**

The holiday season is slowly approaching, and here we are with another update at our doorstep.

First things first: It's advisable to update (especially if using Quarantine) due to a critical security patch.

<!--more-->

### Changelog

+ Rspamd has been updated to version 3.7.4.
+ Synchronization jobs now include a Dry Mode button, allowing mailbox synchronization testing.
+ Additionally, synchronization jobs now support the valid parameter `--f1f2` for syncing a mail folder to another named mail folder.
+ An issue affecting attachments and the Domain Wide Footer has been resolved. This problem led to attachment destruction when the Domain Wide Footer was set.
+ A script for generating a CAA record has been created in the helper-scripts folder.
+ Nextcloud version has been updated to 27.1.3. Also, the NGINX side of Nextcloud has been adjusted to meet the new requirements and has been rolled out for users of the Nextcloud script in the helper-scripts folder.
+ A new Sieve Template has been added to the Filter Menu of the mailcow UI.
+ utf-8 encoded passwords are now correctly processed in the sync jobs.
+ The update.sh script has been optimized to better handle Docker images that do not follow standard version tagging (e.g., the Nightly Images). These images are now correctly removed.
+ Various new translations.
+ **A critical security vulnerability affecting the mailcow Quarantine UI has been patched, with a CVE to follow.**

Given that we have addressed a critical vulnerability here, we strongly recommend updating. However, if you do not use the mailcow Quarantine feature, theoretically, you can skip this update. **Nevertheless, we always recommend keeping your system up to date!**

As always, the complete changelog, including individual commits, is available on GitHub for those interested:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-11

---

Once again, a huge thank you to our amazing mailcow community for your ongoing support and valuable feedback.

Stay healthy.

Your mailcow team