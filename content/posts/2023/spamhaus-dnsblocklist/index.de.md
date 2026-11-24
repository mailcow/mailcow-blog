---
title: "🛑📜 Spamhaus DNS Blocklist Änderungen ab 2023-07"
date: 2023-07-28T16:00:10+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["Spamhaus", "DNSBL"]
categories: ["News"]

---

**Moohoo zusammen!**

Mit dem mailcow Update 2023-07 gibt es eine etwas größere Änderung bezüglich Spamhaus DNS Blocklisten.

Dieser Blogpost hier dient als Information für interessierte.

<!--more-->

#### Was sind Spamhaus DNS Blocklisten?

Zuerst einmal die generelle Frage was die Listen überhaupt sind bzw. wofür diese eingesetzt werden.

Die Spamhaus DNS Blocklisten sind (normalerweise) frei zugängliche Listen, welche in verschiedensten Systemen eines E-Mail Servers eingebaut werden können (ob Rspamd, Postfix oder andere). In mailcow's Fall werden diese in Postfix via Postscreen eingebunden.

Grundsätzlich sind diese eine Art "Prefilter" für Spammer-Adressen. Dies jedoch auf IP und nicht erst auf Kontent ebene wie Rspamd arbeitet.

Die Listen werden live aktualisiert und sagen dem E-Mail Server bei der Verbindung einer gelisteten IP die Verbindung zu verweigern.

Diese Blocklisten waren bisher ohne Einschränkungen für jedem Nutzer benutzbar.

Das ändert sich nun aber leider.

#### Was ändert sich?

Spamhaus hat zum [20.06](https://twitter.com/spamhaus/status/1671141604705333248) die Möglichkeit zum Zugriff auf besagte Listen von OVH, AWS und Cloudflare Servern blockiert.

Dies hat zur Folge, dass die DNS Blocklisten (nur von Spamhaus, andere funktionieren weiterhin) damit nicht mehr funktionieren, wenn man als Benutzer nicht selber aktiv wird.

Denn ab sofort ist es (um weiterhin von den Spamhaus DNS Blocklisten gebrauch zu machen) notwendig sich einen Account bei Ihnen zu erstellen und einen DQS (Domain Query Service) Key zu generieren, den man dann in die mailcow.conf einträgt.

mailcow kümmert sich dann um die konfiguration der neuen DQS Blocklisten, welche technisch genauso wie die ohne Account funktionieren.

Wir haben dafür eine Möglichkeit in das update und generate_config Skript implementiert, welche eure öffentliche IP Adresse einem AS (Autonomen System) zuordnet und gegen einen Dienst von uns (asn-check.mailcow.email) prüft ob ihr betroffen seit oder nicht. Falls ja, meldet mailcow dies.

#### Warum ändert sich das und bin ich betroffen?

Spamhaus selbst sagt dazu: 

> In den Nutzungsbedingungen des Spamhaus-Projekts heißt es, dass es Benutzern nicht erlaubt, Abfragen über DNS-Resolver durchzuführen, wenn kein zuordenbarer Reverse-DNS vorhanden ist. Dazu gehört auch OVHCloud. [...]

> [...] Um sicherzustellen, dass diese Benutzer eine gute Servicequalität haben, wird die Nutzung überwacht und anhand der Nutzungsbedingungen des Projekts gemessen.
OVHCloud maskiert die Anfragen von Organisationen an die Public Mirrors des Projekts, sodass das Team die Nutzung nicht einzelnen Entitäten zuordnen kann. Sie haben keine Möglichkeit, die Anzahl der Anfragen einer einzelnen Organisation zu ermitteln. [...]

> [...] Um sicherzustellen, dass seine Nutzungsbedingungen eingehalten werden, blockiert das Spamhaus-Projekt Anfragen von einer bestimmten IP-Adresse außerhalb der Richtlinie. Außerdem wird ein Fehlercode zurückgegeben. Bei der Abfrage über einen offenen/öffentlichen Resolver, also OVHCloud, lautet der Fehlercode 127.255.255.254  [...]

Sprich verstößt OVH, AWS und Cloudflare mit Ihrer Art wie Sie Anfragen an Spamhaus schicken gegen die Nutzungsbedingungen der public DNS Blocklisten von Spamhaus.

*Aktuell kann noch nicht gesagt werden ob es in Zukunft noch weitere Anbieter treffen wird. Aktuell wissen wir nur von den drei hier.*

#### Was wenn ich keinen DQS Key und ein damit verbundenes Konto bei Spamhaus erstellen möchte?

Solltet ihr euch gegen ein Spamhaus Account und damit gegen DQS entscheiden und bei einem der Anbieter sein erhaltet ihr keinen extra Schutz mehr durch die DNS Blocklisten von Spamhaus.

**Eure mailcow läuft ansonsten jedoch weiter wie bisher, ihr könnt normal senden und empfangen!**

Es geht hier wirklich nur um einen bisher inklusiven Spamschutz der dann wegfällt. Rspamd ist natürlich trotzdem noch da und fängt Spammails natürlich noch weiter ab.

#### Habe ich irgendwelche Vorteile, wenn ich DQS auch als nicht Betroffener nutze?

Natürlich können alle mailcow Nutzer (nicht nur die betroffenen) die neuen DQS Blocklisten beziehen und nutzen.

Am besten lest ihr euch dazu den offiziellen Post von Spamhaus selbst zu, welche beide Listen miteinander vergleicht. (Allerdings leider nur auf Englisch erhältlich)

https://www.spamhaus.com/resource-center/if-you-query-spamhaus-projects-dnsbls-via-ovhclouds-dns-move-to-the-free-data-query-service/

Besagter Artikel fasst die Situation generell nochmal zusammen und erklärt wie ihr genau an so einen DQS Key kommt.

---

Ich hoffe das konnte in die Situation etwas klarheit bringen und euch die Angst nehmen, dass euer mailcow Server jetzt komplett gesperrt wurde oder ähnliches.

Bleibt gesund und happy Mailing!

Euer mailcow Team
> Niklas aka. DerLinkman