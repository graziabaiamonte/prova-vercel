export const metadata = {
    title: 'Tonno Auriga, Tonno per Passione, Tabella Comparativa',
    description: 'Confronta i prodotti Tonno Auriga con la nostra tabella comparativa. Scopri le differenze tra le varie linee di tonno in termini di qualità, ingredienti e valori nutrizionali per scegliere il prodotto perfetto per te.',
    openGraph: {
      title: 'Tonno Auriga - Tonno per Passione',
      description: 'Confronta i prodotti Tonno Auriga con la nostra tabella comparativa. Scopri le differenze tra le varie linee di tonno in termini di qualità, ingredienti e valori nutrizionali per scegliere il prodotto perfetto per te.',
      url: 'https://www.tonnoauriga.it', 
      images: [
        {
          url: 'https://www.tonnoauriga.it/wp/wp-content/uploads/2024/10/Tonno_Auriga_prodotti.webp', 
          width: 1200,
          height: 630,
          alt: 'Tonno Auriga'
        }
      ],
      siteName: 'Tonno Auriga - Tonno per Passione',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Tonno Auriga - Tonno per Passione',
      description: 'Confronta i prodotti Tonno Auriga con la nostra tabella comparativa. Scopri le differenze tra le varie linee di tonno in termini di qualità, ingredienti e valori nutrizionali per scegliere il prodotto perfetto per te.',
      image: 'https://www.tonnoauriga.it/wp/wp-content/uploads/2024/10/Tonno_Auriga_prodotti.webp', 
    },
    robots: {
      index: true,
      follow: true
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'tonno, auriga, castiglione, peschereccio, erice, trapani, sicilia, tonno in scatola '
      },
      {
        name: 'author',
        content: 'Tonno Auriga'
      }
    ]
  };

export default function TabellaComparativa() {
    return (
        <>
        {/* HERO */}
        <div className="h-[100vh] bg-yellowLight gap-[20px] flex flex-col items-center justify-center text-center">
            <h1 className="text-yellowDark fontPrimary uppercase text-2xl xl:text-[48px]">Tabella comparativa</h1>
            <p className="w-[80vw] md:w-[50vw] textFontLight">Fonte: Elaborazione Nino Castiglione su dati Nielsen. Periodo di riferimento Aprile 2019.</p>
            <p className="w-[80vw] md:w-[50vw] textFontLight">Il tonno Auriga <span className="text">Leggero</span>, con un valore di grassi pari a <span className="text">7,9 g per 100 g di prodotto</span> risulta contenere il 50% di grassi in meno rispetto alla media del contenuto in grassi sul prodotto sgocciolato delle conserve di tonno all'olio di oliva più vendute dei principali attori di mercato</p>
        </div>

        {/* TABELLA  */}

        <div className="flex flex-col gap-[2px] items-center justify-center bg-yellowLight ">

        
            {/* intestazione */}
            <div className="flex sticky top-2 text-[16px] md:text-[20px]  items-center bg-yellowDark text-white w-[96%] md:w-[90%] px-2 md:px-4 py-2 rounded-t-lg uppercase text md:fontPrimary leading-4 md:leading-6">
                <h3 className="w-[30%] text-wrap flex flex-col  text-center md:text-left"><span>Marchi più venduti di</span> tonno all'olio di oliva</h3>
                <h3 className="w-[30%] flex flex-col  text-center md:text-left">Referenza<span>/Formato</span></h3>
                <h3 className="w-[30%] flex flex-col  text-center md:text-left">Percentuale di grassi dichiarati in etichetta<span className="text-[14px] text"> su 100g di prodotto sgocciolato</span></h3>
            </div>

            {/* 1  riga */}
            <div className="flex items-center bg-white w-[96%] md:w-[90%] px-4 py-2  uppercase textFontLight">
                <p className="w-[30%]">Tonno all'olio di oliva cluster</p>
                <p className="w-[30%]  text-center md:text-left">Rio Mare 4x80</p>
                <p className="w-[30%] text text-center">20</p>
            </div>

             {/* 2  riga */}
             <div className="flex items-center bg-white w-[96%] md:w-[90%]  px-4 py-2  uppercase textFontLight">
                <p className="w-[30%]">Tonno all'olio di oliva cluster</p>
                <p className="w-[30%]  text-center md:text-left">Nostromo 4x80</p>
                <p className="w-[30%] text text-center">13</p>
            </div>

            {/* 3  riga */}
            <div className="flex items-center bg-white w-[96%] md:w-[90%]  px-4 py-2  uppercase textFontLight">
                <p className="w-[30%]">Tonno all'olio di oliva cluster</p>
                <p className="w-[30%]  text-center md:text-left">Rio Mare 12x80</p>
                <p className="w-[30%] text text-center">20</p>
            </div>

            {/* 4  riga */}
            <div className="flex items-center bg-white w-[96%] md:w-[90%]  px-4 py-2  uppercase textFontLight">
                <p className="w-[30%]">Tonno all'olio di oliva cluster</p>
                <p className="w-[30%]  text-center md:text-left">Rio Mare 3x120</p>
                <p className="w-[30%] text text-center">20</p>
            </div>

            {/* 5  riga */}
            <div className="flex items-center bg-white w-[96%] md:w-[90%]  px-4 py-2  uppercase textFontLight">
                <div className="w-[30%]">
                    <p>Tonno all'olio di oliva cluster</p>
                    <p className="text-sm">Coop - Conad -Esselunga - Selex</p>
                </div>
                <p className="w-[30%]  text-center md:text-left">PL 4x80</p>
                <div className="w-[30%] flex flex-col  text-center">
                    <p><span className="text">21,4</span> Coop</p>
                    <p><span className="text">16</span> Conad</p>
                    <p><span className="text">21</span> Esselunga</p>
                    <p><span className="text">21,5</span> Selex</p>
                </div>
            </div>

            {/* 6  riga */}
             <div className="flex items-center bg-white w-[96%] md:w-[90%]  px-4 py-2  uppercase textFontLight">
                <div className="w-[30%]">
                    <p>Tonno all'olio di oliva singolo</p>
                    <p className="text-sm">Coop - Conad -Esselunga - Selex</p>
                </div>
                <p className="w-[30%]  text-center md:text-left">PL 160</p>
                <div className="w-[30%] flex flex-col  text-center">
                    <p><span className="text">21,4</span> Coop</p>
                    <p><span className="text">16</span> Conad</p>
                    <p><span className="text">21</span> Esselunga</p>
                    <p><span className="text">21,5</span> Selex</p>
                </div>
            </div>

            {/* 7  riga */}
             <div className="flex items-center bg-white w-[96%] md:w-[90%]  px-4 py-2  uppercase textFontLight">
                <div className="w-[30%]">
                    <p>Tonno all'olio di oliva cluster</p>
                    <p className="text-sm">Coop - Conad -Esselunga - Selex</p>
                </div>
                <p className="w-[30%]  text-center md:text-left">PL 3x80</p>
                <div className="w-[30%] flex flex-col  text-center">
                    <p><span className="text">21,4</span> Coop</p>
                    <p><span className="text">16</span> Conad</p>
                    <p><span className="text">21</span> Esselunga</p>
                    <p><span className="text">21,5</span> Selex</p>
                </div>
            </div>


            {/* 8  riga */}
            <div className="flex items-center bg-white w-[96%] md:w-[90%]  px-4 py-2  uppercase textFontLight">
                <div className="w-[30%]">
                    <p>Tonno  olio fino 300gr pl std</p>
                    <p>Trancio Latt 0080 Clud 04 <span className="text-sm">Prodotto HD</span></p>
                </div>
                <p className="w-[30%]  text-center md:text-left">PL 4x80</p>
                <div className="w-[30%] flex flex-col  text-center">
                    <p className="text">7,5</p>
                </div>
            </div>

            {/* 9  riga */}
            <div className="flex items-center bg-white w-[96%] md:w-[90%]  px-4 py-2  uppercase textFontLight">
                <p className="w-[30%]">Tonno all'olio di oliva cluster</p>
                <p className="w-[30%]  text-center md:text-left">Mare Aperto 3x80</p>
                <p className="w-[30%] text text-center">Dato non disponibile</p>
            </div>

            {/* 10  riga */}
            <div className="flex items-center bg-white w-[96%] md:w-[90%]  px-4 py-2  uppercase textFontLight">
                <p className="w-[30%]">Tonno all'olio di oliva cluster</p>
                <p className="w-[30%]  text-center md:text-left">Rio Mare 2x160</p>
                <p className="w-[30%] text text-center">20</p>
            </div>

            {/* 11  riga */}
            <div className="flex items-center bg-white w-[96%] md:w-[90%]  px-4 py-2  uppercase textFontLight">
                <p className="w-[30%]">Tonno all'olio di oliva cluster pescato a canna</p>
                <p className="w-[30%]  text-center md:text-left">Rio Mare 2x80</p>
                <p className="w-[30%] text text-center">20</p>
            </div>

            {/* 12  riga */}
            <div className="flex items-center bg-white w-[96%] md:w-[90%]  px-4 py-2  uppercase textFontLight">
                <div className="w-[30%]">
                    <p>Tonno all'olio di oliva cluster</p>
                    <p className="text-sm">Coop - Conad -Esselunga - Selex</p>
                </div>
                <p className="w-[30%]  text-center md:text-left">PL 2x160</p>
                <div className="w-[30%] flex flex-col  text-center">
                    <p><span className="text">21,4</span> Coop</p>
                    <p><span className="text">16</span> Conad</p>
                    <p><span className="text">21</span> Esselunga</p>
                    <p><span className="text">21,5</span> Selex</p>
                </div>
            </div>

             {/* 13  riga */}
             <div className="flex items-center bg-white w-[96%] md:w-[90%]  px-4 py-2  uppercase textFontLight">
                <p className="w-[30%]">TONNO OLIO FINO 300GR PL STD TRANCIO LATT 0080 CLUS 03 Prodotto HD</p>
                <p className="w-[30%] text-center md:text-left">PL 3x80</p>
                <p className="w-[30%] text text-center">10</p>
            </div>

            {/* 14  riga */}
            <div className="flex items-center bg-white w-[96%] md:w-[90%]  px-4 py-2  uppercase textFontLight">
                <p className="w-[30%]">Tonno all'olio di oliva cluster </p>
                <p className="w-[30%]  text-center md:text-left">Rio Mare 8x80</p>
                <p className="w-[30%] text text-center">20</p>
            </div>

            {/* ultima  riga */}
            <div className="flex items-center bg-white w-[96%] md:w-[90%]  px-4 py-2  uppercase textFontLight">
                <p className="w-[30%]"> </p>
                <p className="w-[30%]"></p>
                <p className="w-[30%]  fontPrimary capitalize text-sm text-center">Media dati etichettatura 17.88%</p>
            </div>


            {/* leggenda */}
            <div className="flex flex-col  text-sm mt-[3%]  w-[96%] md:w-[90%]  px-4 py-2  uppercase textFontLight">
                <p className="">PL = Private Label considerata: COOP + CONAD + ESSELUNGA + SELEX pari al 70% della PL totale.</p>
                <p className="w-[30%]">HD = Prodotto Primo Prezzo / Hard Discount</p>
            </div>

        </div>
        </>
    )
}