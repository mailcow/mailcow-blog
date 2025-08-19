---
title: "Quick Guide: Upgrading Debian 12 to Debian 13 for mailcow Servers"
date: 2025-08-19
draft: false
tags: ["Debian", "Upgrade", "mailcow", "Exim", "Postfix"]
categories: ["Guides"]
author: The Infrastructure Company GmbH
toc: true

featuredImage: "/images/2025/August/guide_debian_upgrade12-13.webp"


license: ""
---

**Moohoo, dear community!**

With the release of **Debian 13 (Trixie)**, the question arises for you as administrators: *How can you perform a smooth dist-upgrade from Debian 12 (Bookworm) – especially on systems running mailcow?*  
A commonly overlooked pitfall: **Exim**.

<!--more-->

## Important Notes Before the Upgrade
Debian 13 installs the **Exim4 Mail Transfer Agent** by default. 

This applies to both fresh installations and upgrades if Exim is included in dependencies or "default packages."

As you know, mailcow uses Postfix, which by default (and according to RFC standards, unchangeable) listens on port 25.

The problem: **Exim on the host also occupies port 25**. 

As a result, the postfix-mailcow container cannot start properly and cannot send or receive emails.

## Before the Upgrade

Pin the Exim versions to prevent their installation during the upgrade, saving you the trouble of removing them later.

```bash
sudo tee /etc/apt/preferences.d/block-exim > /dev/null <<EOF
Package: exim4*
Pin: release *
Pin-Priority: -1
EOF
```

Thanks to the community for this addition!

## Performing the Upgrade

{{< admonition success >}}
A good system administrator always creates a backup before upgrading. :)
{{< /admonition >}}

The dist-upgrade is performed as usual:

```bash
sed -i 's/bookworm/trixie/g' /etc/apt/sources.list
apt update
apt upgrade
apt full-upgrade
```

{{< admonition danger >}}
**Warning**: Also check external APT sources, such as Docker. The above SED command only changes the base OS sources!
{{< /admonition >}}

A subsequent reboot (`reboot`) is required to ensure all services run with the new versions.

## Removing Exim After the Reboot (If Present)
After the reboot, Exim might be installed and occupying port 25 on the host.  
Check this with:

```bash
ss -tulpn | grep :25
```

If Exim is listed, please execute the following:

```bash
# Uninstall Exim
apt purge exim4 exim4-base exim4-config exim4-daemon-light
```

Optionally, you can remove any remaining configuration files:

```bash
apt autoremove --purge
```

Verify again with:

```bash
ss -tulpn | grep :25
```

...to confirm that Exim is no longer listening on port 25.

## Conclusion
When upgrading from **Debian 12 to Debian 13**, special care must be taken on mailcow systems, particularly regarding the **Exim mail server**, which is installed by default.  
Since Postfix in a modern mailcow installation runs exclusively in the container via Docker, Exim on the host is not only unnecessary but also blocks port 25.  
By uninstalling Exim in a timely manner, nothing stands in the way of smooth mailcow operation on Debian 13 (Trixie).

---

Until then...

Stay healthy and happy mailing!

**Your mailcow Team**