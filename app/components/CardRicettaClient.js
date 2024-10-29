"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";

export default function CardRicettaClient({
  stagione,
  selectedRicetta,
  portata,
  tempoMaxPreparazione,
  ricette,
  isVeloce,
}) {
  const [paginaCorrente, setPaginaCorrente] = useState(1); // Stato per la pagina corrente
  const [ricettePerPagina] = useState(6); // Numero di card per pagina
  const cardRefs = useRef([]);

  // Controllo se `selectedRicetta` è disponibile, fai un log di debug
  useEffect(() => {
    if (selectedRicetta) {
      console.log("Ricetta selezionata:", selectedRicetta);
    }
  }, [selectedRicetta]);

  useEffect(() => {
    setPaginaCorrente(1); // Reset della pagina quando cambiano i filtri
  }, [stagione, portata, tempoMaxPreparazione]);

  // Funzione per estrarre il numero dai valori testuali tipo '10 min'
  const estraiNumeroTempo = (tempo) => {
    if (!tempo) return null;
    const match = tempo.match(/\d+/); // Estrae solo i numeri dal testo
    return match ? parseInt(match[0], 10) : null; // Converte il numero estratto in intero
  };

  // Filtra per stagione, portata e tempo di preparazione se definiti
  const ricetteFiltrate = ricette
    .filter((ricetta) => {
      const matchStagione = stagione ? ricetta.stagione === stagione : true;
      const matchTipoPortata = portata ? ricetta.portata === portata : true;
      // Filtro per tempo di preparazione (estraiamo il numero dal testo)
      const tempoPreparazione = estraiNumeroTempo(ricetta.tempo_di_preparazione);
      const matchTempoPreparazione = tempoMaxPreparazione
    ? ricetta.tempo_di_preparazione === '10 min' || ricetta.tempo_di_preparazione === '20 min'
    : true;

        // Filter for fast recipes if isVeloce is true
        const matchVeloce = isVeloce ? ricetta.ricetta_veloce : true;

        return matchStagione && matchTipoPortata && matchTempoPreparazione && matchVeloce;
    })
    // .sort((a, b) => new Date(a.dataImmissione) - new Date(b.dataImmissione));


  // Paginazione
  // const numeroPagine = Math.ceil(ricetteFiltrate.length / ricettePerPagina);
  
  // // Calcola le ricette da visualizzare per la pagina corrente
  // const indiceUltimaRicetta = paginaCorrente * ricettePerPagina;
  // const indicePrimaRicetta = indiceUltimaRicetta - ricettePerPagina;
  // const ricetteAttuali = ricetteFiltrate.slice(indicePrimaRicetta, indiceUltimaRicetta);

  
// Paginazione
const numeroPagine = Math.ceil(ricetteFiltrate.length / ricettePerPagina);
const indiceUltimaRicetta = paginaCorrente * ricettePerPagina;
const indicePrimaRicetta = indiceUltimaRicetta - ricettePerPagina;
const ricetteAttuali = ricetteFiltrate.slice(indicePrimaRicetta, indiceUltimaRicetta);

// Se non ci sono ricette attuali e siamo su una pagina maggiore di 1
if (!ricetteAttuali.length && paginaCorrente > 1) {
  setPaginaCorrente(paginaCorrente - 1); // Torna alla pagina precedente
}

// Se non ci sono ricette attuali
if (!ricetteAttuali.length) {
  return <div>Nessuna ricetta disponibile per i criteri di ricerca.</div>;
}




   const cambiaPagina = (event, numeroPagina) => {
    setPaginaCorrente(numeroPagina);
    // Scorrimento verso l'alto
    window.scrollTo({
      top: 10,
      behavior: "smooth",
    });
  };



  // Se c'è una ricetta selezionata, visualizza solo quella
  if (selectedRicetta) {
    return (
      <div className="flex justify-center">
        <Link  href={`/ricetta/${selectedRicetta?.slug}`}>
       
          <div id="cardOverlay" className="w-[300px] max-w-[500px] 2xl:w-[25vw]">
            {/* foto */}
            <div className="h-[200px] 2xl:h-[30vh] rounded-t-lg">
              <Image
                src={selectedRicetta?.fotoCopertina}
                width={30}
                height={30}
                alt="foto ricetta"
                className="h-[100%] w-[100%] object-cover object-center rounded-t-lg"
              />
            </div>

            {/* curva */}
            <div className="w-[100%] border-none flex items-end relative">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="absolute -bottom-6"
              >
                <path
                  fill="#f8efd3"
                  fillOpacity="1"
                  d="M0,128L120,106.7C240,85,480,43,720,53.3C960,64,1200,128,1320,160L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                ></path>
              </svg>
            </div>

            {/* dettagli */}
            <div className="bg-yellowLight w-[100%] rounded-b-lg border-none h-[100px] flex flex-col p-2 sticky z-[100]">
              <div className="w-[50%] mb-[3px]">
                <p className="bg-red fontPrimary uppercase text-sm text-center rounded-full p-[4px] text-yellowLight">
                  {selectedRicetta?.portata}
                </p>
              </div>
              <h2
                title={selectedRicetta?.nome_ricetta}
                className="text-red textTroncate fontPrimary ml-1 uppercase"
              >
                {selectedRicetta?.nome_ricetta}
              </h2>
              <p
                className="text-red ml-1 capitalize textTroncate text"
                title={selectedRicetta.sottotitolo}
              >
                {selectedRicetta.sottotitolo}
              </p>
            </div>

            {/* tempo di cottura o preparazione */}
            <div className="bg-yellowLight fontPrimary text-red text-sm px-2 py-1 flex justify-center items-center w-[30%] rounded-full absolute top-4 right-4">
              <p>{selectedRicetta.tempo_di_preparazione}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex xl:max-w-[1000px] 2xl:max-w-[100%] flex-wrap gap-4 mt-[3%] mb-[5%]  justify-center items-center">
        {ricetteAttuali.length > 0 ? (
          ricetteAttuali.map((ricetta, index) => (
            <Link
          
              href={`/ricetta/${ricetta.slug}`}
              key={index}
            >
              <div id="cardOverlay" className="w-[300px] max-w-[500px] 2xl:w-[25vw]">
                {/* foto */}
                <div className="h-[200px] 2xl:h-[30vh] rounded-t-2xl">
                  <Image
                    src={ricetta.fotoCopertina}
                    width={30}
                    alt="foto ricetta"
                    height={30}
                    className="h-[100%] w-full object-cover object-center rounded-t-2xl"
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
                <div className="bg-yellowLight w-[100%] rounded-b-2xl border-none h-[100px] flex flex-col p-2 sticky z-[100]">
                  <div className="w-[50%] mb-[3px]">
                    <p className="bg-red fontPrimary uppercase text-sm text-center rounded-full p-[4px] text-yellowLight">
                      {ricetta.portata}
                    </p>
                  </div>
                  <h2
                    title={ricetta.nome_ricetta}
                    className="text-red textTroncate fontPrimary ml-1 uppercase"
                  >
                    {ricetta.nome_ricetta}
                  </h2>
                  <p
                    className="text-red ml-1 capitalize textTroncate text"
                    title={ricetta.sottotitolo}
                  >
                    {ricetta.sottotitolo}
                  </p>
                </div>

                {/* tempo di cottura o preparazione */}
                <div className="bg-yellowLight fontPrimary text-red text-sm px-2 py-1 flex justify-center items-center w-[30%] rounded-full absolute top-4 right-4">
                  <p>{ricetta.tempo_di_preparazione}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <span className="loader">{stagione || portata ? `` : ""}</span>
        )}
      </div>
    <div>

    </div>

      {/* Paginazione */}
      {ricetteFiltrate.length > ricettePerPagina && (
        <div className="flex justify-center mt-6">
          <Stack spacing={2}>
            <Pagination
              count={numeroPagine}
              page={paginaCorrente}
              onChange={cambiaPagina}
              className="fontPrimary"
              style={{fontFamily: 'Poppins, sans-serif', fontSize: '24px'}}
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  onClick={() => {
                    if (item.page) {
                      cambiaPagina(null, item.page);
                    }
                  }}
                />
              )}
              siblingCount={0} // Imposta siblingCount a 0 per non mostrare pagine adiacenti
              sx={{
                '& .MuiPaginationItem-root': {
                  color: 'black', 
                },
                '& .Mui-selected': {
                  color: '#f8efd3',
                  background: '#F5C23C !important',
                },
                fontFamily: 'Poppins, sans-serif', 
              }}
            />
          </Stack>
        </div>
)}


      



    </div>
  );
}