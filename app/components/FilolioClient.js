"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function FilolioClient() {
  
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
            const screenWidth = window.innerWidth;
            const isMobile = screenWidth <= 768;
            const isLargeScreen = screenWidth >= 1440;

            // Define paths for animations
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
                { x: '0vw', y: '90vh' },
                { x: '5vw', y: '120vh' },
                { x: '6vw', y: '140vh' },
                { x: '0vw', y: '155vh' },
            ];

            // Clear previous animations
            gsap.killTweensOf(element);

            // Set up animations based on screen size
            let timeline;
            if (isLargeScreen) {
                timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#track",
                        start: "top top",
                        end: "bottom 80%",
                        scrub: 2.5,
                    },
                });
                timeline.fromTo(element, { x: 0, y: 0 }, {
                    ease: "none",
                    motionPath: {
                        path: largeScreenPath,
                        curviness: 1.5,
                    },
                });
            } else if (isMobile) {
                timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#trackMobile",
                        start: "top top",
                        end: "bottom 80%",
                        scrub: 1.5,
                    },
                });
                timeline.fromTo(element, { x: 0, y: 0 }, {
                    ease: "none",
                    motionPath: {
                        path: mobilePath,
                        curviness: 1.5,
                    },
                });
            } else {
                timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#track",
                        start: "top top",
                        end: "bottom 80%",
                        scrub: 2.5,
                    },
                });
                timeline.fromTo(element, { x: 0, y: 0 }, {
                    ease: "none",
                    motionPath: {
                        path: desktopPath,
                        curviness: 1.5,
                    },
                });
            }
        };

        // Execute animation on mount
        setupAnimation();

        // Add resize listener
        const handleResize = () => {
            setupAnimation();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
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
        <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center md:justify-end bg-yellowLight">
            
            {/* immagine */}
            <div className="h-[50vh] md:h-[70vh] w-full flex justif-center items-center">
                 <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/prodotti/filolio.webp
                 `} width={300} height={300}
                    id="element"
                    ref={imgRef}
                    alt="foto del tonno filolio"
                    className="w-[100vw] md:w-full h-[60vh] md:h-auto  z-[20] object-cover"
                    />
            </div>
           
           {/* titolo */}
            <div className="md:h-[20vh] 2xl:h-[20vh] flex items-start 2xl:items-center">
                <h1 className="text-5xl md:text-[5rem] 2xl:text-8xl 2xl:-mt-[25%]  md:flex-row text-center text-yellowDark uppercase fontPrimary z-[21] ">Tonno Filolio</h1>
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
        <div className="flex h-[100vh] md:h-[60vh] flex-col-reverse md:flex-row items-start justify-center">

            {/* foto animata con gsap , deve passare sotto l'h1*/}
            <div  className="w-[40%]  flex items-center justify-center"></div>

            {/* descrizione */}
            <div className="w-[100%] md:w-[60%]  flex justify-center items-center">
                <p ref={addToRefs} className="textFontLight text-center w-[80%] md:w-[50%] z-[20]">È il fiore all'occhiello della linea Auriga: tonno a pinne gialle con un filo d'olio extra vergine di oliva 100% italiano. Le sue caratteristiche organolettiche lo rendono alimento che si può consumare tal quale, come antipasto o secondo piatto, senza la necessità di nessun “trattamento” ulteriore. L'utilizzo di una minore quantità di olio implica un minore apporto di grassi. Questa caratteristica fa di Filolio un prodotto pratico e pronto all'uso: non vi è infatti necessità di sgocciolare.</p>
            </div>
        </div>
        </div>



        <div className=" w-[90vw] flex flex-col justify-center items-center">

            {/* DICHIARAZIONE NUTRIZIONALE */}
            <h2 ref={addToRefs} className="text-center  text-yellowDark uppercase -mb-[1%] z-[23] fontPrimary text-2xl xl:text-4xl">Dichiarazione Nutrizionale per: </h2>
            <div className="bg-yellowLightOpac rounded-lg w-[95%] md:w-[90%] p-6 z-[22]">
                
                <div className="flex flex-col md:flex-row items-center justify-between mx-[5%]">

                    {/* per 100g */}
                    <div className=" w-[100%] md:w-[40%] mt-[10%] md:mt-[5%]">
                        <div className="border-b-2 border-yellowDark w-[30px]">
                            <h3 className="fontPrimary text-xl md:text-2xl text-nowrap">100g DI PRODOTTO</h3>
                        </div>

                        {/* griglia */}
                        <div className="mt-[5%] uppercase text-sm">

                            <div className=" flex py-1 justify-between md:justify-start">
                                <h4 className="w-[50%] fontPrimary">Energia</h4>
                                <p className="text text-end md:text-left text-sm md:text-base">760 kj/ 183 kcal</p>
                            </div>

                            <div className=" flex py-1 justify-between md:justify-start">
                                <h4 className="w-[50%] fontPrimary">Grassi</h4>
                                <p className="text text-sm md:text-base">14 g</p>
                            </div>

                            <div className=" flex py-1 justify-between md:justify-start">
                                <h4 className="w-[50%] text">- di cui acidi grassi saturi</h4>
                                <p className="text text-sm md:text-base">2,0 g</p>
                            </div>

                            <div className=" flex py-1 justify-between md:justify-start">
                                <h4 className="w-[50%] fontPrimary">Carboidrati</h4>
                                <p className="text text-sm md:text-base">0 g</p>
                            </div>

                            <div className=" flex py-1 justify-between md:justify-start">
                                <h4 className="w-[50%] text">- di cui zuccheri</h4>
                                <p className="text text-sm md:text-base">0 g</p>
                            </div>

                            <div className=" flex py-1 justify-between md:justify-start">
                                <h4 className="w-[50%] fontPrimary">Fibre</h4>
                                <p className="text">0 g</p>
                            </div>

                            <div className=" flex py-1 justify-between md:justify-start">
                                <h4 className="w-[50%] fontPrimary">Proteine</h4>
                                <p className="text text-sm md:text-base">14 g</p>
                            </div>

                            <div className=" flex py-1 justify-between md:justify-start">
                                <h4 className="w-[50%] fontPrimary">Sale</h4>
                                <p className="text text-sm md:text-base">0,52 g</p>
                            </div>
                        </div>
                        
                    </div>

                    {/* sgocciolato */}
                    <div className="w-[100%] md:w-[40%] mt-[5%] ">
                        <div className="border-b-2 border-yellowDark w-[30px]">
                            <h3 className="fontPrimary text-xl md:text-2xl  text-nowrap">100g (sgocciolato)</h3>
                        </div>

                        {/* griglia */}
                        <div className="mt-[5%] uppercase text-sm">

                            <div className=" flex py-1 justify-between md:justify-start">
                                <h4 className="w-[50%] fontPrimary">Energia</h4>
                                <p className="text text-end md:text-left text-sm md:text-base">760 kj/ 183 kcal</p>
                            </div>

                            <div className=" flex py-1 justify-between md:justify-start">
                                <h4 className="w-[50%] fontPrimary">Grassi</h4>
                                <p className="text text-sm md:text-base">14 g</p>
                            </div>

                            <div className=" flex py-1 justify-between md:justify-start">
                                <h4 className="w-[50%] text">- di cui acidi grassi saturi</h4>
                                <p className="text text-sm md:text-base">2,0 g</p>
                            </div>

                            <div className=" flex py-1 justify-between md:justify-start">
                                <h4 className="w-[50%] fontPrimary">Carboidrati</h4>
                                <p className="text text-sm md:text-base">0 g</p>
                            </div>

                            <div className=" flex py-1 justify-between md:justify-start">
                                <h4 className="w-[50%] text">- di cui zuccheri</h4>
                                <p className="text text-sm md:text-base">0 g</p>
                            </div>

                            <div className=" flex py-1 justify-between md:justify-start">
                                <h4 className="w-[50%] fontPrimary">Fibre</h4>
                                <p className="text text-sm md:text-base">0 g</p>
                            </div>

                            <div className=" flex py-1 justify-between md:justify-start">
                                <h4 className="w-[50%] fontPrimary">Proteine</h4>
                                <p className="text text-sm md:text-base">14 g</p>
                            </div>

                            <div className=" flex py-1 justify-between md:justify-start">
                                <h4 className="w-[50%] fontPrimary">Sale</h4>
                                <p className="text text-sm md:text-base">0,52 g</p>
                            </div>
                        </div>
                        
                    </div>

                    

                </div>

            </div>

            {/* CONFEZIONI */}
            <div className="bg-yellowLight mt-[50px] h-[10vh] md:h-[30vh] flex justify-center items-center w-[95%] md:w-[90%] rounded-lg ">

                <div className="w-[100%] rounded-lg p-2  flex items-center md:items-start 2xl:items-start justify-center mb-[3%] 2xl:mb-[5%] md:ml-[5%] 2xl:ml-[5%] flex-col bg-yellowLight ">
                    <h3 className="fontPrimary uppercase text-base md:text-2xl ">Confezioni</h3>
                    <p>3 x 65 gr</p>
                </div>
            
            </div>


        </div>

        
        </div>
    )
}