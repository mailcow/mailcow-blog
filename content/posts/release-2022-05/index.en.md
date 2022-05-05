---
title: "🌌🐮 Mooay 2022 Update - The Tag Update | Changelog"
date: 2022-05-05T10:34:00+01:00
draft: false
author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"

tags: ["2022", "update", "changelog", "bugfix"]
categories: ["Updates"]
---

> *Here, the new mailcow update 2022-05 is!*<br>
**Yoda, in a parallel universe**

Anyway... this month we have new stuff for your mailcow again.
So let´s get started, shall we?

### What is new?

#### Tags
Thanks to the help of [@FredleSpl0it](https://github.com/FreddleSpl0it "@FredleSpl0it") the mailcow now has tags. Tags? Yes tags! These can be used for filtering and searching. You can add them either by editing a domain/mailbox or by creating a new one. In both cases the tags section will show itself to you.

---

#### SOGo 5.6.0
Heard there is a new SOGo version? Yep, and we already have it on board. For more information please read the official changelogs from inverse (the SOGo developers): https://github.com/inverse-inc/sogo/releases/tag/SOGo-5.6.0



---

#### Accessibility (screen readers)
[@mkuron](https://github.com/mkuron "@mkuron") has made the mailcow a bit more accessible for blind people. (Respect at this point for all who have fun in the IT world despite this limitation).

---

#### Update.sh changed
We have implemented a new parameter for the Update.sh script, which skips the online check at the beginning of the update process. This could not be executed for some people because all ICMP connections to and from the mailcow were blocked. Now just use the --skip-ping-check parameter when you run the Update.sh script (but please only use it if you really don't allow ICMP connections to and from your mailcow).

---

#### New API functions
We or the community has extended the API. Now you can also search domains by tags. Furthermore we added an API interface with the versioning of the mailcow. For more detailed API information just have a look at the extra API page of your mailcow (your.mailcow.domain/api).

Thanks to [@lars-net](https://github.com/larsl-net "@lars-net") and [@FredleSpl0it](https://github.com/FreddleSpl0it "@FredleSpl0it") for that.

---

For a more detailed or granular structure of the update, feel free to check out the GitHub page: https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-05

That's it for this month.

See you again in June or earlier (should there be critical bugs...).

Stay healthy

*Niklas*

