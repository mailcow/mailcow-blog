---
title: "🐮🤝 LDAP is real and is coming 2023"
date: 2023-03-31T11:00:00+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true
lightgallery: true

license: ""

tags: ["2023", "LDAP"]
categories: ["News"]

---

**Moohoo everyone!**

The time of waiting is over and many have shared their solution with us on the contact options below.

Today we finally have the pleasure to let it out into the world!

<!--more-->

One thing that has been wished for a very, very long time:

**LDAP IS COMING TO NIGHTLY Q2 2023**.

Many (actually almost all) have guessed it correctly and found the solution.

But what exactly does it mean now?

mailcow gets in the second quarter of 2023 (April to June) **finally** a LDAP option to manage users conveniently somewhere.

This of course brings new possibilities for mailcow: e.g. in schools or other public institutions.

### How does it work?

With the new feature, mailcow can be configured to use an external keycloak for authentication in addition to the local SQL database. 
If you don't know Keycloak, you can read about Red Hat's open source project here: https://www.keycloak.org/. 
The mailcow is connected to Keycloak via OIDC. Keycloak can in turn be configured to use an LDAP system for authentication.

Some may ask, why the detour via Keycloak? 
In addition to the option to connect to an LDAP system, Keycloak could provide other options to perhaps even provide more authentication options in the future. 
In addition, companies that already have Keycloak in place can use the single sign-on feature for the Mailcow UI and therefore SOGo as well.

---

We would like to point out that this LDAP feature will **only be part of the nightly versions** (i.e. the testing versions) of mailcow upon full release because we want to get as much as possible as right as possible with such a hotly anticipated feature and work closely with the community.

If everything goes smoothly, we can aim for an official release towards the end of Q4 (Nov - Dec 2023).

Of course, there will be news about this again, should something change.

Nevertheless, we want to thank you all for this little puzzle fun and hope that you also had some fun guessing the solution. It won't be the last time we did something like this 😊

**Your mailcow team** <br>
> *Niklas* or *DerLinkman* & *Patrick* or *FreddleSpl0it*