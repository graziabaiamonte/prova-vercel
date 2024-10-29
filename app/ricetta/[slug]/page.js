import { fetchAllRicette, fetchRicetteBySlug } from "@/api/fetchRicette";

// Imposta il revalidate per l'ISR a 60 secondi
export const revalidate = 60;
export const dynamicParams = true;

// Funzione per generare i parametri statici per le pagine
export async function generateStaticParams() {
    const ricette = await fetchAllRicette();

    // Crea i parametri statici per ciascuna ricetta
    return ricette.map(ricetta => ({
        slug: ricetta.slug, // Assicurati che slug sia un campo presente nei dati delle ricette
    }));
}

// Funzione principale per la pagina della ricetta
export default async function Ricetta({ params }) {
    const { slug } = await params; // Ottieni lo slug dai parametri
    const ricetta = await fetchRicetteBySlug(slug); // Ottieni i dati della ricetta tramite lo slug

    return (
        <div className="h-[80vh] flex items-center justify-center">
            <h1>{ricetta.nome}</h1>
        </div>
    );
}
