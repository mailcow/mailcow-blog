---
title: "[GUIDE] mailcow feat. Alpine Linux = ❤️"
subtitle: "A small guide for installing mailcow on Alpine Linux"
description: "A small guide for installing mailcow on Alpine Linux"
date: 2022-11-04T11:57:52+02:00
draft: false
author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

images: ["/images/mailcow-feat-alpine.jpg","/images/mailcow-feat-alpine_preview.jpg"]
featuredImage: "/images/mailcow-feat-alpine.jpg"
featuredImagePreview: "/images/mailcow-feat-alpine_preview.jpg"

categories: ["Guides"]
tags: ["Alpine", "Installation", "Tutorial"]
---

<!--more-->

**Moohoo everyone!**

Today not an update log of mailcow , instead a guide!

The topic is: install mailcow on Alpine Linux, because although the compatibility is not yet 100% guaranteed mailcow works pretty well on Alpine!

### Introduction

If you have ever dealt with the Linux world, you will probably have run across one or the other operating systems and may have heard the name `Alpine Linux`.

Because what makes Alpine Linux different from other distributions is its light weight. *Did you just call the other distributions fat?* - **NO!**.

So Alpine just comes in the basic edition with less than 60 packages, whereas Debian comes with almost 400 packages (approx.).

Also the general utilization of the systems is clearly smaller with Alpine on the average. (Depends on the use case)
  > But why that tutorial?

A good question! Alpine is built a little different compared to other distributions. In this guide we will only explain the steps from the Alpine installation and not how to install Alpine.

---

### apk as a Package manager (Basics)

Alpine Linux uses `apk` as package manager, which is a lot (and I really mean *a lot*) faster, but also seems a bit weird in handling, if you haven't worked with it before.

For example, `apk update` loads the latest package list instead of `apt update` as on systems with `apt`.

There is also a difference in the package upgrade process. There the syntax is `apk upgrade` instead of `apt upgrade`.

New packages are installed with `apk add PACKAGENAME` instead of `apt install PACKAGENAME`. This is drastically different, but you get used to it.

Last thing: we delete packages in Alpine with `apk del PACKAGENAME`.

Good, Crash Course done through apk. Now we are ready to go!

---

### Install the main packages (git, Docker, Docker Compose).

Alright, we know the basics about apk now, so let's get started with the mailcow installation.

First we install the packages git, Docker, Docker Compose and nano, the latest being my preference for text editors so you can use something of your choice.

The packages are installed as follows:

```
apk update
apk upgrade

apk add git docker docker-cli-compose nano
```

Alright the packages are installed. Now we have to add Docker to the startup programs. This works a bit different than with Debian or other Linux operating systems.

Alpine Linux uses rc as a systemctl replacement.

The syntax to add the Docker service to the startup is:

```
rc-update add docker default # Adds Docker to the startup programs
rc-service docker start # Starts the Docker daemon

```
---

### Change or install system packages from Busybox to GNU

mailcow needs some GNU tools to run on Alpine.

But don't worry, I'll show you which ones and how to get them.

What we need: `grep`, `sed`, `coreutils`, `findutils` and `bash` and `curl` to run the mailcow scripts.

We install or update them (because some of the packages are already installed, but only busybox) with the following commands:

```
apk add --no-cache --upgrade grep sed coreutils findutils bash curl
```

Now that we have these packages installed we can finally deploy mailcow!

---

### Deploying mailcow

Ok, the installation of mailcow is done here as usual.

1. Firstly clone the git repo in `/opt` with:

  ```
  git clone https://github.com/mailcow/mailcow-dockerized
  ```

2. Then run the `generate_config.sh` as root (`./generate_config.sh`)<br>
  **Watch out for the umask 0022!!!**

3. Enter your FQDN (Full Qualified Domain Name) in the `generate_config.sh` prompt and adjust the timezone (if not already correctly detected by the script).

4. Download all container images with `docker compose pull`.

5. *Optional*: Disable possible resource hogging components like SOLR, CLAMAV (if RAM is low) in `mailcow.conf`.

6. Start mailcow with `docker compose up -d`.

7. *Recommended if v6 is active*: Enable Docker native IPv6 connectivity. To do this, run the `update.sh` script once and answer yes to the question with native IPv6 in Docker.<br>
   **WARNING!** *Enable this option only if you have IPv6 enabled on your system, otherwise you may get segmentation faults with Alpine Linux if you don't have an IPv6 address!* 

8. *Recommended if no v6 is present*: Disabling IPv6 in the mailcow stack (see [https://docs.mailcow.email/post_installation/firststeps-disable_ipv6/](https://docs.mailcow.email/post_installation/firststeps-disable_ipv6/))

---

### Epilog

If you have followed these instructions, your mailcow should now run successfully on a lean and very fast Linux OS. However, you should not take this installation or maintenance too easily, as Alpine behaves differently in certain respects.

Errors can also occur during use, which might not be discovered by us yet, which is why we recommend regular backups. (By the way, this also works as usual with the Crontab backups from [our docs](https://docs.mailcow.email/de/backup_restore/b_n_r-backup/#cronjob))

You are welcome to report discovered bugs in Alpine. However, they may not be solvable due to the different lib library `musl` compared to the well-known library `glibc`. Please have a look at the official wiki page of musl or glibc: https://wiki.musl-libc.org/functional-differences-from-glibc.html

---

**Used Images**:

- Thumbnail Background <a href="https://www.freepik.com/free-vector/white-background-with-blue-tech-hexagon_4775334.htm#query=technology%20background&position=25&from_view=search&track=sph">from starline via Freepik</a>
- Alpine Logo from the Alpine Linux Development Team
- mailcow Logo from us ;)