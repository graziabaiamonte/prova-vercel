"use client";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef} from "react";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";

// Registriamo i plugin
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function NaturaleClient() {
   
    const imgRef = useRef(null);
    const animatedElementsRef = useRef([]);

    // Funzione per aggiungere refs all'array
    const addToRefs = (el) => {
    if (el && !animatedElementsRef.current.includes(el)) {
     animatedElementsRef.current.push(el);
    }
    };

    useEffect(() => {
        const element = imgRef.current;

        const setupAnimation = () => {
            // Rileva la larghezza dello schermo
            const screenWidth = window.innerWidth;
            const isMobile = screenWidth <= 768; 
            const isLargeScreen = screenWidth >= 1440;

            // Definisci i percorsi per le animazioni
            const largeScreenPath = [
                { x: '-20vw', y: '50vh' },
                { x: '-20vw', y: '70vh' },
                { x: '-20vw', y: '90vh' },
                { x: '-20vw', y: '120vh' },
                { x: '-20vw', y: '140vh' },
                { x: '-25vw', y: '160vh' },
                { x: '-25vw', y: '180vh' },
                { x: '-15vw', y: '200vh' },
                { x: '10vw', y: '240vh' },
            ];

            const desktopPath = [
                { x: '-20vw', y: '50vh' },
                { x: '-20vw', y: '70vh' },
                { x: '-20vw', y: '90vh' },
                { x: '-20vw', y: '120vh' },
                { x: '-20vw', y: '140vh' },
                { x: '-25vw', y: '160vh' },
                { x: '-25vw', y: '180vh' },
                { x: '-15vw', y: '200vh' },
                { x: '10vw', y: '230vh' },
                { x: '15vw', y: '260vh' },
            ];

            const mobilePath = [
                { x: '-20vw', y: '50vh' },
                { x: '-5vw', y: '70vh' },
                { x: '-3vw', y: '90vh' },
                { x: '0vw', y: '130vh' },
                
            ];

            // Cancella eventuali animazioni precedenti
            gsap.killTweensOf(element);

            // Se viewport è grande, usa largeScreenPath, se è mobile, usa mobilePath
            if (isLargeScreen) {
                const largeScreenAnimation = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#track",
                        start: "top top",
                        end: "bottom 80%",
                        scrub: 2.5,
                    }
                });

                largeScreenAnimation.fromTo(element, 
                    { x: 0, y: 0 }, 
                    {
                        ease: "none",
                        motionPath: {
                            path: largeScreenPath,
                            curviness: 1.5,
                        }
                    }
                );
            } else if (isMobile) {
                const animationMobile = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#trackMobile",
                        start: "top top",
                        end: "bottom 80%",
                        scrub: 1.5,
                    }
                });

                animationMobile.fromTo(element, 
                    { x: 0, y: 0 }, 
                    {
                        ease: "none",
                        motionPath: {
                            path: mobilePath,
                            curviness: 1.5,
                        }
                    }
                );
            } else {
                const desktopAnimation = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#track",
                        start: "top top",
                        end: "bottom 80%",
                        scrub: 2.5,
                    }
                });

                desktopAnimation.fromTo(element, 
                    { x: 0, y: 0 }, 
                    {
                        ease: "none",
                        motionPath: {
                            path: desktopPath,
                            curviness: 1.5,
                        }
                    }
                );
            }
        };

        // Esegui animazione all'avvio
        setupAnimation();

        // Rileva il ridimensionamento della finestra
        const handleResize = () => {
            setupAnimation();
        };

        window.addEventListener('resize', handleResize);

        // Pulizia al termine del componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [imgRef]);

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
   

    return (
        <div className="flex items-center flex-col justify-center" id="track">
        <div id="trackMobile">
        {/* HERO */}
        <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center  bg-yellowLight">
            
            {/* immagine */}
            <div className="h-[50vh] md:h-[70vh] w-[100%] flex justify-center items-center">
                 <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/prodotti/naturale.webp`} width={300} height={300}
                    id="element"
                    alt="Confezione Tonno al Naturale"
                    ref={imgRef}
                    className="w-[100vw] h-[30vh] md:h-auto md:w-[60%] flex  z-[20] object-cover"
                    />
            </div>
           
           {/* titolo */}
            <div className="md:h-[20vh] 2xl:h-[20vh] flex items-start 2xl:items-center">
                <h1 className="text-5xl md:text-[5rem] 2xl:text-8xl 2xl:-mt-[10%] flex gap-[3%] flex-col md:flex-row text-center text-yellowDark uppercase fontPrimary z-[21] ">Tonno al Naturale</h1>
            </div>
            
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

        {/* MAIN PRODOTTO */}
        <div className="flex h-[80vh] md:h-[60vh] flex-col-reverse md:flex-row items-start justify-center">

            {/* foto animata con gsap , deve passare sotto l'h1*/}
            <div  className="w-[40%] flex items-center justify-center"></div>

            {/* descrizione */}
            <div className="w-[100%] md:w-[70%] gap-[15px]  flex flex-col justify-center items-center">
                <p ref={addToRefs} className="textFontLight text-center w-[90%] md:w-[40%]  z-[20]">È la scelta ideale per chi cerca un pasto leggero ma nutriente, ricco di proteine ma povero di grassi. Al tonno della specie pinne gialle aggiungiamo sale marino di Trapani, acqua e aromi naturali. Il prodotto che si ottiene è adatto a chi segue una dieta equilibrata senza rinunciare al gusto.</p>
            </div>
        </div>
        </div>


        <div className="md:h-[100vh] w-[90vw] flex flex-col justify-center items-center">

        {/* DICHIARAZIONE NUTRIZIONALE */}
        <h2 ref={addToRefs} className="text-center  text-yellowDark uppercase -mb-[1%] z-[23] fontPrimary text-2xl xl:text-4xl">Dichiarazione Nutrizionale per: </h2>
        <div  className="bg-yellowLightOpac rounded-lg w-[95%] md:w-[90%] p-6 z-[22]">
            
            <div className="flex flex-col md:flex-row items-center justify-between mx-[5%]">

                {/* per 100g */}
                <div className=" w-[100%] md:w-[40%] mt-[10%] md:mt-[5%]">
                    <div className="border-b-2 border-yellowDark w-[30px]">
                        <h3 className="fontPrimary text-2xl text-nowrap">100g DI PRODOTTO</h3>
                    </div>

                    {/* griglia */}
                    <div className="mt-[5%] uppercase">

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Energia</h4>
                            <p className="text text-end md:text-left">400 kj/ 94 kcal</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Grassi</h4>
                            <p className="text"> &lt; 0,5 g</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] text">- di cui acidi grassi saturi</h4>
                            <p className="text">&lt; 0,5 g</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Carboidrati</h4>
                            <p className="text">0 g</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] text">- di cui zuccheri</h4>
                            <p className="text">0 g</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Fibre</h4>
                            <p className="text">0 g</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Proteine</h4>
                            <p className="text">23 g</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Sale</h4>
                            <p className="text">1,2 g</p>
                        </div>
                    </div>
                    
                </div>

                {/* sgoccilato */}
                <div className="w-[100%] md:w-[40%] mt-[5%] ">
                    <div className="border-b-2 border-yellowDark w-[30px]">
                        <h3 className="fontPrimary text-2xl  text-nowrap">100g <sapn className="text-sm md:text-base">(sgocciolato)</sapn></h3>
                    </div>

                    {/* griglia */}
                    <div className="mt-[5%] uppercase">

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Energia</h4>
                            <p className="text text-end md:text-left">225 kj kj/ 53 kcal</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Grassi</h4>
                            <p className="text"> &lt; 0,5 g</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] text">- di cui acidi grassi saturi</h4>
                            <p className="text"> &lt; 0,5 g</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Carboidrati</h4>
                            <p className="text">0 g</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] text">- di cui zuccheri</h4>
                            <p className="text">0 g</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Fibre</h4>
                            <p className="text">0 g</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Proteine</h4>
                            <p className="text">13 g</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Sale</h4>
                            <p className="text">0,67 g</p>
                        </div>
                    </div>
                    
                </div>

                

            </div>

        </div>

        {/* CONFEZIONI */}
        <div className="bg-yellowLight mt-[50px] h-[10vh] md:h-[30vh] flex justify-center items-center w-[95%] md:w-[90%] rounded-lg">

            <div className="w-[100%] rounded-lg p-2  flex items-center md:items-start 2xl:items-start justify-center mb-[3%] 2xl:mb-[5%] md:ml-[5%] 2xl:ml-[5%] flex-col bg-yellowLight ">
                <h3 className="fontPrimary uppercase text-2xl ">Confezioni</h3>
                <p>3 x 80 gr</p>
                <p>2 x 160 gr</p>
            </div>
         
        </div>


        </div>

        
        </div>
    )
}