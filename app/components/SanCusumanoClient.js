"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SanCusumanoClient () {
    const animatedElementsRef = useRef([]);

    // Funzione per aggiungere refs all'array
    const addToRefs = (el) => {
    if (el && !animatedElementsRef.current.includes(el)) {
     animatedElementsRef.current.push(el);
    }
    };

    useEffect(() => {
        animatedElementsRef.current.forEach((element) => {
            gsap.fromTo(
                element,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element, // Use each element as its own trigger
                        start: 'top 80%', // Animation starts when the element is 90% visible
                        toggleActions: 'play none none none', // Animation plays only once
                    },
                }
            );
        });
    }, [animatedElementsRef]);

    useEffect(() => {
        // Animazione GSAP per il ridimensionamento del div #main
        gsap.to("#main", {
            width: "85vw", // ridimensiona a 80vw quando è completamente nella viewport
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#main",
                start: "top bottom", // inizia quando il top del div entra dal fondo della viewport
        end: "top top", 
                scrub: true,     // collega l'animazione allo scroll
                toggleActions: "play reverse play reverse", // l'animazione è reversibile
              
            },
        });


        // Animazione GSAP per il ridimensionamento del div #main
        gsap.to("#main2", {
            width: "85vw", // ridimensiona a 80vw quando è completamente nella viewport
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#main2",
                start: "top bottom", // inizia quando il top del div entra dal fondo della viewport
        end: "top top", 
                scrub: true,     // collega l'animazione allo scroll
                toggleActions: "play reverse play reverse", // l'animazione è reversibile
            },
        });
    }, []);

  

    return (
        <>
        {/* HERO */}
        <div className="h-[50vh] md:h-[85vh] bg-sanCusumanoHero bg-cover">      
        </div>

    
        {/* MAIN */}
        <div className="flex flex-col items-center w-full">
        <h1 ref={addToRefs} className="fontPrimary text-yellowDark text-2xl lg:text-5xl uppercase mt-[5%] md:mt-[2%] w-[60%] md:w-[80%] text-center">Selezione <span>San Cusumano</span></h1>
        
        {/* 1° CLAIM */}
        <div className="text w-[100vw] flex flex-col items-center justify-center text-center">
            
            <p ref={addToRefs} className="w-[90%] mt-[3%] lg:w-[70%] 2xl:w-[50vw]  text-base md:text-2xl uppercase textFontLight">La selezione San Cusumano arricchisce la linea Auriga di nuovi formati a lavorazione lenta e produzioni prestigiose legate alla tradizione. In alcuni casi, come per la ventresca e gli affettati di tonno, si tratta di prodotti realizzati interamente a mano. </p>
            <p ref={addToRefs} className="w-[90%] mt-[3%] lg:w-[70%] 2xl:w-[50vw] text-base md:text-xl  textFontLight ">La loro qualità è ottenuta grazie al lavoro di maestranze locali, cresciute in un territorio, Trapani, naturalmente vocato alla pesca e alla lavorazione del tonno in tutte le sue parti. A completare questi prodotti, il sale marino delle saline locali, noto per la ricchezza di magnesio, potassio e iodio.</p>
            <Image alt="Logo firma sezione San Cusumano" ref={addToRefs} width={300} height={300} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/imgSanCusumano/lineaFirmaGrigio.webp`}
            className="mt-[8%] md:mt-[4%] h-[10vh] md:h-[20vh] w-auto"
            />
            <Image alt="Foto famiglia Prodotti, sezione San Cusumano" width={300} height={300} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/imgSanCusumano/family4.webp`}
            className="w-full  md:w-[70vw] h-[30vh]  lg:h-[60vh] lg:w-[90%] 2xl:h-[70vh] object-cover -mt-[3%]"
            />
        </div>
        
        {/* VENTRESCA */}
        <h2 ref={addToRefs} className="fontPrimary uppercase text-2xl lg:text-[3rem] 2xl:text-[4rem] text-yellowDark mt-[5%] -mb-[1%]  z-[10] ">La Ventresca di tonno</h2>
        
        <div id="main" className="bg-yellowLight pb-4 mb-[10%] flex flex-col items-center rounded-lg md:h-[80vh] w-[100vw] ">
            <h2 className="fontPrimary  text-xl xl:text-2xl 2xl:text-3xl mt-[1%] lg:mt-[2%]">all'olio di oliva</h2>
            
            <div className="flex flex-col-reverse md:flex-row justify-center items-center md:justify-end  md:h-[70vh] w-[80vw] 2xl:w-[85vw]">
                

                {/* immagine in desktop*/}
                <div className="w-[100%] md:w-[70%] hidden md:flex items-center justify-center absolute left-0">
                    <Image alt="Foto prodotto 'Ventrsca'" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/imgSanCusumano/ventresca.webp`} width={300} height={300}
                    className=" h-[80%] md:w-[100%] 2xl:w-[100%]"
                    />
                </div>

                {/* immagine in mobile*/}
                <div className="w-[99%] md:hidden flex items-center justify-center ">
                    <Image alt="Foto prodotto 'Ventresca'" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/imgSanCusumano/ventresca.webp`} width={300} height={300}
                    className=" h-[30vh] w-[80vw] object-cover"
                    />
                </div>

                <div className="w-[50%] hidden md:block"></div>

                {/* testo */}
                <div className="w-[90%] md:w-[35%] 2xl:w-[40%] flex flex-col items-start justify-end md:pb-4">
                    <p className="text-center md:text-left w-[100%] md:w-[100%] 2xl:w-[90%] mt-[5%] md:mt-0 text textFontLight text-base 2xl:text-xl">La ventresca è una porzione molto pregiata del tonno ottenuta dalla sua parte più morbida, quella che avvolge la cavità addominale. La ventresca Auriga – selezione San Cusumano è un prodotto esclusivo ottenuto attraverso la tradizionale cottura in acqua, metodo che - rispetto alla cottura a vapore - garantisce alta qualità finale e caratteristiche organolettiche inalterate. </p>

                    <p className="text-center md:text-left w-[100%] md:w-[100%] 2xl:w-[90%] text mt-[5%] textFontLight">La ventresca Auriga è completamente lavorata a mano. Tutto il processo produttivo avviene a opera di maestranze locali che tagliano i filetti a misura e li stivano manualmente nella scatoletta, garantendo la compattezza del prodotto nella sua interezza.</p>
                    <p className="mt-[5%] text text-center flex flex-col w-[100%] md:w-[100%] 2xl:w-[90%]">SOLO LE PARTI PIÙ PREGIATE <span>COMPLETAMENTE LAVORATE A MANO</span></p>
                </div>
                
            </div>
            
        </div>

        {/* FILETTI */}
        <div  className="bg-white h-[90vh] md:h-[110vh] 2xl:h-[60vh] flex flex-col md:flex-col-reverse items-center justify-center">
           
            {/* immagine + titolo */}
            <h2 ref={addToRefs} className="fontPrimary block md:hidden  text-yellowDark uppercase text-center text-2xl lg:text-[3rem] 2xl:text-[4rem] ">Filetti di tonno</h2>
            
            {/* testo */}
            <div className="w-full mt-[5%] md:mt-0 flex items-center justify-center">
                <p ref={addToRefs} className="text-center text-base 2xl:text-xl textFontLight w-[90%] md:w-[50%]">Disponibili all’olio di oliva e al naturale, si caratterizzano per la loro compattezza che li rende pregiati. L'accurata selezione dei tranci e il loro confezionamento in vetro avvengono a mano, ad opera di artigiani del tonno che hanno cura di mantenere l'integrità del filetto. È il prodotto ideale per il consumatore che giudica il tonno anche dal suo aspetto e per chi preferisce il vetro alla latta per la sua conservazione.</p>
            </div>

            {/* immagini */}
            <div className="flex justify-center items-center">
                <Image alt="Foto prodotto Filetto San Cusumano" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/imgSanCusumano/filettoBianco.webp`} width={300} height={300}
                className="object-cover w-[50vw] h-[70%] md:h-[35vh] lg:h-[80vh] 2xl:h-[50vh] md:w-[30vw]"
                />
                <h2 ref={addToRefs} className="fontPrimary text-center hidden md:block text-yellowDark uppercase text-2xl lg:text-[3rem] 2xl:text-[4rem]">Filetti di tonno</h2>
                <Image alt="Foto prodotto Filetto San Cusumano" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/imgSanCusumano/filettiRosso.webp`} width={300} height={300}
                className="object-cover w-[50vw] h-[70%] md:h-[35vh] lg:h-[80vh] 2xl:h-[50vh] md:w-[30vw] lg:w-[30vw]"
                />
            </div>
        </div>


        {/* TONNO ALL'OLIO DI OLIVA */}
        <h2 ref={addToRefs} className="fontPrimary mt-[10%] text-yellowDark text-2xl lg:text-[3rem] 2xl:text-[4rem] -mb-[1%] md:-mb-[1%] z-10 uppercase">Tonno</h2>
        <div  id="main2" className="flex flex-col items-center justify-center bg-yellowLight rounded-lg w-[100vw]  ">
            <h2 className="fontPrimary text-xl 2xl:text-3xl mt-[0px] md:mt-[1%] lg:mt-[2%]">all'olio di oliva</h2> 
            <div  className="bg-yellowLight justify-center pb-4 flex flex-col items-center rounded-lg md:h-[80vh] ">
                

                <div className=" flex flex-col md:flex-row justify-center items-center">
                
                {/* testo */}
                <div className="w-[90%] md:w-[50%] flex items-center justify-center">
                    <p className="textFontLight text-base 2xl:text-xl text-center md:text-left w-[95%] md:w-[80%]">
                    Stivato nella caratteristica latta ovale da 125g o 310g, questo prodotto si distingue dal più diffuso tonno in scatola rotonda grazie a una lavorazione più lenta, eseguita con macchine dedicate, che garantiscono maggiore integrità del filetto. Ottenuto da tonno a pinne gialle cotto a vapore, ha nel tipico colore rosa, nella compattezza delle carni e nel sapore delicato i suoi tratti distintivi</p>
                </div>

                {/* immagine */}
                <div className="w-[90%] md:w-[95%] flex items-center justify-center">
                <Image alt="Foto prodotto selezione San Cusumano" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/imgSanCusumano/oliva.webp`} width={300} height={300}
                className="object-cover h-[30vh] md:h-[30vh] lg:h-[80vh] 2xl:h-[80vh] w-[100vw]"
                />
                </div>
            </div>
        </div>
        </div>

        {/* BOTTARGA */}
        <div  className="bg-white mt-[15%] md:mt-[10%] h-[90vh] md:h-[100vh] 2xl:h-[70vh] flex flex-col items-center justify-center">
           
           {/* immagine + titolo */}
           <h2 ref={addToRefs} className="fontPrimary flex flex-col w-50% text-yellowDark uppercase text-center text-2xl xl:text-4xl  ">Bottarga di tonno grattugiata</h2>

           {/* testo */}
           <div className="w-full flex items-center justify-center mt-[5%] md:mt-[2%]">
               <p ref={addToRefs} className="text-center textFontLight w-[90%] md:w-[50%]">È ricavata dalle uova di tonno a pinne gialle che vengono lavorate a mano da esperte maestranze locali. Trattata esclusivamente con sale marino di Trapani, è essiccata a ventilazione naturale. È un prodotto prestigioso, dal sapore singolare. È ottimo per condire gli spaghetti e per insaporire primi piatti a base di pesce, per arricchire delle tartine al burro, per completare delle bruschette al pomodoro.</p>
           </div>
           
           <div className="flex justify-center items-center">
               <Image alt="Foto prodotto selezione San Cusumano" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/imgSanCusumano/bottarga.webp`} width={300} height={300}
               className="object-cover h-[70%] md:h-[40vh] lg:h-[80vh] 2xl:h-[60vh] md:w-auto"
            />   
           </div>

       </div>

        </div>
        </>
    )
}