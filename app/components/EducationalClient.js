import Image from "next/image";
 import CardEducational from "./CardEducational"


export default function EducationalClient() {

    return (
        <div className="">
        {/* HERO */}
        <div className="flex  flex-col items-center justify-center ">
          <div className="h-[80vh] w-full">
            <Image alt="influenzer che mangia una fetta di pane con il tonno" src="/img/hero.webp" width={300} height={300} className="w-full h-full object-cover object-top"/>
          </div>
          <div className="flex  items-center justify-center h-[20vh]">
             <h1 className="fontPrimary text-yellowDark text-3xl md:text-5xl lg:text-[5rem] 2xl:text-[7rem]">#ORALOSAI</h1>
          </div>
         
        </div>

        {/* MAIN */}
        <div className="mt-[3%] flex flex-col gap-[10vh] md:gap-[30vh]">

          {/* 1. contenuto a sinistra */}
          <div className="flex flex-col md:flex-row gap-[25px] md:gap-0">
            <div className="w-[100%] md:w-[70%]  flex justify-center items-center">
              <CardEducational 
              titolo="Il tonno in scatola non contiene conservanti" 
              testo="Gli unici ingredienti contenuti in una scatoletta sono il tonno, l’olio e il sale. Il processo di sterilizzazione garantisce che il tonno si conservi a lungo senza la necessità di aggiungere nulla!
              "/>
            </div>

            <div className="w-[100%] md:w-[50%]">
              <Image width={300} height={300} alt="foto che chiarische il testo accanto"
              src="/img/nonConserv.webp"
              className="h-[40vh] md:h-[60vh] w-[100%] object-cover md:rounded-s-2xl"
              />
            </div>
          </div>

          {/* 2. contenuto a destra */}
          <div className="flex flex-col-reverse md:flex-row gap-[25px] md:gap-0">
          <div className="w-[100%] md:w-[50%]">
              <Image width={300} height={300} alt="foto che chiarische il testo accanto"
              src="/img/tonno-olio.webp"
              className="h-[40vh] md:h-[60vh]  w-[100%] object-cover md:rounded-e-2xl"
              />
            </div>
            <div className="w-[100%] md:w-[70%] flex justify-center items-center">
              <CardEducational 
              titolo="L’olio del tonno in scatola non va buttato" 
              testo="Il tonno “rilascia” i suoi nutrienti all’olio in cui viene conservato. Quell’olio quindi si arricchisce di omega 3 e vitamina D, che non possedeva al momento del suo utilizzo. Non va quindi buttato e va usato per altre preparazioni in cucina, evitando così sprechi e inquinamento."/>
            </div>
          </div>

          {/* 3. contenuto a sinistra */}
          <div className="flex flex-col md:flex-row gap-[25px] md:gap-0">
            <div className="w-[100%] md:w-[70%]  flex justify-center items-center">
              <CardEducational 
              titolo="Il tonno in scatola non contiene carboidrati" 
              testo="È un prodotto privo di carboidrati e zuccheri. È ricco, invece, di proteine ed è quindi un alimento perfetto per chi segue regimi alimentari dove l’apporto proteico è importante."/>
            </div>

            <div className="w-[100%] md:w-[50%]">
              <Image width={300} height={300} alt="foto che chiarische il testo accanto"
              src="/img/noCarboidrati.webp"
              className="h-[40vh] md:h-[60vh] w-[100%] object-cover md:rounded-s-2xl"
              />
            </div>
          </div>   

          {/* 4. contenuto a destra */}
          <div className="flex flex-col-reverse md:flex-row gap-[25px] md:gap-0">
          <div className="w-[100%] md:w-[50%]">
              <Image width={300} height={300} alt="foto che chiarische il testo accanto"
              src="/img/post.webp"
              className="h-[40vh] md:h-[60vh] w-[100%] object-cover md:rounded-e-2xl"
              />
            </div>
            <div className="w-[100%] md:w-[70%] flex justify-center items-center">
              <CardEducational 
              titolo="I tonni in scatola non sono tutti uguali" 
              testo="Controlla l’etichetta e fai attenzione alla specie inscatolata. Due sono le specie più diffuse in Italia: il tonno pinna gialla (Thunnus albacares), che si presenta con una carne rosea e compatta, e il tonnetto striato (Katsuwonus pelamis) o Skipjack, che ha una carne più tenera e chiara. Queste due specie hanno valori nutrizionali e caratteristiche organolettiche diversi. Scegli quindi in base alle tue preferenze, ma sii consapevole che non tutto il tonno è uguale! "/>
            </div>
          </div>  

          {/* 5. contenuto a sinistra */}
          <div className="flex flex-col md:flex-row gap-[25px] md:gap-0">
            <div className="w-[100%] md:w-[70%]  flex justify-center items-center">
              <CardEducational 
              titolo="Il tonno in scatola si conserva fuori dal frigo" 
              testo="Puoi tenere le tue scatolette in dispensa. Solo una volta aperto conservalo in frigorifero e consumalo entro 24 ore."/>
            </div>

            <div className="w-[100%] md:w-[50%]">
              <Image width={300} height={300} alt="foto che chiarische il testo accanto"
              src="/img/fuoriFrigo.webp"
              className="h-[40vh] md:h-[60vh]  w-[100%] object-cover md:rounded-s-2xl"
              />
            </div>
          </div>  

          {/* 6. contenuto a destra */}
          <div className="flex flex-col-reverse md:flex-row gap-[25px] md:gap-0">
          <div className="w-[100%] md:w-[50%]">
              <Image width={300} height={300} alt="foto che chiarische il testo accanto"
              src="/img/faMeglio.webp"
              className="h-[40vh] md:h-[60vh]  w-[100%] object-cover md:rounded-e-2xl"
              />
            </div>
            <div className="w-[100%] md:w-[70%] flex justify-center items-center">
              <CardEducational 
              titolo="Non è vero che il tonno al naturale “fa meglio” di quello all’olio" 
              testo="O meglio, dipende. Se devi fare attenzione alla quantità di sale che consumi, ricorda che il tonno al naturale contiene più sale di quello all’olio (c’è più salamoia!). Se invece il tuo obiettivo è ridurre i grassi, allora il tonno al naturale è il prodotto che fa per te."/>
            </div>
          </div>   

          {/* 7. contenuto a sinistra */}
          <div className="flex flex-col md:flex-row gap-[25px] md:gap-0">
            <div className="w-[100%] md:w-[70%]  flex justify-center items-center">
              <CardEducational 
              titolo="Il tonno in scatola si può consumare anche vicino alla data di scadenza" 
              testo="L’indicazione di conservazione è “preferibilmente” entro una certa data. Infatti, più il tonno stagiona in scatoletta, più olio e salamoia lo rendono morbido e saporito. Il processo di sterilizzazione garantisce lunghissima durata al prodotto."/>
            </div>

            <div className="w-[100%] md:w-[50%]">
              <Image width={300} height={300} alt="foto che chiarische il testo accanto"
              src="/img/scadenza.webp"
              className="h-[40vh] md:h-[60vh]  w-[100%] object-cover md:rounded-s-2xl"
              />
            </div>
          </div> 

          {/* 8. contenuto a destra */}
          <div className="flex flex-col-reverse md:flex-row gap-[25px] md:gap-0">
          <div className="w-[100%] md:w-[50%]">
              <Image width={300} height={300} alt="foto che chiarische il testo accanto"
              src="/img/frigo.webp"
              className="h-[40vh] md:h-[60vh]  w-[100%] object-cover md:rounded-e-2xl"
              />
            </div>
            <div className="w-[100%] md:w-[70%] flex justify-center items-center">
              <CardEducational 
              titolo="Una volta aperto, il tonno in scatola non si conserva in frigorifero quanto si vuole" 
              testo="Se non si consuma l’intero contenuto di una scatoletta, quello che rimane va coperto di olio e consumato entro 24 ore!"/>
            </div>
          </div> 

          {/* 9. contenuto a sinistra */}
          <div className="flex flex-col md:flex-row gap-[25px] md:gap-0">
            <div className="w-[100%] md:w-[70%]  flex justify-center items-center">
              <CardEducational 
              titolo="Le scatolette di tonno e i cartoncini sono riciclabili" 
              testo="Tutte le confezioni di tonno Auriga sono realizzate con materiale riciclato e riciclabile, sia il cartone che il metallo. Noi indichiamo come svolgere la raccolta differenziata per agevolare la seconda vita delle confezioni."/>
            </div>

            <div className="w-[100%] md:w-[50%]">
              <Image width={300} height={300} alt="foto che chiarische il testo accanto"
              src="/img/riciclaggio.webp"
              className="h-[40vh] md:h-[60vh]  w-[100%] object-cover md:rounded-s-2xl"
              />
            </div>
          </div>   

          {/* 10. contenuto a destra */}
          <div className="flex flex-col-reverse md:flex-row gap-[25px] md:gap-0">
          <div className="w-[100%] md:w-[50%]">
              <Image width={300} height={300} alt="foto che chiarische il testo accanto"
              src="/img/noScarti.webp"
              className="h-[40vh] md:h-[60vh] w-[100%] object-cover md:rounded-e-2xl"
              />
            </div>
            <div className="w-[100%] md:w-[70%] flex justify-center items-center">
              <CardEducational 
              titolo="Nelle scatolette non  mettono gli “scarti” del tonno" 
              testo="Il processo di produzione di una scatoletta prevede che si usino i filettoni cotti e puliti. Questi vengono tagliati e inscatolati. Gli scarti che si producono a seguito di questa fase vengono conferiti ad aziende che producono colla di pesce o pet food."/>
            </div>
          </div>  

          {/* 11. contenuto a sinistra */}
          <div className="flex flex-col md:flex-row gap-[25px] md:gap-0">
            <div className="w-[100%] md:w-[70%]  flex justify-center items-center">
              <CardEducational 
              titolo="Nelle scatolette di tonno non mettono anche altre specie di pesci" 
              testo="I pescherecci intercettano i banchi di tonni e osservatori neutrali certificano che il sistema di pesca sia selettivo e non coinvolga altre specie ittiche. Inoltre, chi produce tonno in scatola effettua periodicamente test del DNA per garantire addirittura la specie di tonno. "/>
            </div>

            <div className="w-[100%] md:w-[50%]">
              <Image width={300} height={300} alt="foto che chiarische il testo accanto"
              src="/img/post1.webp"
              className="h-[40vh] md:h-[60vh]  w-[100%] object-cover md:rounded-s-2xl"
              />
            </div>
          </div>

          {/* 12. contenuto a destra */}
          <div className="flex flex-col-reverse md:flex-row gap-[25px] md:gap-0">
          <div className="w-[100%] md:w-[50%]">
              <Image width={300} height={300} alt="foto che chiarische il testo accanto"
              src="/img/post2.webp"
              className="h-[40vh] md:h-[60vh] w-[100%] object-cover md:rounded-e-2xl"
              />
            </div>
            <div className="w-[100%] md:w-[70%] flex justify-center items-center">
              <CardEducational 
              titolo="Più una scatoletta è grande, migliore la qualità del tonno contenuto" 
              testo="A parità di materia prima, il tonno nelle lattine più grandi mantiene le fibre muscolari più integre. Inoltre, olio e salamoia le penetrano meglio offrendo un prodotto più saporito."/>
            </div>
          </div> 

          {/* 13. contenuto a sinistra */}
          <div className="flex flex-col md:flex-row gap-[25px] md:gap-0">
            <div className="w-[100%] md:w-[70%]  flex justify-center items-center">
              <CardEducational 
              titolo="La scatoletta non  è più sicura del vetro" 
              testo="Entrambi garantiscono la sicurezza del prodotto in termini di conservazione perché entrambi sono sottoposti al processo di sterilizzazione, che elimina il rischio di contaminazioni batteriche. La scatoletta presenta il vantaggio di reggere meglio gli urti.
              "/>
            </div>

            <div className="w-[100%] md:w-[50%]">
              <Image width={300} height={300} alt="foto che chiarische il testo accanto"
              src="/img/vetro.webp"
              className="h-[40vh] md:h-[60vh] w-[100%] object-cover md:rounded-s-2xl"
              />
            </div>
          </div>

        </div>
        </div>
    )
}