---
title: "🦾6️⃣4️⃣ 🐄 Janmooary 2024 Update | The Multiarch (x86 + ARM64) & Performance Update - Revision E"
date: 2024-02-08T11:19:02+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2024", "update", "changelog", "ARM64", "major", "security"]
categories: ["Updates"]

featuredImage: "/images/2024/January/release-arm64.jpg"
featuredImagePreview: "/images/2024/January/release-arm64.jpg"

---

## 2024-01e (Release: 08th Februars 2024)

**Netfilter Enhancements**

+ Fixed Isolation Rule for iptables: Addressed an issue regarding the mailcow isolation rule in iptables. Thanks to contributions from @FreddleSpl0it and @tomudding. [PR #5700](https://github.com/mailcow/mailcow-dockerized/pull/5700)

+ Relaxed IP Check in NFTables.py: Set a more relaxed IP check in NFTables.py to improve compatibility. Many thanks to @amorfo77 for the contribution. [PR #5711](https://github.com/mailcow/mailcow-dockerized/pull/5711)

**SOGo Fixes**

+ Fixed SOGo Crash on Older Kernels: Resolved a SOGo crash occurring on kernels older than 5.10.0-X. Thanks to @DerLinkman for the fix. [Commit](https://github.com/mailcow/mailcow-dockerized/commit/5a9702771cba4fedbc79331e92ff757f734df58e)

**Dovecot Improvement**

+ Fixed Wrong Timezone Logging: Addressed an issue with incorrect timezone logging in Dovecot. Kudos to @DerLinkman for the fix. [Commit](https://github.com/mailcow/mailcow-dockerized/commit/d08ccbce789880eb81ebebca48d440637ab36983)

**Unbound Updates**

+ Increased Interval for Healthchecks: Adjusted the interval for healthchecks to 30 seconds in Unbound, reducing external queries. Contribution by @DerLinkman. [Commit](https://github.com/mailcow/mailcow-dockerized/commit/63bb8e8cefb4afebd50f12a485f6af5d12c98125)

+ Removed Netcat Checks: Eliminated netcat checks from Unbound healthchecks to optimize the process. Thanks to @DerLinkman. [Commit](https://github.com/mailcow/mailcow-dockerized/commit/63426c3cd023922a6e3c5f3aa40c4cc95f1d9fe1)

For a comprehensive view of all changes, refer to the [Changelog on Github](https://github.com/mailcow/mailcow-dockerized/compare/2024-01d...2024-01e)

As of February 6, 2024, Docker has finally released the patch for the IPv6 issue, as announced in a previous blog post. This eliminates the need for special routines for Docker versions 25.0.3 and above.

We are also aware of the "issue" with SOGo and the error message in the editor. We have already reached out, and once the fix is implemented, we will seamlessly patch the provided SOGo version with the 2024-01e release. This avoids the need for a new subrelease like the current one.


---

## 2024-01c (Release: 2nd February 2024)

{{< admonition type=warning title="Important" open=true >}}

This update includes a security fix, so we highly recommend that all users upgrade to this latest version to ensure the security of their systems. Users who are unable to update and share their system with potential attackers on the same network, such as with some hosting providers, should apply the following iptables/nftables rule:

<!--more-->

iptables:

```
iptables -I DOCKER-USER ! -i br-mailcow -o br-mailcow -p tcp -m multiport --dport 3306,6379,8983,12345 -j DROP
```

nftables:
```
nft insert rule ip "filter" "DOCKER-USER" iifname != "br-mailcow" oifname "br-mailcow" tcp dport {3306, 6379, 8983, 12345} counter packets 0 bytes 0 drop
```

{{< /admonition >}}

What else changed:

+ Fixed a SOGo bug that caused the ACL "Authenticated users" to no longer be displayed.
+ The postscreen access list has been updated.

A CVE has already been assigned for the new security fix.

The last security fix has the CVE 2024-23824. Here is the page again: https://github.com/mailcow/mailcow-dockerized/security/advisories/GHSA-45rv-3c5p-w4h7

We have also requested a CVE for the new vulnerability, but you can read the report here: https://github.com/mailcow/mailcow-dockerized/security/advisories/GHSA-gmpj-5xcm-xxx6

---

## 2024-01b (Release: 22th January 2024)

+ We have downgraded the containers affected by a cURL submodule bug (phpfpm, unbound, watchdog & acme) in their Alpine version from 3.19 to 3.18. This should eliminate the need for the workaround ([see](https://twitter.com/mailcow_email/status/1747880630317101556)). We will (probably) revert to Alpine 3.19 in these containers in the 2024-02 update (assuming the bug is fixed then)
+ It is now possible to deactivate or skip the unbound health checks. Background (primary) is the geo blocking of some countries (e.g. China) which prohibit access via DNS to GitHub, but the check is based on it. A new mailcow variable was set for this (`SKIP_UNBOUND_HEALTHCHECK`)

    {{< admonition type=danger title="Danger">}} 
**We do not recommend setting this value, as the health check problems that are important for correct accessibility to the Internet**
    {{< /admonition >}}

+ Fixed a bug that affected the watchdog webhooks, which caused the webhooks not to be formatted correctly and no information was displayed on the respective platform.

---

## 2024-01a (Release: 18th January 2024)

### Changelog

+ The timeout for the unbound health check has been increased from 10 to 30 seconds. On some systems, the extended checks resulted in an unhealthy status even though they were OK.

---

## 2024-01 (Release: 17th January 2024)

**Moohoo** everyone!

We hope you had a good start into the young 2024. As already announced in advance on social media (X/Twitter: [@mailcow_email](https://x.com/mailcow_email), Mastodon: [@doncow@mailcow.social](https://mailcow.social/@doncow)), the long-awaited ARM64 or Multiarch update is finally being released today which we have been working on for a long time with ups and downs.

<!--more-->

To clarify the question right up front: Nothing will change for all existing mailcow installations (at least not planned). This update also runs like all previous updates without any manual adjustments on your part. mailcow remains the same in scope as before, except that from today we can also welcome a new user base: **the ARM64 users**.

If you're new: "Hello 👋, nice to have you here!".

And to all those who are considering switching to ARM64: "Thank you for using new and more efficient technologies 😁".

In case you're wondering: "Is there anything to consider when installing/migrating to the new platform?" Apart from reading the documentation (as usual) no! This is because you will realize that the installation of mailcow has not changed at all!

But enough talking, what has changed? Let's take a look:

{{< admonition type=warning title="Warning">}}
**To be on the safe side, please create a complete mailcow backup before performing the update.** <br>
Damages can **not** be excluded even after countless successfully completed tests due to the substructure changes!!! <br>
The rule is: *No backup, no pity*
{{< /admonition >}}

### Changelog

- mailcow ist now ARM64 compatible:
    - Some mailcow substructures have been rebuilt to run in parallel on ARM64 and x86, including Dovecot, SOGo, Rspamd, Clamd.
    - **ALL** Docker images (starting with the 2024-01 update) are now available for x86 and ARM64 (aarch64).
    - The migration and backup scripts have been adapted to recognize discrepancies in the architectures and to take measures that could lead to a crash on the part of mailcow when changing architecture if they are not observed (Rspamd Cashing Volume is omitted).

- All mailcow components based on Alpine have been updated to Alpine 3.19. (Thanks to @MAGICCC and @DerLinkman).

- Server-side processing for loading the domain and mailbox tables has been added. mailcows with many domains and/or mailboxes should now be much more responsive in the operation of the web UI (thanks to @feldsam for implementing this!).

- An option has been activated by default for SOGo, which does not attach images from signatures which was previously the case. (Thanks to a now deleted user (on GitHub)).

- The Postscreen Access List has been updated (as of 01.01.2024)

- Some translations have been revised.

---

I would like to remind you once again to do yourselves a huge favor and simply make a backup before the update. Of course we have extensively tested all the changes, but errors can occur, especially with heavily customized installations. Just keep that in mind :)

Otherwise, as always, a huge thank you to our great mailcow community for your continued support and valuable feedback.

We will see you again in February at the latest for a new update. Whether it will be the LDAP update in February is not yet certain, we will of course keep you up to date.

Otherwise, stay healthy and happy mailing.

Your mailcow-Team
> Niklas

*Image by <a href="https://pixabay.com/de/users/bbaaer-1679131/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1799310">Samuel</a> from <a href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1799310">Pixabay</a>*