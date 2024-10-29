'use client';
import React, { useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import ScrollProdotti from "./ScrollProdotti";

gsap.registerPlugin(ScrollTrigger);



export default function ProdottiClient() {

    useEffect(() => {
        // Animazione GSAP per il ridimensionamento del div #main
        gsap.to("#mainProdotti", {
            width: "80vw", // ridimensiona a 80vw quando è completamente nella viewport
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#mainProdotti",
                start: "top bottom", // inizia quando il top del div entra dal fondo della viewport
                end: "top top", 
                scrub: true,     // collega l'animazione allo scroll
                toggleActions: "play reverse play reverse", // l'animazione è reversibile
              
            },
        });
    }, []);
   
    return (
        <>
            <div className="h-[70vh] md:h-[110vh] bg-yellowLight flex flex-col items-center justify-center">
                <h1  className="fontPrimary text-yellowDark text-3xl md:text-5xl lg:text-[5rem] 2xl:text-[7rem] uppercase mt-[15%]">I Nostri Prodotti</h1>
                <Image 
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/Tonno_Auriga_prodotti.webp`}
                    width={50} 
                    height={30} 
                    className="w-[100vw]  lg:w-[90vw] h-[35vh] md:h-[50vh] lg:h-[100vh] -mt-[15%] md:-mt-[10%] object-cover"
                    alt="Immagine Hero"
                />
            </div>

            <div className="relative">
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

                <ScrollProdotti/>
             
                
                    <div className="h-[10vh] -mt-[1%] hidden md:block bg-yellowLight w-full"></div>
                {/* SELEZIONE SAN CUSUMANO */}
                <Link href="/SanCusumano">
                    <div className= "md:h-[100vh] bg-yellowLight flex  items-center  justify-center w-full">
                        <div id="mainProdotti"  className="bg-white rounded-lg w-[100vw] h-[60vh]  flex flex-col items-center    justify-center md:flex-row">
                            <div className="w-[100%] md:w-[50%] flex items-center justify-center md:h-full">
                                <h2 className="text-2xl xl:text-[48px] uppercase fontPrimary text-yellowDark leading-6 lg:leading-10 flex flex-col gap-[3px] text-center md:text-end">Scopri <span>la Selezione </span>San Cusumano</h2>
                            </div>

                            <div className="w-[100%] md:w-[70%] flex items-center justify-center">
                                <Image alt="Famiglia di prodotti, sezione San Cusumano" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/imgSanCusumano/family1.webp`} width={300} height={300}
                                className="w-[100%] object-cover"
                                />
                            </div>
                            
                        </div>
                    </div>
                </Link>

            </div>
        </>
    );
}
