import ContattiClient from "../components/ContattiClient";

export const metadata = {
    title: 'Tonno Auriga, Il vero tonno lavorato in Sicilia - Contatti',
    description: 'Contatta Tonno Auriga per informazioni sui nostri prodotti di alta qualità. Siamo a tua disposizione per richieste, supporto clienti e collaborazioni commerciali. Scrivici o chiamaci!',
    openGraph: {
      title: 'Tonno Auriga - Tonno per Passione',
      description: 'Contatta Tonno Auriga per informazioni sui nostri prodotti di alta qualità. Siamo a tua disposizione per richieste, supporto clienti e collaborazioni commerciali. Scrivici o chiamaci!',
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
      description: 'Contatta Tonno Auriga per informazioni sui nostri prodotti di alta qualità. Siamo a tua disposizione per richieste, supporto clienti e collaborazioni commerciali. Scrivici o chiamaci!',
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
export default function Contatti () {
    return (
        <>
        <ContattiClient/>
        </>
    )
}
