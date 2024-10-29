"use client";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function OlioOlivaClient() {
    const imgRef = useRef(null);
    const img2Ref = useRef(null);

    const animatedElementsRef = useRef([]);

    // Funzione per aggiungere refs all'array
    const addToRefs = (el) => {
    if (el && !animatedElementsRef.current.includes(el)) {
     animatedElementsRef.current.push(el);
    }
    };

       // Immagini corrispondenti a ogni paragrafo
       const images = {
        "70 gr": "/prodotti/70g.webp",
        "140 gr": "/prodotti/140gr.webp",
        "220 gr": "/prodotti/220g.webp",
        "3 x 70 gr": "/prodotti/3x70g.webp",
        "6 x 70 gr": "/prodotti/6x70g.webp",
        "105 gr" : "/prodotti/105g.webp",
        "3 x 105 gr": "/prodotti/3x105g.webp",
        "2 x 140 gr": "/prodotti/2x140g.webp",
        "2 x 220 gr": "/prodotti/2x220g.webp",
        "125 gr" : "/prodotti/125g.webp",
        "310 gr": "/prodotti/310gr.webp",
        "600 gr": "/prodotti/600g.webp",
        "1900 gr": "/prodotti/1,9kg.webp",
        "2400 gr": "/prodotti/2,5kg.webp",
        "3950 gr": "/prodotti/4kg.webp"
    };

    // Immagini corrispondenti a ogni paragrafo
    const imageSizes = {
        "70 gr": { width: 'w-[100%]', height: 'h-[60vh] md:h-[140vh]' },
        "140 gr": { width: 'w-[100%]', height: 'h-[60vh] md:h-[140vh]' },
        "220 gr": { width: 'w-full md:w-[80%]', height: 'h-[40vh] md:h-[110%]' },
        "3 x 70 gr": { width: 'w-full md:w-[80%]', height: 'h-[35vh] md:h-[120%]' },
        "6 x 70 gr": { width: 'w-full md:w-[80%]', height: 'h-[30vh] md:h-[100%] mt-[10%]' },
        "105 gr": { width: 'w-[100%]', height: 'h-[65vh] md:h-[100%] md:h-[140vh]' },
        "3 x 105 gr": { width: 'w-full md:w-[80%]', height: 'h-[30vh] md:h-[100%]' },
        "2 x 140 gr": { width: 'w-full md:w-[80%]', height: 'h-[35vh] md:h-[120%]' },
        "2 x 220 gr": { width: 'w-[80%]', height: 'h-[35vh] lg:h-[120%] mt-[10%]' },
        "125 gr": { width: 'w-full md:w-[80%] 2xl:w-[70%]', height: 'h-[35vh] md:h-[100%]' },
        "310 gr": { width: 'w-full  2xl:w-[70%]', height: 'h-[28vh] md:h-[100%]' },
        "600 gr": { width: 'w-[70%]', height: 'h-[40vh] md:h-[120%] mt-[10%]' },
        "1900 gr": { width: 'w-full ', height: 'h-[30vh] md:h-[100%] mt-[10%]' },
        "2400 gr": { width: 'w-full ', height: 'h-[30vh] md:h-[100%] mt-[10%]' },
        "3950 gr": { width: 'w-full ', height: 'h-[30vh] md:h-[90%] mt-[20%]' },
    };

    const [activeImage, setActiveImage] = useState(images["70 gr"]);
    const [hoveredImage, setHoveredImage] = useState(null);
    const [isHovering, setIsHovering] = useState(false);

    // Funzione per animare la riduzione e ingrandimento
    const animateImage = (imgElement) => {
        if (imgElement && isHovering) {
            gsap.killTweensOf(imgElement);
            gsap.fromTo(imgElement,
                { scale: 0.7 },
                { scale: 1, duration: 1, ease: "power2.out" }
            );
        }
    };

    // Funzione per aggiornare l'immagine al click
    const handleClick = (size) => {
        setActiveImage(images[size]);
    };

    // Funzione per aggiornare l'immagine al passaggio del mouse (hover)
    const handleMouseEnter = (size) => {
        setHoveredImage(images[size]);
        setIsHovering(true);
        animateImage(img2Ref.current);
    };

    // Funzione per rimuovere l'immagine hoverata
    const handleMouseLeave = () => {
        setHoveredImage(null);
        setIsHovering(false);
        animateImage(img2Ref.current);
    };

    useEffect(() => {
        const element = imgRef.current;

        // Rileva la larghezza dello schermo
        const isMobile = window.innerWidth <= 768;

        const desktopPath = [
            { x: '-10vw', y: '50vh' },
            { x: '-20vw', y: '70vh' },
            { x: '-20vw', y: '80vh' },
            { x: '-20vw', y: '90vh' },
            { x: '-20vw', y: '100vh' },
            { x: '-20vw', y: '110vh' },
        ];

        const mobilePath = [
            { x: '-5vw', y: '10vh' },
            { x: '0vw', y: '30vh' },
            { x: '10vw', y: '50vh' },
            { x: '0vw', y: '91vh' },
        ];

        const path = isMobile ? mobilePath : desktopPath;

        // Configura la timeline GSAP
        const test = gsap.timeline({
            scrollTrigger: {
                trigger: "#track", // Elemento che attiva l'animazione
                start: "top top", // Inizio dell'animazione
                end: 'bottom 80%', // Lunghezza della zona di scroll per l'animazione
                scrub: 1.5, // Attiva lo scrub per un'animazione sincronizzata con lo scroll
            }
        });

        // Definisci l'animazione
        test.fromTo(element,
            { x: 0, y: 0 },
            {
                ease: "none",
                motionPath: {
                    path: path,
                }
            }
        );

        return () => {
            test.kill();
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
        <div className="flex items-center flex-col justify-center">
            <div id="track">
                
                {/* HERO */}
                <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center md:justify-end bg-yellowLight">
            
                {/* immagine */}
                <div className="h-[50vh] md:h-[70vh] w-full flex justif-center items-center">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/prodotti/oliva.webp`} width={300} height={300}
                        id="element"
                        alt="Confezione Tonno all'Olio di Oliva"
                        ref={imgRef}
                        className="w-[100vw] md:w-full h-[60vh] md:h-auto  z-[20] object-cover"
                        />
                </div>
           
           {/* titolo */}
            <div className="md:h-[20vh] 2xl:h-[20vh] flex items-start 2xl:items-center">
                <h1 className="text-5xl md:text-[5rem] 2xl:text-8xl 2xl:-mt-[10%] flex flex-col md:flex-row text-center text-yellowDark uppercase fontPrimary z-[21] mb-[23%]">Tonno all'Olio di Oliva</h1>
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
                <div className="flex h-[70vh] md:h-[60vh] flex-col-reverse md:flex-row items-start justify-center">
                    <div className="w-[40%] flex items-center justify-center"></div>
                    <div className="w-[100%] md:w-[70%] gap-[15px] flex flex-col justify-center items-center">
                        <p ref={addToRefs} className="textFontLight text-center w-[90%] md:w-[50%] z-[20]">È ottenuto selezionando solo il tonno a pinne gialle che viene cotto rigorosamente a vapore, così da mantenere inalterate le fibre muscolari e invariati i valori nutrizionali. Al tonno Auriga aggiungiamo olio d'oliva di prima scelta e sale marino di Trapani. È caratterizzato dal tipico colore rosa e da carni compatte dal sapore delicato.</p>
                    </div>
                </div>
            </div>


            {/* DICHIARAZIONE NUTRIZIONALE */}
        <h2 ref={addToRefs} className="text-center  text-yellowDark uppercase -mb-[1%] z-[23] fontPrimary text-2xl xl:text-4xl">Dichiarazione Nutrizionale per: </h2>
        <div  className="bg-yellowLightOpac rounded-lg w-[95%] md:w-[90%] p-6 z-[22]">
            
            <div className="flex flex-col md:flex-row items-center justify-between mx-[5%]">

                {/* porzione */}
                <div className="w-[100%] md:w-[40%] mt-[5%] ">
                    <div className="border-b-2 border-yellowDark w-[30px]">
                        <h3 className="fontPrimary text-2xl  text-nowrap">100 g DI PRODOTTO</h3>
                    </div>

                    {/* griglia */}
                    <div className="mt-[5%] uppercase">

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Energia</h4>
                            <p className="text text-end md:text-left">1406 kj kj/ 340 kcal</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Grassi</h4>
                            <p className="text"> &lt; 30 g</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] text">- di cui acidi grassi saturi</h4>
                            <p className="text"> &lt; 4,6 g</p>
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
                            <p className="text">19 g</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Sale</h4>
                            <p className="text">0,90 g</p>
                        </div>
                    </div>
                    
                </div>

                {/* per 100g */}
                <div className=" w-[100%] md:w-[40%] mt-[10%] md:mt-[5%]">
                    <div className="border-b-2 border-yellowDark w-[30px]">
                        <h3 className="fontPrimary text-2xl text-nowrap">100g<sapn className="text-sm md:text-base">(sgocciolato)</sapn></h3>
                    </div>

                    {/* griglia */}
                    <div className="mt-[5%] uppercase">

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Energia</h4>
                            <p className="text text-end md:text-left">1100 kj/ 265 kcal</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Grassi</h4>
                            <p className="text"> &lt; 20 g</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] text">- di cui acidi grassi saturi</h4>
                            <p className="text">&lt; 3,2 g</p>
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
                            <p className="text">21 g</p>
                        </div>

                        <div className=" flex py-1 justify-between md:justify-start">
                            <h4 className="w-[50%] fontPrimary">Sale</h4>
                            <p className="text">1,0 g</p>
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>

            <div className="md:h-[100vh] mt-[10%] md:mt-0  w-[100vw] md:w-[90vw] flex flex-col justify-center items-center">
                {/* CONFEZIONI */}
                <h3 ref={addToRefs} className="fontPrimary text-yellowDark uppercase text-2xl  xl:text-4xl z-[23] -mb-[4%] md:-mb-[1%]">Confezioni</h3>

                <div className="bg-yellowLight flex justify-center items-center w-[95%] md:w-[50%] rounded-lg">
                    <div className="w-[35%] lg:w-[20%] rounded-lg p-2 md:p-[20px] flex items-start  justify-center gap-[5px] flex-col bg-yellowLight">
                        {/* Lista delle confezioni con gestione hover e click */}
                        {Object.keys(images).map((size) => (
                            <button
                                key={size}
                                onClick={() => handleClick(size)}
                                onMouseEnter={() => handleMouseEnter(size)}
                                onMouseLeave={handleMouseLeave}
                                className={`hover:text-yellowDark cursor-pointer  ${activeImage === images[size] ? 'font-bold' : ''}`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>

                    {/* Sezione immagine */}
                    <div className="w-[70%] relative md:w-[85%] h-full flex items-center justify-center">
                        <Image
                            src={hoveredImage || activeImage} // Usa l'immagine hoverata se presente, altrimenti quella attiva
                            width={300}
                            height={400}
                            ref={img2Ref}
                            className={`animated-image absolute z-[3000] object-cover ${imageSizes[hoveredImage ? Object.keys(images).find(key => images[key] === hoveredImage) : Object.keys(images).find(key => images[key] === activeImage)].width} ${imageSizes[hoveredImage ? Object.keys(images).find(key => images[key] === hoveredImage) : Object.keys(images).find(key => images[key] === activeImage)].height}`}
                            alt="Prodotti Auriga"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
