---
title: "⚡🐄 Janmooary 2025 Update | The Update which changed the Full-text search (and which kicked out Nextcloud)"
date: 2025-02-04T14:40:00+02:00
draft: false

author: The Infrastructure Company GmbH
toc: true

license: ""

tags: ["2025", "update", "changelog", "major"]
categories: ["Updates"]

---

## 2025-01a (Release: 4th February 2025)

**Nginx Fixes**

+ Fixes "invalid password" triggering when opening `/rspamd` [Issue #6275](https://github.com/mailcow/mailcow-dockerized/issues/6275)

+ Invert SKIP container condition for SOGo and Rspamd [commit 97890b71f1f328fe3c9a101a6eece7e3bdb954e6](https://github.com/mailcow/mailcow-dockerized/pull/6291/commits/97890b71f1f328fe3c9a101a6eece7e3bdb954e6)

+ Add environment variable to enable redirection of HTTP Connections to HTTPS (see [docs](https://docs.mailcow.email/manual-guides/u_e-80_to_443/)) [commit e645f931dc04c8b8754927d90275a2e77a03931d](https://github.com/mailcow/mailcow-dockerized/pull/6291/commits/e645f931dc04c8b8754927d90275a2e77a03931d)

+ Use separate Vhosts for additional server names [PR #6290](https://github.com/mailcow/mailcow-dockerized/pull/6290)

**Security fix**

This update includes a security fix for the password reset feature. To exploit this vulnerability, the password reset feature must be enabled by administrators, and the victim must have a configured password reset email. Additionally, the attacker would need to know valid email addresses and depend on certain user interaction.
A CVE will be published next week and can be found here: [Security Advisories](https://github.com/mailcow/mailcow-dockerized/security/advisories?state=published).

**Postfix**

+ Remove discontinued Nixspam DNSBL [PR #6260](https://github.com/mailcow/mailcow-dockerized/pull/6260)

+ Added master.pid removal and startsecs to supervisord [PR #6284](https://github.com/mailcow/mailcow-dockerized/pull/6284)

**Clamd Update**

+ Update to 1.4.2 + build from source instead using alpine packages [commit 60a2270d1e7d0985901378bea83295b3df6bf127](https://github.com/mailcow/mailcow-dockerized/pull/6291/commits/60a2270d1e7d0985901378bea83295b3df6bf127)


For a comprehensive view of all changes, refer to the [Changelog on Github](https://github.com/mailcow/mailcow-dockerized/compare/2025-01...2025-01a)

---

{{< admonition danger >}}
This mailcow Update contains critical changes to a few components. Please create a backup and safe your configs before updating.
{{< /admonition >}}

**Moohoo everyone**

We used our holiday break to deliver you a new update right infront of your doorstep.

As announced, this update continues a brand new Full-text search Engine called "Flatcurve" and a few other new things.

Due to the fact that the changelogs of this update are quite large, we decided not to include them here fully too.

### New Full-text Search Engine

With 2025-01 SOLR is saying arrivederci to mailcow. It will be replaced with Flatcurve instead, which is not using a seperate container like SOLR and is directly integrated into the Dovecot Core.

The discontinuation of SOLR is not only bringing a Full-text search to lower memory systems but is also tied with a long support inside the Dovecot source-code, as this engine will be the main FTS engine comming with the next major version (2.4) of Dovecot anyhow.

#### What will change?

With the change mailcow is patching the mailcow.conf on it's own and is removing ALL SOLR variables from that file. At the same time you'll be asked if you want to delete your old SOLR docker volumes, which are now unused starting with that update.

In your mailcow.conf it will add three new parameters, which are:

- SKIP_FTS
- FTS_PROCS
- FTS_HEAP

You can change these variables as you want. A more detailed instruction on how to tweak this variables and what they actually mean can be found here: https://docs.mailcow.email/manual-guides/Dovecot/u_e-dovecot-fts/

{{< admonition info >}}
After the mailcow update to 2025-01 and the switch to Flatcurve, FTS will be disabled for safety reasons automatically. If you used FTS before or want to try it out, you have to switch the variable `SKIP_FTS` from `y` to `n` and restart mailcow with `docker compose up -d` afterwards.
{{< /admonition >}}

The switch to the new FTS Engine also affect that all old indexes are now useless and have to be reindexed in order to work. Due to the new FTS Engine this happens automatically for a mailbox if it is actively used (20 recent written/received mails) or it has to be done manually. This is also noted in the docs page.

{{< admonition warning >}}
The indexing process is pretty CPU intensive, that CPU spikes may occur. If you detect such, don't worry it will mostlikely be this.
{{< /admonition >}}

### Own NGINX images -> New NGINX configurations
The update is also changing the mailcow integrated NGINX. As it is now build by us instead of completely relying on the latest NGINX docker images.

Mainly this has been done for deeper and easier customizations from ourside as all mailcow default NGINX configs are now generated by using jinja2 templates instead of copying it together via bash.

{{< admonition warning >}}
The creation of custom sites (or others) will work like before.

But if you disabled IPv6 on your mailcow machine (for any reason) you might recheck the guide on how to disable IPv6 in mailcow as something has changed with the new NGINX there.
{{< /admonition >}}

### Nextcloud has been removed (inside mailcow)

Originally announced for discontinuation in December 2024, now removed with 2025-01 is the Nextcloud helper script which installed Nextcloud alongside mailcow.

This means that nor the developers or the community will support that setup anymore.

Running Nextcloud instances inside mailcow will probably still work, but due to the removal of some Nextcloud exclusively used PHP modules a smooth operation of Nextcloud won't be guaranteed.

In anycase you should move all data to a dedicated Nextcloud instance (e.g. Nextcloud Docker or Nextcloud All-in-one) instead.

{{< admonition info >}}
**Any pull-request or issue regarding a Nextcloud reintegration or a implementation of special submodules needed for Nextcloud will be closed/declined instantly**
{{< /admonition >}}

### Redis is now password protected

Also a new addition: Redis got a password now. This will not cause any change for a regular mailcow usage without customizations. External Apps or Websites which use mailcow's Redis need to use the newly and automatically set Redis password (set inside mailcow.conf) from now on.

### Security fix

Also in this update a smaller security fix has been introduced. The weak point could only be harmed if an attacker had control of the victims browser. More details information aswell as the CVE number will follow very soon.

### Temporary E-Mail adresses now have descriptions

The 2025-01 update brings a new feature that allows you to add descriptions to spam aliases, ideal if you want to note what it was/is used for.

{{< admonition info >}}
**This function is only available for newly created aliases.** The comments cannot be changed after creation.
{{< /admonition >}}

### Changes to the external Fail2Ban endpoint URL

This has changed since the 2025-01 update and must be retrieved from the Admin UI once again.

The new banlist is now retrieved via a specially written PHP file, which leads to the path change.

---

Of course, minor bugs/glitches have also been fixed, but these would now go beyond the scope... but if you are interested, please have a look at the complete GitHub changelog: https://github.com/mailcow/mailcow-dockerized/releases/2025-01

If there are major or frequently occurring problems, we will of course also release fixes for them in the classic a,b,c revisions in a timely manner.

Until then, stay safe.

Happy mailing!

Your mailcow Team from The Infrastructure Company GmbH (or shortly tinc)