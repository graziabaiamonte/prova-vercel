
"use client";
import { useState, useEffect, useCallback } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Veloci from './Veloci';
import Portate from './Portate';
import Stagioni from './Stagioni';
import CardRicettaClient from './CardRicettaClient';
import CardRicettaInput from './CardRicettaInput';
import { fetchAllRicette } from '@/api/fetchRicette';


// Configura la dimensione dei batch
const BATCH_SIZE = 6;

export default function SearchBar() {
  const [ricette, setRicette] = useState([]);
  const [allRicette, setAllRicette] = useState([]);
  const [autocompleteOpen, setAutocompleteOpen] = useState(false);
  const [filteredRicette, setFilteredRicette] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedRicetta, setSelectedRicetta] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [loadedRicetteCount, setLoadedRicetteCount] = useState(0); // Contatore delle ricette caricate

  // Funzione per caricare ricette in batch
  const fetchRicetteBatch = useCallback(async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    // console.log(`Fetching recipes for page ${page} with limit ${BATCH_SIZE}`);

    try {
      const newRicette = await fetchAllRicette(BATCH_SIZE, page);

      if (newRicette.length === 0) {
        setHasMore(false); 
        console.log(`No recipes found for page ${page}`);
        return;// Se non ci sono ricette, non cercare più
      } else {
        // Aggiorna la lista di tutte le ricette
        setAllRicette((prevRicette) => {
          const combined = [...prevRicette, ...newRicette];
          const uniqueRicette = [...new Map(combined.map((r) => [r.slug, r])).values()];
          return uniqueRicette;
        });

        // Aggiorna le ricette mostrate
        setRicette((prevRicette) => {
          const updatedRicette = [...prevRicette, ...newRicette];
          const uniqueRicette = [...new Map(updatedRicette.map((r) => [r.slug, r])).values()];
          return uniqueRicette;
        });

        setLoadedRicetteCount((prevCount) => prevCount + newRicette.length); // Incrementa il contatore
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      // console.error("Errore durante il recupero delle ricette:", error);
    } finally {
      setLoading(false);
    }
  }, [page, hasMore, loading]);

  // Effettua il fetch iniziale al caricamento del componente
  useEffect(() => {
    fetchRicetteBatch(); // Carica il primo gruppo di ricette

    const interval = setInterval(() => {
      if (hasMore && loadedRicetteCount < 24) { // Limita il numero totale di ricette caricate
        fetchRicetteBatch(); // Carica ogni 2 secondi
      }
    }, 2000);

    // Clear interval on component unmount or when there are no more recipes
    return () => clearInterval(interval);
  }, [fetchRicetteBatch, hasMore, loadedRicetteCount]);

  // Gestione del cambio nell'input della ricerca
  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    if (newInputValue) {
      const matchingRicette = allRicette.filter((ricetta) =>
        ricetta.nome_ricetta.toLowerCase().includes(newInputValue.toLowerCase())
      );
      setFilteredRicette(matchingRicette);
      setAutocompleteOpen(true);
    } else {
      setFilteredRicette([]);
      setAutocompleteOpen(false);
    }
  };

  const handleSelect = (event, val) => {
    if (val) {
      setSelectedRicetta(val);
      setInputValue(val.nome_ricetta);
      setActiveComponent(null);
    }
    setAutocompleteOpen(false);
  };

  const handleComponentChange = (component) => {
    setActiveComponent(component);
    setSelectedRicetta(null);
    setInputValue('');
    setRicette(allRicette);
  };

  const resetFilters = () => {
    setActiveComponent(null);
    setInputValue('');
    setSelectedRicetta(null);
    setRicette(allRicette);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(); // Call handleSearch when Enter is pressed
    }
  };

  const handleSearch = () => {
    const matchingRicette = allRicette.filter((ricetta) =>
      ricetta.nome_ricetta.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredRicette(matchingRicette);
    setRicette(matchingRicette); // Update displayed recipes based on search
    setAutocompleteOpen(false); // Close the autocomplete
  };

    return (
        <div>
            <div className="flex items-center justify-center">
                <Autocomplete
                  open={autocompleteOpen}
                    onClose={() => setAutocompleteOpen(false)}
                    options={filteredRicette}
                    getOptionLabel={(option) => option.nome_ricetta}
                    inputValue={inputValue}
                    onInputChange={handleInputChange}
                    onChange={handleSelect}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder="Cerca una ricetta..."
                            onKeyDown={handleKeyDown}

                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (
                                    <InputAdornment >
                                        <IconButton onClick={() => handleSearch(inputValue)}>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}

                            sx={{
                                width: 300,
                                borderRadius: '9999px',
                                '& .MuiOutlinedInput-root': {
                                    padding: '10px',
                                    fontSize: '14px',
                                    borderRadius: '9999px',
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#f8efd3', 
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#f8efd3', // Colore del focus
                                    },
                                },
                            }}
                        />
                    )}
                />
            </div>

            {/* barra filtri */}
            <div className="w-full h-[10vh] mt-[5%] md:mt-0 flex flex-col md:flex-row items-center justify-center">
                <p className="fontHeader text-lg uppercase mb-1 md:mb-0 md:mr-4">Filtra per:</p>
                <div className="flex items-center justify-start gap-[5px] md:gap-[20px]">
                    <p
                        onClick={() => handleComponentChange("veloci")}
                        className={`cursor-pointer fontPrimary text-xs md:text-xl bg-yellowDark px-2 md:px-4 py-2 rounded-full uppercase hover:text-red transition duration-500 ease-in-out ${activeComponent === "veloci" ? "text-red bg-yellowLightOpac" : "text-yellowLight"}`}
                    >
                        Veloci
                    </p>
                    <p
                        onClick={() => handleComponentChange("stagioni")}
                        className={`cursor-pointer fontPrimary text-xs md:text-xl bg-yellowDark  px-2 md:px-4 py-2 rounded-full uppercase hover:text-red transition duration-500 ease-in-out ${activeComponent === "stagioni" ? "text-red bg-yellowLightOpac" : "text-yellowLight"}`}
                    >
                        Stagioni
                    </p>
                    <p
                        onClick={() => handleComponentChange("portate")}
                        className={`cursor-pointer fontPrimary text-xs md:text-xl bg-yellowDark  px-2 md:px-4 py-2 rounded-full uppercase hover:text-red transition duration-500 ease-in-out ${activeComponent === "portate" ? "text-red bg-yellowLightOpac" : "text-yellowLight "}`}
                    >
                        Portate
                    </p>

                    <p
                        onClick={resetFilters}
                        className="cursor-pointer fontPrimary text-xs bg-yellowLightOpac px-4 py-2 rounded-full uppercase text-yellowDark hover:text-red"
                    >
                        x
                    </p>
                </div>
            </div>

            {/* Mostra il componente attivo */}
            {activeComponent === "veloci" && <Veloci ricette={ricette}/>}
            {activeComponent === "portate" && <Portate  ricette={ricette}/>}
            {activeComponent === "stagioni" && <Stagioni ricette={ricette}/>}
            
            {/* Mostra le ricette */}
            <div className='flex justify-center mt-[20px]'>
                {activeComponent ? (
                    <p></p>
                ) : selectedRicetta ? (
                    <CardRicettaInput ricetta={selectedRicetta} />
                ) : (
                    <CardRicettaClient  ricette={ricette}/>
                )}
            </div>
        </div>
    );
}