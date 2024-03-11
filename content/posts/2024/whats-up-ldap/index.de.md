---
title: "🤔🔒🐮 Wie schaut's aus? - LDAP Integration"
date: 2024-03-11T11:10:10+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2024", "faq", "news", "status", "ldap"]
categories: ["Wie schaut's aus?", "News"]

---

**Moohoo zusammen!**

Wie bereits auf den Social-Media-Kanälen angekündigt, servieren wir euch heute wieder eine neue Ausgabe unserer Rubrik: `Wie schaut's aus?`.

Heute geht es explizit um ein Thema, das uns alle brennend interessiert: **LDAP/OIDC-Integration** und die damit verbundene **Überholung des Authentifizierungssystems**.

Wir haben euch ja in der Vergangenheit auf dem Laufenden gehalten, dass wir fieberhaft an der Integration von LDAP und OIDC arbeiten. Schließlich ist diese Funktion nicht ohne Grund eine der am meisten geforderten Funktionen für mailcow überhaupt – und das zurecht!

Allerdings war unser Plan, das Ganze bereits im ersten Quartal 2024 herauszubringen oder ganz früher mal zu Weihnachten 2023. Beides konnte nicht gehalten werden, wie ihr gemerkt habt...

<!--more-->

### Was ist denn los?

Nun, prinzipiell ist das System sehr weit fortgeschritten und funktional komplett fertig. Allerdings sind es, wie so oft, die letzten Prozente der Fertigstellung, welche dafür sorgen, dass sich das Ganze nach hinten schiebt. Generell gilt natürlich wie immer, dass wir die Funktionalitäten gründlich testen, damit wir euch ein weitgehend fehlerfreies System bieten können. Allerdings sind Fehler natürlich menschlich und manchmal auch nach 100x Testen erst zu finden, weil ein kleiner Teil der Konfiguration bei dem einen so und bei dem anderen so ist.

Lange Rede, kurzer Sinn: Wir sammeln noch Testergebnisse aus verschiedensten Umgebungen, die nicht nach unserem Teststandard entsprechen, da diese Daten aussagekräftiger sind als von uns aufgebaute Testszenarien. Und da haben wir schlicht noch zu wenig Daten, so dass wir das Ganze in die Welt loslassen können mit gutem Gewissen.

Obwohl das Update natürlich primär darauf ausgelegt ist, LDAP bzw. OIDC als Quellen für Benutzerinformationen anbieten zu können, ändert sich auch für alle anderen einiges an mailcow selbst. Vorweg: Keine Sorge! Es betrifft keine Daten oder Ähnliches!

Das Update selbst bringt auch nette Verbesserungen im Bereich der Authentifizierung allgemein mit:

So wird es beispielsweise ab dann nicht mehr notwendig sein, sich im SOGo und der mailcow UI separat anmelden zu müssen, sondern nur noch an der mailcow UI. Die UI leitet euch dann standardmäßig auf den Webmailer weiter. Benutzer können dann über einen neuen Button im SOGo zu ihren Mailbox-Einstellungen springen (quasi das, was sie aktuell sehen, wenn sie sich in der mailcow UI direkt einloggen). So ersparen sich die Nutzer quasi einen Anmeldeschritt.

Da wir natürlich das komplette Authentifizierungssystem umkrempeln müssen, wollen wir uns sicher sein, dort keine Sicherheitslücke zu haben, die einen ähnlichen Schweregrad hat wie zuletzt bei Exchange.

### Externe Tests bringen uns weiter

Eventuell unterschätzt man den Faktor, den von extern durchgeführte Tests auf dieses Feature haben. In den letzten Wochen sind viele Verbesserungen und Fixes in den Code des Ganzen geflossen, und das nur, weil wir uns mit einem externen Partner von uns zusammengetan haben, um das System unter Beobachtung und natürlich das notwendige Wissen in Produktivumgebungen zu implementieren. Klingt widersprüchlich, weil wir ja sagen, dass das Ganze für den Produktiveinsatz noch nicht bereit ist, aber glaubt mir, diese Möglichkeit bzw. Option hat sehr viele Fehler und auch Verbesserungen in den Code einfließen lassen, von denen am Ende wie immer jeder profitiert. Beispielsweise wurde so zuletzt erst noch eine **native LDAP**-Option **OHNE** Keycloak eingebaut, aufgrund des Feedbacks.

Ihr seht also, gut Ding will Weile haben.

Natürlich wollen wir das Ganze so schnell es geht an euch produktiv herausgeben, aber aktuell anhand der vorliegenden Daten ist das noch nicht möglich, um uns selber sagen zu können: "Das ist stabil, kann problemlos genutzt werden".

### Was wir euch in der Zwischenzeit anbieten können

Aber als Kompromiss werden wir in den nächsten Wochen bereits die Dokumentation von mailcow anhand der aktuellen OIDC/LDAP-Konfigurationsmöglichkeiten anpassen, damit Interessierte sich das Ganze im Nightly nachinstallieren können. Wir hatten dazu natürlich im ersten Post zum Aufruf des Beta-Tests bereits eine Anleitung gebündelt mitgegeben, allerdings hat sich in der Zwischenzeit noch einiges getan, so dass wir eine nahezu finalisierte Version der angepassten Dokumentation dazu bereitstellen werden.

Das hat den Vorteil, dass ihr nicht suchen müsst oder euch irgendwas zusammenreimen müsst.

Bedenkt da natürlich, dass diese Doku dann **noch NICHT FINAL** ist und wir uns Änderungen für das finale Update vorbehalten. Vielleicht habt ihr aber auch Verbesserungsvorschläge für die Dokumentation in diesem Bereich, dafür sind wir natürlich wie immer sehr dankbar!

Den Release der angepassten Doku werden wir euch auf unseren Social Media Plattformen mitteilen, haltet also ein Auge darauf.

### Fazit

Wir werden euch mit diesem Blogpost jetzt extra **KEIN neues ETA** für das Feature geben. Wenn es fertig ist, dann werdet ihr das natürlich sofort mitbekommen und im Vorfeld angekündigt bekommen.
Natürlich wollen wir an dem Ziel, es so schnell wie möglich herauszubringen, unbedingt festhalten, aber aktuell haben wir nun mal kein genaues Datum dazu.

Ich hoffe, das Ganze konnte ein wenig die Fragen minimieren, bspw. ob das Feature gecancelt wurde oder was nun damit allgemein ist.

Es freut uns natürlich sehr, wenn ihr euch darüber freut, jedoch bringt es das Feature leider nicht schneller, wenn man oft danach fragt.

So, das wäre es soweit dazu. Wir hören uns spätestens zum März-Update von mailcow wieder.

Bis dahin:

> Ciao, euer Linkman bzw. Niklas (je nachdem, was ihr bevorzugt)
