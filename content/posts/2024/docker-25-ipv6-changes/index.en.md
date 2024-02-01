---
title: "⚠️ Important change when using mailcow with deactivated IPv6 connectivity ⚠️"
date: 2024-02-01T11:19:02+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2024", "info", "docker", "25.X", "ipv6", "changes"]
categories: ["Status", "Information"]

---

**Moohoo everyone!**

In this blog post, we would like to take a look at the major changes in relation to Docker and IPv6 usability for mailcow.

<!--more-->

### Who is affected?

Basically, the problem affects all those who run their mailcow installation without IPv6 and are on versions of Docker >= 25, as this version has made serious changes to the Docker daemon, which will disrupt the usability of existing deactivated IPv6 mailcow installations.

### What is the problem?

With Docker version 25, the behavior of Docker in the area of address allocation for IPv6 addresses in a Docker network has changed. Previously (i.e. before 25.X), the parameter `enable_ipv6: false` in `docker-compose.yml` was sufficient to assign no IPv6 addresses to the network, although a subnet was defined in said file (by default in all mailcow installations). However, this option is no longer sufficient, as Docker now assigns a v6 from said subnet to each container due to the defined subnet in the network definition of `docker-compose.yml`. **The problem**: Due to `enable_ipv6: false` no addresses are routed in the Docker network, but since the containers all have an IPv6 address in the Docker network and IPv6 is preferred over IPv4 in priority, it now happens that the containers can no longer reach each other and thus a correct use of mailcow is restricted. Sieve filters in particular cause problems reaching the Postfix container.

### What can i do against it?

Well, fortunately there is a solution to this problem, even if it does not fit in with our motto of fiddling with the stack as little as possible. We have already updated our documentation and adapted the [entry for deactivating IPv6](https://docs.mailcow.email/post_installation/firststeps-disable_ipv6/). Follow this and your mailcow should work as before. **Unfortunately, the end user (you) will still have to take action once to make this work, as mailcow does not do this automatically**.

### What does mailcow do against it?

Since this behavior seems ambigous to us, why it comes to this behavior despite explicit deactivation of IPv6 use via `enable_ipv6: false`, we have opened an [issue at Docker](https://github.com/moby/moby/issues/47202) itself on this topic. After all, why else would this option still exist if it is apparently ignored anyway by setting the IPv6 subnet?

It may be some time before there is a solid explanation or even a solution. That's why we wanted to inform you about this extensively and separately on several platforms.

---

We hope that we have been able to shed some light on the subject and, if you are affected, put you on the right path.

Otherwise, the same applies as always:

Stay healthy and happy mailing 😉

Your mailcow team

*DerLinkman/Niklas*