---
title: "⚠️ Important informations about log4j exploit ⚠️"
date: 2021-12-13T08:49:44+01:00
draft: false

author: "Niklas Meyer"
  
categories: ["Security"]
tags: ["2021", "bugfix", "log4j"]
---

**Moohoo everyone!** \
Due to the recent accidents regarding the Java library **log4j** we would like to inform you, that your mailcow is **NOT** affected directly by this.

Yes, it is true, that the Solr Container is a Java application which is affected by the log4j security breach. **BUT** solr is **NOT** accessible from the outside of the mailcow stack!

For those who are worried we released a Solr Hotfix which is fixing the log4j issue with the simple flag `+EXTRA_ARGS+=('-Dlog4j2.formatMsgNoLookups=true')` which closed this issue.

**To activate it please update your mailcow with the `update.sh` script**

*Stay safe everyone!*

Niklas, Servercow Team