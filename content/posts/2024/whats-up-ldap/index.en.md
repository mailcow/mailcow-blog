---
title: "🤔🔒🐮 What's up? - LDAP Integration"
date: 2024-03-11T11:10:10+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2024", "faq", "news", "status", "ldap"]
categories: ["What's up?", "News"]

---

**Moohoo everyone!**

As already announced on social media channels, today we are serving you a new edition of our section: `What's up?`.

Today, we are explicitly discussing a topic of burning interest to all of us: **LDAP/OIDC Integration** and the associated **overhaul of the authentication system**.

We have kept you updated in the past that we are feverishly working on integrating LDAP and OIDC. After all, this function is not without reason one of the most requested features for mailcow ever – and rightly so!

However, our plan was to release this whole thing in the first quarter of 2024 or maybe even around Christmas 2023. As you have noticed, both timelines could not be met...

<!--more-->

### What's the issue?

Well, fundamentally, the system is very advanced and functionally complete. However, as often is the case, it's the final percentages of completion that cause the whole thing to be pushed back. Generally, of course, we always thoroughly test the functionalities so we can offer you a largely error-free system. However, errors are human and sometimes only found after 100x testing because a small part of the configuration is this way for one person and that way for another.

Long story short: We are still collecting test results from various environments that do not meet our testing standard, as these data are more meaningful than the test scenarios we set up. And there, we simply do not have enough data to be able to release the whole thing to the world with a clear conscience.

Although the update is primarily designed to offer LDAP or OIDC as sources for user information, it also changes quite a bit for everyone else in mailcow itself. First off: Don't worry! It does not affect any data or similar!

The update itself also brings nice improvements in the area of authentication in general:

For example, from then on, it will no longer be necessary to log in to SOGo and the mailcow UI separately, but only in the mailcow UI. The UI will then automatically redirect you to the webmailer. Users can then jump to their mailbox settings via a new button in SOGo (basically what they currently see when they log directly into the mailcow UI). This saves users essentially one step of logging in.

Since we need to completely overhaul the entire authentication system, we want to be sure there are no security vulnerabilities that have a similar severity as the recent ones found in Exchange.

### External tests bring us forward

Perhaps the factor that external tests have on this feature is underestimated. In the last few weeks, many improvements and fixes have flowed into the code of the whole thing, and that's only because we teamed up with an external partner of ours to implement the system under observation and of course the necessary knowledge in production environments. It sounds contradictory because we say that the whole thing is not yet ready for production use, but believe me, this possibility or option has let many errors and also improvements flow into the code, from which, as always, everyone benefits. For example, a **native LDAP** option **WITHOUT** Keycloak was recently implemented based on feedback.

So, you see, good things take time.

Of course, we want to release the whole thing to you in production as soon as possible, but currently, based on the available data, that's not yet possible for us to say: "This is stable, can be used without problems."

### What we can offer you in the meantime

But as a compromise, in the next few weeks, we will already adjust the documentation of mailcow according to the current OIDC/LDAP configuration possibilities, so that interested parties can install it themselves in the Nightly version. We had, of course, already included a guide in the first post calling for beta testers, but in the meantime, quite a bit has changed, so we will provide an almost finalized version of the adjusted documentation.

The advantage is that you don't have to search or piece together anything yourself.

Keep in mind, of course, that this documentation is **NOT FINAL** yet and we reserve the right to make changes for the final update. Maybe you also have suggestions for improvement for the documentation in this area, for which we are, as always, very grateful!

We will announce the release of the adjusted documentation on our social media platforms, so keep an eye out.

### Conclusion

With this blog post, we will now **NOT give you a new ETA** for the feature. When it is ready, you will of course find out immediately and it will be announced in advance.
Of course, we want to stick to the goal of releasing it as quickly as possible, but currently, we just do not have an exact date for it.

I hope this has been able to minimize some of the questions, for example, whether the feature was canceled or what is generally happening with it.

Of course, it pleases us very much if you look forward to it, but unfortunately, asking frequently does not make the feature arrive any faster.

So, that's about it for now. We will hear from each other at the latest for the March update from mailcow.

Until then:

> Ciao, Your Linkman or Niklas (whichever you prefer)
