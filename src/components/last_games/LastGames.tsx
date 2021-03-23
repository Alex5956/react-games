import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {Game} from "../game/Game";
import {Spinner} from "../load/Spinner";
import './games.sass';

interface Func {
    func: Function
    page: number
    pageSize: number
}

export const LastGames = ({func, page, pageSize}: Func) => {

    const [games, setGames] = useState<[]>([]);
    const [load, setLoad] = useState<boolean>(false);


    const getGames = () => {
        setLoad(false);
        func(page, pageSize).then((g: any) => {
            setGames(g);
            setLoad(true);
        });
    }

    useEffect(() => {
        getGames();
    }, [func]);

    return (
        <section className="games">
            {load ? games ? games.map((game: any, index) => <Link to={'/games/' + game.id}><Game key={index} info={game}/></Link>) : <div>Erreur</div> : <Spinner/>}
        </section>
    );
}
