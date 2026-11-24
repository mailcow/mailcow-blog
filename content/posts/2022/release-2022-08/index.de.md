---
title: "🌊🐄 Aumuuhst Update 2022 - Die Nightly Builds sind los | Änderungen"
date: 2022-09-01T10:30:10+02:00
draft: false

author: Niklas Meyer
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["Bugfix"]
categories: ["Updates"]
---

**Moohoo zusammen!**

> Ihr seit zu spät! Das August Update kommt aber im September11einself!!!! 

Ja... was soll ich darauf sagen? Das ist richtig. Aber immerhin sind wir trotzdem wieder zurück, oder?

Diesmal ändert sich auch sogar einiges bezüglich den Updates an sich! Bleibt also gespannt.

Fangen wir erst mal recht sachte an:

### Stabile Änderungen (stable Branch)

- OAuth Clients und App-Passwörter werden nun wieder akzeptiert bei Cal/CardDav Verbindungen. [#4685](https://github.com/mailcow/mailcow-dockerized/pull/4685) von [@FreddleSpl0it](https://github.com/FreddleSpl0it)
- SOGo wurde auf 5.7.1 geupdated ([Kompletter Changelog hier](https://github.com/Alinto/sogo/releases/tag/SOGo-5.7.1)) erhält im mailcow Stack Container Version: *mailcow/sogo:1.110* [#4719](https://github.com/mailcow/mailcow-dockerized/pull/4719) von [@MAGICCC](https://github.com/MAGICCC) und [@DerLinkman](https://github.com/DerLinkman)
- Das Docker Compose Plugin von Docker wird nun auch unterstützt. Dementspechend wird keine Standalone Version von Docker Compose (docker-compose) mehr vorrausgesetzt. [#4725](https://github.com/mailcow/mailcow-dockerized/pull/4725) von [@DerLinkman](https://github.com/DerLinkman)
- Der Passwort Ändern Knopf (als User angemeldet) in der mailcow UI war verschwunden, wenn man SOGo Deaktiviert hatte. Das wurde gefixt. Commit: [4322c98](https://github.com/mailcow/mailcow-dockerized/pull/4733/commits/4322c98f730756cdb28ea1750e6f9a7ec6ea5a70) von [@DerLinkman](https://github.com/DerLinkman)

Kommen wir nun zum größten Teil des Updates: Die Nightly Builds.

---

### Nightly Builds? Was hat es damit auf sich?

Ab dem 2022-08 Update wird es regelmäßig neben den Major Updates (wie, dem hier) Nightly Updates zum Testen und Feedback sammeln geben.

Dies bringt uns die Möglichkeit ein, von einigen Leuten direkten Input zu bekommen und unsere eigenen Tests auf mehrere Szenarien auszuweiten.

Doch was springt dabei für euch bei rum, fragt ihr euch?

Nun, wir wollen die Nightly Builds in erster Linie dafür nutzen, um neue (auch größere) Funktionen zum Testen anzubieten, welche ihr dann schon vor allen anderen Leuten (die auf Nummer sichergehen wollen) testen könnt.

Heißt in dem Beispiel hier konkret das neue UI Update (Das MUH-I Update) auf Bootstrap 5, welches zum Start direkt im Nightly bereitsteht, für euch zum Testen.

Doch zum Bootstrap 5 UI wird es einen separaten Blog Eintrag geben, der eure Mithilfe genauer erläutert.

### Wie bekomme ich denn nun die Nightly Updates?
Das ist nicht so schwer.

Wir haben in der `update.sh` zwei neue Parameter hinzugefügt `--nightly` und `--stable`. 

Je nachdem, welche Updates ihr gerade bezieht, könnt ihr mit dem Parameter auf den jeweiligen Update Zweig wechseln.

Als Beispiel:

Ihr seid aktuell (wie üblich) im stable Branch (master) (Das ist der Standard), dann müsst ihr `update.sh --nightly` ausführen, um auf die Nightly Builds zu wechseln.

Wenn ihr von Nightly wieder auf Stable wollt, müsst ihr dementsprechend `update.sh --stable` ausführen.

**Aber ACHTUNG!!!** Sichert eure mailcow komplett, wenn ihr vorhabt, auf Nightly zu wechseln. **Wir haften nicht für etwaige Datenkorruptionen/Datenverluste**!! Seit also gewarnt.

Wir haben auf der Dokumentationsseite einen [Best Practice Guide](https://mailcow.github.io/mailcow-dockerized-docs/de/i_u_m/i_u_m_update/#best-practice-nightly-update) veröffentlicht, welcher eine gute Möglichkeit zum Testen der Nightly Builds aufzeigt.

Generell gilt: Die Nightly Builds sind **NICHT** Ich wiederhole **NICHT** für den produktiven Einsatz freigegeben! Es kann funktionieren und wenn das so ist, ist das auch super, es kann aber eben auch nicht funktionieren. Nur damit ihr Bescheid wisst.

---

Für die nächsten Updates wird es neben den Stable Updates News auch noch Nightly Update News geben, welche dann eben die Zusammenfassung der letzten Nightly Builds beherbergt.

Solltet ihr noch weitere Informationen zu den Nightly Builds benötigen, schaut generell mal in die [Dokumentation](https://mailcow.github.io/mailcow-dockerized-docs/de/) hinein.

Bis dahin. Alles Gute und bleibt gesund.

**Euer mailcow Team** <br>
*Niklas*