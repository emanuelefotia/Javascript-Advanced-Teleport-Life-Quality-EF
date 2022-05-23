# Javascript-Advanced-Teleport-Life-Quality-EF
 Il mio progetto sulle API della Super Guida di Javascript - S2I


Questa applicazione fornisce informazioni relative alla qualità della vita nelle città. Utilizzando le API messe a disposizione da Teleport permette di ottenere una descrizione generale della città presa in questione, un voto per ogni parametro utile a fare un bilancio della qualità della vita ed un voto medio generale relativo alla città.

Ho scelto questo progetto tra i vari proposti, poichè amo molto viaggiare e realizzare un applicazione che possa essere utile ad un viaggiatore nella scelta della prossima meta, mi ha stimolato fin da subito.

1- Sezione di ricerca
Appena si apre la pagina, questo è ciò che viene mostrato all'utente, un interfaccia molto semplice, composta da un titolo, una breve frase sottostante che funge da mini descrizione e anche incoraggiamento per l'utente a provare il servizio.
Le sezioni utili sono l'input di ricerca al centro, dove inserire il nome della città e ai suoi lati rispettavamente a destra e a sinistra, un bottone 'Search' per far partire la  funzione principale ovvero quella di ricerca; Un bottone 'Clear' che permette di cancellare i risultati ottenuti, pulendo la pagina e ricaricandola.

2- Risultati della ricerca
Una volta cliccato il bottone di ricerca, ecco come vengono mostrati i risultati ottenuti, tre colonne in cui la prima è occupata dalla descrizione, la seconda da una 'pagella' di voti, la terza dal voto medio generale della città.

Il design della pagina è totalmente responsive e di conseguenza fruibile da tutti i dispositivi

3-Suddivisione dei fogli di codice
Il foglio index.html ho cercato di tenerlo il più pulito possiibile, anche in modo tale da 
poter sviluppare tutto in js. Il foglio contiente solo i vari link alle librerie (axios,jquery e 
bootstrap) e il src che rimanda al foglio di stile css.

Il css contiene poche righe di codice, la grande parte del lavoro la svolge bootstrap,
qui ho dato solo un po di margini, dimensioni e disposizioni dei vari elementi.

Il primo foglio di js l'ho chiamato dom.js  poichè l'ho utilizzato per creare tutti gli elementi statici che normalmente avrei implementato nel foglio html.

Il secondo foglio JavaScript, 'main.js' contiente tutta la parte viva che permette all'applicazione di girare, ovvero mandare la richiesta a teleport e mandare a schermo i risultati.

4-Scelte logiche di Javascript
DOM : per costruire gli elementi html, essendo la prima volta, li ho prima creati nel foglio html scegliendoli dalla libreria di bootstrap,  dopo averli sviluppati e avergli dato la disposizione e lo stile che avevo in mente, sono passato al foglio 'main.js' per iniziare tutti i tentativi fino a che non avesse funzionato tutto correttamente. Successivamente, quando ormai l'applicazione svolgeva tutte le funzioni richieste, ho cancellato gli elementi dal foglio html, lasciando solo un div vuoto da cui partire e mano mano li ho replicati ma implementandoli con javascript nel foglio 'dom.js'.
Ho trovato un po' di difficoltà nel creare elementi sfruttando i nomi delle classi di Bootstrap , ma devo dire che invece mi è venuto più semplice sfruttare i vari append() ed appendChild() poichè nella Super Guida erano stati trattati  a sufficienza. La logica per svillupparli ognuno di questi è stata dichiarare l'elemento e allo stesso tempo crearlo, assegnarli la classe giusta e poi appenderli al div corrispondente.

MAIN : per sviluppare il codice attivo dell'app ho iniziato dichiarando tutti gli elementi da intercettare prendendoli dal dom tramite l'id assegnato, quindi, ho aperto la funzione 'api' facendo partire la richiesta utilizzando il metodo GET di axios. 
Seguendo i nomi degli elementi da mandare a schermo prendendoli dal json di riferimento di Teleport ho dichiarato il summary, le categories e il teleport city score, il passaggio più complesso per me è stato quello delle categories cercando un metodo che per ogni figlio dell'elemento venisse creato un titolo, una sezione, il valore e la barra in cui rappresentare quest'ultimo, dopo un po' di ricerche e tentativi tutto ha iniziato passo passo a funzionare. Infine, i due bottoni : search e clear, in modo tale che il primo mandi la richiesta e restituisca ciò che ottiene e inoltre che cambiando città non mandi a schermo la nuova ricerca sotto ai risultati precedenti ma piuttosto creare una nuova pagina, il secondo bottone ha la funzione di cancellare il campo di input, la pagina e ricaricare il tutto.

5-Conclusioni personali
Questo progetto senza mezzi termini mi ha inizialmente mandato totalmente nel pallone, una volta letta la consegna ho avuto un vuoto totale, probabilmente dovuto alla novità rispetto ai progetti passati che ho trovato nettamente più semplici e mettendomi in discussione anche dovuto magari ad uno studio teorico magari un po' approssimativo. Dopo un po' di "panico" iniziale , ho iniziato a rispolverare un po' i moduli della guida teorica attinenti all'applicazione pratica di questo progetto, ma ammetto senza successo. Ho trovato molto utile invece, effettuare molte ricerche esterne trovando tutorial, guide, esempi pratici che mi hanno dato un'idea abbastanza consistente di come muovermi, ho sfruttato anche il gruppo degli studenti su discord, che in parte mi hanno dato supporto. Messi da parte i timori iniziali ho iniziato a buttare giù righe e righe di codice tentando, riuscendo, fallendo, ritentando e così via. Quando ho iniziato a vedere i primi risultati, ho ricevuto una spinta ad immergermi totalmente nel codice e questa motivazione mi ha accompagnato fino alla fine, ho sperimentato nuovi approcci di studio, di scrittura del codice e soprattutto una bella lezione per me stesso, spesso abituato a mollare di fronte alle prime difficoltà mettendo tutto in discussione cercando di scaricare la responsabilità su altri fattori. Sono contento di aver svolto questo progetto e di esserlo riuscito a concludere  in meno tempo rispetto a quello che avevo previsto.

Link all'applicazione : https://ef-life-quality.netlify.app/

Emanuele Fotia


