---
title: "🌻 🐄 Moogust Update 2023 - Spamhaus DQS Hotfixes"
date: 2023-08-03T11:11:32+02:00
draft: false

author: Patrick Schult/FreddleSpl0it
authorLink: "https://github.com/FreddleSpl0it"
toc: true

license: ""

tags: ["2023", "update", "changelog", "DQS", "Spamhaus", "DNSBL", "hotfix"]
categories: ["Updates"]

---

## 2023-08  (Release 3rd August 2023)

**Moohoo everyone!**

I hope you are not tired yet of performing updates.<br>
The 2023-08 Release is here, and it contains some hotfixes for the new Spamhaus DQS feature.<br>
**If you are not using Spamhaus DQS and haven't experienced any issues with the 2023-07 update, you don't have to install this update.**<br>

As this release only contains hotfixes, there is not much to say about it, except for one thing.<br>
If you don't want to use Postscreen DNSBL at all, you can delete and leave **the content** of the file `data/conf/postfix/dns_blocklists.cf` empty.<br>
To undo any changes to this file, simply delete **the file** and restart Postfix.<br>


### Changelog

- Fix main.cf merging order
- [Postfix] rework dns_blocklists.cf generation
- Add postscreen_dnsbl_reply_map to avoid disclosure of DQS key

The full changelog with the individual commits is available on GitHub:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-08

---


As always, a big thank you to our amazing mailcow community for your continuous support and valuable feedback. 

Stay healthy and happy mailing!

Your mailcow Team
