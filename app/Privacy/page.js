export const metadata = {
    title: 'Tonno Auriga - Tonno per Passione - Privacy',
    description: 'Scopri come Tonno Auriga protegge la tua privacy. Leggi la nostra informativa sulla raccolta, utilizzo e protezione dei tuoi dati personali, in conformità con le normative vigenti.',
    openGraph: {
      title: 'Tonno Auriga - Tonno per Passione - Privacy',
      description: 'Scopri come Tonno Auriga protegge la tua privacy. Leggi la nostra informativa sulla raccolta, utilizzo e protezione dei tuoi dati personali, in conformità con le normative vigenti.',
      url: 'https://www.tonnoauriga.it', 
      images: [
        {
          url: 'https://www.tonnoauriga.it/wp/wp-content/uploads/2024/10/Tonno_Auriga_prodotti.webp', 
          width: 1200,
          height: 630,
          alt: 'Tonno Auriga'
        }
      ],
      siteName: 'Tonno Auriga - Tonno per Passione',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Tonno Auriga - Tonno per Passione - Privacy',
      description: 'Scopri come Tonno Auriga protegge la tua privacy. Leggi la nostra informativa sulla raccolta, utilizzo e protezione dei tuoi dati personali, in conformità con le normative vigenti.',
      image: 'https://www.tonnoauriga.it/wp/wp-content/uploads/2024/10/Tonno_Auriga_prodotti.webp', 
    },
    robots: {
      index: true,
      follow: true
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'tonno, auriga, castiglione, peschereccio, erice, trapani, sicilia, tonno in scatola '
      },
      {
        name: 'author',
        content: 'Tonno Auriga'
      }
    ]
  };


export default function PrivacyPolicy (){
    return(
        <>

        {/* HERO */}
        <div className="bg-yellowLight h-[100vh] flex items-center justify-center">
            <h1 className="text-2xl xl:text-5xl fontPrimary text-yellowDark uppercase">Privacy & Cookie Policy</h1>
        </div>

         {/* BOX SVG */}
         <div className="relative w-full">
                <svg
                    xmlns="https://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className=" top-0 left-0 w-full"
                    style={{ transform: 'translateY(-70%)' }}
                >
                    <path
                        fill="#fff"
                        fillOpacity="1"
                        d="M0,128L120,149.3C240,171,480,213,720,208C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                    ></path>
                </svg>

        </div>

        {/* MAIN */}
        <div className="w-full flex  justify-center textFontLight ">

            <div className="w-[90vw] -mt-[10%] flex flex-col gap-[10px]">
            <p>La presente informativa privacy è redatta sulla base di molteplici ordinamenti legislativi, inclusi gli artt. 13 e 14 del Regolamento (UE) 2016/679. Ove non diversamente specificato, questa informativa privacy riguarda esclusivamente questo Sito Web.
            L’informativa si ispira anche alla Raccomandazione n. 2/2001 che le autorità europee per la protezione dei dati personali, riunite nel Gruppo istituito dall’art.29 della Direttiva Europea N° 95/46/CE, hanno adottato il 17 maggio 2001 ed a tutte le successive modifiche ed integrazioni, per individuare alcuni requisiti minimi per la raccolta di dati personali on-line, e, in particolare, le modalità , i tempi e la natura delle informazioni che i titolari del trattamento devono fornire agli utenti quando questi si collegano a pagine web, indipendentemente dagli scopi del collegamento.
            Questo Sito Web raccoglie alcuni Dati Personali dei propri Utenti.
            Gli Utenti possono essere soggetti a livelli di protezione diversi. Informazioni in merito ai criteri di protezione sono reperibili nella sezione sull’applicabilità.
            L’informativa non è valida per altri siti web eventualmente consultabili attraverso i nostri link e di cui la nostra Azienda non è in alcun modo responsabile.</p>

            <div>
                <h2 className="text uppercase">Titolare del Trattamento dei Dati</h2>
                <p>Il Titolare del trattamento – ovverosia la persona giuridica che determina le finalità e i mezzi di trattamento dei dati personali – è la Nino Castiglione SRL, nella persona del suo Rappresentante Legale pro-tempore, con sede legale in C.da San Cusumano snc – 91016 Erice (TP) e contattabile tramite email: info@tonnoauriga.it.</p>
            </div>

            <div>
                <h2 className="text uppercase">Luogo di trattamento dei dati</h2>
                <p>I Dati sono trattati presso le sedi legali ed operative del Titolare del Trattamento ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate. Per ulteriori informazioni, contattare il Titolare del Trattamento.
                I Dati Personali dell’Utente non saranno trasferiti in un paese al di fuori dell’Unione Europea.</p>
            </div>

            <div>
                <h2 className="text uppercase">Finalità del trattamento dei dati raccolti</h2>
                <p>I Dati sono raccolti per consentire al Titolare del Trattamento di fornire i propri Servizi ed adempiere ad obblighi contrattuali, così come per le seguenti finalità: Statistica, Contattare l’Utente e Gestione contatti per invio di messaggi.
                Per ottenere ulteriori informazioni dettagliate sulle finalità del trattamento e sui Dati Personali concretamente rilevanti per ciascuna finalità, l’Utente può fare riferimento alle relative sezioni di questo documento.</p>
            </div>

            <div>
                <h2 className="text uppercase">Modalità di trattamento</h2>
                <p>Il Titolare adotta le opportune misure di sicurezza volte ad impedire l’accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.
                Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate. Oltre al Titolare, in alcuni casi, potrebbero avere accesso ai Dati altri soggetti coinvolti nell’organizzazione di questo Sito Web (personale amministrativo, commerciale, marketing, legali, tecnici quali a titolo di esempio amministratori di sistema, sviluppatori, dba) ovvero soggetti esterni (come fornitori di servizi tecnici terzi, corrieri postali, hosting provider, società informatiche ed esperti in sicurezza informatica, agenzie di comunicazione e organi per la tutela della privacy) nominati anche, se necessario, Responsabili del Trattamento da parte del Titolare. L’elenco aggiornato dei Responsabili potrà sempre essere richiesto al Titolare del Trattamento.</p>
            </div>

            <div>
                <h2 className="text uppercase">Tipologie di Dati raccolti e/o trattati</h2>
                <p>Tutti i dati sono forniti volontariamente dall’utente.
                    Fra i Dati Personali raccolti da questo Sito Web, in modo autonomo o tramite terze parti, potrebbero esserci: nome; cognome; numero di telefono, cellulare, email; ID Utente; Cookie; Dati di utilizzo sito web.
                    Dettagli completi su ciascuna tipologia di dati raccolti sono forniti nelle sezioni dedicate di questa privacy policy o della cookie policy mediante specifici testi informativi visualizzati prima della raccolta dei dati stessi. I Dati Personali possono essere liberamente forniti dall’Utente.
                    L’invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicati su questo sito comporta la successiva acquisizione dell’indirizzo del mittente, necessario per rispondere alle richieste, nonché degli eventuali altri dati personali inseriti nella missiva.
                    Gli Utenti che necessitassero di ulteriori delucidazioni, possono contattare il Titolare del Trattamento agli indirizzi indicati nella presente informativa.
                    L’eventuale utilizzo di Cookie o di altri strumenti di tracciamento (per informazioni vedere le apposite sezioni) da parte di questo Sito Web o dei titolari dei servizi terzi utilizzati da questo Sito Web, ove non diversamente precisato, ha la finalità di fornire il Servizio richiesto dall’Utente, oltre alle ulteriori finalità descritte nel presente documento e nella Cookie Policy.
                    L’Utente si assume la responsabilità dei Dati Personali di terzi ottenuti, pubblicati o condivisi mediante questo Sito Web e garantisce di avere il diritto di comunicarli o diffonderli, liberando il Titolare da qualsiasi responsabilità verso terzi.</p>
            </div>

            <div>
                <h2 className="text uppercase">Base giuridica del trattamento</h2>
                <p>Il Titolare del Trattamento tratta Dati Personali relativi all’Utente in caso sussista una delle seguenti condizioni:</p>

                <ul className="list-disc ml-[5%]">
                    <li>l’Utente ha prestato il consenso per una o più finalità specifiche;</li>
                    <li>il trattamento è necessario all’esecuzione di un contratto con l’Utente e/o all’esecuzione di misure precontrattuali;</li>
                    <li>il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare;</li>
                    <li>il trattamento è necessario per l’esecuzione di un compito di interesse pubblico o per l’esercizio di pubblici poteri di cui è investito il Titolare del Trattamento;</li>
                    <li>il trattamento è necessario per il perseguimento del legittimo interesse del Titolare o di terzi.</li>
                </ul>

                <p className="mt-[5px]">È comunque sempre possibile richiedere al Titolare del Trattamento di chiarire la concreta base giuridica di ciascun trattamento ed in particolare di specificare se il trattamento sia basato sulla legge, previsto da un contratto o necessario per concludere un contratto.</p>
            </div>

            <div>
                <h2 className="text uppercase">Facoltatività del conferimento dei dati</h2>
                <p>A parte quanto specificato per i dati di navigazione, l’utente è libero di fornire i dati personali riportati nei moduli di richiesta o comunque indicati in contatti per sollecitare l’invio di materiale informativo o di altre comunicazioni. Il loro mancato conferimento può comportare l’impossibilità di ottenere quanto richiesto.</p>
            </div>

            <div>
                <h2 className="text uppercase">Periodo di conservazione</h2>
                <p>I Dati sono trattati e conservati per il tempo richiesto dalle finalità per le quali sono stati raccolti. Pertanto:</p>

                <ul className="list-disc ml-[5%]">
                    <li>I Dati Personali raccolti per scopi collegati all’esecuzione di un contratto tra il Titolare del Trattamento e l’Utente saranno trattenuti sino a quando sia completata l’esecuzione di tale contratto.</li>
                    <li>I Dati Personali raccolti per finalità riconducibili all’interesse legittimo del Titolare del Trattamento saranno trattenuti sino al soddisfacimento di tale interesse. L’Utente può ottenere ulteriori informazioni in merito all’interesse legittimo perseguito dal Titolare del Trattamento nelle relative sezioni di questo documento o contattando il Titolare del Trattamento stesso.</li>
                </ul>

                <p className="mt-[5px]">Quando il trattamento è basato sul consenso dell’Utente, il Titolare del Trattamento può conservare i Dati Personali sino a quando detto consenso non venga revocato, e non potrà mai comunque eccedere i dieci anni (dal loro ultimo utilizzo). Inoltre, il Titolare del Trattamento potrebbe essere obbligato a conservare i Dati Personali per un periodo più lungo in ottemperanza ad un obbligo di legge, per ordine di un’autorità o nel caso di contenzioso giudiziale, per tutta la durata dello stesso, fino all’esaurimento dei termini di esperibilità delle azioni di impugnazione.
                Al termine del periodo di conservazione i Dati Personali saranno cancellati. Pertanto, allo spirare di tale termine il diritto di accesso, cancellazione, rettificazione ed il diritto alla portabilità dei Dati non potranno più essere esercitati.
                Al termine del periodo di conservazione i Dati Personali saranno cancellati. Pertanto, allo spirare di tale termine il diritto di accesso, cancellazione, rettificazione ed il diritto alla portabilità dei Dati non potranno più essere esercitati.</p>
            </div>

            <div>
                <h2 className="text uppercase">DETTAGLI SUL TRATTAMENTO DEI DATI PERSONALI</h2>
                <p>I Dati Personali sono raccolti per le seguenti finalità ed utilizzando i seguenti servizi:</p>
                <p className="text">Contattare l’Utente: Modulo di contatto (questo Sito Web)</p>
                <p>L’Utente, compilando con i propri Dati il modulo di contatto, acconsente al loro utilizzo per rispondere alle richieste di informazioni, di prenotazioni o di qualunque altra natura indicata dall’intestazione del modulo. Fra i Dati Personali raccolti con la compilazione del Modulo di contatto potrebbero esserci: nome; cognome; numero di telefono, cellulare; email; ID Utente.</p>
                <p className="text">Contattare l’Utente: Mailing list o newsletter (questo Sito Web)</p>
                <p>L’indirizzo email dell’Utente può essere aggiunto alla mailing list o newsletter come risultato della registrazione tramite modulo web e acquisendone in modo esplicito il consenso. In alternativa può essere aggiunto mediante sottoscrizione esplicita di consenso fornita in tempi diversi.
                Con la registrazione alla mailing list o newsletter, l’indirizzo email dell’Utente verrà inserito in una lista di contatti a cui potrebbero essere trasmessi messaggi email contenenti informazioni di natura divulgativa e promozionale relative alle attività ed ai servizi offerti dalla nostra Azienda o dai suoi partner.
                Fra i Dati Personali raccolti con la compilazione del Modulo di contatto potrebbero esserci: nome; cognome; numero di telefono, cellulare; email; ID Utente.
                La visualizzazione della newsletter potrebbe consentire di raccogliere dati relativi alla visualizzazione e all’interazione dei messaggi da parte dell’Utente (ad esempio le informazioni sui click dei collegamenti inseriti nei messaggi).</p>
                <p className="text">Contattare l’Utente: Gestione contatti e invio di messaggi</p>
                <p>Questo tipo di servizi consente di gestire un database di contatti email, contatti telefonici o contatti di qualunque altro tipo, utilizzati per comunicare con l’Utente.
                Questi servizi potrebbero inoltre consentire di raccogliere dati relativi alla data e all’ora di visualizzazione dei messaggi da parte dell’Utente, così come all’interazione dell’Utente con essi, come le informazioni sui click sui collegamenti inseriti nei messaggi.</p>
            </div>

            <div>
                <h3 className="text">DIRITTI DEGLI UTENTI</h3>
                <p>Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare del Trattamento. In caso di superiore protezione, l’Utente può esercitare tutti i diritti riportati di seguito. In ogni altro caso, l’Utente può contattare il Titolare del Trattamento per scoprire quali diritti siano applicabili nel suo caso e come esercitarli.
                In particolare, l’Utente ha il diritto di:</p>
            </div>

            <ul className="list-disc ml-[5%]">
                <li>Revocare il consenso in ogni momento. L’Utente può revocare il consenso al trattamento dei propri Dati Personali precedentemente espresso.</li>
                <li>Opporsi al trattamento dei propri Dati. L’Utente può opporsi al trattamento dei propri Dati quando esso avviene su una base giuridica diversa dal consenso. Ulteriori dettagli sul diritto di opposizione sono indicati nella sezione sottostante.</li>
                <li>Accedere ai propri Dati. L’Utente ha diritto ad ottenere informazioni sui Dati trattati dal Titolare del Trattamento, su determinati aspetti del trattamento ed a ricevere una copia dei Dati trattati.</li>
                <li>Verificare e chiedere la rettificazione. L’Utente può verificare la correttezza dei propri Dati e richiederne l’aggiornamento o la correzione.</li>
                <li>Ottenere la limitazione del trattamento. Quando ricorrono determinate condizioni, l’Utente può richiedere la limitazione del trattamento dei propri Dati. In tal caso il Titolare non tratterà i Dati per alcun altro scopo se non la loro conservazione.</li>
                <li>Ottenere la cancellazione o rimozione dei propri Dati Personali. Quando ricorrono determinate condizioni, l’Utente può richiedere la cancellazione dei propri Dati da parte del Titolare.</li>
                <li>Ricevere i propri Dati o farli trasferire ad altro titolare. L’Utente ha diritto di ricevere i propri Dati in formato strutturato, di uso comune e leggibile da dispositivo automatico e, ove tecnicamente fattibile, di ottenerne il trasferimento senza ostacoli ad un altro titolare. Questa disposizione è applicabile quando i Dati sono trattati con strumenti automatizzati ed il trattamento è basato sul consenso dell’Utente, su un contratto di cui l’Utente è parte o su misure contrattuali ad esso connesse.</li>
                <li>Proporre reclamo. L’Utente può proporre un reclamo all’autorità di controllo della protezione dei dati personali competente o agire in sede giudiziale.</li>
            </ul>

            <div>
                <h2 className="text uppercase">Dettagli sul diritto di opposizione</h2>
                <p>Quando i Dati Personali sono trattati nell’interesse pubblico, nell’esercizio di pubblici poteri di cui è investito il Titolare del Trattamento oppure per perseguire un interesse legittimo del Titolare, gli Utenti hanno diritto ad opporsi al trattamento per motivi connessi alla loro situazione particolare.
                Si fa presente agli Utenti che, ove i loro Dati fossero trattati con finalità di marketing diretto, possono opporsi al trattamento senza fornire alcuna motivazione. Per scoprire se il Titolare tratti dati con finalità di marketing diretto gli Utenti possono fare riferimento alle rispettive sezioni di questo documento.</p>
            </div>

            <div>
                <h2 className="text uppercase">Come esercitare i diritti</h2>
                <p>Per esercitare i diritti dell’Utente, gli Utenti possono indirizzare una richiesta agli estremi di contatto del Titolare del trattamento. Le richieste sono depositate a titolo gratuito ed evase nel più breve tempo possibile, in ogni caso entro un mese; qualora la richiesta fosse particolarmente complessa, il tempo per la risposta potrà essere prorogato di ulteriori 60 giorni.
                Per l’esercizio di tali diritti, è anche sua facoltà proporre reclamo alla competente Autorità di controllo (art. 77 GDPR), facendo riferimento al Garante per la protezione dei dati personali (garante@gpdp.it – protocollo@pec.gpdp.it); nell’esercizio dei diritti, l’interessato può conferire, per iscritto, delega o procura a persone fisiche, enti associazione od organismi.</p>
            </div>

            <div>
                <h2 className="text uppercase">Applicabilità del livello superiore di protezione</h2>
                <p>Mentre la maggior parte delle disposizioni di questo documento vale nei confronti di tutti gli Utenti, alcune sono espressamente assoggettate all’applicabilità di un livello superiore di protezione al trattamento di Dati Personali. Tale livello superiore di protezione è sempre garantito quando il trattamento:</p>

                <ul className="list-disc ml-[5%]">
                    <li>è eseguito da un Titolare con sede nella UE; ovvero</li>
                    <li>riguarda Dati Personali di Utenti che si trovano nella UE ed è funzionale all’offerta di beni o servizi a titolo oneroso o gratuito a tali Utenti; ovvero</li>
                    <li>riguarda Dati Personali di Utenti che si trovano nella UE e permette al Titolare di monitorare il comportamento di tali Utenti nella misura in cui tale comportamento ha luogo all’interno dell’Unione.</li>
                </ul>
            </div>

            <div>
                <h2 className="text">ULTERIORI INFORMAZIONI SUL TRATTAMENTO</h2>
                <p className="text">Difesa in giudizio</p>
                <p>I Dati Personali dell’Utente possono essere utilizzati da parte del Titolare del Trattamento in giudizio o nelle fasi preparatorie alla sua eventuale instaurazione per la difesa da abusi nell’utilizzo di questo Sito Web o dei Servizi connessi da parte dell’Utente.
                L’Utente dichiara di essere consapevole che il Titolare potrebbe essere obbligato a rivelare i Dati per ordine delle autorità pubbliche.</p>
                <p className="text">Informative specifiche</p>
                <p>Su richiesta dell’Utente, in aggiunta alle informazioni contenute in questa privacy policy, questo Sito Web potrebbe fornire all’Utente delle informative aggiuntive e contestuali riguardanti Servizi specifici o la raccolta ed il trattamento di Dati Personali.</p>
                <p className="text">Informazioni non contenute in questa policy</p>
                <p>Ulteriori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste in qualsiasi momento al Titolare del Trattamento utilizzando gli estremi di contatto.</p>
                <p className="text">Modifiche a questa privacy policy</p>
                <p>Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento dandone informazione agli Utenti su questa pagina del Sito Web e, se possibile (qualora ciò sia tecnicamente e legalmente fattibile) inviando una notifica agli Utenti attraverso uno degli estremi di contatto di cui è in possesso il Titolare. Si prega dunque di consultare regolarmente questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.
                Qualora le modifiche interessino trattamenti la cui base giuridica è il consenso, il Titolare provvederà a raccogliere nuovamente il consenso dell’Utente, se necessario.</p>
            </div>

            <p>Ultimo Aggiornamento: 1 novembre 2024</p>

            <h2 className="text uppercase mt-[10%]">Cookie Policy</h2>

            <p>Per funzionare correttamente, questo sito potrebbe installare dei piccoli file di dati che si chiamano “cookie”.
            Il sito utilizza esclusivamente cookie tecnici per il corretto funzionamento e le impostazioni di base (es. lingua, login e altre impostazioni di visualizzazione).
            L’uso di cookies tecnici (che non vengono memorizzati in modo persistente) è strettamente limitato alla trasmissione di identificativi di sessione (costituiti da numeri casuali generati dal server) necessari per consentire l’esplorazione sicura ed efficiente del sito.
            Nessun dato personale degli utenti viene acquisito dal sito senza il vostro consenso.
            Non viene fatto uso di cookies per la trasmissione di informazioni di carattere personale (per profilazione).</p>

            <div>
                <h3 className="text">Cookie di terze parti</h3>
                <p>Il sito che sta navigando utilizza strumenti di analisi forniti da Google Analytics per tracciare dati statistici in forma aggregata, di tracciare ed esaminare l’utilizzo di questo Sito Web, compilare report e condividerli con gli altri servizi sviluppati da Google. Se si preferisce restringere, bloccare o cancellare i cookie di questo sito, è possibile farlo modificando la configurazione del proprio browser su computer e dispositivi mobile.
                Scegliendo di disabilitare i cookie non sarà però più possibile sfruttare tutte le funzionalità del sito.</p>
            </div>

            <div>
                <h3 className="text">Google Analytics (Google Inc.)</h3>
                <p>Google Analytics è un servizio di analisi web fornito da Google Inc. (‘Google’). Google utilizza i Dati Personali raccolti allo scopo di tracciare ed esaminare l’utilizzo di questo Sito Web, compilare report e condividerli con gli altri servizi sviluppati da Google. Google potrebbe utilizzare i Dati Personali per contestualizzare e personalizzare gli annunci del proprio network pubblicitario.
                Dati Personali raccolti: Cookie; Dati di utilizzo.
                Luogo del trattamento: Google Ireland Limited – Gordon House, Barrow Street, Dublino 4 Irlanda – Privacy Policy – Opt Out.</p>
            </div>

            <div>
                <h3 className="text">Disattivazione dei cookie</h3>
                <p> L’utente può disattivare i cookie, impostando opportunamente le proprietà di privacy del proprio browser.</p>
                <p>Microsoft Internet Explorer: <a href="https://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies">https://windows.microsoft.com/…</a></p>
                <p>Mozilla Firefox: <a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie?redirectlocale=en-US&amp;redirectslug=Enabling+and+disabling+cookies">https://support.mozilla.org/it/kb/…</a></p>
                <p>Google Chrome: <a href="https://support.google.com/accounts/answer/61416?hl=it">https://support.google.com/accounts/answer/61416?hl=it</a></p>
                <p>Safari: <a href="https://www.apple.com/legal/privacy/it/cookies/">https://www.apple.com/legal/privacy/it/cookies/</a></p>
                <p>Opera: <a href="https://help.opera.com/Windows/12.10/it/cookies.html">https://help.opera.com/Windows/12.10/it/cookies.html</a></p>
                <p>In qualsiasi momento l’utente potrà cancellare i cookie dal disco fisso del computer.</p>
            </div>

            <div>
                <h3 className="text">Modifiche a questa cookie policy</h3>
                <p>Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente cookie policy in qualunque momento dandone informazione agli Utenti su questa pagina del Sito Web e, se possibile (qualora ciò sia tecnicamente e legalmente fattibile) inviando una notifica agli Utenti attraverso uno degli estremi di contatto di cui è in possesso il Titolare. Si prega dunque di consultare regolarmente questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.
                Qualora le modifiche interessino trattamenti la cui base giuridica è il consenso, il Titolare provvederà a raccogliere nuovamente il consenso dell’Utente, se necessario.</p>
            </div>

            <div>
                <h3 className="text">Identità e dati di contatto del Titolare del Trattamento</h3>
                <p>Il Titolare del trattamento – ovverosia la persona giuridica che determina le finalità e i mezzi di trattamento dei dati personali – è la Nino Castiglione SRL, nella persona del suo Rappresentante Legale pro-tempore, con sede legale in C.da San Cusumano snc – 91016 Erice (TP) e contattabile tramite email: info@tonnoauriga.it</p>
            </div>

            <h2 className="text uppercase mt-[10%]">Social Media Policy</h2>

            <div>
                <h3 className="text">Identità e dati di contatto del Titolare del Trattamento</h3>
                <p>Il Titolare del trattamento – ovverosia la persona giuridica che determina le finalità e i mezzi di trattamento dei dati personali – è la Nino Castiglione srl, nella persona del suo Rappresentante Legale pro-tempore, con sede legale in C.da San Cusumano snc – 91016 Erice (TP) e contattabile tramite email: info@tonnoauriga.it</p>
            </div>

            <div>
                <h3 className="text">Interazione con social network e piattaforme esterne</h3>
                <p>Il presente sito web può utilizzare i c.d. “social plug-in”.
                    I “social plug-in” sono specifici strumenti che permettono di incorporare le funzionalità del Social Network a cui fanno riferimento direttamente all’interno del sito web. Tutti i “social plug-in” presenti nel sito sono contrassegnati dal rispettivo logo di proprietà della piattaforma di social network a cui appartengono.
                    Questo tipo di servizio permette di effettuare interazioni con i social network, o con altre piattaforme esterne, direttamente dalle pagine di questo Sito Web: quando si visita una pagina del nostro sito e si interagisce con il “plug-in” o si decide di lasciare un commento attraverso la piattaforma Social, le corrispondenti informazioni vengono trasmesse dal browser direttamente alla piattaforma social di riferimento e da questa gestite e memorizzate.
                    Sono attivi con i seguenti profili social network: Facebook, Instagram, YouTube.</p>
                    <p>Questo documento descrive agli utenti la social media policy, ovvero le modalità di utilizzo degli spazi social, le tipologie di contenuti pubblicati, le regole di comportamento.
                    Per informazioni sulle finalità, il tipo e le modalità di raccolta, elaborazione, utilizzo e conservazione dei dati personali da parte della piattaforma di Social Network, nonché per le modalità attraverso cui esercitare i propri diritti, si prega di consultare la specifica Privacy Policy del Social Network.
                    Le interazioni e le informazioni acquisite da questo Sito Web sono in ogni caso soggette alle impostazioni privacy dell’Utente relative ad ogni social network.
                    Questo tipo di servizio potrebbe comunque raccogliere dati sul traffico per le pagine dove il servizio è installato, anche quando gli Utenti non lo utilizzano, pertanto si raccomanda di disconnettersi dai rispettivi servizi per assicurarsi che i dati elaborati su questo Sito Web non vengano ricollegati al profilo dell’Utente.</p>
            </div>

            <div>
                <h3 className="text">Privacy</h3>
                <p>Il trattamento dei dati personali degli utenti risponderà alle policy in uso sulle piattaforme social utilizzate. I dati sensibili pubblicati (come commenti o post) nelle bacheche dei canali di Nino Castiglione srl verranno rimossi; i dati condivisi dagli utenti attraverso i messaggi di posta privata saranno trattati nel rispetto del Regolamento UE 2016/679, del D.lgs. n. 196/2003 e del D.lgs. n. 101/2018.</p>
            </div>

            <div>
                <h3 className="text">Finalità</h3>
                <p>Utilizziamo i social media per informare i clienti su attività e servizi istituzionali e interagire con loro, stimolarne la partecipazione, il dialogo e l’interesse su temi e attività inerenti la cura e la salute della persona e tutte le interazioni avvengono nell’ottica dello spirito di condivisione, della trasparenza e della chiarezza. L’uso dei social media avviene nel rispetto delle disposizioni legislative vigenti.</p>
            </div>

            <div>
                <h3 className="text">Contenuti</h3>
                <p>Nei canali social, Nino Castiglione srl:</p>
                <ul className="list-disc ml-[5%]">
                    <li>pubblica notizie, comunicati stampa e documenti ufficiali; aggiornamenti, promozioni e informazioni su eventi, attività e progetti.</li>
                    <li>
                    rilancia commenti e condivisioni di contenuti di soggetti terzi, verificandone l’attendibilità su temi di interesse pubblico o specifico per le attività; in questo caso, Nino Castiglione srl non si assume la responsabilità per eventuali informazioni errate o non aggiornate.
                    </li>
                </ul>

                <p className="mt-[5px]">Nei canali social vengono pubblicate immagini, fotografie, infografiche, video e altro materiale multimediale da considerarsi in licenza Creative Commons CC BYND 3.0; tali contenuti possono, dunque, essere liberamente riprodotti purché siano sempre accreditati al canale originale di riferimento; in ogni caso è vietato il loro uso a fini commerciali.
                La presenza di eventuali inserzioni pubblicitarie nelle pagine social non è sotto il controllo di Nino Castiglione srl, ma delle stesse piattaforme social media a cui lo Stesso è registrato con un profilo e pertanto non è responsabile della veridicità dei contenuti e delle opinioni pubblicate sui canali social da terzi.</p>
            </div>

            <div>
                <h3 className="text">Moderazione</h3>
                <p>Nei profili social di Nino Castiglione srl, il pubblico può pubblicare commenti, richieste, suggerimenti e critiche ed è responsabile dei messaggi che invia, dei contenuti che pubblica e delle opinioni che esprime.
                Sono soggetti a moderazione, in ogni caso a posteriori, i contenuti che possono risultare discriminatori o offensivi nei confronti di altri utenti, presenti o meno alla discussione, inclusi enti, associazioni, aziende o chi gestisce e modera gli stessi canali social. Non verranno pertanto tollerati commenti contenenti, in tutto o in parte, insulti, minacce, turpiloquio e offese che ledano la dignità personale, i diritti delle minoranze, i principi di uguaglianza e libertà o altri principi costituzionalmente riconosciuti.
                In particolare, verranno rimossi i contenuti:
                politici o di propaganda elettorale;
                spam, che promuovano attività commerciali e a fini di lucro;
                che presentino un linguaggio inappropriato, violento, minaccioso, volgare, ingannevole o in violazione dei diritti di terzi;
                discriminatori per genere, razza, etnia, lingua, credo religioso, opinioni politiche, orientamento sessuale, età, condizioni personali e sociali, disabilità fisica o mentale;
                illeciti o che incitino, promuovano e sostengano attività illecite;
                che divulghino dati e informazioni personali o che possano ledere la privacy e la reputazione di terzi;
                che contengono dati sensibili;
                di carattere osceno, pornografico o pedopornografico o che offendano la morale comune;
                che violino il copyright o che usino impropriamente un marchio registrato;
                che compromettano la sicurezza nazionale o dei sistemi pubblici.
                Nino Castiglione srl, si riserva il diritto di bloccare o bannare gli utenti i cui contenuti violino la presente social media policy o le disposizioni legislative vigenti e, in ogni caso, si riserva la facoltà di segnalare l’utente ai gestori/proprietari/responsabili della piattaforma e/o alle forze dell’ordine.
                Viene, invece, incoraggiata e tutelata la possibilità degli utenti di esprimere la propria libera opinione in modo costruttivo e civile, nel rispetto dell’opinione altrui e basandosi per quanto possibile su dati verificabili.</p>
            </div>

            <div>
                <h3 className="text">Pulsante Mi Piace e widget sociali di Facebook (Facebook, Inc.)</h3>
                <p>Il pulsante ‘Mi Piace’ e i widget sociali di Facebook sono servizi di interazione con il social network Facebook, forniti da Facebook, Inc.
                Dati Personali raccolti: Cookie; Dati di utilizzo.
                Luogo del trattamento: Facebook Ireland Ltd. – 4 Grand Canal Square, Grand Canal Harbour, Dublin 2 Ireland – Privacy Policy.</p>
            </div>

            <div>
                <h3 className="text">Risposta alle richieste ‘Do Not Track’</h3>
                <p>Questo Sito Web non supporta le richieste ‘Do Not Track’.
                Per scoprire se gli eventuali servizi di terze parti utilizzati le supportino, l’Utente è invitato a consultare le rispettive privacy policy.</p>
            </div>

            <div>
                <h3 className="text">Privacy piattaforme social</h3>
                <p>Il trattamento dei dati personali degli utenti risponderà alle policy in uso sulle piattaforme social utilizzate. I dati sensibili pubblicati (come commenti o post) nelle bacheche dei canali di Nino Castiglione srl verranno rimossi; i dati condivisi dagli utenti attraverso i messaggi di posta privata saranno trattati nel rispetto del Regolamento UE 2016/679, del D.lgs. n. 196/2003 e del D.lgs. n. 101/2018.</p>

                <p>Questo sito può utilizzare anche in modo non costante video, servizi e contenuti di social network e in base all’occorrenza contenuti incorporabili di altri siti o servizi.</p>
                <p className="mt-[5px]">Vi invitiamo a informarvi direttamente presso ogni terza parte.</p>
                <p>Google: <a href="https://www.google.com/intl/it_it/policies/privacy/">https://www.google.com/intl/it_it/policies/privacy/</a></p>
                <p>Youtube: <a href="https://policies.google.com/privacy?hl=it&amp;gl=it">https://www.google.it/intl/it/policies/privacy/</a></p>
                <p>Facebook: <a href="https://www.facebook.com/help/cookies/">https://www.facebook.com/help/cookies/</a></p>
                <p>Twitter: <a href="https://twitter.com/it/privacy">https://twitter.com/privacy</a></p>
                <p>Vimeo: <a href="https://vimeo.com/cookie_policy">https://vimeo.com/cookie_policy</a></p>
                <p>Modifiche a questa social media policy</p>
            </div>

            <div>
                <h3 className="text">Modifiche a questa social media policy</h3>
                <p>Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente social media policy in qualunque momento dandone informazione agli Utenti su questa pagina del Sito Web e, se possibile (qualora ciò sia tecnicamente e legalmente fattibile) inviando una notifica agli Utenti attraverso uno degli estremi di contatto di cui è in possesso il Titolare. Si prega dunque di consultare regolarmente questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.
                Qualora le modifiche interessino trattamenti la cui base giuridica è il consenso, il Titolare provvederà a raccogliere nuovamente il consenso dell’Utente, se necessario.</p>

                <p className="mt-[5px]">Ultimo Aggiornamento: 24 novembre 2021</p>

            </div>
            
            </div>


        </div>

        </>
    )
}