---
title: "🌙🐄 LDAP/OIDC Status Update - Wir haben es nicht vergessen. Wir haben nur... viel getestet!"
date: 2025-02-07T15:50:00+02:00
draft: false

author: FreddleSpl0it
toc: true

license: ""

tags: ["2025", "News", "nightly"]
categories: ["News"]

---

**Muuhuuu alle zusammen**

In diesem Blogpost gebe ich euch einen Überblick über den aktuellen Stand des Nightly-Branches von mailcow. Das größte Highlight ist natürlich die Unterstützung für externe Authentifizierungsquellen.  

Um diese neue Funktion so nahtlos und benutzerfreundlich wie möglich zu gestalten, mussten wir einige Anpassungen vornehmen – ihr werdet sehen, was ich meine.

Aber zuerst ein riesiges Dankeschön an alle in der Community, die den Nightly-Branch getestet und wertvolles Feedback gegeben haben. 🙌 An diesem Punkt ist die meiste Arbeit erledigt, und wir erwarten nur noch kleinere Bugfixes, falls nötig. Einige Nutzer haben den Nightly-Branch bereits produktiv im Einsatz und sind zufrieden damit – was großartig ist!  

Wir planen derzeit die Veröffentlichung des Nightly-Branches in den Stable-Branch.  
Für Nutzer, die nicht sofort upgraden möchten, wird es einen Legacy-Branch geben, der weiterhin für ein Jahr Sicherheitsupdates erhält.

## 🏷️ LDAP und OIDC Unterstützung

mailcow ermöglicht es Admins jetzt, eine externe Authentifizierungsquelle zu konfigurieren, die zusätzlich zur bestehenden SQL-Datenbank für die Benutzeranmeldung genutzt werden kann. Allerdings können sich Admins und Domain-Admins weiterhin nur gegen die SQL-Datenbank authentifizieren.

Unterstützte Authentifizierungsquellen:  
✅ Keycloak  
✅ Generic OIDC  
✅ LDAP  

### Was passiert beim Upgrade?  
Wenn du von der stable mailcow-Version auf den Nightly-Branch upgradest, erhalten alle bestehenden Benutzer automatisch ein neues Attribut: **Identity Provider**, das standardmäßig auf **mailcow (SQL-Datenbank)** gesetzt ist.  

Du kannst dieses Attribut jederzeit für jeden Benutzer ändern, indem du zu folgendem Menü navigierst:  
**E-Mail -> Konfiguration -> Mailboxen** und den Benutzer bearbeitest.  

Falls ein Benutzer auf eine externe Authentifizierungsquelle umgestellt wird, bleibt sein altes Passwort weiterhin in der SQL-Datenbank gespeichert. Dadurch kannst du ihn bei Bedarf wieder auf die mailcow-Authentifizierung zurücksetzen.

### Wie werden externe Benutzer erstellt?  
Wenn sich ein Benutzer, der in mailcow noch nicht existiert, erfolgreich über einen Identity Provider authentifiziert, prüft mailcow den Wert des Attributs `mailcow_template`.  

Wenn der Wert dieses Attributs einem Mailbox-Template in mailcow zugeordnet ist, wird der Benutzer automatisch erstellt – vorausgesetzt:  
✔️ Die Domain des Benutzers existiert bereits in mailcow  
✔️ Es sind genügend Domain Ressourcen vorhanden, um neue Benutzer zu erstellen  

Wenn du den `mailcow_template` Wert in deinem Identity Provider änderst, werden die Einstellungen des Benutzers beim nächsten erfolgreichen Login aktualisiert.  

### Automatischer Benutzerimport & Updates  
mailcow unterstützt den automatischen Import und die Aktualisierung von Benutzern für **LDAP** und **Keycloak**.  

Wenn die Optionen **Periodic Full Sync** und **Import Users** aktiviert sind, führt ein Cron-Job folgende Aktionen durch:  
✅ Regelmäßige Synchronisierung des `mailcow_template`-Werts und Aktualisierung des Benutzers  
✅ Automatischen Import von Benutzern aus dem Identity Provider  

Logs dazu findest du unter:  
**System -> Information -> Protokolle -> Crontasks**  

### OIDC-Benutzerauthentifizierung für Mail-Protokolle  
OIDC-Benutzer müssen sich zuerst im mailcow UI anmelden, um ein **App-Passwort** zu generieren, falls sie einen anderen Mail-Client als den SOGo-Webmailer nutzen möchten.  
Wenn du jedoch **Keycloak** verwendest, kannst du auch den **Mailpassword Flow** aktivieren. Dadurch ruft mailcow das Attribut **mailcow_password** aus der Keycloak Admin API ab, sodass kein **App-Passwort** mehr benötigt wird.  
Das **mailcow_password** Attribut muss ein gehashtes Passwort enthalten: [Dokumentation](https://docs.mailcow.email/de/models/model-passwd/)  

### Was passiert, wenn ein Benutzer deaktiviert wird?  
Wenn ein Benutzer im Identity Provider deaktiviert wird:  
❌ Kann er sich nicht mehr im mailcow UI anmelden  
✅ Sein Postfach empfängt weiterhin E-Mails  

**Empfohlene Lösung**: Verwende ein Mailbox-Template, das den Benutzer deaktiviert, und aktualisiere das `mailcow_template` Attribut im Identity Provider.  

Wichtig für OIDC-Benutzer, die nur **App-Passwörter** nutzen:  
Falls sie sich ausschließlich mit einem **App-Passwort** anmelden, kann mailcow sie nicht automatisch deaktivieren. Eine manuelle Deaktivierung in mailcow ist erforderlich.  

### Zwei-Faktor-Authentifizierung (2FA)  
Der Identity Provider übernimmt 2FA – mit Ausnahme von **LDAP-Benutzern**, die weiterhin über das mailcow UI eine 2FA einrichten können.


## Weitere wichtige Änderungen  

### SOGo-Login  
Früher wurde beim Aufruf von [https://mailcow.tld/SOGo](https://mailcow.tld/SOGo) als nicht angemeldeter Benutzer direkt das SOGo-Login-Formular angezeigt. Jetzt werden Benutzer stattdessen zum mailcow Login weitergeleitet.  

Admins können festlegen, wo ein Benutzer nach erfolgreicher Anmeldung landet:  
✅ Das mailcow UI oder  
✅ Das SOGo UI

Das SOGo UI hat jetzt zwei mailcow-spezifische Buttons in der oberen Navigationsleiste:  
🔗 Link zum mailcow UI  
🔴 Logout-Button  

### Separate Logins  
Um eine bessere Zugriffskontrolle über NGINX oder einen Reverse Proxy zu ermöglichen, wurden die Login-Endpunkte getrennt:  
Users: `/`  
Domain Administrators: `/domainadmin`  
Administrators: `/admin`  

### Dovecot-Login-Performance  
Um die IMAP Anmeldung weiter zu beschleunigen, haben wir das **Dovecot-Passwort-Caching** aktiviert (danke an [@patschi](https://github.com/patschi)).  

#### Benchmarks  
| Caching | Authsource | Server Load Peak | Time for 2000 Logins (seconds) |
|---------|------------------------|-----------------|------------------------------|
| ❌ | **SQL**  | ~13            | 91.24                        |
| ❌ | **LDAP** | ~4             | 37.94                        |
| ✅ | **SQL**     | ~6             | 23.16                        |
| ✅ | **LDAP**    | ~2             | 23.17                        |

## Fazit  
Mit diesen Änderungen ist der größte Teil geschafft!  
Ab jetzt folgen nur noch **Bugfixes und kleinere Anpassungen**.  

Wir befinden uns in den letzten Vorbereitungen für den stable Release, und sobald wir ein Datum haben, werden wir es bekannt geben.  

Wer die neuen Features schon jetzt ausprobieren möchte, kann den **Nightly-Branch** nutzen – aber wie immer gilt: **Vor dem Update unbedingt ein Backup machen!** 🚀

Stay tuned, and happy mailing!   
Euer mailcow Team 💌
