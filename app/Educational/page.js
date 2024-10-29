import EducationalClient from "../components/EducationalClient";

export const metadata = {
    title: 'Tonno Auriga - Tonno per Passione - Educatioal',
    description: 'Scopri curiosità e consigli su Tonno Auriga! Approfondisci le proprietà nutrizionali del tonno, ricette innovative e suggerimenti per una corretta conservazione. Impara a scegliere e gustare al meglio i nostri prodotti.',
    openGraph: {
      title: 'Tonno Auriga - Tonno per Passione - Educational',
      description: 'Scopri curiosità e consigli su Tonno Auriga! Approfondisci le proprietà nutrizionali del tonno, ricette innovative e suggerimenti per una corretta conservazione. Impara a scegliere e gustare al meglio i nostri prodotti.',
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
      title: 'Tonno Auriga - Tonno per Passione - Contatti',
      description: 'Scopri curiosità e consigli su Tonno Auriga! Approfondisci le proprietà nutrizionali del tonno, ricette innovative e suggerimenti per una corretta conservazione. Impara a scegliere e gustare al meglio i nostri prodotti.',
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
  
export default function Educational() {
    return(
        <>
        <EducationalClient/>
        </>
    )
}