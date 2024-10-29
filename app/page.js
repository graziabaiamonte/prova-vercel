import HomePage from "./Home/page";
import { fetchLastRicette } from "../api/fetchRicette";
import Script from "next/script";

export const metadata = {
  title: 'Tonno Auriga - Tonno per Passione, Il vero tonno lavorato in Sicilia',
  description: 'Il vero tonno lavorato in Sicilia, frutto di anni di esperienza nella pesca e nella lavorazione. Auriga porta la tradizione siciliana nel tuo piatto.',
  openGraph: {
    type: 'website',
    title: 'Tonno Auriga - Tonno per Passione',
    description: 'Il vero tonno lavorato in Sicilia, frutto di anni di esperienza nella pesca e nella lavorazione. Auriga porta la tradizione siciliana nel tuo piatto.',
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
    description: 'Il vero tonno lavorato in Sicilia, frutto di anni di esperienza nella pesca e nella lavorazione. Auriga porta la tradizione siciliana nel tuo piatto.',
    image: 'https://www.tonnoauriga.it/wp/wp-content/uploads/2024/10/Tonno_Auriga_prodotti.webp', 
  },
  robots: {
    index: true,
    follow: true
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'tonno, auriga, castiglione, erice, trapani, sicilia, tonno in scatola '
    },
    {
      name: 'author',
      content: 'Tonno Auriga'
    },
    {
      rel: 'canonical',  // Aggiungi il link canonico
      href: 'https://www.tonnoauriga.it'  // URL canonico
    }
  ]
};
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Website',
  name: 'Tonno Auriga',
  image: 'https://www.tonnoauriga.it/wp/wp-content/uploads/2024/10/Tonno_Auriga_prodotti.webp',
  description: 'Il vero tonno lavorato in Sicilia, frutto di anni di esperienza nella pesca e nella lavorazione. Auriga porta la tradizione siciliana nel tuo piatto.',
}


export default async function Home() {
 const ricette = await fetchLastRicette();
  return (
    <>
    <HomePage  ricette={ricette}/> 
    <Script
    id="organization"
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
    </>
  );
}