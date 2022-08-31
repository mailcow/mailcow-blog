---
title: "🌊🐄 Amoogust Update 2022 - The Nightly Build Switch Update  | Changes"
date: 2022-09-01T10:30:10+02:00
draft: false

author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true

tags: ["2022", "update", "changelog", "bugfix"]
categories: ["Updates"]
---

**Moohoo everyone!**

> Yeah, a August Update in September... kinda sus if you ask me!

This time there are even some changes regarding the Update sources! So stay curious.

Let's start quite gently for the time being:

### Stable changes (stable branch)

- OAuth clients and app passwords are now accepted again for Cal/CardDav connections. [#4685](https://github.com/mailcow/mailcow-dockerized/pull/4685) by [@FreddleSpl0it](https://github.com/FreddleSpl0it)
- SOGo has been updated to 5.7.1 ([Complete changelog here](https://github.com/Alinto/sogo/releases/tag/SOGo-5.7.1)) receives in mailcow stack container version: *mailcow/sogo:1.110* [#4719](https://github.com/mailcow/mailcow-dockerized/pull/4719) by [@MAGICCC](https://github.com/MAGICCC) and [@DerLinkman](https://github.com/DerLinkman)
- The Docker Compose plugin from Docker is now also supported. Accordingly, a standalone version of Docker Compose (docker-compose) is no longer required (but still compatible) [#4725](https://github.com/mailcow/mailcow-dockerized/pull/4725) by [@DerLinkman](https://github.com/DerLinkman)
- The Change Password button (logged in as user) in the mailcow UI disappeared when SOGo was disabled. This has been fixed. Commit: [4322c98](https://github.com/mailcow/mailcow-dockerized/pull/4733/commits/4322c98f730756cdb28ea1750e6f9a7ec6ea5a70) by [@DerLinkman](https://github.com/DerLinkman)

Now let's get to the biggest part of the update: the nightly builds.

---

### Nightly Builds? Whats that all about?

Starting with the 2022-08 update, there will be regular Nightly Updates alongside the Major Updates (like this one) to test and gather feedback.

This will give us the opportunity to get direct input from some people and expand our own testing to multiple scenarios.

But what's the benefit for you, you ask?

Well, we want to use the Nightly Builds primarily to offer new (also bigger) features for testing, which you can test first before it will be implemented into the stable builds.

This means in the example here, the new UI update (The MUH-I Update) to Bootstrap 5, which is ready for you to test directly in the Nightly Builds.

But there will be a separate blog entry about the Bootstrap 5 UI, which explains your assistance in more detail.

### How do I get the Nightly Updates?
This is not so hard.

We have added two new parameters in the `update.sh` `--nightly` and `--stable`. 

Depending on which updates you are currently getting, you can switch to the respective update branch with the parameter.

As an example:

You are currently (as usual) in the stable branch (master) (This is the default), then you have to run `update.sh --nightly` to switch to the nightly builds.

If you want to switch from Nightly back to Stable you have to run `update.sh --stable` accordingly.

**But ATTENTION please!!!** Backup your mailcow completely if you plan to switch to Nightly. **We are not liable for any data corruption/data loss**!!! So be warned.

We have published a [Best Practice Guide](https://mailcow.github.io/mailcow-dockerized-docs/i_u_m/i_u_m_update/#best-practice-nightly-update) on the documentation page which shows a good way to test the Nightly Builds.

In general: The Nightly Builds are **NOT** I really mean **NOT** released for productional usage! It can work and if it does that's great, but it can also not work. Just for your information.

---

For the next updates, there will be Nightly Update News in addition to the Stable Updates News, which will contain the summary of the last Nightly Builds.

If you need more information about the Nightly Builds please have a look at the [Documentation](https://mailcow.github.io/mailcow-dockerized-docs/).

Until then. All the best and stay healthy.

**Your mailcow Team** <br>
*Niklas*