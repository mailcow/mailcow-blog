---
title: "🦾6️⃣4️⃣ 🐄 Janmooary 2024 Update | The Multiarch (x86 + ARM64) & Performance Update"
date: 2024-01-17T11:19:02+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2024", "update", "changelog", "ARM64", "major"]
categories: ["Updates"]

featuredImage: "/images/2024/January/release-arm64.jpg"
featuredImagePreview: "/images/2024/January/release-arm64.jpg"

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