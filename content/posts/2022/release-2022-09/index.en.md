---
title: "🍂🐄 Mootember Update 2022 - Quarantine & Swagger UI Fix Update | Changes"
date: 2022-09-27T12:30:10+02:00
draft: false

author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2022", "update", "changelog", "bugfix","wichtig"]
categories: ["Updates","Sicherheit"]
---

**Moohoo everyone!**

The official September update is here and brings this time unfortunately only a small update, which is not to be ignored, however.

A vulnerability is closed but no don't worry, the previous ones were worse, but this one is still not unimportant.

<!--more-->

### Stable changes (stable Branch)

* GitHub Workflows security hardening by [@sashashura](https://github.com/sashashura) in https://github.com/mailcow/mailcow-dockerized/pull/4761
* Small typo in Update.sh script fixed by [@mindsolve](https://github.com/mindsolve) in https://github.com/mailcow/mailcow-dockerized/pull/4762
* Update quarantine_notify.py charset (Fixes the quarantine messages finally again) by [@MAGICCC](https://github.com/MAGICCC) in https://github.com/mailcow/mailcow-dockerized/pull/4758 (this fixes https://github.com/mailcow/mailcow-dockerized/issues/4743)
* Translations (Turkish) from the Weblate Community in https://github.com/mailcow/mailcow-dockerized/pull/4765
* Swagger version was updated by [@ntimo](https://github.com/ntimo) in https://github.com/mailcow/mailcow-dockerized/pull/4763
* Send As behavior improved by [@macwinnie](https://github.com/macwinnie) in https://github.com/mailcow/mailcow-dockerized/pull/4703

### Vulnerability in Swagger UI

Before we talk about the Nightly Updates, let's talk about the Swagger vulnerability.

This allowed a script to be loaded via the URL call of the Swagger UI which could convert the page into a credit card phishing portal, for example.

We have opened a CVE case for this: **CVE-2022-39258**

On GitHub you can read the more detailed informations: https://github.com/mailcow/mailcow-dockerized/security/advisories/GHSA-vjgf-cp5p-wm45

Before panic kicks in this is the most harmless of the security vulnerabilities so far.

We advise (as always) to update soon of course!

### Nightly changes (Bootstrap 5 update)

So, let's move on to the Nightly Updates, which are fully focused on the Bootstrap 5 update:

* [NEW] Sieve Access can now be toggled via Mass-Actions
* [NEW] Added a Loading Animation for the Container Charts
* [NEW] The Public IP-Adresses of your Mailserver (done with dig inside the containers) are now displayed on the Dashboard Page.
* [FIX] Fixed some Layout Issues (especially Color Changes)

As some of you may have inferred, we are listening to your feedback regarding the Bootstrap 5 update. We are still diligently collecting feedback on this.

Either here on [GitHub](https://github.com/mailcow/mailcow-dockerized/discussions/4734), on [Telegram](https://t.me/mailcow), at the [Forum](https://community.mailcow.email/d/1914-feedback-auf-bootstrap-5-ui-update-gesucht) or simply via Mail to info@mailcow.email.

**Keep in mind: The mentioned Bootstrap 5 changes only affect the Nightly Builds (for now).**

Learn here how you can obtain Nightly Builds too: https://docs.mailcow.email/de/i_u_m/i_u_m_update/#neu-nightly-updates-beziehen or use the new [Nightly Demo](https://nightly-demo.mailcow.email). 

More information and the login data for the demo can be found here: https://docs.mailcow.email/#demos

---

That would be it also so far.

Until then, stay healthy and have a happy #Hacktober

**Your mailcow Team** <br>
*Niklas*