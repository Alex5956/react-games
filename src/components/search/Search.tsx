import React, {useState} from "react";
import {Link} from "react-router-dom";
import {searchGame} from "../../services/http";
import './search.sass';

export const Search = () => {

    const [games, setGames] = useState([]);
    const [isfocus, setIsFocus] = useState(false);

    const handleSearch = (e: any) => {
        if (e.target.value.length > 2) {
            searchGame(e.target.value).then(res => {
                setGames(res);
            })
        } else {
            setGames([]);
        }
        console.log(games)
    }

    function handleFocus() {
        setIsFocus(true);
    }

    function handleBlur() {
        setTimeout(() => {
            setIsFocus(false);
            setGames([]);
            let search: HTMLInputElement = document.getElementById('search') as HTMLInputElement;
            if (search) search.value = '';
        }, 300);
    }

    return (
        <div className="search">
            <input type="search" name="search" id="search" onClick={handleSearch} onKeyUp={handleSearch} onFocus={handleFocus} onBlur={handleBlur}/>
            {games && isfocus &&
            <ul>
                {games.map((game: any, index) => <li key={index}><Link to={'/games/' + game.id}>{game.name}</Link></li>)}
            </ul>
            }
        </div>
    );
}
