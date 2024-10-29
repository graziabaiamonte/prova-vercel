
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faYoutube,
    faPinterestP,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    return (
        <div className="bg-yellowLight z-10 flex flex-col">
        <div className="-mb-1">
            <svg
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
           
            >
            <path
                fill="#fff"
                fillOpacity="1"
                d="M0,128L60,144C120,160,240,192,360,197.3C480,203,600,181,720,160C840,139,960,117,1080,106.7C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
            </svg> 
        </div>
        <div className="w-full flex flex-col justify-center items-center md:flex-row bg-white"> 

        
            <div className="md:w-[50%] flex flex-col md:px-8 md:py-4 gap-[25%]  z-[100]">

                
                {/* icone social */}
                <div className="flex gap-4 md:gap-2 py-4">
                    
                    <div className="rounded-full flex items-center justify-center border-black border-2 h-[40px] w-[40px]">
                        <Link aria-label="guarda la nostra pagina facebook" href="https://www.facebook.com/tonnoauriga">
                            <FontAwesomeIcon icon={faFacebookF} className="text-black flex w-[24px] h-[24px]"/>
                        </Link>
                    </div>

                    <div className="rounded-full flex items-center justify-center border-black border-2 h-[40px] w-[40px]">
                        <Link aria-label="guarda la nostra pagina instagram" href="https://www.instagram.com/tonnoauriga/">
                            <FontAwesomeIcon icon={faInstagram} className="text-black flex w-[24px] h-[24px]"/>
                        </Link>
                    </div>

                    <div className="rounded-full flex items-center justify-center border-black border-2 h-[40px] w-[40px]">
                        <Link aria-label="guarda la nostra pagina youtube" href="https://www.youtube.com/user/tonnoninocastiglione">
                            <FontAwesomeIcon icon={faYoutube} className="text-black flex w-[24px] h-[24px]"/>
                        </Link>
                    </div>

                    <div className="rounded-full flex items-center justify-center border-black border-2 h-[40px] w-[40px]">
                        <Link aria-label="guarda la nostra pagina pinteres" href="https://it.pinterest.com/tonnoauriga/">
                            <FontAwesomeIcon icon={faPinterestP} className="text-black flex w-[24px] h-[24px]"/>
                        </Link>
                    </div>

                    <div className="rounded-full flex items-center justify-center border-black border-2 h-[40px] w-[40px]">
                        <Link aria-label="guarda la nostra pagina linkedin" href="https://www.linkedin.com/company/tonno-auriga/">
                            <FontAwesomeIcon icon={faLinkedinIn} className="text-black flex w-[24px] h-[24px]"/>
                        </Link>
                    </div>
                </div>
                <p className="text-[14px] text-center mt-2 md:text-left">All rights reserved 2024 © Auriga</p>
            </div>

            <div className="md:w-[50%] md:px-8 md:py-4 flex flex-col gap-[25%] z-[100] md:overflow-hidden mt-[8%] md:mt-0">
                <div className="flex w-full items-center md:items-start justify-center md:justify-end gap-[20%] uppercase font-semibold">
                    <Link href="/Contatti">Contatti</Link>
                    <Link href="/Privacy">Privacy</Link>
                </div>
                <div className="flex flex-col py-4 md:py-0 justify-center items-center md:items-end md:justify-end mt-[10%] md:mt-[5%]">
                    <p className="text-wrap w-[90%] text-center md:text-end">Nino Castiglione SRL - C.da San Cusumano 91016 Erice (TP)</p>
                    <p className="text-center md:text-end">P.I. 01992100816</p>
                </div>
            </div>
        </div>
        </div>
    )
}