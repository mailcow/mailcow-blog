---
title: "☀️🐄 Mooly Update 2022 - TFA Flow Update | Changelog"
date: 2022-07-14T08:30:10+02:00
draft: false

author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true

tags: ["2022", "update", "changelog", "bugfix"]
categories: ["Updates"]
---

**Moohoo everyone!**

It's update time once again, a little later than before (I'll get into that a bit later) but still packed with some changes:

### TFA Changes

- 2FA is now also possible for mailbox users in the UI (previously this was reserved for administrators).
- Also, it is now possible to enable multiple 2FA options for an account. <br>*Note: Only one is used, which is selected by the user.*
- There is a nice new menu at to select the available 2FA options.

The update was developed by [@FreddleSpl0it](https://github.com/FreddleSpl0it) (Patrick). Thanks for that :)

Speaking of Patrick, he is an official member of tinc since the beginning of June and is now more intensively dedicated to the mailcow development and everything around here!

So you may soon read something from him here on the blog page 😊

---

All right, where were we? Oh, right! At the other changes besides the new TFA options:

### Docker image changes (mailcow stack)

- SOGo (not our software, often asked) has been updated to version 5.7.0. In the mailcow this was implemented in the Docker image sogo:1.109. The official changelog from SOGo can be found here: [https://github.com/inverse-inc/sogo/releases/tag/SOGo-5.7.0](https://github.com/inverse-inc/sogo/releases/tag/SOGo-5.7.0). Thanks to [@MAGICCC](https://github.com/MAGICCC) for updating.
- In the ClamAV container, the healthcheck has been rebuilt so that it is now healthy even if ClamAV is not used at all. (Is probably broken by switching to the official images). This is included in the image clamav:1.53! Thanks to [@mritzmann](https://github.com/mritzmann) for implementing.
- Dovecot has been updated to 2.3.19.1 ([changelog](https://dovecot.org/doc/NEWS)). This comes with the Docker image dovecot:1.17.

### Miscellaneous changes/fixes

- The update.sh script no longer updates the installed docker-compose version without being asked. This was noted by some users, thanks for that!
- Also in the update.sh script, the docker-compose version can now be updated alone (with --update-compose). This feature has been implemented in the cold_standby.sh script so that the target machine now gets an update of docker-compose in addition to the Docker image cleanup process.
- A Lua crash with SOGo was fixed in RSPAMD. Thanks to [@andryyy](https://github.com/andryyy)
- In the SyncJobs, the default mailbox (which always appears when a new job is created) has been removed. This way the messages cannot accidentally end up in the wrong mailbox anymore. Thanks to [@RafaelKr](https://github.com/RafaelKr)
- A blank page was displayed in the browser if the WebUI was accessed with /user but no user was logged in. This has been fixed. Thanks to [@mhofer117](https://github.com/mhofer117)

---

Phew, my fingers hurt from writing 🙃

But anyway, that's it for this time.

If you want to read the [complete changelog](https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-07) you can do that (as always) on GitHub.

But now a few words about the major updates 1x a month:

### The update cycle

Until now the updates were released on the first Tuesday of the month. But we noticed that the update quality and quantity stagnated and also the general tests were a bit too short. Of course, the updates are not always 100% error-free and in an open source project, the feedback of the community is even more important, but we still want to be able to say at our own discretion: "*Yes, the update is tested so far and functional on the most common installation methods.*", which has led us to no longer want to specify a fixed date for a major update per month.

There will still be at least one major feature update every month, just not on a fixed day like before.

### Outlook for the future

However, we are planning a new type of update for the August update: the Nightly Updates! These allow us to let you test new features or major changes before they go live for everyone.

For this purpose there will be a possibility to switch between **stable** and **nightly** builds in the update.sh script (but always make a backup before, because *no backup, no mercy!*).

The first big nightly test is the new **Bootstrap 5 update**, which is expected to land in the stable build for everyone in *September 2022*.

More about the nightly tests when its ready.

---

Well, enough of that.

Stay healthy and take care of yourselves!

**Your mailcow Team** <br>
*Niklas*