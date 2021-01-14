---
templateKey: project
title: Mulph Edizioni Musicali
subTitle: "Una nuova realtà editoriale ricca di musica e libri"
date: "2020-01-12T10:00:00.000Z"
description: "Restyling di un sito ecommerce sviluppato con Wordpress e Woocommerce con tema personalizzato, riduzione dell'utilizzo di plugins e dello spazio occupato dai beni digitali in vendita."
slug: mulph-edizioni-musicali
projectUrl: "https://www.mulph.it/"
projectClient: "Mulph Edizioni Musicali Srl"
projectDate: "Dicembre 2020"
projectCategory: ["Ecommerce", "Wordpress", "Woocommerce"]
projectThumbnail: '../assets/mulph/mulph-thumb.jpg'
projectImage: "../assets/mulph/mulph-design.jpg"
---
### TROPPI PLUGINS E POCO SPAZIO

Quando la Mulph Edizioni Musicali Srl ci ha contattato i problemi che abbiamo dovuto affrontare sono stati tendenzialmente tre:
- i classici errori di connessione al database MySQL (error 500) dovuti ad un file .htaccess compromesso, soprattutto a causa di un plugin relativo alle traduzioni delle pagine del sito il cui aggiornamento era stato sospevo da oltre 2 anni dai suoi stessi sviluppatori;
- l'eccessiva occupazione di spazio da parte degli assets presenti nel sito (immagini e file .mp3) e da parte dei beni digitali in vendita nel negozio virtuale;
- l'estrema lentezza nel caricamento delle pagine, causata essenzialmente da immagini non ottimizzate per essere processate in poco tempo dal browser;
- problemi di caricamento della cartella degli uploads a livello di back-end, probabilmente causati dalla grandezza e dal numero eccessivo di files presenti.

### OTTIMIZZAZIONE DELLE IMMAGINI

Dopo aver deciso, d'accordo con il cliente, che Wordpress avrebbe dovuto continuare ad essere la struttura di riferimento sulla quale sviluppare il nuovo sito e prima ancora di iniziare a lavorare sul design del medesimo, abbiamo deciso di sistemare la situazione dei file media e, primi fra tutti, delle immagini.

Dalle analisi effettuate abbiamo rilevato che la loro grandezza era eccessiva ed le abbiamo quindi ottimizzate per essere caricate poi nel nuovo sito, facendo in modo che tutte rispettassero parametri tali da renderle velocemente fruibili con qualsiasi tipo di connessione.

Dopo averle processate abbiamo risparmiato quasi il 70% dello spazio occupato dal medesimo numero di immagini in precedenza, mantenendone contemporaneamente la qualità.

### USO DEL CLOUD

Il problema relativo alla elevata occupazione di spazio hosting (il sito nella versione precedente occupava circa 11gb) è stato risolto esportando dal back-end di Wordpress tutti i files multimediali, soprattutto quelli dei beni virtuali in vendita (files pdf o audio) che, per ragioni intrinseche alla tipologia stessa dei files, occupano, sebbene ottimizzati, molto spazio, e copiandoli in un servizio cloud ad essi dedicato (nel caso specifico AWS - Amazon S3).

I files adesso vivono in uno spazio a loro dedicato, sicuro e veloce, evitando di "pesare" eccessivamente sulla struttura del sito e su Wordpress stesso, che è tornato a funzionare regolarmente con una cartella Media leggera e funzionante.

In alternativa avremmo potuto sfruttare il CDN di Cloudinary, ma i costi, soprattutto a lungo termine, avrebbero potuto lievitare enormemente, cosa che per una realtà emergente come la Mulph non è auspicabile al momento.

### DESIGN PERSONALIZZATO

Dal punto di vista del design abbiamo optato, sempre d'accordo con il cliente, che ci ha lasciato ampi spazi di manovra, per un design classico.

Il focus è stato maggiormente dedicato allo sviluppo del tema da utilizzare con particolare attenzione al fatto che l'uso dei plugins andasse fatto soltanto ove realmente necessari. Il plugin Slider Revolution, in precedenza usato per lo slider nella home page, è stato sostituito con uno slider interamente realizzato da noi e sviluppato con poche righe di Javascript.

Il Customizer di Wordpress, intuitivo e di facile utilizzo da parte di ogni utente, è stato implementato in maniera tale che il proprietario del sito possa aggiornare la maggior parte delle sezioni in maniera autonoma e con pochi click. Senza l'uso di un Page Builder che avrebbe sicuramente compromesso il sito dal punto di vista della velocità di caricamento.

Al fine di garantire la responsività del sito su qualsiasi dispositivo o browser, anche su quelli più datati, abbiamo deciso di usare Bootstrap, anche se non abbiamo rinunciato, ove possibile a creare alcuni componenti con CSS Flexbox e Grid.

Sempre per velocizzare il sito abbiamo optato in fase di produzione di compattare al massimo (uglify) sia i files CSS che i files Javascript usati. La versione bundle dei medesimi è quindi minimale, tanto da poter essere scaricata da qualsiasi browser in pochi istanti.

### TRADUZIONE

Visto il grave problema riscontrato con il plugin delle traduzioni in precedenza e visto che la versione italiana e quella inglese sono abbastanza differenti dal punto di vista dai contenuti, abbiamo deciso di creare all'interno di un sottodominio denominato [en](https://en.mulph.it) una versione simile del sito. Questo ci ha permesso di poter tradurre il sito senza il bisogno di alcun tipo di plugin e di poter rendere più elastico dello sviluppo del sito in una lingua differente dall'italiano.

I due siti al momento viaggiano in maniera parallela, dando la possibilità, però, al cliente di decidere dove, come e quando caricare un determinato bene su uno piuttosto che su un altro. Di poter dare vita a campagne marketing dedicate al territorio italiano o all'estero.