---
title: "🌙🐄 LDAP/OIDC Status Update - We didn’t forget. We were just... testing!"
date: 2025-02-07T15:50:00+02:00
draft: false

author: FreddleSpl0it
toc: true

license: ""

tags: ["2025", "News", "nightly"]
categories: ["News"]

---

**Moohoo everyone**

In this blog post, I'll walk you through the current state of the nightly branch of mailcow. The biggest highlight is of course the support for external authentication sources.  

To make this new feature as seamless and user-friendly as possible, we had to introduce some adjustments — you'll see what I mean.  

But first, a huge thank you to everyone in the community who tested the nightly branch and provided valuable feedback. 🙌 At this point, most of the work is done, and we're only expecting small bug fixes if needed. Some users have already adopted the nightly branch in production and are happy with it — which is fantastic!  

We currently plan the release of the nightly branch into the stable branch.  
For users who prefer not to upgrade immediately, we will provide an legacy branch that will continue receiving security updates for one year.  

## 🏷️ LDAP and OIDC Support

mailcow now allows admins to configure one external authentication source, which can be used alongside the existing SQL database for user authentication. However, Admins and Domain Admins only support SQL database for authentication.  

Supported authentication sources:  
✅ Keycloak  
✅ Generic OIDC  
✅ LDAP  

### What Happens When You Upgrade?  
If you're upgrading from mailcow stable to the nightly branch, all existing users will automatically receive a new attribute: Identity Provider, which is set to mailcow (SQL database) by default.  

You can change this for each user anytime by navigating to:  
**E-Mail -> Configuration -> Mailboxes and editing the user.**  

If a user is switched to an external authentication source, their old password is still stored in the SQL database. This allows you to revert them back to mailcow authentication if needed.  

### How Are External Users Created?  
When a user who does not yet exist in mailcow successfully authenticates via an Identity Provider, mailcow will check for the `mailcow_template` attribute.  

If the value of this attribute is mapped to a mailbox template in mailcow, the user will be created automatically — provided that:  
✔️ The user's domain already exists in mailcow  
✔️ There are enough domain resources to create new users  

If you update the `mailcow_template` value in your Identity Provider, the user's settings will be updated on their next successful login.  

### Automatic User Import & Updates  
mailcow supports automatic user import and user updates for **LDAP** and **Keycloak** sources.  

When the options **Periodic Full Sync** and **Import Users** are enabled, a cron job will:    
✅ Periodically sync the users `mailcow_template` value and update the user accordingly  
✅ Automatically import users from the Identity Provider  

Logs can be monitored in:  
**System -> Information -> Logs -> Crontasks**  

### OIDC User Authentication for Mail Protocols
OIDC users must first log into the mailcow Web UI to generate an **app password** if they want to use a mail client other than the SOGo Webmailer.  
However, if you use **Keycloak**, you can also enable Mailpassword Flow. This allows mailcow to fetch the **mailcow_password** attribute from the Keycloak Admin API, eliminating the need for an **app password**.  
The **mailcow_password** should contain a hashed password https://docs.mailcow.email/de/models/model-passwd/  

### What Happens When a User is Deactivated?  
If a user is deactivated in the Identity Provider:  
❌ They can no longer log in to the mailcow UI  
✅ Their mailbox will still receive emails  

**Suggested solution**: Use a mailbox template that deactivates the user and update the `mailcow_template` attribute in the Identity Provider.  

Important for OIDC users who only use **app passwords**:  
If they only use an **app password**, mailcow cannot automatically deactivate them. Manual deactivation in mailcow is required.  

### Two-Factor Authentication (2FA)  
External authentication sources handle 2FA except for LDAP users, who can still configure 2FA via the mailcow UI.  


## Other Notable Changes

### SOGo Login
Previously, visiting https://mailcow.tld/SOGo as an unauthenticated user would show you the SOGo Login Form. Now, users are redirected to the mailcow login page for authentication.  

Admins can choose whether a user should land after successfull authentication:  
✅ The mailcow Web UI or  
✅ The SOGo Webmail UI  

The SOGo Webmail UI now features two mailcow specific buttons in the top navbar:  
🔗 mailcow Web UI link  
🔴 Logout button  

### Separate Logins
To allow better access control via NGINX or a Reverse Proxy, login endpoints are now separated:  
Users: `/`  
Domain Administrators: `/domainadmin`  
Administrators: `/admin`  

### Dovecot Login performance
To speed things further up, we enabled Dovecot Password caching (thanks to [@patschi](https://github.com/patschi)).  

#### Benchmarks  
| Caching | Authsource | Server Load Peak | Time for 2000 Logins (seconds) |
|---------|------------------------|-----------------|------------------------------|
| ❌ | **SQL**  | ~13            | 91.24                        |
| ❌ | **LDAP** | ~4             | 37.94                        |
| ✅ | **SQL**     | ~6             | 23.16                        |
| ✅ | **LDAP**    | ~2             | 23.17                        |

## Final Words
With these major changes now implemented, the biggest part is done!  
From this point on, only bug fixes and minor adjustments will follow.  
We're in the final stages of preparing for the stable release, and as soon as we have a date, we'll announce it.  

For those eager to try out the new features, the nightly branch is ready — but as always, make sure to back up before updating!

Stay tuned, and happy mailing!   
Your mailcow Team 💌
