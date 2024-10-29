"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ChiSiamo() {
  const animatedElementsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !animatedElementsRef.current.includes(el)) {
      animatedElementsRef.current.push(el);
    }
  };
  useEffect(() => {
    // Assicurati che gsap e ScrollTrigger siano disponibili
    if (typeof window !== 'undefined' && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      const barsRight = gsap.utils.toArray(".barRight");
      const barsLeft = gsap.utils.toArray(".barLeft");

      barsRight.forEach((barRight) => {
        gsap.to(barRight, {
          width: "10%", // Larghezza finale della barra
          scrollTrigger: {
            trigger: barRight.closest(".boxTriggerRight"),
            start: "top 50%",
            end: "bottom 60%",
            scrub: 2,
          },
          duration: 2,
          ease: "power2.out",
        });
      });

      barsLeft.forEach((barLeft) => {
        gsap.to(barLeft, {
          width: "40%", // Larghezza finale della barra
          scrollTrigger: {
            trigger: barLeft.closest(".boxTriggerLeft"),
            start: "top 50%",
            end: "bottom 60%",
            scrub: 2,
          },
          duration: 2,
          ease: "power2.out",
        });
      });

      // Applicare animazione solo su desktop
      const isMobile = () => window.innerWidth < 768;
      if (!isMobile()) {
        const imagesL = gsap.utils.toArray(".imgL");
        const imagesR = gsap.utils.toArray(".imgR");

        imagesL.forEach((image) => {
          gsap.fromTo(
            image,
            { x: "-100%", opacity: 0 }, // Partenza da sinistra e trasparente
            {
              x: "0%",
              opacity: 1,
              duration: 2.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: image,
                start: "top 90%", // Inizia quando l'immagine è visibile al 90%
                end: "bottom 55%",
                scrub: 3,
              },
            }
          );
        });

        imagesR.forEach((image) => {
          gsap.fromTo(
            image,
            { x: "100%", opacity: 0 }, // Partenza da destra e trasparente
            {
              x: "0%",
              opacity: 1,
              duration: 2.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: image,
                start: "top 90%", // Inizia quando l'immagine è visibile al 90%
                end: "bottom 55%",
                scrub: 3,
              },
            }
          );
        });
      }

      // Cleanup: disattiva ScrollTrigger quando il componente viene smontato
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
        <>

        {/* HERO */}
        <div className="h-[100vh] bg-yellowLight flex flex-col items-center justify-center">
        <h1 ref={addToRefs} className="text-yellowDark p-2 mt-[5%] flex flex-col uppercase fontPrimary text-2xl md:text-5xl text-center z-10">Il tonno <span>per </span>Passione</h1>
            <p ref={addToRefs} className="textFontLight uppercase p-2  text-center w-[90vw] md:w-[50vw] 2xl:w-[30vw]">Sicilia, terra di tonnare. Qui, nel 1933, inizia la nostra storia, qui maturiamo la nostra esperienza con la pesca e la lavorazione del tonno rosso. Oggi quell’esperienza è tutta in Auriga, tonno a pinne gialle di provenienza oceanica lavorato completamente in Sicilia.</p>
            <p ref={addToRefs} className="textFontLight p-2 text-center w-[90vw] md:w-[50vw] 2xl:w-[30vw] mt-[5%] md:mt-[1%]">La nostra produzione parte dal tonno intero e termina con inscatolamento e stagionatura, attraverso un processo produttivo svolto completamente a Trapani, terra vocata da sempre alla pesca e alla lavorazione del tonno.</p>
        </div>

        {/* MAIN */}
        <div className="w-full  flex flex-col items-center relative">
        <svg
          xmlns="https://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 w-full"
          style={{ transform: 'translateY(-70%)' }} 
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,128L120,149.3C240,171,480,213,720,208C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>

           
        </div>

        {/* PROCESSO PRODUTTIVO */}
        <div className="flex flex-col items-center gap-[50px] textFontLight">
            <h2 className="uppercase fontPrimary mt-[10%] text-yellowDark text-2xl 2xl:text-3xl">Processo Produttivo</h2>

            {/* Sezionamento */}
            <div className="flex flex-col md:flex-row w-full boxTriggerRight">

                {/* immagine */}
                <div className="w-full flex justify-center items-center md:w-[50vw] h-[30vh] md:h-[60vh]">
                    <Image alt="sezionamento tonno" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/sezionamento.webp`} width={30} height={30} className="w-[95vw] h-full object-cover imgL"/>
                </div>


                {/* testo */}
                <div className="md:h-[60vh] w-[95vw] md:w-[50vw] flex flex-col items-left p-4 md:pl-[10%] justify-center">
                    <h3 className="fontPrimary uppercase mt-[5%] text-xl title-with-bar">Sezionamento
                    <div className="barRight"></div>
                    </h3>
                    <p className=" mt-[5%] text-left w-[100%] md:w-[60%]">Il tonno intero viene privato di testa e coda; il tronco viene poi sezionato in quarti, che vengono disposti in cestelli, le cosiddette “cotte”. Il fattore umano, in questa fase, è fondamentale: attenzione e precisione fanno la differenza.</p>
                </div>
            </div>

            {/* Dissanguamento */}
            <div className="flex flex-col md:flex-row-reverse w-full mt-[5%] boxTriggerLeft">

                {/* immagine */}
                <div className="w-full flex justify-center items-center md:w-[50vw] h-[30vh] md:h-[60vh]">
                    <Image alt="dissanguamento tonno" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/dissanguamento.webp`} width={30} height={30} className="w-[95vw] h-full object-cover imgR"/>
                </div>


                {/* testo */}
                <div className="md:h-[60vh] w-[95vw] md:w-[50vw] flex flex-col items-end p-4 md:pr-[10%] justify-center">
                    <h3 className="fontPrimary uppercase text-xl mt-[5%] text-right title-with-bar">Dissanguamento
                    <div className="barLeft"></div>
                    </h3>
                    <p className=" text-right w-[100%] mt-[5%] md:w-[60%]">Durante questa fase i cestelli in acciaio che contengono i filoni di tonno vengono immersi in vasche di acqua, per permetterne lo scongelamento e il loro “risciacquo” dal sangue. L'acqua è mantenuta pulita con un sistema a ricircolo continuo. Questa operazione diminuisce la resa (il tonno perde liquidi), ma di ciò si avvantaggiano le caratteristiche organolettiche finali del prodotto, soprattutto in termini di colore e sapore.</p>
                </div>
            </div>

            {/* Cottura */}
            <div className="flex flex-col md:flex-row w-full boxTriggerRight">

                {/* immagine */}
                <div className="w-full flex justify-center items-center md:w-[50vw] h-[30vh] md:h-[60vh]">
                    <Image alt="cottura tonno" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/cottura.webp`} width={30} height={30} className="w-[95vw] h-full object-cover imgL"/>
                </div>


                {/* testo */}
                <div className="md:h-[60vh] w-[95vw] md:w-[50vw] flex flex-col items-left p-4 md:pl-[10%] justify-center">
                    <h3 className="fontPrimary uppercase mt-[5%] text-xl title-with-bar">Cottura
                    <div className="barRight"></div>
                    </h3>
                    <p className=" mt-[5%] text-left w-[100%] md:w-[60%]">I cestelli dove sono stati ordinatamente sistemati i filoni di pesce vengono avviati alle autoclavi di cottura a vapore; qui restano finché non risultano uniformemente cotti; ciò è assicurato da sonde termiche infisse nella fibra muscolare del pesce, che ne registrano la temperatura. Fondamentale per una cottura omogenea è un'accurata attività precedente: quella della selezione - effettuata manualmente - di pezzature di uguali dimensioni.</p>
                </div>
            </div>

            {/* Condizionamento */}
            <div className="flex flex-col md:flex-row-reverse w-full mt-[5%] boxTriggerLeft">

                {/* immagine */}
                <div className="w-full flex justify-center items-center md:w-[50vw] h-[30vh] md:h-[60vh]">
                    <Image alt="condizionamento tonno" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/condizionamento.webp`} width={30} height={30} className="w-[95vw] h-full object-cover imgR"/>
                </div>


                {/* testo */}
                <div className="md:h-[60vh] w-[95vw] md:w-[50vw] flex flex-col items-end p-4 md:pr-[10%] justify-center">
                    <h3 className="fontPrimary uppercase text-xl mt-[5%] text-right title-with-bar">Condizionamento
                    <div className="barLeft"></div>
                    </h3>
                    <p className=" text-right w-[100%] mt-[5%] md:w-[60%]">Dopo la cottura, il pesce viene docciato con acqua, così da dare inizio al suo raffreddamento. Il tonno è però ancora caldo per passare all'attività manuale di pulizia da lische, pelle e altre parti estranee. Lo facciamo quindi stazionare nell’area CONDIZIONAMENTO: qui i filoni sono mantenuti a riposo fino a raggiungere temperatura e umidità ideali per la successiva fase di pulizia.</p>
                </div>
            </div>

            {/* Monda */}
            <div className="flex flex-col md:flex-row w-full boxTriggerRight">

                {/* immagine */}
                <div className="w-full flex justify-center items-center md:w-[50vw] h-[30vh] md:h-[60vh]">
                    <Image alt="monda del tonno" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/monda.webp`} width={30} height={30} className="w-[95vw] h-full object-cover imgL"/>
                </div>


                {/* testo */}
                <div className="md:h-[60vh] w-[95vw] md:w-[50vw] flex flex-col items-left p-4 md:pl-[10%] justify-center">
                    <h3 className="fontPrimary uppercase mt-[5%] text-xl title-with-bar">Monda
                    <div className="barRight"></div>
                    </h3>
                    <p className=" mt-[5%] text-left w-[100%] md:w-[60%]">Siamo giunti alla fase più importante del nostro processo produttivo, interamente svolto a mano da abilissime donne che, con precisione ed esperienza, si occupano della MONDA. Il tonno viene privato di lische, pelle, viscere e tutto ciò che costituisce scarto, per poi essere inscatolato. E’ questo il cuore pulsante della nostra azienda!</p>
                </div>
            </div>

            {/* Inscatolamento */}
            <div className="flex flex-col md:flex-row-reverse w-full mt-[5%] boxTriggerLeft">

                {/* immagine */}
                <div className="w-full flex justify-center items-center md:w-[50vw] h-[30vh] md:h-[60vh]">
                    <Image alt="inscatolamento tonno" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/inscatolamento.webp`} width={30} height={30} className="w-[95vw] h-full object-cover imgR"/>
                </div>


                {/* testo */}
                <div className="md:h-[60vh] w-[95vw] md:w-[50vw] flex flex-col items-end p-4 md:pr-[10%] justify-center">
                    <h3 className="fontPrimary uppercase text-xl mt-[5%] text-right title-with-bar">Inscatolamento
                    <div className="barLeft"></div>
                    </h3>
                    <p className=" text-right w-[100%] mt-[5%] md:w-[60%]">Una fase solo apparentemente tutta automatica, dove invece il ruolo delle nostre collaboratrici è fondamentale. Sono loro a riempire le cosiddette tuna filler con i tranci provenienti dalla monda, tranci che vengono spinti nelle scatolette e tagliati a formare le “pastiglie” di tonno. Un’operatrice controlla visivamente l'uniformità delle pastiglie nelle lattine e, a seguire, queste vengono riempite di olio e salamoia. Infine l’aggraffatura, cioè la chiusura ermetica delle scatole.</p>
                </div>
            </div>

            {/* Sterilizzazione */}
            <div className="flex flex-col md:flex-row w-full boxTriggerRight">

                {/* immagine */}
                <div className="w-full flex justify-center items-center md:w-[50vw] h-[30vh] md:h-[60vh]">
                    <Image alt="sterilizzazione tonno" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/sterilizzazione.webp`} width={30} height={30} className="w-[95vw] h-full object-cover imgL"/>
                </div>


                {/* testo */}
                <div className="md:h-[60vh] w-[95vw] md:w-[50vw] flex flex-col items-left p-4 md:pl-[10%] justify-center">
                    <h3 className="fontPrimary uppercase mt-[5%] text-xl title-with-bar">Sterilizzazione
                    <div className="barRight"></div>
                    </h3>
                    <p className=" mt-[5%] text-left w-[100%] md:w-[60%]">Uno dei momenti più importanti del processo che porta alla “creazione” di una lattina di tonno di qualità: la STERILIZZAZIONE. In questa fase le scatolette confluiscono nelle autoclavi per essere sterilizzate, così che venga garantita la salubrità del prodotto senza che se ne compromettano le caratteristiche organolettiche e le proprietà nutritive. È questa la fase che garantisce lunga vita al nostro prodotto!</p>
                </div>
            </div>

            {/* Confezionamento */}
            <div className="flex flex-col md:flex-row-reverse w-full mt-[5%] boxTriggerLeft">

                {/* immagine */}
                <div className="w-full flex justify-center items-center md:w-[50vw] h-[30vh] md:h-[60vh]">
                    <Image alt="confezionamento tonno" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/confezionamento.webp`} width={30} height={30} className="w-[95vw] h-full object-cover imgR"/>
                </div>


                {/* testo */}
                <div className="md:h-[60vh] w-[95vw] md:w-[50vw] flex flex-col items-end p-4 md:pr-[10%] justify-center">
                    <h3 className="fontPrimary uppercase text-xl mt-[5%] text-right title-with-bar">Confezionamento
                    <div className="barLeft"></div>
                    </h3>
                    <p className=" text-right w-[100%] mt-[5%] md:w-[60%]">Quando la scatoletta di tonno è pronta, il lavoro non è ancora finito. Perché il tonno possa raggiungere il gusto ottimale, bisogna lasciar “riposare” la lattina dai 30 ai 60 giorni almeno, a seconda del formato. In questo tempo olio e salamoia penetrano le fibre muscolari del tonno e lo insaporiscono. Questa fase è nota come STAGIONATURA. Infine si ha il CONFEZIONAMENTO: le scatolette vengono “composte” in confezioni da 2, 3, 6 lattine, per rispondere alle diverse esigenze dei consumatori.</p>
                </div>
            </div>
        </div>
        </>
    )
}