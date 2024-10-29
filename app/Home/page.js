"use client";
import Image from "next/image";
import Link from "next/link";
import CustomCursor from "../components/CustomCursor";
import { useEffect, useState, useRef } from "react";

import dynamic from "next/dynamic";
const SliderHome = dynamic(() => import('../components/SliderHome'), {ssr: false});
const NewShortcode = dynamic(() => import('../components/ShortcodeNew'), {ssr: false});

export default  function Home({ricette}) {
const [isMobile, setIsMobile] = useState(false);
const videoRef = useRef(null); 


useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleResize(); // Controlla la dimensione al caricamento del componente
  window.addEventListener('resize', handleResize); // Aggiungi listener per il resize

  return () => {
    window.removeEventListener('resize', handleResize); // Rimuovi il listener al momento della disattivazione
  };
}, []);

// Effettua il cambio della sorgente video quando isMobile cambia
useEffect(() => {
  if (videoRef.current) {
    const videoSrc = isMobile 
      ? "/img/auriga-mobile.webm" 
      : "/img/auriga-desktop.webm";

    // Cambia la sorgente del video
    videoRef.current.src = videoSrc;
    videoRef.current.load(); // Ricarica il video
  }
}, [isMobile]);


  return (
    <>
      {/* HERO*/}
      <div className="h-[110vh] w-full relative" >
        <video 
        autoPlay 
        loop
        ref={videoRef}
        muted // da lasciare anche se il video è senza traccia per farlo partire da solo
        controls={false}
        preload="metadata"
        playsInline // per garantire che il video venga riprodotto in linea, non a schermo intero su dispositivi iOS.
        className=" top-0 left-0 w-full h-[110vh]  object-cover "
        >
          <source src="/img/auriga-desktop.webm" type="video/webm" />
        </video>
        
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 220" width="100vw" 
          className="absolute z-[997] -bottom-1 left-0">
          <path fill="#f8efd3" 
              d="M0,131.08L120,139.63C240,148.17,480,158.71,720,158.71C960,158.71,1200,148.17,1320,139.63L1440,131.08L1440,220L1320,220C1200,220,960,220,720,220C480,220,240,220,120,220L0,220Z">
          </path>
          </svg>

            <div id="hero-section" className="h-[80vh]  z-[998] w-full absolute bottom-0">
                <CustomCursor scrollToId="main2" containerId="hero-section" />
            </div>
          
     
          
    
       
      </div>

      {/* TONNO PER PASSIONE */}
      <div  className="relative bg-yellowLight">
     
        {/* Contenuto */}
        <div id="main2" className="flex flex-col justify-start items-center relative z-10">
          <h1  className="uppercase fontPrimary text-3xl md:text-5xl lg:text-[5rem] 2xl:text-[7rem] text-yellowDark text-center font-bold">
            Tonno per passione
          </h1>
          <div>
            <Image
            alt="Tonno Auriga in scatola, diversi formati"
            width={100}
            height={100}
            src="/img/Tonno_Auriga_prodotti.webp"
            className="w-[100%] h-[100%] -mt-[18%] "
          />
          </div>
          
          <div className="flex flex-col lg:gap-[20px] items-center -mt-[2%]  lg:-mt-[5%]">
            <Link href="/ProdottiPage" className="uppercase text-center fontPrimary bg-yellowDark text-yellowLight rounded-full px-4 py-2 text-base text-wrap lg:text-2xl hover:text-red transition duration-500 ease-in-out">Scopri i nostri Prodotti</Link>
            <p  className="text-center textFontLight text-base md:text-2xl 2xl:text-[2rem]  w-[70vw] lg:w-[55vw] 2xl:w-[45vw] py-2 ">
            Scopri la grande famiglia Auriga: prodotti di prima scelta, pescati
            responsabilmente e confezionati con amore. Esplora la nostra gamma e
            trova il tuo preferito per ogni piatto.
          </p>
          </div>
          
        </div>
      </div>


      {/* GUSTA OGNI ISTANTE */}
      <div >
        
        {/* svg*/}
        <div className="bg-red flex  w-full h-[100px] relative  justify-center">
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 220" width="100vw" 
                className="absolute z-[999] -mt-1 md:mt-0">
                <path fill="#f8efd3" 
                    d="M0,88.92L120,80.37C240,71.83,480,61.29,720,61.29C960,61.29,1200,71.83,1320,80.37L1440,88.92L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z">
                </path>
          </svg>
        </div>

        <div className="flex flex-col -mt-[5%] md:mt-0  justify-center items-center  text-yellowLight bg-red">
          <h2 className="text-center uppercase -mt-5 lg:mt-4  z-[20]  p-0 md:p-4 fontPrimary text-3xl md:text-5xl lg:text-[5rem] 2xl:text-[7rem]">
            Gusta ogni istante
          </h2>

          <p  className="text-center textFontLight text-base md:text-2xl 2xl:text-[2rem] w-[80vw] md:w-[70vw] flex flex-col p-4  ">
            Esplora le deliziose ricette Auriga, perfette per ogni occasione.
            <span>
              Scopri nuovi modi per gustare il tonno con idee creative e facili
              da preparare.
            </span>
          </p>

          {/* mostra solo le ultime 6 ricette aggiunte */}
          <div className="m-0 mb-[2%] p-0 z-[200]">
            {/* <LastRicette ricette={ricette}  className="w-full" /> */}

            <div className="flex xl:max-w-[1000px] 2xl:max-w-[100%] m-0 p-0 flex-wrap gap-4 mt-[3%] justify-center items-center">
            {(ricette && Array.isArray(ricette) ? ricette.slice(0, 6) : []).map((ricetta) => (
                <Link 
                  href={`${process.env.NEXT_PUBLIC_BASE_URL}/ricette/${ricetta.slug || ''}`} 
                  key={ricetta.slug}
                >
                  <div id="cardOverlay" className="w-[300px] max-w-[500px] 2xl:w-[25vw]">
                    {/* foto */}
                    <div className="h-[200px] 2xl:h-[30vh] rounded-t-2xl">
                      <Image
                        src={ricetta.fotoCopertina}
                        width={30}
                        height={30}
                        alt="foto ricetta"
                        className="h-[100%] w-[100%] object-cover object-center rounded-t-2xl "
                      />
                    </div>

                    {/* curva */}
                    <div className="w-[100%] border-none flex items-end relative">
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        className="absolute -bottom-2"
                      >
                        <path
                          fill="#f8efd3"
                          fillOpacity="1"
                          d="M0,240L120,220C240,200,480,160,720,160C960,160,1200,200,1320,220L1440,240L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                        ></path>
                      </svg>
                    </div>

                    {/* dettagli */}
                    <div className="bg-yellowLight rounded-b-2xl border-none h-[100px] flex flex-col p-2 sticky z-[100]">
                      <div className="w-[50%] mb-[3px]">
                        <p className="bg-red fontPrimary uppercase text-sm text-center rounded-full p-[4px] text-yellowLight">
                          {ricetta.portata}
                        </p>
                      </div>
                      <h3 title={ricetta.nome_ricetta} className="text-red textTroncate fontPrimary ml-1 uppercase">{ricetta.nome_ricetta}</h3>
                      <p className="text-red ml-1 capitalize text textTroncate" title={ricetta.sottotitolo}>{ricetta.sottotitolo}</p>
                    </div>

                    {/* tempo di cottura o preparazione */}
                    <div className="bg-yellowLight fontPrimary text-red text-sm px-2 py-1 flex justify-center items-center w-[30%] rounded-full absolute top-4 right-4">
                      <p>{ricetta.tempo_di_preparazione}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>    

            <div className=" mt-[5%] flex items-center justify-center">
              <Link  href="/Ricette" className="uppercase fontPrimary bg-yellowDark text-yellowLight rounded-full px-4  py-2 text-base lg:text-2xl hover:text-red transition duration-500 ease-in-out">Esplora le nostre ricette</Link>
            </div>
            
          </div>
          
        </div>
      </div>
      
      {/* SECONDO VIDEO */}

      {/* BOX SVG */}
      <div className="w-full relative  h-[100vh]  md:h-[120vh]">
        {/* svg  */}
        <div className=" md:-mt-[5%] z-[100] sticky">
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 220" width="100vw" 
          className="absolute z-[999] -top-1 left-0">
          <path fill="#DD332D" 
          d="M0,0L120,0C240,0,480,0,720,0C960,0,1200,0,1320,0L1440,0L1440,88.92L1320,97.47C1200,106.01,960,116.55,720,116.55C480,116.55,240,106.01,120,97.47L0,88.92Z">
          </path>
          </svg>

        </div>
        
        <video
        autoPlay 
        loop
        muted
        controls={false}
        loading="lazy"
        playsInline // per garantire che il video venga riprodotto in linea, non a schermo intero su dispositivi iOS.
        className="absolute top-0 left-0 w-full h-full object-cover"
        >
        <source src='/img/home2.mp4' type="video/mp4" />
        </video> 
            <svg
              xmlns="https://www.w3.org/2000/svg"
              viewBox="0 0 1440 190"
              className="absolute -bottom-2 lg:-bottom-4"
            >
              <path
                fill="#DD332D"
                fillOpacity="1"
                d="M0,190L120,190C240,190,480,190,720,190C960,190,1200,190,1320,190L1440,190L1440,101.08L1320,92.53C1200,83.99,960,73.45,720,73.45C480,73.45,240,83.99,120,92.53L0,101.08Z"
              ></path>
            </svg>
      </div>

      {/* SEZIONE SAPEVI CHE */}
      <div className="relative">
      </div>
      <div className="flex flex-col sticky justify-start items-center  bg-red z-[50] p-[10%] md:p-0  md:pb-[5%] ">
        <h3 className="text-yellowDark bg-red rounded-lg absolute -mt-4 lg:-mt-10 
        2xl:-mt-16 px-[10px] z-30 fontPrimary uppercase text-3xl md:text-5xl lg:text-[5rem] 2xl:text-[7rem]">
          Sapevi che
        </h3>
       
        {/* Slider */}
        <div className="z-10">
          <SliderHome/>
        </div>
      </div>

      {/* SEZIONE SEGUICI */}
      <div className="bg-yellowLight pt-[10%] md:pt-[10%]  flex flex-col items-center justify-center relative">
        <h4  className="fontPrimary uppercase text-yellowDark text-3xl md:text-5xl lg:text-[5rem] 2xl:text-[7rem] mb-[2%]">
          Seguici
        </h4>

        {/* GRIGLIA FOTO */}
        <div className="flex items-center justify-center w-full">
            <NewShortcode />
        </div>
      </div>
    </>
  );
}