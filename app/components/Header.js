"use client";
import  {  useState, useEffect } from "react";
import PoupupMenu from "./PoupupMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
    const pathname = usePathname(); 
    const [showMenu, setShowMenu] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null);;

    useEffect(() => {
        // Imposta il componente attivo in base al pathname
        if (pathname.includes("/ProdottiPage")) {
            setActiveComponent("prodotti");
        } else if (pathname.includes("/Ricette")) {
            setActiveComponent("ricette");
        } else if (pathname.includes("/ChiSiamo")) {
            setActiveComponent("chisiamo");
        } else if (pathname.includes("/Contatti")) {
            setActiveComponent("contatti");
        } else if (pathname.includes("/Educational")) {
            setActiveComponent("educational");
        } else {
            setActiveComponent(null); 
        }
    }, [pathname]);
      
      const handleLinkClick = (component) => {
        setActiveComponent(component);
    };
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            {/* VERSIONE DESKTOP */}
            <div className="relative hidden md:block z-[999]">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 220" width="100vw" 
                className="absolute z-[999] ">
                <path  fill="white" 
                    d="M0,88.92L120,80.37C240,71.83,480,61.29,720,61.29C960,61.29,1200,71.83,1320,80.37L1440,88.92L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z">
                </path>
               
            </svg>
            <div className="w-full px-[10%] absolute hidden md:flex text-sm 2xl:text-base justify-between h-[6vh] z-[999]">
                <Link className={`md:pt-[1%] lg:pt-[2%] uppercase font-semibold ${activeComponent === "prodotti" ? "text-yellowDark" : ""}`} href='/ProdottiPage' >Prodotti</Link>
                <Link className={`md:pt-[1%] lg:pt-[2%] uppercase font-semibold ${activeComponent === "ricette" ? "text-yellowDark" : ""}`} href='/Ricette'>Ricette</Link>
                <Link className={`md:pt-[1%] lg:pt-[2%] uppercase font-semibold ${activeComponent === "educational" ? "text-yellowDark" : ""}`} href='/Educational'>#oralosai</Link>
                <Link href='/'>
                    <Image alt="logo"
                     priority={true} 
                    src="/img/logo.webp" width={20} height={20} className="w-[8vw] mt-[5%]"/>
                </Link>
                <Link className={`md:pt-[1%] lg:pt-[2%] uppercase font-semibold ${activeComponent === "chisiamo" ? "text-yellowDark" : ""}`} href='/ChiSiamo'>Chi siamo</Link>
                <Link className={`md:pt-[1%] lg:pt-[2%] uppercase font-semibold ${activeComponent === "contatti" ? "text-yellowDark" : ""}`} href='/Contatti'>Contatti</Link>
                <div className="w-[100px] h-[6vh]">
                    <Link className={`md:pt-[1%] lg:pt-[2%] flex items-center  uppercase font-semibold ${activeComponent === "" ? "text-yellowDark" : ""}`} href='https://www.tonnoauriga.it/wp/directory/'>
                        <Image alt="logo" src="/img/maps.webp" width={40} height={15} className="  object-contain  lg:mt-[10%] 2xl:mt-[20%]"/>
                        <p className="text-[11px] leading-3 flex flex-col gap-0  mt-[10%] 2xl:mt-[20%]">Store<span>lOCATOR</span></p>
                    </Link>
                </div>
                
            </div>
            </div>

            {/* VERSIONE MOBILE */}
            <div className="relative md:hidden z-[998]">
                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 500" width="100vw" className="absolute">
                    <path fill="white" fillOpacity="1" d="M0,250L120,220C240,190,480,160,720,160C960,160,1200,190,1320,220L1440,250L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                </svg>

                <div className=" w-full absolute h-[10vh] flex justify-center">
                    <div className="w-[20vw]">
                        <Image 
                        alt="logo auriga" 
                        priority={true} 
                        quality={80} className="object-contain w-[20vw] mt-[10%] " width={50} height={50} src="/img/logo.webp"/>
                    </div>
                    
                    {/* hamburger button */}
                    
                    <button aria-label="menu" className="z-[999] absolute right-[5%] top-[25%] focus:outline-none" onClick={toggleMenu}>
                        <svg className="w-10 h-8" fill="none" stroke="#F5C23C" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    
                    
                </div>

              
            </div>

            <PoupupMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
        </>
    );
}
