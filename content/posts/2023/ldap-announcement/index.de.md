---
title: "🐮🤝 LDAP ist real und kommt noch 2023"
date: 2023-03-31T11:00:00+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true
lightgallery: true

license: ""

tags: ["LDAP"]
categories: ["News"]

---

**Moohoo zusammen!**

Die Zeit des Wartens ist vorbei und viele haben uns Ihre Lösung auf den unten angegebenen Kontaktmöglichkeiten mitgeteilt.

Heute dürfen wir es endlich in die Welt hinauslassen!

<!--more-->

Eine Sache, die sich schon sehr, sehr lange gewünscht wurde:

**LDAP IS COMING TO NIGHTLY Q2 2023**

Viele (eigentlich fast alle) haben es korrekt erraten und die Lösung gefunden.

Doch was genau heißt das jetzt?

mailcow bekommt im zweiten Quartal von 2023 (sprich April bis Juni) **endlich** eine LDAP Option um Benutzer bequem zentral irgendwo managen zu können.

Das bringt natürlich auch neue Einsatz Möglichkeiten für mailcow mit: bspw. in Schulen oder andere öffentliche Einrichtungen.

### Wie funktionert das ganze?

Mit dem neuen Feature kann die mailcow so konfiguriert werden, dass neben der lokalen SQL-Datenbank auch ein externer Keycloak zur Authentifizierung genutzt werden kann. 
Wer Keycloak nicht kennen sollte, kann sich hier über das Open-Source-Projekt von Red Hat informieren: https://www.keycloak.org/. 
Die mailcow wird über OIDC an den Keycloak angebunden. Keycloak kann wiederum so konfiguriert werden, dass ein LDAP-System zur Authentifizierung dient.

Manche fragen sich vielleicht, warum der Umweg über Keycloak? 
Neben der Option, ein LDAP-System anzubinden, könnte Keycloak weitere Optionen bereitstellen, um in Zukunft vielleicht sogar weitere Möglichkeiten zur Authentifizierung zu bieten. 
Darüber hinaus können Unternehmen, die bereits Keycloak im Einsatz haben, das Single-Sign-On-Feature für die Mailcow-UI und damit auch SOGo nutzen.

---

Wir möchten an dieser Stelle noch einmal darauf hinweisen, dass dieses LDAP Feature **zunächst nur teil der Nightly Versionen** (also der Testing Versionen) von mailcow sein wird, da wir gerade bei so einem heiß erwarteten Feature so viel wie möglich richtig machen wollen und eng mit der Community zusammen arbeiten möchten.

Wenn alles glatt läuft können wir aber einen offiziellen Release gegen Ende Q4 (sprich Nov - Dez 2023) anpeilen.

Natürlich gibt es dazu auch wieder Neuigkeiten, sollte sich etwas ändern.

Trotzdem möchten wir euch allen für diesen kleinen Rätselspaß danken und hoffen, dass es euch auch ein bisschen Spaß gemacht hat die Lösung zu erraten. Wird nicht das letzte Mal gewesen sein 😊

**Euer mailcow Team** <br>
> *Niklas* bzw. *DerLinkman* & *Patrick* bzw. *FreddleSpl0it*