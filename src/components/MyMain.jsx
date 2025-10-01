import {useState, useEffect} from "react"; {/*Creazione della variabile di stato*/}
import MyFilms from "./MyFilms"; {/*Importiamo l'array di MyFilms.jsx nel MyMain.jsx*/}

const MyMain = () => {

    const [films, setFilms] = useState(MyFilms);  {/*Funzione di useState hook per gestire i cambiamenti dei dati*/}
    const [selectGenre, setSelectGenre] = useState (""); {/*Funzione di useState hook per gestire i cambiamenti dei dati*/}

    useEffect (() => {
        
    })

    return (
        <>
            <header>
                <div className="onlyMain">
                    <select></select>
                </div>
            </header>
        </>
    )
}

export default MyMain