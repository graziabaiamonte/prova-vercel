import FilolioClient from "../components/FilolioClient";

export const metadata = {
    title: 'Tonno Auriga - Tonno per Passione - Tonno Filolio',
    description: 'Scopri il Tonno Filolio di Tonno Auriga: un prodotto pregiato conservato in olio di alta qualità per esaltare il suo sapore autentico. Perfetto per insalate, primi piatti e antipasti gourmet, unisce gusto e versatilità.',
    openGraph: {
      title: 'Tonno Auriga - Tonno per Passione - Tonno Filolio',
      description: 'Scopri il Tonno Filolio di Tonno Auriga: un prodotto pregiato conservato in olio di alta qualità per esaltare il suo sapore autentico. Perfetto per insalate, primi piatti e antipasti gourmet, unisce gusto e versatilità.',
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
      title: 'Tonno Auriga - Tonno per Passione - Tonno Filolio',
      description: 'Scopri il Tonno Filolio di Tonno Auriga: un prodotto pregiato conservato in olio di alta qualità per esaltare il suo sapore autentico. Perfetto per insalate, primi piatti e antipasti gourmet, unisce gusto e versatilità.',
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

export default function Filolio() {
    return (
        <>
        <FilolioClient/>
        </>
    )
}