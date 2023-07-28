---
title: "🛑📜 Spamhaus DNS Blocklist changes since 2023-07"
date: 2023-07-28T16:00:10+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2023", "info"]
categories: ["Information", "Status"]

---

**Moohoo everyone!**

With the mailcow update 2023-07, there's a somewhat significant change regarding Spamhaus DNS blocklists.

This blog post is here to provide information for those interested.

<!--more-->

#### What are Spamhaus DNS blocklists?
First of all, let's address the general question of what these lists actually are and what they are used for.

The Spamhaus DNS blocklists are (usually) freely accessible lists that can be integrated into various systems of an email server (whether it's Rspamd, Postfix, or others). In the case of mailcow, these blocklists are integrated into Postfix via Postscreen.

Essentially, they act as a "prefilter" for spammer addresses, but they work based on IP, not content, like Rspamd does.

These lists are updated in real-time and instruct the email server to deny connections from listed IPs.

Until now, these blocklists were available for use without any restrictions for all users.

However, that's unfortunately changing.

#### What's changing?
On [June 20th](https://twitter.com/spamhaus/status/1671141604705333248), Spamhaus blocked access to these lists from OVH, AWS, and Hetzner servers.

As a result, the DNS blocklists (only from Spamhaus, others still function) won't work unless users take action.

From now on, if you want to continue using the Spamhaus DNS blocklists, you'll need to create an account with them and generate a DQS (Domain Query Service) key, which you'll then add to mailcow.conf.

mailcow will take care of configuring the new DQS blocklists, which technically function the same way as the ones without an account.

We've implemented a solution in the update and generate_config scripts that associates your public IP address with an Autonomous System (AS) and checks against a service we provide (asn-check.mailcow.email) to see if you're affected. If you are, mailcow will notify you.

#### Why is this change happening, and am I affected?
Spamhaus explains it as follows:

> The Spamhaus Project’s Terms of Use state that it doesn’t allow users to query via DNS resolvers where there is no attributable reverse DNS; this includes OVHCloud (we’ll explain why later in this article).

> [...] The blocklists that the Spamhaus Project makes freely available via its Public Mirrors are for small-scale, non-commercial use. To ensure these users have a good quality of service, usage is monitored and measured against the Project’s Terms of Use. OVHCloud masks organizations’ queries to the Project’s Public Mirrors, so the team can’t attribute usage to individual entities. They have no way of establishing the number of queries a single organization is making. [...]

> [...] To ensure its Terms of Use are adhered to, the Spamhaus Project will block queries from a specific IP address outside the policy. It also returns an error code. In the case of querying via an open/public resolver, i.e., OVHCloud, the error code is 127.255.255.254. [...]

In other words, OVH/AWS/Hetzner's way of sending queries to Spamhaus violates the usage terms of Spamhaus's public DNS blocklists.

*Currently, we can't say for sure whether other providers will be affected in the future. For now, we're aware of these three.*

#### What if I don't want to create a DQS key and an associated account with Spamhaus?
If you choose not to create a Spamhaus account and, therefore, forgo DQS, you won't receive extra protection from Spamhaus's DNS blocklists if you're using one of the affected providers.

However, your mailcow will continue to function as before, and you'll still be able to send and receive emails normally!

This change only affects the inclusive spam protection that will no longer be in place. Rspamd will still be there and will continue to catch spam emails.

Are there any benefits to using DQS even if I'm not affected?
Of course, all mailcow users (not just the affected ones) can access and use the new DQS blocklists.

It's best to read the official post from Spamhaus itself, which compares both lists. (Unfortunately, it's only available in English)

https://www.spamhaus.com/resource-center/if-you-query-spamhaus-projects-dnsbls-via-ovhclouds-dns-move-to-the-free-data-query-service/

This article summarizes the situation in general and explains how to obtain a DQS key.

I hope this brings some clarity to the situation and alleviates any fears that your mailcow server has been completely blocked or something similar.

Stay healthy and happy mailing!

Your mailcow Team
Niklas aka. DerLinkman