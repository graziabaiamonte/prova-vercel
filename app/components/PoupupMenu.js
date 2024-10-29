import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PopupMenu({ showMenu, setShowMenu }) {

    // Per chiudere il menu
    const handleLinkClick = () => {
        setShowMenu(false);
    };

    // Impedire lo scroll quando il menu è aperto
    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup per ripristinare lo scroll quando il componente si smonta
        return () => {
            document.body.style.overflow = '';
        };
    }, [showMenu]);

    return (
        <>
            {showMenu && (
                <div className="h-[100vh] fixed inset-0 bg-white z-[999] overflow-hidden">
                    <div className="h-[70%] flex flex-col items-center justify-center relative">
                        <button
                            className="absolute top-4 right-4 bg-yellowLight p-2"
                            onClick={() => setShowMenu(false)}
                        >
                            <svg xmlns="https://www.w3.org/2000/svg" className="h-6 w-6 text-yellowDark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Link href="/" onClick={handleLinkClick} className="uppercase fontPrimary text-2xl text-yellowDark mb-4">Home</Link>
                        <Link href="/ProdottiPage" onClick={handleLinkClick} className="whitespace-nowrap uppercase fontPrimary  text-2xl text-yellowDark mb-4">Prodotti</Link>
                        <Link href="/Ricette" onClick={handleLinkClick} className="whitespace-nowrap uppercase fontPrimary  text-2xl text-yellowDark mb-4">Ricette</Link>
                        <Link href="/Educational" onClick={handleLinkClick} className="whitespace-nowrap uppercase fontPrimary  text-2xl text-yellowDark mb-4">#ORALOSAI</Link>
                        <Link href="/ChiSiamo" onClick={handleLinkClick} className="whitespace-nowrap uppercase fontPrimary  text-2xl text-yellowDark mb-4">Chi siamo</Link>
                        <Link href="https://www.tonnoauriga.it/wp/directory/" onClick={handleLinkClick} className="whitespace-nowrap uppercase fontPrimary  text-2xl text-yellowDark mb-4">Mappa del tonno</Link>
                        <Link href="/Contatti" onClick={handleLinkClick} className="text-text fontPrimary uppercase text-2xl text-yellowDark mb-4">Contatti</Link>
                    </div>
                    <div className="h-[30%] flex flex-col gap-4 items-center justify-center text-text text-xs fontPrimary uppercase">
                        <Link href="/">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/logo.webp`} alt="Logo Auriga" width={100} height={100} className='w-[70px] lg:w-[120px]' />
                        </Link>
                        <h6 className="textLight">C.da San Cusumano</h6>
                        <h6 className="textLight">91016 Erice (TP)</h6>
                    </div>
                </div>
            )}
        </>
    );
}
