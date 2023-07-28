---
title: "🍒 🐄 Mooly Update 2023 - Manageable CORS Settings and UI Improvements"
date: 2023-07-28T10:48:10+02:00
draft: false

author: Patrick Schult/FreddleSpl0it
authorLink: "https://github.com/FreddleSpl0it"
toc: true

license: ""

tags: ["2023", "update", "changelog", "CORS", "Spamhaus", "DNSBL"]
categories: ["Updates"]

---

**Moohoo everyone!**

### Important
Before updating mailcow, make sure that the `whois` package is installed on your system.

### New Feature: Manage CORS Settings
administrators can now manage CORS (Cross-Origin Resource Sharing) settings via the web UI for API access. 
This allows for better control and enhanced security when handling data exchange between different origins.

#### CORS - Why Is It Needed?
Under normal circumstances, when a script runs in the user's browser, it primarily needs to access resources from the same origin. 
For example, making API calls to the backend that served the JavaScript code initially. 
This limitation of JavaScript not being able to access resources from other origins is actually a security feature.

"Other origins" in this context refers to URLs that differ from the location where the JavaScript is running. These differences may include having different domain, port or scheme (HTTP or HTTPS).
While this security measure is essential for protecting users from unauthorized access to their data, there are valid situations where cross-origin access becomes necessary or desirable.


### Broadcasting commands to multiple dockerapi instances!
For Administrators who use mailcow in a cluster, you now need to set the following in mailcow.conf: `CLUSTERMODE=replication`.
This ensures, that now on mailbox deletion the request will be broadcasted to each Dockerapi container and therefore each Dovecot container, so all files on each Host will be deleted.


**Bug fixes, Bug fixes and more Bug fixes...**


### Changelog

- Update thollander/actions-comment-pull-request action to v2.4.0
- Update dependency nextcloud/server to v27
- Update nextcloud heper script to disable SMTP TLS host verification
- [API] Update swagger version to 5.1.0
- Rspamd returns 401 on unsuccesful logins
- [Web] add cors to json_api
- [Web] fix loading rspamd-history
- [Dockerapi] add redis pubsub handler for broadcasting requests
- [Rspamd] add dot-stuffing to bcc forwarding
- [web] logger pdo exception handling workaround
- [Rspamd] Native mailcow Support for Securite ClamAV Signatures
- Fixes several instances of missing , extra role='tabpanel' and…
- Update dependency nextcloud/server to v27.0.1
- Spamhaus DNSBL AS Detection

As always, the full changelog with the individual commits is available on GitHub:
https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-07

---

#### Stay Tuned for More:

As we continue to grow and refine mailcow, we'll keep you updated with the latest developments and improvements.

A big thank you to our amazing mailcow community for your continuous support and valuable feedback. 
Your contributions have played a vital role in making mailcow even better - more robust and user-friendly!

Stay healthy and happy mailing!

Your mailcow Team
