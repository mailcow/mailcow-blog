---
title: "🕶️🐄 Moogust Update 2024 | Forgot Password?, SOGo 5.11, Rspamd 3.9.1 and More | Revision A"
date: 2024-08-15T14:30:00+02:00
draft: false

author: DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2024", "update", "changelog"]
categories: ["Updates"]

---

# 2024-08a (Released on 20th August 2024)

### Dovecot updated to 2.3.21.1
{{< admonition type=warning title="Warning" open=true >}}
This release includes patches for Dovecot (version 2.3.21.1) that address two security vulnerabilities within Dovecot.

**Installation is strongly recommended!**

See Dovecot Release Notes: [https://github.com/dovecot/core/blob/release-2.3.21/NEWS](https://github.com/dovecot/core/blob/release-2.3.21/NEWS)
{{< /admonition >}}

### Other Changes
- Fixed issues with parsing the Docker version number in the `generate-config.sh` and `update.sh` scripts.
- Some Dockerfiles were refactored (this has no impact on operations, it only serves for future development).
- An exit condition was added to Dovecot concerning the download of sa-rules. Previously, the download had to be successful; otherwise, Dovecot would not start. Now, if the download fails after several attempts, Dovecot will still start.
- In Docker containers that used the `mysqladmin` tool, the tool has been replaced with the newer `mariadb-admin` with the same functionality to prevent future compatibility issues.
- Several Bash variables in the scripts are now handled correctly (quoting), and some strange non-UTF-8 characters have been replaced.
- Due to the Rspamd update to 3.9.1, UTF-8 decoding in the Pushover and quarantine systems was broken, which could have led to unexpected results when emojis were in the header. This has been fixed.

---

# 2024-08 (Released on 15th August 2024)

**Moohoo** everyone!

August is here, and mailcow brings you a major update for this (hopefully not too hot) month.

This time, we have some significant changes on board that we would like to introduce to you:
<!--more-->

### The “Forgot Password?” Feature
Previously requested multiple times, and now finally here: We present the "Forgot Password?" feature.

We would like to express our sincere thanks to the Youth Foundation of Baden-Württemberg (Germany), who fully sponsored this feature!

With this function, users (provided the admins have not disabled the permission) can request a "Forgot Password" email for their main password (important: not for app passwords!!).

To enable the feature, some preparations are necessary, which you can see on our dedicated documentation page: [https://docs.mailcow.email/manual-guides/mailcow-UI/u_e-mailcow_ui-forgot_password/](https://docs.mailcow.email/manual-guides/mailcow-UI/u_e-mailcow_ui-forgot_password/)

### SOGo updated to 5.11.0

You love SOGo updates, we know that :). With the 2024-08 update, the latest SOGo update (as of 14.08.2024) 5.11.0 takes its place in SOGo. For those who are interested, here is the SOGo changelog: [https://github.com/Alinto/sogo/releases/tag/SOGo-5.11.0](https://github.com/Alinto/sogo/releases/tag/SOGo-5.11.0)

### Rspamd updated to 3.9.1

Rspamd also receives a new version within mailcow with the 2024-08 update. On the advice of our Rspamd expert (thanks, Drago!), we waited for the Rspamd update to version 3.9.X. Why? Well, with version 3.9.0, the memory usage of learned Bayes data has been reduced by about 350%. This means a significantly smaller Redis DB for all new installations! For all existing mailcow installations, we strongly recommend resetting the Bayes database once. The reason for this is a potential overlearning of the Bayes filter that is not automatically corrected. Although non-central tokens expire after a certain time, persisted "core tokens" remain and can continue to influence the model.

Resetting the Bayes database helps avoid potential overlearning issues and ensures that your spam filter works optimally without bias. After resetting, the Bayes model can be retrained to provide accurate spam detection.

Here's how: [https://docs.mailcow.email/manual-guides/Rspamd/u-e-rspamd-work-with-spamdata/#reset-bayes-data](https://docs.mailcow.email/manual-guides/Rspamd/u-e-rspamd-work-with-spamdata/#reset-bayes-data)

**This step is not mandatory but only recommended!**

### mailcow now requires Docker version 24.X.X or higher

As the title suggests, we have decided to require at least Docker version 24.X.X for new mailcow installations and to include a warning in existing mailcow versions if they use an older Docker version than 24.X.X.

This is for technical reasons related to potential future changes that could affect the Docker daemon.

---

### Other Changes

- The Watchdog now correctly escapes the subject and/or the actual content.
- Automated installations on low-memory systems should now proceed. This is made possible by passing the SKIP_SOLR or SKIP_CLAMD variables as environment variables.
- Minor corrections have been made to the `update.sh` script (spelling mistakes, etc.).
- A bug was fixed that caused the acme-mailcow container to no longer communicate with other containers via cURL (we are still working on this, but there are promising findings).
- The Spamhaus DQS lists are now also loaded into Rspamd if the SPAMHAUS_DQS_KEY is activated in the `mailcow.conf`. This increases spam protection.
- A bug was fixed that occurred in the mailcow UI after enabling the new FTS engine and when a mailbox was deleted.
- Healthchecks have been revised in the Unbound container.
- Speaking of the FTS engine: A bug related to the maximum length of an email address was fixed, which caused errors with excessively long emails.
- We have updated our Contribution Guidelines on GitHub.

---

So, that’s it for this update.

As always, remember to regularly update mailcow and your systems, and don't forget to make backups!

Stay healthy.

Your mailcow team  
*Niklas aka. DerLinkman*