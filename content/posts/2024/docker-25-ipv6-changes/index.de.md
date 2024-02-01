---
title: "⚠️ Wichtige Änderung bei der Nutzung von mailcow mit deaktivierter IPv6 konnektivität ⚠️"
date: 2024-02-01T11:19:02+02:00
draft: false

author: Niklas Meyer/DerLinkman
authorLink: "https://github.com/DerLinkman"
toc: true

license: ""

tags: ["2024", "info", "docker", "25.X", "ipv6", "changes"]
categories: ["Status", "Hinweis"]

---

**Moohoo zusammen!**

Wir möchten in diesem Blog Eintrag einmal auf gravierende Änderungen im Bezug auf Docker und der IPv6 Nutzbarkeit für mailcow eingehen.

<!--more-->

### Wen betrifft es?

Grundsätzlich betrifft das Problem all diejenigen, welche Ihre mailcow Installation ohne IPv6 betreiben und auf den Versionen von Docker >= 25 unterwegs sind, da mit dieser Version gravierende Änderungen im Docker Daemon Einzug erhalten haben, welche die Nutzbarkeit der bestehenden deaktivierten IPv6 mailcow Installationen durcheinander wirft.

### Was genau ist das Problem?

Mit der Docker Version 25 hat sich das Verhalten von Docker im Bereich der Adressenallokierung für IPv6 Adressen in einem Docker Netzwerk verändert. Früher (also vor der 25.X) war es so, dass der Parameter `enable_ipv6: false` in der `docker-compose.yml` ausgereicht hat um dem Netzwerk keine IPv6 Adressen zuzuweisen, obwohl ein Subnetz in besagter Datei definiert war (in allen mailcow Installationen standardmäßig). Diese Option reicht nun aber nicht mehr aus, da Docker nun durch das definierte Subnetz in der Netwerk Definition der `docker-compose.yml` jedem Container trotzdem eine v6 aus besagtem Subnetz zuweist. **Das Problem**: Durch `enable_ipv6: false` werden keine Adressen im Docker Netzwerk geroutet, da die Container aber alle eine IPv6 Adresse im Docker Netzwerk haben und IPv6, IPv4 vorgezogen wird in der Priorität, kommt es nun vor, dass die Container sich untereinander nicht mehr erreichen können und damit eine korrekte Nutzung von mailcow eingeschränkt ist. Insbesondere Sieve Filter machen Probleme dabei den Postfix Container zu erreichen.

### Was kann ich dagegen tun?

Nun, glücklicherweise gibt es eine Lösung dafür um das Problem aus der Welt zu schaffen, auch wenn diese unserem Motto möglichst wenig manuell am Stack rumzufummeln etwas missfällt. Wir haben dazu bereits undere Dokumentation angepasst und den [Eintrag für das Deaktivieren von IPv6 angepasst](https://docs.mailcow.email/de/post_installation/firststeps-disable_ipv6/). Haltet euch an diesen und eure mailcow sollte wieder so laufen wie vorher. **Trotzdem wird leider der Endnutzer (also ihr) einmal selber tätig werden müssen damit das klappt, da mailcow diesen Schritt nicht automatisch macht**.

### Was tut das mailcow Team dagegen?

Da uns dieses Verhalten wiedersprüchlich erscheint, warum es trotz expliziter deaktivierung der IPv6 Nutzung über `enable_ipv6: false` zu diesem Verhalten kommt, haben wir ein [Issue bei Docker](https://github.com/moby/moby/issues/47202) selbst zu dieser Thematik eröffnet. Denn warum sollte es sonst diese Option immer noch geben, wenn Sie scheinbar durch das setzen des IPv6 Subnetzes sowieso ignoriert wird?

Bis es dafür eine handfeste Erklärung oder gar eine Lösung gibt, kann noch einige Zeit vergehen. Deswegen wollten wir euch darüber auf mehreren Plattformen ausgiebig und gesondert Informieren.

---

Wir hoffen sehr, dass wir ein wenig Klarheit in das Thema bringen konnten und euch, solltet ihr betroffen sein, auf den richtigen Pfad führen konnten.

Ansonsten gilt das, was immer gilt:

Bleibt gesund und frohes Mailing 😉

Euer mailcow Team

*DerLinkman/Niklas*