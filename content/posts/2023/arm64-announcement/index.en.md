---
title: "💪🐮 armcow64: dockerized (mailcow on ARM64) Announcement"
date: 2023-05-08T08:00:00+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

featuredImage: "/images/2023/May/arm64_announcement.jpg"
featuredImagePreview: "/images/2023/May/arm64_announcement.jpg"

tags: ["2023", "ARM64"]
categories: ["News"]

---

**Moohoo everyone!**

The emerging hype about ARM64 has not left the mailcow team cold either and so it is a pleasure to say:

**mailcow gets ARM64 support**

<!--more-->

Of course, some are now asking, "That's good but what about compatibility with normal x86 mailcow?"

The tests so far show: Everything remains as it is and nothing will change. The mailcow configurations and the mailcow data *should* be compatible with the ARM64 version.

This means that migration from x86 to ARM64 is also possible.

### Own repository or native in the main repository?
We can currently assume that mailcow on ARM64 (or armcow64: dockerized, take your pick) can coexist in the main repository on GitHub without any problems and both versions will use the same patch level.

This would mean that only the respective images (from the launch of the ARM64 variant, not retroactively) decide which platform can be used and which not.

The actual system requirements (see docs) will not change for the time being, as mailcow should still not be run on small devices or devices with less than 4 GB RAM.

---

A lot of blah blah again but when is ARM64 support for mailcow coming?

Again, we will be using the Nightly Test phase to gather general community feedback to get the feature as best as possible to the official release.

We don't have an exact release date yet, but you can be sure that it won't be that long. If we test thoroughly I expect a release in Q3 2023 for everyone.

But this can still change (both positive and negative). I hope you guys are understanding about this.

Thanks for your time!

*P.S: The ARM64 compatibility seems to get more attention than originally thought! We think that's great! Thanks to all of you who report about it or just look forward to it!

**Your mailcow Team** <br>
> *Niklas* aka. *DerLinkman*