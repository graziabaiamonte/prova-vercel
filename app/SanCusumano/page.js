import SanCusumanoClient from "../components/SanCusumanoClient";

export const metadata = {
    title: 'Tonno Auriga - Tonno per Passione - Selezione San Cusumano',
    description: 'Scopri la Selezione San Cucumano di Tonno Auriga: una linea esclusiva di tonno pregiato, lavorato a mano e scelto per la sua eccellenza. Gusta il sapore autentico del mare con prodotti di altissima qualità.',
    openGraph: {
      title: 'Tonno Auriga - Tonno per Passione - Selezione San Cusumano',
      description: 'Scopri la Selezione San Cucumano di Tonno Auriga: una linea esclusiva di tonno pregiato, lavorato a mano e scelto per la sua eccellenza. Gusta il sapore autentico del mare con prodotti di altissima qualità.',
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
      title: 'Tonno Auriga - Tonno per Passione - Selezione San Cusumano',
      description: 'Scopri la Selezione San Cucumano di Tonno Auriga: una linea esclusiva di tonno pregiato, lavorato a mano e scelto per la sua eccellenza. Gusta il sapore autentico del mare con prodotti di altissima qualità.',
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

export default function SanCusumano () {
    return (
        <>
        <SanCusumanoClient/>
        </>
    )
}