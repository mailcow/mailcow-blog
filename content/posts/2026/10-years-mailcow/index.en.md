---
title: "🎂🐮 Happy Moothday: 10 years of mailcow"
date: 2026-12-09T09:00:00+01:00
draft: false
author: The Infrastructure Company GmbH
description: "On 9 December 2016 the first commit of mailcow: dockerized went online. A look back, 2026 at a glance, our new look and what comes next."
featuredImage: "featured.jpg"
toc: true
license: ""
tags: ["Community"]
categories: ["News"]
---

**Moohoo everyone!**

Ten years ago today, on 9 December 2016, the first commit of mailcow: dockerized went online. The commit message was short: "mailcow dockerized". It grew into a mail server that runs for companies, public authorities, clubs and many private users today.

Thank you to everyone who uses mailcow, tests it, reports bugs, translates, helps others in the forum and on Telegram or supports the project financially. Without you there would be no birthday to celebrate.

There is also something new to see for the anniversary: mailcow.email has a new look.

## mailcow.email has a new look

[Servercow](https://servercow.de/en/) got a new design in 2026. Since [update 2026-10]({{< relref "/posts/2026/release-2026-10" >}}), the mailcow UI ships the matching **servercow theme** (*System → Configuration → Customize*). Now this site follows: its own theme, the same colours and fonts, and a clearer structure.

- **Start page:** the current release with its update command, the latest posts and the roadmap at a glance.
- **News and releases are separate:** the [release notes]({{< relref "/releases" >}}) are sorted by year. Every version chip links straight to the release on GitHub.
- **Roadmap:** a new [page]({{< relref "/roadmap" >}}) with everything that is planned, in development or being tested in nightly.
- **Verified VPS providers:** now an overview with locations, architecture and mail ports.
- **Consistent categories and tags**, so you can find older posts quickly.
- **Dark mode and language switch** in the top right corner.
- **Products:** the menu shows what we, the developers of mailcow, offer through Servercow: managed mailcow, support packages, Dedicated Piler and BackupcowMX.

## Ten years in brief

The first mailcow concepts came up in 2015, still without Docker. On 9 December 2016, André Peters (andryyy) started mailcow: dockerized. From day one every service ran in its own container, and from day one mailcow was licensed under the GPLv3. Postfix, Dovecot, Rspamd, SOGo, MariaDB and Memcached were already in place in the first week.

| Year | What happened |
|---|---|
| 2016 | First commit on 9 December |
| 2017 | Sync jobs with imapsync, the first API, 2FA, ClamAV, Unbound, the ACME container, `update.sh` and the watchdog. By the end of 2017 the architecture we know today was in place. |
| 2018 | Dovecot 2.3, Fail2ban becomes Netfilter |
| 2019 | Full-text search with Solr, Olefy checks Office macros |
| 2020 | SOGo 5, WebAuthn as a beta |
| 2021 | On 1 April, The Infrastructure Company (tinc) takes over development. Ofelia replaces cron, PHP 8 arrives. |
| 2022 | Monthly releases tagged YYYY-MM, Docker Compose v2, the UI moves to Bootstrap 5 |
| 2023 | Keycloak, generic OIDC and ARM64. The documentation moves to [docs.mailcow.email](https://docs.mailcow.email). |
| 2024 | Flatcurve replaces Solr for full-text search |
| 2025 | Images come from ghcr.io, MTA-STS for outgoing mail with postfix-tlspol |
| 2026 | Groups, identity provider sync, a new imapsync, multiple API keys and the servercow theme |

**By the numbers** (as of late November 2026):

- almost **7,900 commits** from almost **400 contributors**
- more than **13,800 stars** and almost **1,900 forks** on GitHub
- almost **100 releases** since January 2022
- **11 containers** at the start, **18** today

## 2026 at a glance

2026 brought **17 releases**, from [2026-01]({{< relref "/posts/2026/release-2026-01" >}}) to [2026-11b]({{< relref "/posts/2026/release-2026-11" >}}), with more than 400 commits from almost 40 contributors. The most important changes:

### Collaboration and identities

- **Groups** (2026-11): distribution lists, sending as the group, shared mailboxes without a shared password, and calendars and address books for groups in SOGo.
- **Identity provider sync** (2026-11) with Keycloak and LDAP/AD: groups and members come from the IdP, with optional offboarding.
- **Aliases:** send permissions for aliases are configurable (2026-01), and aliases with external targets can be turned off per ACL and globally (2026-09).

### Security and sign-in

- **Forced 2FA setup and password change** (2026-03). Thanks to Philipps-Universität Marburg for sponsoring this work.
- Admins can **limit ActiveSync and DAV** per mailbox (2026-01).
- Netfilter counts failed logins on **all protocols**, plus a rate limit for 2FA (2026-11).
- On top of that, many security updates, often as quick revision releases (a, b, c).

### Certificates and delivery

- **DNS-01 challenge** for Let's Encrypt certificates (2026-03), which also makes wildcard certificates possible.
- **MTA-STS for alias domains** (2026-01).

### Migration and automation

- **New imapsync** (2026-11): reusable sync sources, OAuth2 for Microsoft 365 and Google, parallel jobs.
- **Multiple API keys** (2026-11), each with read or read/write access and its own IP allowlist.

### User interface

- **Bootstrap 5.3 and a theme system** (2026-10): custom themes survive updates, the servercow theme is included, and the login pages show the role in colour.
- Passwords can be shown and hidden on the login pages (2026-09).

### Under the hood

- Postfix runs on **Debian 13 (Trixie)**, currently with Postfix 3.10.
- Rspamd moved from 3.14 to **4.2**. We now build SOGo **from source**, currently 5.12.13.
- Nginx 1.30, Unbound 1.26, Redis 7.4, and the PHP image is based on Alpine 3.24.

### In the team

In May, [DerLinkman (Niklas)]({{< relref "/posts/2026/derlinkman-leave" >}}) said goodbye to the team after many years. Thank you for everything you did for mailcow!

You'll find all details in the [release notes]({{< relref "/releases" >}}).

## What's next

The new [roadmap]({{< relref "/roadmap" >}}) shows what we are working on. A few highlights:

- **Testing in nightly:** granular backups with restic snapshots, retention in the UI, an improved archive integration and mail policies, that is, rules for who may send where and receive from where.
- **In development:** PHP 8.5 and ECDSA certificates.
- **Planned:** Dovecot 2.4, MariaDB 11, an external database and external ClamAV, Compose profiles instead of `SKIP_*`, JMAP, an API for domain admins and users, and a mailcow CLI tool.

If you want to test early, try the [nightly demo](https://nightly-demo.mailcow.email) or switch a test system to the nightly channel with `./update.sh --nightly`. For production, stable remains the right channel.

## Thank you!

mailcow is open source and will stay that way. The project has grown for ten years thanks to you:

- everyone who contributes code, translations and documentation,
- everyone who helps others in the [forum](https://community.mailcow.email) and on [Telegram](https://t.me/mailcow),
- everyone who funds development with a [Stay Awesome License](https://cp.servercow.de/product/mailcow-stay-awesome-lizenz-sal) or through [GitHub Sponsors](https://github.com/sponsors/mailcow),
- and everyone who runs mailcow and recommends it.

Here's to the next ten years! SMTP has been around since 1982, survived countless predictions of its death, and still refuses to retire. So neither do we. See you at the 20th! Moo! 🐮

Your mailcow Team from **The Infrastructure Company GmbH** (or shortly **tinc**)
