---
title: "🐄 Mooctober 2021 - Die Feldsam Edition"
date: 2021-10-18T21:55:47+01:00
draft: false

author: "André Peters"
authorLink: "https://github.com/andryyy"
description: "Änderungen für das Oktober 2021 Update"
  
categories: ["Updates"]
tags: ["2021", "update", "changelog"]
---

Ein großes Dankeschön an [Kristian Feldsam](https://feldhost.net "Kristian Feldsam") für die Integration von Twig. Wir sind näher an Bootstrap 5 als je zuvor. Das ist eine große Änderung, die wir hoffentlich bald abschließen können.

Außerdem stellen wir unsere neue [cold standby Lösung](https://mailcow.github.io/mailcow-dockerized-docs/b_n_r-coldstandby/ "cold standby solution") vor.

Mit diesem neuen Skript seid ihr in der Lage, eine voll funktionsfähige, 1:1, konsistente Kopie eurer laufenden mailcow ohne Ausfallzeit zu erstellen.

Disaster Recovery einer Mailcow ist so einfach wie das Wechseln der IPs und das Ausführen von "up -d".

Wir empfehlen, dieses Skript alle X Minuten oder Stunden laufen zu lassen und Schnappschüsse auf dem entfernten Standort für eine einfache Versionierung zu erstellen.

