---
title: "🦾6️⃣4️⃣ 🐄 Janmuhary 2024 Update | Das Multiarch (x86 + ARM64) & Performance Update - Revision E"
date: 2024-02-08T11:19:02+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["Security", "Major", "ARM64"]
categories: ["Updates"]

featuredImage: "/images/2024/January/release-arm64.jpg"
featuredImagePreview: "/images/2024/January/release-arm64.jpg"

---


## 2024-01e (Release vom 08.02.2024)

**Netfilter-Verbesserungen**

+ Behobene Isolationsregel für iptables: Ein Problem in Bezug auf die Isolationsregel von mailcow in iptables wurde behoben. Dank der Beiträge von @FreddleSpl0it und @tomudding. [PR #5700](https://github.com/mailcow/mailcow-dockerized/pull/5700)

+ Entspanntere IP-Überprüfung in NFTables.py: Eine entspanntere IP-Überprüfung in NFTables.py wurde eingestellt, um die Kompatibilität zu verbessern. Vielen Dank an @amorfo77 für den Beitrag. [PR #5711](https://github.com/mailcow/mailcow-dockerized/pull/5711)

**SOGo-Korrekturen**

+ Behobener SOGo-Absturz auf älteren Kernels: Ein SOGo-Absturz, der auf Kernels älter als 5.10.0-X auftrat, wurde behoben. Danke an @DerLinkman für die Behebung. [Commit](https://github.com/mailcow/mailcow-dockerized/commit/5a9702771cba4fedbc79331e92ff757f734df58e)

**Dovecot-Verbesserung**

+ Falsche Zeitzone in Logs behoben: Ein Problem mit der falschen Zeitzone in den Dovecot Logs wurde behoben. Der Dank geht an @DerLinkman für die Behebung. [Commit](https://github.com/mailcow/mailcow-dockerized/commit/d08ccbce789880eb81ebebca48d440637ab36983)

**Unbound-Updates**

+ Erhöhtes Intervall für Healthchecks: Das Intervall für Healthchecks wurde auf 30 Sekunden in Unbound angepasst, was die externen Anfragen reduzieren sollte. Beitrag von @DerLinkman. [Commit](https://github.com/mailcow/mailcow-dockerized/commit/63bb8e8cefb4afebd50f12a485f6af5d12c98125)

+ Entfernte Netcat-Überprüfungen: Netcat-Überprüfungen wurden aus den Unbound Healthchecks entfernt, um den Prozess zu optimieren. Dank an @DerLinkman. [Commit](https://github.com/mailcow/mailcow-dockerized/commit/63426c3cd023922a6e3c5f3aa40c4cc95f1d9fe1)

Für einen umfassenden Überblick über alle Änderungen verweisen wir auf den [Changelog bei Github](https://github.com/mailcow/mailcow-dockerized/compare/2024-01d...2024-01e)

Mittlerweile (am 06.02.2024 um genau zu sein) hat Docker auch endlich den Patch für die von uns in einem früheren Blogpost angekündigte IPv6 Problematik veröffentlicht. Damit entfällt die Sonderroutine bei Docker Versionen ab 25.0.3 endlich wieder.

Ebenfalls ist uns auch die "Problematik" mit SOGo und der Fehlermeldung im Editor bekannt. Dahingehend haben wir bereits Kontakt aufgenommen, so dass wir (wenn es implementiert wurde) die mit dem 2024-01e ausgelieferte SOGo Version einfach drüber patchen, mit dem Fix. So entsteht nicht erneut ein Subrelease, wie dieser hier.

---

## 2024-01c (Release vom 02.02.2024)

{{< admonition type=warning title="Wichtig" open=true >}}

Dieses Update enthält eine Sicherheitsbehebung, so dass wir allen Benutzern dringend empfehlen, auf diese neueste Version zu aktualisieren, um die Sicherheit ihrer Systeme zu gewährleisten. Benutzer, die nicht aktualisieren können und ihr System mit potenziellen Angreifern im selben Netzwerk teilen, wie z. B. bei einigen Hosting-Anbietern, sollten die folgende iptables/nftables-Regel anwenden:

<!--more-->

iptables:
```
iptables -I DOCKER-USER ! -i br-mailcow -o br-mailcow -p tcp -m multiport --dport 3306,6379,8983,12345 -j DROP
```

nftables:
```
nft insert rule ip "filter" "DOCKER-USER" iifname != "br-mailcow" oifname "br-mailcow" tcp dport {3306, 6379, 8983, 12345} counter packets 0 bytes 0 drop
```

{{< /admonition >}}

Was sich sonst noch so getan hat:

+ Es wurde ein SOGo Bug gefixt, welcher die ACL "Authentifizierte Benutzer" nicht mehr angezeigt hatte.
+ Die Postscreen Access Liste wurde aktualisiert.

Für den neuen Sicherheitsfix wurde bereits eine CVE vergeben.

Der letzte Sicherheitsfix hat die CVE 2024-23824. Hier noch einmal die Seite dazu: https://github.com/mailcow/mailcow-dockerized/security/advisories/GHSA-45rv-3c5p-w4h7

Für die neue Sicherheitslücke haben wir ebenfalls eine CVE beantragt, den Report könnt ihr aber hier lesen: https://github.com/mailcow/mailcow-dockerized/security/advisories/GHSA-gmpj-5xcm-xxx6

---

## 2024-01b (Release vom 22.01.2024)

+ Wir haben die von einem cURL Submodul Bug geplagten Container (phpfpm, unbound, watchdog & acme) in ihrer Alpine Version von 3.19 auf 3.18 downgraded. Dies sollte die Notwendigkeit des Workarounds ([siehe hier](https://twitter.com/mailcow_email/status/1747880630317101556)) obsolet machen. Wir werden auf Alpine 3.19 in diesen Containern (wahrscheinlich) im 2024-02 Update zurück kommen (vorausgesetzt der Bug ist dann behoben).
+ Es ist nun möglich die Unbound Healthchecks zu deaktivieren bzw. zu überspringen. Hintergrund (Primär) ist das Geo Blocking von einigen Ländern (China bspw.) welche den Zugriff via DNS auf GitHub untersagen, der Check allerdings darauf aufbaut. Dafür wurde eine neue mailcow Variable gesetzt (`SKIP_UNBOUND_HEALTHCHECK`) 

    {{< admonition type=danger title="Vorsicht">}} 
**Wir empfehlen diesen Wert nicht zu setzen, da der Healthcheck Probleme die für die korrekte Erreichbarkeit ins Internet wichtig ist**
    {{< /admonition >}}

+ Es wurde ein Bug gefixt, welcher die Watchdog Webhooks betrifft, welcher dafür sorgte, dass die Webhooks nicht korrekt Formatiert wurden und keine Informationen auf der jeweiligen Plattform angezeigt wurden.

---

## 2024-01a (Release vom 18.01.2024)

+ Der Timeout für den Unbound Healthcheck wurde von 10 auf 30 Sekunden erhöht. Bei einigen Systemen kam es durch die erweiterten Checks zu einem Status Unhealthy obwohl diese in Ordnung waren.

---

## 2024-01 (Release vom 17.01.2024)

**Moohoo** Alle zusammen!

Wir hoffen ihr hattet einen guten Start in das noch junge 2024. Wie bereits im vorfeld auf Social Media (X/Twitter: [@mailcow_email](https://x.com/mailcow_email), Mastodon: [@doncow@mailcow.social](https://mailcow.social/@doncow)) angekündigt erscheint heute endlich das lang ersehnte ARM64 bzw. Multiarch Update worauf wir langezeit mit höhen und tiefen hingearbeitet haben.

Um die Frage direkt im vorfeld zu klären: Ändern tut sich für alle bestehenden mailcow Installationen nichts (zumindest nicht geplant). Dieses Update läuft ebenfalls wie alle bisherigen Updates ab ohne manuelle Anpassungen eurerseits. mailcow bleibt im Umfang genauso wie bisher auch, nur, dass wir ab heute auch eine neue Nutzerschaft willkommen heißen können: **die ARM64 User**.

Falls ihr neu dabei seid: "Hallo 👋, schön dass ihr hier seid!".

Und an alle die, die überlegen auf ARM64 zu switchen: "Danke, dass ihr neue und effizientere Techniken nutzt 😁".

Falls ihr euch fragt: "Gibt es irgendetwas zu beachten bei der Installation/Migration? auf die neue Plattform?" Außer die Dokumentation (wie in der Regel immer) zu lesen nicht! Denn dabei werdet ihr feststellen, dass sich die Installation von mailcow gar nicht verändert hat!

Aber genug der langen Rede, was hat sich denn nun alles geändert? Schauen wir doch mal:

{{< admonition type=warning title="Achtung">}}
**Bitte erstellt sicherheitshalber ein komplettes mailcow Backup bevor Ihr das Update durchführt!** <br>
Schäden können auch nach unzähligen erfolgreich abgeschlossenen Tests durch die Unterbau Änderungen **nicht** ausgeschlossen werden!!<br>
Es gilt: *Kein Backup, kein Mitleid*
{{< /admonition >}}

### Changelog

- mailcow ist nun ARM64 kompatibel:
    - Einige mailcow Unterbauten wurden umgebaut, um auf ARM64 und x86 parallel lauffähig zu sein, darunter Dovecot, SOGo, Rspamd, Clamd.
    - **ALLE** Docker Images (beginnend mit dem 2024-01 Update) sind nun für x86 und ARM64 (aarch64) verfügbar.
    - Die Migrations- und Backupskripte wurden angepasst um diskrepanzen bei den Architekturen zu erkennen und Maßnahmen zu ergreifen, welche beim Architekturwechsel zu einem Crash seitens mailcow führen könnten, sollten diese nicht beachtet werden (Rspamd Cashing Volume wird ausgelassen).

- Alle auf Alpine basierenden mailcow Komponenten wurden auf Alpine 3.19 aktualisiert. (Danke an @MAGICCC und @DerLinkman).

- Serverseitiges Processing für das Laden von den Domain- und Mailbox-Tabellen wurde eingefügt. mailcows mit vielen Domains und oder Mailboxen sollten nun deutlich responsiver sein in der Bedienung der Web-UI (Danke an @feldsam fürs Implementieren!).

- Für SOGo wurde eine Option standartmäßig aktiviert, welche Bilder aus Signaturen nicht nochmal extra als Anhang anhängt, was bisher der Fall war. (Danke an den mittlerweile gelöschten User (auf GitHub)).

- Die Postscreen Access List wurde aktualisiert (Stand 01.01.2024)

- Einige Übersetzungen wurden überarbeitet.

---

Ich erinnere gerne nochmal daran, euch einen riesen gefallen zu tun und einfach mal ein Backup vor dem Update zu machen. Zwar haben wir natürlich ausgiebig die ganzen Änderungen getestet aber es kann natürlich gerade bei stark angepassten Installationen zu Fehlern kommen. Haltet das einfach im Hinterkopf :)

Ansonsten wie immer ein riesiges Dankeschön an unsere großartige mailcow-Community für eure anhaltende Unterstützung und euer wertvolles Feedback.

Wir werden uns spätestens im Februar wieder sehen zu einem neuen Update. Ob es das LDAP Update im Februar wird steht noch nicht fest, wir halten euch da natürlich auf dem laufenden.

Anonsten bleibt gesund und frohes Mailing.

Euer mailcow-Team
> Niklas

*Bild von <a href="https://pixabay.com/de/users/bbaaer-1679131/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1799310">Samuel</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1799310">Pixabay</a>*