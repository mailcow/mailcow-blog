---
title: "🌰🐄 Mooctober Update 2022 - Translation overhaul + multithreaded backup/restore script update"
date: 2022-10-25T10:30:10+02:00
draft: false

author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2022", "update", "changelog"]
categories: ["Updates"]
---

**Moohoo everyone!**

We are moving in big steps towards the end of the year and despite the fact that the Bootstrap 5 UI update is still a bit more delayed (thanks for your patience by the way!) here is another small but nice mailcow update for you today.

<!--more-->

### Stable changes (stable Branch)

+ Fixed the annoying netfilter bug that caused infinite SNAT rules to be created. Thanks to [@mnin](https://github.com/mnin) see PR: [#4724](https://github.com/mailcow/mailcow-dockerized/pull/4724)
+ The mailcow speaks fluent Chinese now! At the same time, the language files have been updated to comply with ISO 639-1. However, nothing will change for you, as all previous translations will be preserved. Thanks to [@tomy0000000](https://github.com/tomy0000000) see PR: [#4657](https://github.com/mailcow/mailcow-dockerized/pull/4657)
+ Redis has been updated to version 7. Thanks to [@ethrgeist](https://github.com/ethrgeist) see PR: [#4815](https://github.com/mailcow/mailcow-dockerized/pull/4815)
+ Rspamd has been updated to version 3.3.2. Thanks to [@DerLinkman](https://github.com/DerLinkman) see PR: [#4816](https://github.com/mailcow/mailcow-dockerized/pull/4816)
+ The backup/restore script now supports multithreading. For more information please refer the [Docs](https://docs.mailcow.email). Thanks to [@DerLinkman](https://github.com/DerLinkman) see PR: [#4806](https://github.com/mailcow/mailcow-dockerized/pull/4806)

### Nightly changes (Bootstrap 5 Update)

The Nightly updates also include all of the above features. The specific Nightly changes are primarily related to the upcoming Bootstrap 5 update:

* [**NEW**] The "Previous page" button of the subpages is now also placed at the top (instead of only at the bottom)
* [**NEW**] There is now a " Expand/Collapse all" button in the action dropdowns, which collapses/expands the tables in the respective window (especially interesting for mobile).
* [**CHANGED**] The main menu item "E-Mail Configuration" and the item below it (with the same name) have been renamed to avoid duplication of names.
* [**NEW**] The position of the mail queue has changed. It is now located in the dropdown below the renamed item "E-Mail" (next to Quarantine).
* [**FIXED**] The general behavior of the various tables has been optimized.

The Bootstrap 5 update now has an ETA. We are targeting (at the latest) the 2022-12 update, as some on Twitter had already correctly said practically as a Christmas present. Until then, we are still diligently collecting feedback to further optimize the UI.

Submit Feedbach on [GitHub](https://github.com/mailcow/mailcow-dockerized/discussions/4734), on [Telegram](https://t.me/mailcow), at the [Forum](https://community.mailcow.email/d/1914-feedback-auf-bootstrap-5-ui-update-gesucht) or simply via Mail to info@mailcow.email.

**Keep in mind: The mentioned Bootstrap 5 changes only affect the Nightly Builds (for now).**

Learn here how you can obtain Nightly Builds too: https://docs.mailcow.email/en/i_u_m/i_u_m_update/#new-get-nightly-updates or use the new [Nightly Demo](https://nightly-demo.mailcow.email). 

More information and the login data for the demo can be found here: https://docs.mailcow.email/#demos

---

That would be it also so far.

Until then, stay healthy and see ya next update.

**Your mailcow Team** <br>
*Niklas*