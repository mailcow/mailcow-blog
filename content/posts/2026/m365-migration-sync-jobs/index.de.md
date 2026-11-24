---
title: "Von Microsoft 365 zu mailcow: Postfächer mit den neuen Sync-Jobs umziehen"
date: 2026-11-24T09:00:00+01:00
draft: false
author: The Infrastructure Company GmbH
description: "Seit Update 2026-11 holen Sync-Jobs Postfächer per OAuth2 direkt aus Microsoft 365. Schritt für Schritt: App in Entra ID, Sync-Quelle, Sync-Jobs und Umstellung."
keywords: ["Microsoft 365", "Exchange Online", "Migration", "Umzug", "imapsync", "OAuth2", "Sync-Jobs", "mailcow"]
featuredImage: "/images/2026/November/m365-migration-sync-jobs.jpg"
images: ["/images/2026/November/m365-migration-sync-jobs.jpg"]
toc: true
license: ""
tags: ["imapsync"]
categories: ["Anleitungen"]
---

**Moohoo zusammen!**

Viele von euch kommen zu mailcow, weil sie ihre E-Mails nicht länger in Microsoft 365 haben wollen. Der größte Brocken beim Umzug sind fast immer die Postfächer. Mit [Update 2026-11]({{< relref "/posts/2026/release-2026-11" >}}) haben wir die Sync-Jobs deshalb komplett überarbeitet: Sie melden sich jetzt per **OAuth2** direkt bei Microsoft 365 an und laufen auf Wunsch parallel.

In diesem Beitrag zeigen wir Schritt für Schritt, wie ihr eure Postfächer aus Microsoft 365 nach mailcow übernehmt.

<!--more-->

## Was ist neu bei den Sync-Jobs?

- **Sync-Quellen:** Den Quellserver legt ihr einmal als Quelle an und nutzt ihn dann in beliebig vielen Sync-Jobs. Vorlagen tragen die Einstellungen für Microsoft 365, Google und viele andere Anbieter ein.
- **OAuth2 für Microsoft 365 und Google:** Exchange Online lässt IMAP mit Benutzername und Passwort nicht mehr zu. Die Sync-Jobs melden sich deshalb mit einem OAuth2-Token an. mailcow erneuert die Tokens automatisch, auch während langer Läufe.
- **Zwei Wege:** Als Admin zieht ihr mit einer App gleich die ganze Organisation um, ohne dass sich jemand anmelden muss. Oder jede Person meldet sich einmal selbst bei Microsoft an.
- **Parallele Läufe:** Bis zu 32 Sync-Jobs laufen gleichzeitig, auf Wunsch mit Bandbreiten-Limit pro Prozess. Mit Prioritäten und „Als nächstes ausführen“ legt ihr die Reihenfolge fest.
- **Zertifikatsprüfung:** mailcow prüft das Zertifikat des Quellservers.
- **Status auf einen Blick:** Die Liste zeigt für jeden Job das letzte Ergebnis, zum Beispiel „Erfolg“ oder „OAuth-Token nicht bereit“, und das Log des letzten Laufs.

Unter der Haube arbeitet imapsync 2.314.

## Thunderbird oder eM Client statt Outlook

{{< admonition tip "Unsere Empfehlung" >}}
Nutzt den Umzug, um auch das Mailprogramm zu wechseln: Wir empfehlen [Thunderbird](https://docs.mailcow.email/de/client/client-thunderbird/) oder [eM Client](https://docs.mailcow.email/de/client/client-emclient/). Beide binden Mail, Kalender und Kontakte aus mailcow direkt ein, ganz ohne Add-in. Thunderbird ist kostenlos und Open Source, eM Client gibt es für Windows, macOS, Android und iOS.
{{< /admonition >}}

Von Outlook raten wir ab: Neuere Versionen lassen sich mit mailcow nur von Hand einrichten, ActiveSync funktioniert dort nicht, und Kalender und Kontakte gehen nur über ein Add-in. Wer bei Outlook bleiben muss, findet die Einrichtung in der [Outlook-Anleitung](https://docs.mailcow.email/de/client/client-outlook/).

## Bevor ihr loslegt

1. **mailcow aktualisieren:** Ihr braucht mindestens Version 2026-11. Aktualisiert wird wie immer mit `./update.sh`.
2. **Domains und Postfächer in mailcow anlegen:** in der Weboberfläche oder über die [API](https://docs.mailcow.email/de/manual-guides/mailcow-UI/u_e-mailcow_ui-api/). Achtet auf genug Quota in den Zielpostfächern.
3. **IMAP in Exchange Online aktivieren:** für jedes Quellpostfach im Microsoft 365 Admin Center unter *Benutzer → E-Mail → E-Mail-Apps verwalten*.
4. **Optional parallele Läufe erhöhen:** unter *System → Konfiguration → Einstellungen → Sync-Jobs*, Feld „Max. parallele Sync-Prozesse“ (Standard 1).

## Variante A: die ganze Organisation umziehen

Diese Variante ist für Admins und Domain-Admins, die viele Postfächer auf einmal übernehmen. mailcow meldet sich mit einer App an, die Zugriff auf alle Quellpostfächer hat. Niemand muss sich bei Microsoft anmelden.

1. Im **Microsoft Entra Admin Center** unter *App-Registrierungen* eine neue App registrieren.
2. Unter *API-Berechtigungen* die Anwendungsberechtigung `IMAP.AccessAsApp` von „Office 365 Exchange Online“ hinzufügen (Reiter „Von meiner Organisation verwendete APIs“) und die Administratorzustimmung erteilen.
3. Unter *Zertifikate & Geheimnisse* einen geheimen Clientschlüssel erstellen.
4. Die App in Exchange Online registrieren und ihr Zugriff auf die Quellpostfächer geben, in der Exchange Online PowerShell. `<OBJECT_ID>` ist die Objekt-ID der App unter *Unternehmensanwendungen*, nicht die unter *App-Registrierungen*:

    ```powershell
    New-ServicePrincipal -AppId <APPLICATION_ID> -ObjectId <OBJECT_ID>
    Add-MailboxPermission -Identity "user@contoso.com" -User <OBJECT_ID> -AccessRights FullAccess
    ```

    Den zweiten Befehl führt ihr für jedes Postfach aus, das umziehen soll. Microsoft beschreibt diese Schritte ausführlich unter [IMAP-, POP- oder SMTP-Verbindungen mit OAuth authentifizieren](https://learn.microsoft.com/de-de/exchange/client-developer/legacy-protocols/how-to-authenticate-an-imap-pop-smtp-application-by-using-oauth).
5. In mailcow unter *E-Mail → Konfiguration → Sync-Jobs* eine Quelle mit der Vorlage **„Microsoft 365 (Client Credentials)“** anlegen und Tenant (Tenant-ID oder eine Domain des Tenants), Client-ID und Client-Secret eintragen.
6. Für jedes Postfach einen Sync-Job anlegen: Zielpostfach in mailcow wählen, die Quelle auswählen und die Adresse des Microsoft-365-Postfachs als „Benutzername an der Quelle“ eintragen. Ein Passwort braucht ihr nicht.

Bei vielen Postfächern legt ihr die Sync-Jobs am besten über die API an (`add/syncjob` mit der `source_id` der Quelle).

## Variante B: jede Person zieht selbst um

Hier meldet sich jede Person einmal mit ihrem Microsoft-365-Konto an. Das passt, wenn Benutzer ihre Sync-Jobs selbst anlegen sollen.

1. Im **Microsoft Entra Admin Center** eine neue App registrieren und die Plattform „Web“ mit der Redirect-URI `https://<MAILCOW_HOSTNAME>/syncjob-oauth` hinzufügen.
2. Unter *API-Berechtigungen* die delegierten Berechtigungen `IMAP.AccessAsUser.All`, `offline_access`, `openid`, `email` und `profile` von „Microsoft Graph“ hinzufügen. Am besten erteilt ihr gleich die Administratorzustimmung, sonst muss jede Person bei der Anmeldung zustimmen.
3. Unter *Zertifikate & Geheimnisse* einen geheimen Clientschlüssel erstellen.
4. In mailcow eine Quelle mit der Vorlage **„Microsoft 365 (Benutzer-Login)“** anlegen, Tenant, Client-ID und Client-Secret eintragen und die Quelle für die gewünschten Domains oder Postfächer freigeben.
5. Beim Anlegen des Sync-Jobs klickt die Person auf **„Beim Provider anmelden“** und meldet sich mit dem Microsoft-365-Konto an. Der Browser muss Pop-ups für mailcow erlauben.

Die Anmeldung funktioniert nur, wenn mailcow über `MAILCOW_HOSTNAME` aufgerufen wird.

## Umstellen ohne Mailverlust

1. **Synchronisieren lassen:** Die Sync-Jobs laufen im eingestellten Intervall immer wieder. Alle arbeiten in der Zwischenzeit normal in Microsoft 365 weiter, neue Mails kommen beim nächsten Lauf mit.
2. **DNS vorbereiten:** Die TTL der MX- und Autodiscover-Einträge ein paar Tage vorher senken.
3. **Umstellen:** MX, SPF, DKIM, DMARC und Autodiscover auf mailcow zeigen lassen.
4. **Letzter Lauf:** Sobald die DNS-Änderung überall angekommen ist, die Sync-Jobs ein letztes Mal laufen lassen und danach deaktivieren.

Sync-Jobs kopieren nur E-Mails. Kalender und Kontakte exportiert ihr als ICS- und vCard-Dateien und importiert sie in SOGo.

## Wenn etwas hakt

| Meldung | Was hilft |
|---|---|
| „OAuth-Token nicht bereit“ bei einem Sync-Job (Benutzer-Login) | Sync-Job öffnen, „Beim Provider anmelden“, erneut anmelden und speichern |
| „Token fehlgeschlagen“ bei einer App-Quelle | Tenant, Client-ID, Client-Secret und Berechtigungen prüfen, dann „Token jetzt erneuern“ |
| „Falscher Benutzername oder Passwort“ bei einer App-Quelle | Ist IMAP für das Postfach aktiviert? Hat die App Vollzugriff auf das Postfach? Wurde die Objekt-ID der *Unternehmensanwendung* verwendet? |
| „Ziel Mailbox ist über dem Limit“ | Quota des Zielpostfachs in mailcow erhöhen |
| „Beim Provider anmelden“ schlägt fehl | Den Grund neben dem Button lesen. Steht in mailcow noch eine 2FA-Einrichtung oder Passwortänderung aus, diese zuerst abschließen. |

Alle Details, auch zu Google Workspace, findet ihr in der [Dokumentation zu Sync-Jobs](https://docs.mailcow.email/de/post_installation/firststeps-sync_jobs_migration/).

## Ohne eigenen Server oder mit Unterstützung

Ihr wollt keinen eigenen Server betreiben? Mit [managed mailcow](https://cp.servercow.de/product/managed-mailcow) bekommt ihr eure eigene mailcow, betrieben von uns, den Entwicklern von mailcow. Wenn ihr selbst betreibt und Hilfe beim Umzug braucht, gibt es unsere [Support-Pakete](https://servercow.de/mailcow/#help).

Viel Erfolg beim Umzug und happy mailing!

Euer mailcow-Team von **The Infrastructure Company GmbH** (kurz **tinc**)
