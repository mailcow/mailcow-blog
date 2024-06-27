---
title: "🌙🐄 Moone Update 2024 | Flatcurve Update Phase 1"
date: 2024-06-27T09:30:00+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2024", "update", "changelog"]
categories: ["Updates"]

---

## 2024-06 (Release on 27.06.2024)

**Moohoo** everyone!

After our [statement](https://mailcow.email/de/posts/2024/development-change/), it's time to bring you an update again.

This time with some additional information:

### ⚠️ Critical Changes

#### Postfix TLS 1.1, TLS 1.0 Discontinuation
As part of the 2024-06 update, Postfix was updated to 3.7.10 and Debian 12. At the same time, this update requires communication between SMTP servers to use at least TLS version 1.2.
This means we are discontinuing support for the older TLS versions 1.0 and 1.1.
<!--more-->

The connection to Dovecot has been limited to TLS 1.2 since 2020 (by default), and analyses from us and our community members have shown that the majority of secure email servers in the world can use at least TLS 1.2, if not already TLS 1.3, with only a very small percentage not being able to do so.

Since it may be that the mentioned TLS 1.0/TLS 1.1 versions are still needed in some exceptional cases, we have updated our documentation on how to re-enable these versions: https://docs.mailcow.email/de/manual-guides/u_e-reeanble-weak-protocols/.

We reserve the right to roll back this change for everyone after a few weeks/months of runtime, should the general public opinion suggest so, as we will have more data to work with by then.

#### Flatcurve as New Full-Text Search Engine (FTS)
As mentioned months ago (or even years... oh man, how time flies), mailcow will be overhauling its FTS engine from Apache Solr to a new engine in the near future (by December 2024, to be exact), which will be the default FTS engine for Dovecot in future Dovecot versions (2.4 and above) as per the developers.

This new engine is called Flatcurve and uses Xapian as its foundation. I don't want to get too technical now, but this new engine offers significantly better indexing capabilities for almost all systems, including low-end systems, so we have begun the transition with this update.

{{< admonition type=question title="**What does this mean for me as a Solr user?**" open=true >}}

Well, initially not much, as Solr will still be included in mailcow until December 2024. However, with the December update, Solr will be completely replaced by Flatcurve, and existing mailcow installations will be forcibly adapted to the new engine.

This means that all Solr indexes will no longer be compatible, and a complete FTS reindex will be necessary.

To avoid chaos in December, we have already provided the option to switch to the new FTS engine now, allowing for a reindex of the FTS indexes over the next few months.

Learn more about how to activate the new engine in advance here in the updated documentation: https://docs.mailcow.email/de/manual-guides/Dovecot/u_e-dovecot-fts/#fts-flatcurve-experimentell-seit-2024-06

{{< /admonition >}}

{{< admonition type=notice title="Note" open=true >}}
With the December 2024 update, the manual activation of the new FTS engine will no longer be necessary.
{{< /admonition >}}

#### Discontinuation of Nextcloud Script and Support for Installations within mailcow

Also in December 2024, we will discontinue support for the included Nextcloud helper script.

This is partly because Nextcloud continues to evolve and requires additional new PHP modules with further versions.

Since we only want to activate the PHP modules we need for mailcow and thus prevent potential entry points for malware, this is suboptimal for us...

Additionally, we believe that a Nextcloud server no longer fits within the concept of mailcow.

Nowadays, setting up a Nextcloud is just as easy as setting up mailcow, as Nextcloud has also made significant progress in this area, offering an AIO (All in One) solution for Docker (also open source) that takes care of everything for Nextcloud's components.

That's why we have made this decision.

{{< admonition type=question title="**What does this mean for me as a Nextcloud helper script user?**" open=true >}}

Again, initially not much, but support for this script is counted until the December 2024 update.

From then on, we will no longer ship the helper script for Nextcloud, making maintenance of Nextcloud (updates) more difficult, and we will no longer incorporate settings for the NGINX/PHP container, or we will revise any changes from the past if they are not also of interest/relevance to mailcow itself.

This will significantly restrict the operation of Nextcloud within mailcow in the long run, requiring a migration of data and databases.

**IMPORTANT: mailcow will NOT provide migration tools or support for migrating a Nextcloud installation out of mailcow.**

{{< /admonition >}}

{{< admonition type=warning title="**Note on Nextcloud authentication via mailcow**" open=true >}}

This is not affected by our plan to discontinue the Nextcloud helper script and support for operating Nextcloud within mailcow.

Authentication via mailcow for Nextcloud will still be possible afterward.

{{< /admonition >}}


---

So, with the most important information out of the way... let's get to the rest of the changes (briefly and compactly summarized):

### Changelog

* Several bugs in Rspamd were fixed, e.g., the SORBS BL was removed as it is no longer maintained.
* Fixed issues in the mailcow UI that caused a user's login to the UI (not SOGo, SMTP, IMAP, etc.) to take up to 5 minutes.
* Removed all Docker Compose `version` sections from all Docker Compose files to eliminate the deprecation warning from Docker.
* Fixed the broken SpamAssassin spam map download for Rspamd, as the URL had changed.
* It is now possible to disable the generation of SSL certificates for autoconfig and autodiscover subdomains via mailcow.conf.
* Made logging adjustments in Postfix to tidy up the logs.
* Translation updates.

The full changelog, including individual commits, is available on GitHub for those interested:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2024-06

---

We will check in with more news and update information when we have time.

Stay healthy and happy mailing.

Your mailcow team
> Niklas/DerLinkman