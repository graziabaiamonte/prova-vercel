 import ProdottiClient from "../components/ProdottiClient";


export const metadata = {
    title: 'Tonno Auriga - Tonno per Passione - I nostri prodotti',
    description: 'Esplora la gamma di prodotti Tonno Auriga, realizzati con tonno di alta qualità e lavorati secondo la tradizione. Scopri le nostre gustose e sostenibili proposte, specialità dal mare.',
    openGraph: {
      title: 'Tonno Auriga - Tonno per Passione -  I nostri prodotti',
      description: 'Esplora la gamma di prodotti Tonno Auriga, realizzati con tonno di alta qualità e lavorati secondo la tradizione. Scopri le nostre gustose e sostenibili proposte, specialità dal mare.',
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
      title: 'Tonno Auriga - Tonno per Passione -  I nostri prodotti',
      description: 'Esplora la gamma di prodotti Tonno Auriga, realizzati con tonno di alta qualità e lavorati secondo la tradizione. Scopri le nostre gustose e sostenibili proposte, specialità dal mare.',
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
export default function Prodotti () {
    return (
        <>
        <ProdottiClient/>
        </>
    )
}