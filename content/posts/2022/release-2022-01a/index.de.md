---
title: "📰🐄 Jan(moo)uary Update 2022 - Revision A (2022-01a) 🪲 | Änderungen"
date: 2022-02-01T15:28:32+01:00
draft: false
author: Niklas Meyer

license: ""

tags: ["2022", "update", "changelog", "bugfix"]
categories: ["Updates"]
---

**Moohoo** an alle.

Heute veröffentlichen wir den ersten Hotfix für das Update 2022-01.

Das hat sich geändert:

---

## Ergänzungen:
- Wir haben einen Versions-Tag hinzugefügt, der sich am unteren Rand der mailcow UI befindet (Er zeigt nun den aktuellen Release-Tag an, auf dem man sich befindet!) Ist das nicht verrückt? (https://github.com/mailcow/mailcow-dockerized/pull/4437)

---

## Änderungen:
- Die passwortlose SOGo-Authentifizierung unterstützt nun Kalendereinladungen und Kalender/Kontakt-Abonnements (https://github.com/mailcow/mailcow-dockerized/pull/4439)
- Der Autoreply-Zeitplan für SOGo wurde von 24h auf 5m geändert (https://github.com/mailcow/mailcow-dockerized/pull/4441)

---

## Korrekturen:
- Wir haben einen Fehler bei der passwortlosen FIDO2-Authentifizierung behoben (https://github.com/mailcow/mailcow-dockerized/pull/4440)

---

Um die neuesten Patches von inverse einzubinden, haben wir den SOGo Container auf den neuesten Nightly Build (2022-02-01) aktualisiert. **Es wird das gleiche Tag wie in der vorherigen Version beibehalten**.
