"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CardRicettaInput({ ricetta }) {
    if (!ricetta) {
        return <span>Nessuna ricetta selezionata.</span>;
    }

    return (
        <div className="flex xl:max-w-[1000px] 2xl:max-w-[100%] justify-center mt-8 mb-10">
            <Link prefetch={false} href={`${process.env.NEXT_PUBLIC_BASE_URL}/ricette/${ricetta.slug}`}>
                <div id="cardOverlay" className="w-[300px]  max-w-[500px] 2xl:w-[25vw]">
                    {/* foto */}
                    <div className="h-[200px] 2xl:h-[30vh] rounded-t-2xl">
                        <Image
                        alt="foto ricetta"
                            src={ricetta.fotoCopertina}
                            width={30}
                            height={30}
                            className="w-[100%] h-[100%] object-cover object-center rounded-t-2xl"
                        />
                    </div>

                    {/* curva */}
                    <div className="w-full border-none flex items-end relative">
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
                    <div className="bg-yellowLight w-full rounded-b-2xl border-none h-[100px] flex flex-col p-2 sticky z-[100]">
                        <div className="w-[50%] mb-[3px]">
                            <p className="bg-red fontPrimary uppercase text-sm text-center rounded-full p-[4px] text-yellowLight">
                                {ricetta.portata}
                            </p>
                        </div>
                        <h2 title={ricetta.nome_ricetta} className="text-red textTroncate fontPrimary ml-1 uppercase">{ricetta.nome_ricetta}</h2>
                        <p className="text-red ml-1 capitalize textTroncate text" title={ricetta.sottotitolo}>{ricetta.sottotitolo}</p>
                    </div>

                    {/* tempo di cottura o preparazione */}
                    <div className="bg-yellowLight fontPrimary text-red text-sm px-2 py-1 flex justify-center items-center w-[30%] rounded-full absolute top-4 right-4">
                        <p>{ricetta.tempo_di_preparazione}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
