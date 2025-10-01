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
                <div className="filmsContainer">
                    <ul className="listFilms">
                        {filterFilm.map((film, i) => (
                            <li key={i}>
                                "{film.title}" - {film.genre}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="optionContainer">
                    <h2>Scegli il genere che preferisci! Ti mostreremo i film a disposizione</h2>
                    <select className="genreFilms" value={selectGenre} onChange={(e) => {setSelectGenre(e.target.value)}}>
                        <option value="">-</option>
                        <option value="Fantascienza">Fantascienza</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Romantico">Romantico</option>
                        <option value="Azione">Azione</option>
                    </select>
                </div>
            </main>
        </>
    )
}

export default MyMain