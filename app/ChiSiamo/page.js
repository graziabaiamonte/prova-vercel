import ChiSiamoClient from "../components/ChiSiamoClient";

export const metadata = {
  title: 'Tonno Auriga - Il vero tonno lavorato in Sicilia',
  description: 'Scopri la storia e la tradizione di Tonno Auriga, leader nella produzione di tonno di alta qualità. Da generazioni, offriamo prodotti genuini e sostenibili dal mare alla tua tavola.',
  openGraph: {
    title: 'Tonno Auriga - Tonno per Passione',
    description: 'Scopri la storia e la tradizione di Tonno Auriga, leader nella produzione di tonno di alta qualità. Da generazioni, offriamo prodotti genuini e sostenibili dal mare alla tua tavola.',
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
    description: 'Scopri la storia e la tradizione di Tonno Auriga, leader nella produzione di tonno di alta qualità. Da generazioni, offriamo prodotti genuini e sostenibili dal mare alla tua tavola.',
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

export default function ChiSiamo () {
  return (
    <>
    <ChiSiamoClient/>
    </>
  )

}