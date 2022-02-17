---
title: "⚠️ Wichtige Informationen über log4j-Exploit ⚠️"
date: 2021-12-13T08:49:44+01:00
draft: false

author: "Niklas Meyer"
  
categories: ["Sicherheit"]
tags: ["2021", "bugfix", "log4j"]
---

**Moohoo an alle!** \
Aufgrund der jüngsten Vorfälle mit der Java-Bibliothek **log4j** möchten wir euch mitteilen, dass eure mailcow **NICHT** direkt davon betroffen ist.

Ja, es ist wahr, dass der Solr Container eine Java Anwendung ist, die von der log4j Sicherheitslücke betroffen ist. **Aber** Solr ist **NICHT** von außerhalb des mailcow-Stacks zugänglich!

Für diejenigen, die besorgt sind, haben wir einen Solr Hotfix veröffentlicht, der das log4j-Problem mit dem einfachen Flag `+EXTRA_ARGS+=('-Dlog4j2.formatMsgNoLookups=true')` behebt, welches dieses Problem schließt.

**Um es zu aktivieren, aktualisiert bitte eure mailcow mit dem `update.sh` Skript**

*Bleibt alle gesund!*

Niklas, Servercow Team