---
templateKey: project
title: Studio Legale Barberio
subTitle: "Professionalità e serietà al servizio dei clienti"
date: "2021-01-13T10:00:00.000Z"
description: "Restyling di un sito professionale con blog precedentemente sviluppato con Wordpress ed un Page Builder e da noi costruito con Gatsby e Netlify CMS per renderlo sicuro e veloce."
slug: studio-legale-barberio
projectUrl: "https://studiobarberio.org"
projectClient: "Studio Legale Barberio"
projectDate: "Aprile 2019"
projectCategory: ["Studio Professionale", "Gatsby"]
projectThumbnail: "../assets/studiobarberio/studiobarberio-thumb.jpg"
projectImage: "../assets/studiobarberio/studiobarberio-project.jpg"
---
### PERCHE' IL RESTYLING ?

Lo Studio Legale Barberio, con sede in Roma, da anni si occupa con successo di diritto dell'immigrazione e di ogni cosa ad esso correlata, come, ad esempio, pratiche amministrative e commerciali di notevole importanza per i cittadini stranieri presenti sul territorio italiano.

Logico, quindi, che avere un sito internet, anche in inglese, in grado di generare leads qualificate ed organiche (direttamente dalle ricerche attraverso Google o altri motori di ricerca), accrescendo l'utenza e la clientela, sia un requisito fondamentale per uno studio professionale che si occupa di una materia di nicchia così rilevante.

Purtroppo, il fatto che la versione precedente del sito [www.studiobarberio.org](https://studiobarberio.org) fosse stata sviluppata nel 2012 con Wordpress, facendo leva su un Page Builder e senza un tema personalizzato, ha reso negli anni il caricamente delle varie pagine sempre più lento e fastidioso. Senza contare i continui problemi lato server dovuti ai mancati aggiornamenti di Wordpress o dei vari plugins installati (tema incluso) nel tempo.

Tutto ciò ha spinto la titolare dello studio a contattarci e vedere come poter risolvere la situazione per migliorare l'esperienza di navigazione degli utenti.

### LA SOLUZIONE DEI PROBLEMI

Dopo attenta analisi e dopo aver constatato la frequenza con la quale il sito, soprattutto il blog (suddiviso nella classica sezione News ed in quella, più particolare, Sentenze), veniva aggiornato dai membri dello staff dello studio, abbiamo deciso di optare per una struttura snella basata sulla c.d. JAMSTACK (Javascript, APIs e Markup), facendo leva su un framework di nuova generazione denominato Gatsby.js.

La frequenza degli aggiornamenti, in media non superiore ai due o tre interventi mensili nel corso dell'ultimo biennio, ci ha spinto a rinunciare totalmente a Wordpress e, persino, ad un database dove collezionare tutti gli assets e gli articoli del sito.

Utilizzato Gatsby.js, basato essenzialmente sulla libreria React, molto in auge al momento, abbiamo potuto creare una versione statica del sito, così "leggera" in produzione da rendere il caricamento iniziale dello stesso e la navigazione tra le pagine velocissima, soprattutto se paragonata alla versione precedente o a molti altri siti di studi professionali di avvocati o commercialisti che si trovano al momento nella rete.

Gli articoli ed i contenuti delle varie pagine del sito sono gestiti attraverso Netlify CMS che li colleziona e salva in formato .md (Markdown) su Github (sito di storage di codice). Attraverso la Continuos Integration ogni qualvolta il sito viene aggiornato dall'utente, il CMS, facendo leva su di un hook presente dove è allocato, rigenera nuovamente il codice dell'intero sito in meno di 2 minuti e ne crea una versione statica che, per natura, conserva una velocità intrinseca di navigazione sempre elevata.

### I VANTAGGI

**Costi dell'infrastruttura decisamente contenuti**. Spesso con i soli euro necessari al rinnovo di un nome a dominio si riesce a dar vita ad un sito del genere.

**Sicurezza estrema**. La mancanza di un database, necessario invece con Wordpress, Joomla o Drupal, si evita ogni tipo di attacco hacking cui invece sono sottoposti sempre i sistemi suddetti.

**Backup costanti per natura**. Il fatto che il codice che genera il sito sia allocato in un sistema come Github che fa leva della version control data da Git rende possibile allo sviluppatore avere costante accesso ad ogni versione del sito dal momento della sua creazione all'ultimo deploy online. Nessun mal di testa per il proprietario del sito.

**Velocità**. Gatsby, come qualsiasi altro framework basato su React (vedi Next.js), rende la navigazione tra le pagine ed il caricamento del sito estremamenti piacevoli per ogni tipo di utente, anche quelli con connessioni non velocissime.

**Assenza di aggiornamenti necessari**. Il codice dal quale il sito viene generato, come logico, nel corso del tempo avrà bisogno di attenzioni e di aggiornamenti. Nulla resta immutato in natura, figurarsi nel mondo del web dove il cambiamento è all'ordine del giorno. Il fatto, però, che il sito da esso generato sia a tutti gli effetti statico lo rende sempre funzionante anche se negli anni nessuno si prenderà la briga di aggiornare il codice madre. Tradotto: il sito sarà sempre funzionante e visibile per lo meno nella sua ultima versione priva di errori. Gli utenti, quindi, non avranno mai la spiacevole visione di un errore 500 per mancata connessione con il database o altre poco simpatiche diavolerie a cui gli utenti dei siti basati su CMS come Wordpress hanno dovuto fare l'abitudine.

