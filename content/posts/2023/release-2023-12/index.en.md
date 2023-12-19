---
title: "🛷 🐄 Moocember 2023 Update | Netfilter NFTables Support and Banlist Endpoint"
date: 2023-12-19T11:19:02+02:00
draft: false

author: Patrick Schult/FreddleSpl0it
authorLink: "https://github.com/FreddleSpl0it"
toc: true

license: ""

tags: ["2023", "update", "changelog"]
categories: ["Updates"]

---

## 2023-12 (Release 19th December 2023)

**Moo hoo zusammen!**

We have some new Netfilter features for you before the holidays. 
In addition, the watchdog can now send notifications via webhooks. To do this, simply configure the variables `WATCHDOG_NOTIFY_WEBHOOK` and `WATCHDOG_NOTIFY_WEBHOOK_BODY` in `mailcow.conf` accordingly.

<!--more-->

### Changelog

* Update actions/stale action to v9 by @renovate in #5579
* Translations update from Weblate by @milkmaker in #5583
* [Netfilter] add nftables support by @FreddleSpl0it thanks to @amorfo77 in #5585
* [Web] add f2b_banlist endpoint by @FreddleSpl0it in #5313
* Watchdog: Allow sending notifications via webhooks by @felixoi in #4968
* Allow suppressing watchdog start notification by @smarsching in #5453
* Translations update from Weblate by @milkmaker in #5590
* Update dependency nextcloud/server to v28 by @renovate in #5589
* Translations update from Weblate by @milkmaker in #5591
* Translations update from Weblate by @milkmaker in #5598
* Guideline Improvement + Issue Template adjusting by @DerLinkman in #5602
* chore(deps): update alpine docker tag to v3.19 by @renovate in #5603

How to use the Banlist Endpoint is described here https://docs.mailcow.email/manual-guides/mailcow-UI/u_e-mailcow_ui-netfilter/#provide-netfilter-decisions-via-url-as-source-for-firewall-block-rules.

The complete changelog, including individual commits, is available on GitHub for those interested:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-12

---

Once again, a huge thank you to our amazing mailcow community for your ongoing support and valuable feedback.

Stay healthy.

Your mailcow team
