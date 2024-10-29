import NaturaleClient from "../components/NaturaleClient";

export const metadata = {
    title: 'Tonno Auriga - Tonno per Passione - Tonno al Naturale',
    description: 'Scopri il Tonno al Naturale di Tonno Auriga, realizzato con ingredienti freschi e senza additivi. Perfetto per chi cerca un prodotto sano e versatile, ideale per insalate, piatti freddi e ricette gourmet.',
    openGraph: {
      title: 'Tonno Auriga - Tonno per Passione - Tonno al Naturale',
      description: 'Scopri il Tonno al Naturale di Tonno Auriga, realizzato con ingredienti freschi e senza additivi. Perfetto per chi cerca un prodotto sano e versatile, ideale per insalate, piatti freddi e ricette gourmet.',
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
      title: 'Tonno Auriga - Tonno per Passione - Tonno al Naturale',
      description: 'Scopri il Tonno al Naturale di Tonno Auriga, realizzato con ingredienti freschi e senza additivi. Perfetto per chi cerca un prodotto sano e versatile, ideale per insalate, piatti freddi e ricette gourmet.',
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
  
export default function Naturale() {
    return (
        <>
        <NaturaleClient/>
        </>
    )
}