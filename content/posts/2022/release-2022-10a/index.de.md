---
title: "⚠️ 2022-10a | Kritisches Update zur Stabilität ⚠️"
date: 2022-10-26T09:30:10+02:00
draft: false

author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2022", "update", "changelog", "bugfix"]
categories: ["Updates","Hotfix"]
---

**Moohoo zusammen!**

Gestern (am 25.10.2022) haben wir das 2022-10 Update released. Dieses enthält bei einigen (nicht vielen) einen Kritischen Fehler mit dem Spamfiltering, welcher dafür sorgt, dass keine E-Mails mehr raus bzw. reinkommen können.

Wir bitten euch deshalb dringenst dazu eure mailcow Installation welche mit dem 2022-10 Update versorgt ist erneut zu updaten!!

<!--more-->

### Stabile Änderungen (stable Branch)

+ RSPAMD Crasht bzw. verweigert bei einigen den Dienst (führt zur nicht zustellung von E-Mails) --> Dies wurde behoben, in dem die vorherige RSPAMD Version verwendet wird.
+ Das Netfilter Problem existierte weiterhin --> Dies wurde behoben. Es wurde die falsche Image File in der docker-compose.yml angegeben, welche den Fix noch nicht besaß.
+ Ein Fehler mit der Französischen Sprache in der mailcow UI bei der es bei der Alias Erstellung/Bearbeitung zu einem Freeze der UI gekommen war, wurde behoben.
+ Ein Fehler der Quarantänen Ansicht bei dem es vorkam, dass einige E-Mails nicht geparst werden konnten, wurde behoben

Weitere Informationen sowie die genauen PRs findet ihr auf GitHub: https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-10a

---

Wir entschuldigen uns für die Probleme die eventuell verursacht worden sind.

Bis dahin, bleibt gesund und bis zum nächsten Update.

**Euer mailcow Team** <br>
*Niklas*