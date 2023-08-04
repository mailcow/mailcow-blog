---
title: "💪🐮6️⃣4️⃣ mailcow: dockerized (ARM64) is now in open Beta (inside nightly builds)"
date: 2023-08-04T08:00:00+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2023", "ARM64"]
categories: ["News"]

---

**Moohoo everyone!**

No you are not dreaming, yes you are awake and no this is no joke:

mailcow's ARM64 support can now be tested in nightly as **BETA**!

<!--more-->

> Wow, that came faster than expected.

Indeed it did! Funnily enough, one day after our last blog post on this topic, the **ominous** bug in Rspamd was finally fixed, and bang: ARM64 is up and running!

Even the problem with Dovecot and self compiling is solved, thanks to the Alpine Linux Project. Well, we already used it in some places in mailcow, but now in one more place!

---

Ok, enough of the hype, let's get down to business:

### How to install mailcow for ARM64?
Installing the **BETA** (I'll just repeat that here) is pretty simple:

1. install Docker/Docker Compose, Git etc. as usual (dependencies).
2. clone mailcow (as usual)
3. run generate_config.sh and select "nightly" under branch
4. get docker images
5. start mailcow (with docker compose up -d)
6. wait a short while
7. login and use mailcow as usual!

So far the plan. However, I would like to point out that the ARM64 support is currently still in **BETA** and there may be bugs or crashes.

It is also possible that after an update (within the nightly) the email data does not work anymore or is corrupted. Even if not much seems to have changed, the multi-architecture is not without bugs.

This has never happened in our tests, but we cannot and do not want to exclude it completely.

*Disclaimer: The mailcow team is not liable for any data loss. The ARM64 functionality is still under development.*

Please watch out for rspamd data when restoring your x86 mailcow backups. It is best to leave them out as they are not cross-arch compatible!

---

### Roadmap for the full version
Finally more people (who want to) can test mailcow on ARM64 devices.

This helps us a lot, because we can't test all scenarios and react to feedback from the community.

So here is the call: Report problems to us! This is the only way we can fix them and improve the product.

By mail, on GitHub or via Telegram: Feedback is welcome!

This is the current roadmap for ARM64 support:

After listening to and processing community feedback, we will start integrating ARM64 compatibility into the normal master branch (making it available to everyone).

But until then, there are still a few things to do around the ARM64 implementation, like documentation or moving the issue templates to GitHub, etc.

The whole thing will happen bit by bit from now on, and will progress more and more.

So please don't be surprised if not everything is multi-architecture at the start of the open beta (e.g. documentation).

Of course we will keep you up to date, so stay tuned!

If you are still looking for ARM64 servers, we can highly recommend the servers from Hetzner. (No advertising! We did our tests on self paid Hetzner ARM64 cloud servers).

---

Good, then we have it. Anything else? Let me think... uh... not for now.

As always, stay healthy, have fun with IT and enjoy your time.

**Your mailcow Team**
> *Niklas* aka. *DerLinkman*