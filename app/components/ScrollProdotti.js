import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

function ScrollProdotti() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const curveRef = useRef(null); 
  const curveRefDesktop = useRef(null);
  const imagesRefs = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Rimuovi eventuali trigger esistenti
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const sections = gsap.utils.toArray(".scroll-section");
    
    // Configura il pinning e lo scroll per la sezione
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        start: "top top",
        end: () => `+=${sections.length * 630}vw`,
        onEnter: (self) => {
          const currentIndex = self.active;
          gsap.fromTo(imagesRefs.current[currentIndex], { y: 150, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 10 });
        },
        onEnterBack: (self) => {
          const currentIndex = self.active;
          gsap.fromTo(imagesRefs.current[currentIndex], { y: 150, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 10 });
        },
      },
    });

    
     // Animazione della curva mobile
     gsap.to(curveRef.current, {
      attr: {
        d: "M0,160L60,149.3C120,139,240,117,360,122.7C480,128,600,160,720,149.3C840,139,960,85,1080,64C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      },
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Animazione della curva desktop
    gsap.to(curveRefDesktop.current, {
      attr: {
        d: "M0,160L60,149.3C120,139,240,117,360,122.7C480,128,600,160,720,149.3C840,139,960,85,1080,64C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      },
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return (
    <section className="relative w-[100%]">
      <div ref={triggerRef} className="overflow-hidden">
        <div ref={sectionRef} className=" md:h-[100vh] w-[460vw] overflow-x-hidden flex flex-nowrap">

          <Link prefetch={false} href="/TonnoFilolio">
          <div className="scroll-section">
            <div className="h-[20vh] -mb-[4%] z-10 flex flex-col  items-center justify-end">
              <h2 className="text-2xl xl:text-[48px] line-h uppercase fontPrimary leading-6 lg:leading-10 text-yellowDark flex flex-col gap-[3px] text-center md:text-end">Tonno Filolio</h2>
              <p className="text p-2 border-b-white hover:border-b-yellowDark border-b-2  transition-colors duration-300 ease-in-out z-[2000]">Scoprilo</p>
            </div>
            <div className="h-[50vh] md:h-[70vh] w-full flex items-center justify-center ">
              <Image ref={el => imagesRefs.current[0] = el} 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/prodotti/filolio.webp`} width={300} height={300} className="h-[55vh] img md:h-[80vh] lg:h-[110vh] w-[100vw] md:w-auto -mt-[5%] z-100 object-cover" alt="Tonno Filolio" />
            
            </div>
            
          </div>
          </Link> 
         

          <Link href="/TonnoLeggero">
          <div className="scroll-section">
          <div className="h-[20vh]  flex flex-col items-center justify-center">
              <h2 className="text-2xl xl:text-[48px] flex flex-col gap-[3px] text-center leading-6 lg:leading-10  uppercase fontPrimary text-yellowDark">Tonno Leggero</h2>
              <p className="text p-2 border-b-white hover:border-b-yellowDark border-b-2  transition-colors duration-300 ease-in-out z-[2000]">Scoprilo</p>
            </div>
            <div className="h-[35vh] md:h-[50vh] w-full flex items-center justify-center">
              <Image  ref={el => imagesRefs.current[1] = el} 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/prodotti/leggero.webp`} width={300} height={300} className="img w-auto object-cover h-[55vh] md:h-[80vh] lg:h-[110vh] z-100 -mt-[3%]" alt="Tonno Auriga Leggero" />

             
            </div>
            
          </div>
          </Link>
 
          <Link href="/TonnoNaturale">
          <div className="scroll-section">
          <div className="h-[20vh] flex flex-col items-center  justify-center">
              <h2 className="text-2xl xl:text-[48px] uppercase fontPrimary text-yellowDark leading-6 lg:leading-10 flex flex-col gap-[3px] text-center ">Tonno al Naturale</h2>
              <p className="text p-2 border-b-white hover:border-b-yellowDark border-b-2  transition-colors duration-300 ease-in-out z-[2000]">Scoprilo</p>
          </div>
          <div className="h-[35vh] md:h-[50vh] w-full flex items-start justify-center">
                <Image  ref={el => imagesRefs.current[2] = el} 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/prodotti/naturale.webp`} width={300} height={300} className="img h-[30vh]  md:-mt-[10%] md:h-[45vh] lg:h-[60vh] z-100  w-auto -mt-[3%] object-cover" alt="Tonno Naturale" />

                
          </div>
            
          </div>
          </Link>

          <Link  href="/TonnoOliva">
          <div className="scroll-section ">
          <div className="h-[20vh] flex flex-col items-center justify-center">
              <h2 className="text-2xl xl:text-[48px] uppercase fontPrimary text-yellowDark leading-6 lg:leading-10 flex flex-col gap-[3px] text-center mt-[18%]">Tonno all'Olio <span>di Oliva</span></h2>
              <p className="text p-2 border-b-white hover:border-b-yellowDark border-b-2  transition-colors duration-300 ease-in-out z-[2000]">Scoprilo</p>
            </div>
            <div className="h-[30vh]  md:h-[60vh] w-full flex items-center justify-center">
                <Image  ref={el => imagesRefs.current[3] = el} 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/prodotti/oliva.webp`} width={300} height={300} className="img h-[55vh] md:h-[80vh] lg:h-[100vh] mt-[15%] md:mt-[4%]  z-10 object-cover w-auto" alt="Tonno Auriga Olio" />

            </div>
          </div>
          </Link>



          {/* onda animata in desktop*/}
          <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320" className=" hidden md:block absolute bottom-0 left-0 w-full -z-10">
            <path ref={curveRefDesktop} fill="#f8efd3" fillOpacity="1" d="M0,96L60,112C120,128,240,160,360,197.3C480,235,600,277,720,256C840,235,960,149,1080,128C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>


          {/* onda animata in mobile */}
          <div className="bg-yellowLight h-[30vh] md:hidden w-full absolute bottom-0 -z-10" >
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 640" className="absolute  -top-[33%] left-0 w-full ">
              <path ref={curveRef} fill="#f8efd3" fillOpacity="1" d="M0,0L60,50C120,100,240,200,360,240C480,280,600,300,720,280C840,260,960,200,1080,180C1200,160,1320,180,1380,190L1440,200L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>

          </div>
          
    
        </div>
      </div>
      
    </section>
  );
}

export default ScrollProdotti;
