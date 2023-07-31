---
title: "🤔🐮 Wie schaut's aus? - ARM64 Integration"
date: 2023-07-31T09:15:10+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: false

license: ""

tags: ["2023", "faq", "news", "status", "arm64"]
categories: ["Wie schaut's aus?", "News"]

---

**Moohoo zusammen!**

Über einen Monat haben wir nichts mehr von uns hören lassen und heute einfach so ein Shadowdrop als Update.

Da wir einige Sachen zu besprechen haben und auch in Zukunft direkt kommunizieren möchten, haben wir uns eine Rubrik ausgedacht, die wir **Wie schaut's aus?** nennen.

Heute starten wir direkt mit dem ersten Thema, nämlich **ARM64**:

Wir hatten ja ursprünglich angekündigt, mailcow bis Juni 2023 ARM64 Ready zu machen. Das hat offensichtlicherweise nicht ganz geklappt. Trotzdem wollen wir das immer noch bieten und arbeiten weiter an dieser. Allerdings gibt es ein paar Schwierigkeiten im Bezug auf den Fehlerlosen bzw. Seemless übergang von mailcow auf ARM64.

Diese sind für den Hauptbetrieb prinzipiell nicht wirklich spürbar, stören uns jedoch so sehr, dass wir das ganze bisher on hold lassen.

> Worum geht's fragt ihr?

Lieb, dass ihr fragt! Es geht im genauen um die Hyperscan Bibliothek bzw. die Implementation von Hyperscan bzw. Vectorscan (wie es auf ARM64 heißt) für Rspamd. Besagter Hyperscan kompiliert regelmäßig Regex Einträge, welche durch den Betrieb von mailcow dynamisch erzeugt werden und zur Erkennung von Spam benötigt wird. Genauer gesagt dient Hyperscan hier als Performanceboost, da die Kompilierung der Regex Einträge somit nicht immer wieder neu passieren muss, sondern dieser kompiliert bleibt.

> Was ist nun das Problem?

Das Problem ist nun, dass besagter Hyperscan (Vectorscan) auf ARM64 zum aktuellen Zeitpunkt nicht richtig funktioniert bzw. die Kompilierung nach einem Neustart hinfällig ist, da er diese nicht mehr laden kann. Man muss aber auch dazu sagen, dass Rspamd erst mit der aktuellen Version 3.5 nativen ARM64 Support erhalten hat und damit noch einige Fehler aufweisen lassen kann.

Der Hauptgrund, warum wir das ganze zurückhalten (obwohl die eigentliche Funktionalität bereits gegeben ist und von einigen Testern [DANKE] bereits erfolgreich getestet wurde) ist der, dass es zu einigen Warnungen in der Konsole kommt, welche unerfahrenere Nutzer verwirren bzw. beängstigen kann. Ebenfalls kann durch dieses Problem eine gleichwertige Performance nicht garantiert werden.

Zusätzlich dazu kommt noch der Fakt, dass einige wichtige Kernkomponenten wie bspw. Dovecot (er insbesondere) mit dem Nightly Release von ARM64 von uns selbst kompiliert werden muss, da das Dovecot Team keinen nativen ARM64 Support anbieten wird und wir nun mal im mailcow Stack die Pakete von Ihnen direkt beziehen und nicht über das APT Repo von Debian bspw. an die Versionen gelangen wie bei Postfix bspw.

Dies kann zum aktuellen Zeitpunkt ungeahnte Konsequenzen mit sich ziehen, welche mit einer größeren Testrunde geklärt bzw. beleuchtet werden müssen.

Wir wollen den ARM64 Support nicht einfach "hinrotzen" nur damit wir sagen können "Hey, mailcow kann jetzt auch ARM64, schaut mal her!!!" sondern ihn in den normalen Releasecycle und die normale mailcow Architektur integrieren, sodass wir nicht zwei Repos, sondern ein einziges Repo mit demselben Inhalt für x86 und ARM64 pflegen können.

So profitiert im Endeffekt jedermann davon.

> Was heißt das nun für den ARM64 Support?

Wir arbeiten weiter an dem Support und werden auch wirklich bald damit beginnen, besagte Änderungen in den Nightly Branch zu implementieren. Allerdings wird es dann noch dauern, bis das ganze dann in den normalen Stable Branch gelangen wird und jeder es nutzen kann, wie er mag.

Heißt abgekürzt also: Ein Full-Release noch dieses Jahr wollen wir nicht mehr garantieren. Wir hoffen es natürlich.

Natürlich geben wir euch Bescheid, sobald es dazu Neuerungen gibt.

Jetzt wisst ihr, was aktuell mit ARM64 los ist und warum es dort stagniert, obwohl es erst nicht so aussah.

Vielleicht denken jetzt einige von euch:
> "Wegen so einer Lappalie released ihr das nicht?"

Und vermutlich werdet ihr damit auch nicht ganz falsch liegen, aber wir selbst möchten eben keine Experimente *mal eben* machen.

---

Wir planen solche "Ask the Developer" ähnliche Blogposts nun öfters zu bringen und euch direkter über den aktuellen Stand zu informieren.

Für alle LDAP Fans kann ich auch schonmal einen ähnlichen Post im Stile von "Ask the Developer" ankündigen. Den macht aber der gute Patrick, wenn er so weit ist euch dazu was sagen zu können.

Ansonsten gilt, was immer gilt:

Bleibt gesund und happy Mailing!

Euer mailcow Team
> Niklas aka. DerLinkman