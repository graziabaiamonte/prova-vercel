import axios from 'axios';

export const fetchRicetteBySlug = async (slug) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/ricette`, {
            params: { slug }
        });

        const data = response.data;

        if (data.length > 0) {
            const ricetta = data[0];
            let result = {
                id: ricetta.id,
                slug: ricetta.slug,
                nome: ricetta.acf.nome_ricetta,
                sottotitolo: ricetta.acf.sottotitolo,
                portata: ricetta.acf.portata,
                tempoPreparazione: ricetta.acf.tempo_di_preparazione,
                stagione: ricetta.acf.stagione,
                fotoCopertina: ricetta.foto_copertina,
            };

            return result;
        }

        throw new Error('ricetta non trovata');
    } catch (error) {
        // console.log('errore nel recupero della ricetta:', error);
        throw error;
    }
};


// Funzione generale per il recupero dei dati con immagini
export const fetchLastRicette = async () => {
    try {
        // Limita la richiesta API a solo 6 ricette
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/ricette?_limit=6&orderby=date&order=asc`);
        const ricette = response.data;

        const ricetteWithImages = await Promise.all(
            ricette.map(async (ricetta) => {
                // Inizializza result come oggetto vuoto
                const result = {
                    ...ricetta.acf, // Clona acf in result
                    slug: ricetta.slug || '',
                    fotoCopertina: null, // Inizializza a null
                    dataImmissione: ricetta.date || '', // Prendi la data direttamente dal campo date
                };

                // Controlla se la ricetta ha una foto di copertina nel campo `foto_copertina`
                if (result.foto_copertina) {
                    try {
                        const imageResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/media/${result.foto_copertina}`);
                        result.fotoCopertina = imageResponse.data.media_details.sizes.full.source_url;
                    } catch (imageError) {
                        // console.error(`Errore nel recupero dell'immagine per la ricetta ${ricetta.id}:`, imageError);
                    }
                }

                return result; // Restituisce il risultato
            })
        );

        return ricetteWithImages; // Restituisce solo le ultime 6 ricette con le immagini
    } catch (error) {
        // console.error('Errore nel recupero delle ricette:', error);
        throw error;
    }
};




let ricetteCache = {};

export const fetchAllRicette = async (perPage = 6, page = 1) => {
    const cacheKey = `${perPage}-${page}`;
    if (ricetteCache[cacheKey]) {
      // console.log(`Utilizzo della cache per la pagina ${page}`);
      return ricetteCache[cacheKey];
    }
  
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/ricette`, {
        params: { page, _limit: perPage }
      });
  
      const data = response.data;
      if (!data.length) return [];
  
      const ricetteWithImages = await Promise.all(
        data.map(async (ricetta) => {
          let fotoCopertinaUrl = null;
          if (ricetta.acf?.foto_copertina) {
            try {
              const imageResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/media/${ricetta.acf.foto_copertina}`);
              fotoCopertinaUrl = imageResponse.data?.media_details?.sizes?.full?.source_url || null;
            } catch (imageError) {
              // console.error(`Errore nel recupero dell'immagine per la ricetta ${ricetta.id}:`, imageError);
            }
          }
  
          return {
            ...ricetta.acf,
            slug: ricetta.slug || '',
            fotoCopertina: fotoCopertinaUrl || null,
            dataImmissione: ricetta.date || '',
          };
        })
      );
  
      // Memorizza nella cache
      ricetteCache[cacheKey] = ricetteWithImages;
      return ricetteWithImages;
    } catch (error) {
      console.error('Errore durante il fetch delle ricette:', error);
      return [];
    }
  };
  


