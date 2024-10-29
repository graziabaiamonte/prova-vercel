import OlioOlivaClient from "../components/OlivaClient";

export const metadata = {
    title: `Tonno Auriga - Tonno per Passione - Tonno all'Olio di Oliva`,
    description: `Scopri il Tonno all'Olio di Oliva di Tonno Auriga: un prodotto ricco di sapore e qualità, conservato in olio extravergine di oliva. Perfetto per insalate, pasta e antipasti, unisce gusto e nutrizione in ogni piatto.`,
    openGraph: {
      title: `Tonno Auriga - Tonno per Passione - Tonno all'Olio di Oliva`,
      description: `Scopri il Tonno all'Olio di Oliva di Tonno Auriga: un prodotto ricco di sapore e qualità, conservato in olio extravergine di oliva. Perfetto per insalate, pasta e antipasti, unisce gusto e nutrizione in ogni piatto.`,
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
      title: `Tonno Auriga - Tonno per Passione - Tonno all'Olio di Oliva`,
      description: `Scopri il Tonno all'Olio di Oliva di Tonno Auriga: un prodotto ricco di sapore e qualità, conservato in olio extravergine di oliva. Perfetto per insalate, pasta e antipasti, unisce gusto e nutrizione in ogni piatto.`,
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

export default function OlioOliva() {
    return (
        <>
        <OlioOlivaClient/>
        </>
    )
}