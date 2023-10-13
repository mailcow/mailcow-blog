---
title: "💪🐮6️⃣4️⃣ mailcow: dockerized (ARM64) development stagnates. Will no longer release as stable in 2023"
date: 2023-10-13T08:00:00+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2023", "ARM64"]
categories: ["News"]

---

**Moohoo everyone!**

We are back with new information on the current ARM64 topic.

Unfortunately, it's not good news, as you might have guessed from the headline...

<!--more-->

After the initial euphoria at the start of the ARM64 nightly releases, the bitter reality is now setting in: unfortunately, it's not all as compatible as originally thought.

### What happened?

Well, after we released the nightly releases for ARM64 we noticed something with the migration of old mails: They can **NOT** be decrypted despite having the same crypt key.
We didn't notice this at first, because we had already successfully tested the migration of old e-mails in May, but nobody could have guessed that some of the packages in the operating system would change in the meantime.

### Where is the problem?

Our guess is the changeover from OpenSSL 1.1.1X to OpenSSL 3.X, which is also included in the Debian 12 and Alpine 3.17+ released in the meantime, because it was not included in our tests at the time, which is why it worked at the time.

But we are not 100% sure about this thesis. However, it would be the only logical explanation, since the rest remained exactly identical.

Yes, even the private key used for encryption is exactly the same, as are permissions and users.

The curious thing is that Dovecot can encrypt/decrypt new mails received with OpenSSL 3.X with the key without any problems...

### A problem that can also affect x86 in the future.

We have to find a solution for this that is pleasant for all sides and ideally does not need any further input from you, the users, because exactly the same problem will also fall on our feet on x86.

Because currently mailcow still uses Debian 11 as base images for Dovecot. And, we remember, Debian 11 still has OpenSSL 1.1.1X, where everything works fine. Debian 12 has OpenSSL 3.X... ringing a bell? Correct, we have the same problem there (already verifiable). So it's not due to the architecture (good news at least...) but this will definitely be an issue in the future.

We are currently still in the process of analysing OpenSSL 3.X and Dovecot's crypt key dilemma, which is why we can say with a high degree of certainty:

**armcow64 will no longer be released stable in 2023.**

Believe me: I hate to have to make this announcement, but of course we don't want to leave you out in the cold on this topic, as some people have asked.

ARM64 support is still in the Nightly, so further testing is still possible.

And of course we will continue to look into this problem to find solutions that are good for all sides.

---

Thank you all for taking ARM64 support so well up to this point.

We all deeply regret having to make this announcement here.

Other than that, the same thing that always applies: Happy Mailing and stay healthy!

**Your mailcow Team**
> *Niklas* aka. *DerLinkman*