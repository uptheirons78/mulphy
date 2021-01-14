---
templateKey: project
title: Pro Loco di Nepi
subTitle: "Eventi e manifestazioni di una delle meraviglie della Tuscia"
date: "2021-01-04T10:00:00.000Z"
description: "Realizzazione di un portale turistico con blog integrato dedicato agli eventi ed alle manifestazioni che si tengono a Nepi periodicamente."
slug: pro-loco-nepi
projectUrl: "https://proloconepi.it/"
projectClient: "Pro Loco di Nepi"
projectDate: "Marzo 2018"
projectCategory: ["Ente", "Headless CMS"]
projectThumbnail: "../assets/proloconepi/proloconepi-thumbnail.jpg"
projectImage: "../assets/proloconepi/proloconepi-project.jpg"
---
### LE ESIGENZE

La Proloco di Nepi ci ha contattato perché realizzassimo il loro sito in maniera tale che periodicamente potessero aggiornarlo con gli eventi e le manifestazioni da loro organizzate. Al contempo ci ha chiesto che nel sito fosse inclusa la possibilità di promuovere le principali attrazioni locali ed alcune delle attività commerciali nei settori della ristorazione e dell'accoglienza.

### LA SOLUZIONE SCELTA

Dopo aver attentamente valutato la frequenza con la quale il sito sarebbe stato aggiornato, abbiamo preso la decisione, per noi sperimentale in quel periodo, di strutturarlo con Gatsby e con un c.d. "Headless CMS" per poter sfruttare a pieno la velocità in navigazione e caricamente di questo tipo di architettura.

Il cms scelto è stato Contentful dove coloro che gestiscono il sito potranno aggiornare, cambiare o aggiungere sia articoli che pagine. La scelta è ricaduta su tale piattaforma perchè offre un importante opzione gratuita con più di 2500 records (1 articolo = 1 record) che permetterà a lungo alla Proloco Nepi di usufruirne senza alcun esborso di denaro (è pur sempre un'associazione a promozione del territorio e con fondi limitati, quindi ci è sembrato corretto scegliere questa ottima soluzione low cost per aiutarli 😉).

L'intera struttura è sviluppata con Gatsby e React, quindi giovane, veloce, sicura e, soprattutto, moderna.

Nel lungo periodo non avrà necessità di molte attenzioni e gli aggiornamenti al codice potranno esser fatti con cadenza trimestrale ed in pochissimo tempo.

Il vantaggio principale, dovuto a Github e Netlify, dove il sito è allocato, è quello relativo alla continuos integration ed al version control. Tradotto per i meno tecnici: il sito avrà costantemente un backup aggiornato su Github, sarà sempre possibile accedere in pochi secondi ad ogni sua versione in caso di problemi ed ogni qualvolta i contenuti su Contentful verranno modificati o aggiornati lo stesso sito, statico, si rigenererà in meno di 120 secondi.

Gli utenti, così, non avranno mai quella spiacevole sensazione di navigare su una pagina vuota dove campeggia la scritta: "Error 500. Internal Server Error".

Sono ormai due anni che il sito è online. Il cliente è pienamente soddisfatto del risultato e gli utenti si sono detti stupiti dalla velocità di navigazione. Appena online riusciva a raggiungere un risultato su Lighthouse pari a 98 su 100, praticamente impossibile per qualsiasi sito costruito con un CMS classico.