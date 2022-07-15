---
title: "📰🐄 Jan(moo)uary Update 2022 - The U2F --> WebAuthn (2FA) Update | Patchnotes"
date: 2022-01-21T14:55:47+01:00
draft: false

author: "Niklas Meyer"
description: "Patchnotes for the January 2022 Update"
  
categories: ["Updates"]
tags: ["2022", "update", "changelog"]
---

**Moohoo** everyone, Niklas here with the latest changelog for our beloved mailcow email software!

This month there is a big chunk of changes, some of them even very important regarding 2FA, but more about that later.

First of all we would like to thank you for your loyalty and cooperation, because without you the mailcow project wouldn't be where it is now ❤️

We would also like to apologize for the fact that we are only now releasing a new update (master branch release), because some of the fixes included in this update (SOGo e.g. with the greyed out save button in the redirects or the Olefy Ping fix, which solves a console spam) should have been fixed already... We promise improvement at this point!

You probably already think: "Shorter please?"... it's alright! Here are the changes (in short!)

---
#### Very Important changes:
With the January 2022 update, the previously used **U2F API (for 2-factor authentication)** will be replaced by the newer **WebAuthn API**.

**What does this mean for you?**
Well, if you have already registered a FIDO2 security key as 2FA via U2F and you apply the update, you will be greeted by a message saying that your FIDO2 key is still running via U2F and will therefore be removed from the account as 2FA. **But don't worry!** As soon as you are back in the admin administration you can simply register the same key again, but this time as WebAuthn (not U2F).

The process is the same, even the position of the button to start the registration is the same, so you should be able to set up and use your key without any problems.

Thanks to **@FreddleSpl0it** for the implementation!

[In our documentation you will find more detailed information about this.](https://mailcow.github.io/mailcow-dockerized-docs/manual-guides/mailcow-UI/u_e-mailcow_ui-tfa/ "In our documentation you will find more detailed information.")

#### Important changes:
- Sogo was updated to version 5.5.0. Yay, finally no more grayed out buttons in the submenus!
- The log4j fix (in Solr) has been improved again. On the advice of the [German Federal Office for Information Security](https://www.bsi.bund.de/SharedDocs/Warnmeldungen/DE/CB/2022/01/warnmeldung_cb-k21-1264_update_20.html "German Federal Office for Information Security"), we have removed the affected log4j class. **The Solr container was not accessible from the Internet at any time**.
- On the advice of the [German Federal Office for Information Security](https://www.bsi.bund.de/SharedDocs/Warnmeldungen/DE/TW/2022/01/warnmeldung_tw-t22-0012.html) we updated **ClamAV to 0.103.5** because it was *vulnerable to a Denial of Service attack*.
- In the Olefy container, the annoying ping error (spam from Olefy in the console) has finally been fixed! Thanks to **@16bitsysop** for the fix! --> Fixing issue [#4401](https://github.com/mailcow/mailcow-dockerized/issues/4401 "#4401")
- Due to the update to Alpine 3.15 or higher the acme container has changed the SSL folder  (Also already sporadically with acme-mailcow 1:79), this was fixed by **@mkuron**. Thanks for that. --> Fixing issue [#4392](https://github.com/mailcow/mailcow-dockerized/issues/4392 "#4392")
- We have fixed the bugs regarding GeoIP and netfilter (or rather **@marcvorwerk** did) --> Fixing issue [#2668](https://github.com/mailcow/mailcow-dockerized/issues/2668 "#2668")

---

**There were many more!** But that would go beyond the scope here, just have a look at the [Release](https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-01), then you will see the whole extent.

Once again, thank you to all the **contributors and donors**.

On behalf of the Servercow/mailcow/tinc team we wish you (wherever you are) a pleasant morning, noon or evening and **stay healthy**!