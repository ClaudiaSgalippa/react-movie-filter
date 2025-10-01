import {useState, useEffect} from "react"; {/*Creazione della variabile di stato*/}
import MyFilms from "./MyFilms"; {/*Importiamo l'array di MyFilms.jsx nel MyMain.jsx*/}

const MyMain = () => {

    const [selectGenre, setSelectGenre] = useState (""); {/*Funzione di useState hook per gestire la selezione del genere del film*/}
    const [films, setFilms] = useState(MyFilms);  {/*Funzione di useState hook per gestire i cambiamenti dei dati di partenza dei film*/}
    const [filterFilm, setFilterFilm] = useState (MyFilms); {/*Funzione di useState hook per gestire il nuovo array filtrato*/}
    
    useEffect (() => { {/*Utilizzo del useEffect per filtrare tramite le dipendenze di stato*/}
        
        if (selectGenre === "") {  {/*Se non viene selezionato alcun film (quindi la stringa rimane vuota)*/}
            setFilterFilm(films); {/*Allora si vedrà tutta la lista di film*/}
        } else { {/*Al contrario*/}
            setFilterFilm(films.filter((film) => film.genre === selectGenre)); {/*Verranno visualizzati i film filtrati per genere*/}
        }
    }, [selectGenre, films]); {/*Array di dipendenze che specifica quali componenti bisogna "controllorare" per ri-eseguire il codice*/}

    return (
        <>
            <main>
                <div className="onlyMain">
                    <select></select>
                </div>
            </main>
        </>
    )
}

export default MyMain