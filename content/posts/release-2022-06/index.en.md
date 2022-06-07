---
title: "🌕🐄 Moone Update 2022 - The Docker Compose v2 Update (Part I) | Changes"
date: 2022-06-07T12:07:10+02:00
draft: false

author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true

tags: ["2022", "update", "changelog", "bugfix"]
categories: ["Updates"]
---

**Moohoo everybody!**

Today we have put together a big fat update package for you again, which besides general container updates brings one big change:

**Docker Compose v2 support!!!**

But let's start with the small stuff first:

### Minor changes

- ClamAV is now using version 0.105 (the latest at release time).
- Postfix has been updated to version 3.5.6.
- netfilter, acme, dockerapi, olefy, watchdog, unbound and phpfpm have been updated to Alpine Linux 3.16.

### Major changes
- As promised, with the 2022-06 update comes a small but nice UI update that improves general UI performance. *Note: The noticeability of the improvements may vary depending on mailbox/domain count.
- The mailcow now supports Docker Compose v2! More details to come:

### Docker Compose v2 (finally)
Yep, read that right, finally the mailcow is compatible with Docker Compose v2! But why Docker Compose v2 now? Some of you might be wondering.
Well the thing is pretty simple and quickly explained: "Docker Compose v1 old (deprecated), Docker Compose v2 new (maintained by Docker itself)".

The installation of Compose v2 can be taken from the modified documentation ([click here](https://mailcow.github.io/mailcow-dockerized-docs/en/i_u_m/i_u_m_install/)).

Docker Compose v1 will lose its official support from Docker in October 2022, but mailcow will continue to support Compose v1 until December 2022 (the 2022-12 update). 

> *Thats why Compose v2 Part 1 update. Psst it´s a secret*.

Beginning with December, an update to Compose v2 **is mandatory**, if you want to continue using mailcow.

Anything else? Oh yes! There is also an important change regarding IPv6. From now on (until December) the web interface will only be accessible via IPv4 by default.
But don't worry, with the help of the [manual](https://mailcow.github.io/mailcow-dockerized-docs/en/post_installation/firststeps-ip_bindings/#ipv6-binding) you can restore the accessibility. 

Why it has to be done this way and not (like everything else) plug and play? Well quite simple: The two Compose versions interpret the docker-compose.yml partly a bit different. Actually, everything has remained the same and this also works wonderfully, however, with the aforementioned IPv6 binding, there were unfortunately problems to maintain this option in dual support. <br>
**From December 2022, IPv6 connectivity will then be enabled again by default (as before).**

> How much text do you want to write? <br>
> Answer: Yes

---

Ok that's it for this time.

If you want to read the [complete changelog](https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-06) you can do that (as always) on GitHub.

Stay healthy.

**Your mailcow Team** <br>
*Niklas*