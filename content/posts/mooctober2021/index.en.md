---
title: "🐄 Mooctober 2021 - the feldsam edition"
date: 2021-10-18T21:55:47+01:00
draft: false

author: "André Peters"
authorLink: "https://github.com/andryyy"
description: "Patchnotes for the October 2021 Update"
  
categories: ["Updates"]
tags: ["2021", "update", "changelog"]
---

A big thanks to [Kristian Feldsam](https://feldhost.net "Kristian Feldsam") for integrating Twig. We are closer to Bootstrap 5 than ever. That's a big change we hope to finish soon.

Furthermore we introduce our new [cold standby solution](https://mailcow.github.io/mailcow-dockerized-docs/b_n_r-coldstandby/ "cold standby solution").

With this new script you are able to create a fully working, 1:1, consistent copy of your running mailcow without downtime.

Disaster recovery of a mailcow is as easy as switching IPs and running "up -d".

We recommend to run this script every n minutes or hours and creating snapshots on the remote location for easy versioning.
