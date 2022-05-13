---
title: "🌌🐮 Mooay 2022 Update - The Tag Update | Revision C - Changelog"
date: 2022-05-13T09:22:00+02:00
draft: false
author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"

tags: ["2022", "update", "changelog", "bugfix"]
categories: ["Updates"]
---

### 2022-05c
It´s us again again!

This time we´ve published the 2022-05c Update which is a very small one.

It changed the API a bit again. This time for security reasons.

Head over to GitHub to see the full changelog: 
https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-05c

Stay healthy

*Niklas*

---

### 2022-05b
It´s us again!

Today we have a small API Fix Update which focus mainly on the UI.

As some of you reported the API Calls for Domains/Mailboxes don´t work anymore if there is no Tag set.

This is now fixed.

Additionaly, we´ve added a small tweak for the UI. Did you know that there was a little plus symbol at the left of a Domain/Mailbox? No? Don´t worry it was a little hard to see... until now :)

As always, feel free to visit the official release page on Github: https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-05b

That´s all basically... oh no wait one more thing!
We´ve now included the mailcow Version to our Bug Reporting Formular on GitHub. So if you want to report a Bug please also fill out the Version row on the Issue form.

Now that´s all!

Thanks again for all of the contributors and mailcow users/admins.

Your mailcow Team

*Niklas*

---

### 2022-05a
Hello again folks,

we´ve just released the first Hotfix for 2022-05.

It fixes a critical UI Bug which caused a inaccessability for the UI after the Update 2022-05.

The issue was a missing placeholder which caused a important folder to be deleted from the Git Repository, which is needed to display the UI.

Sorry for that.

Your mailcow Team

*Niklas*

---

### 2022-05
> *Here, the new mailcow update 2022-05 is!*<br>
**Yoda, in a parallel universe**

Anyway... this month we have new stuff for your mailcow again.
So let´s get started, shall we?

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

