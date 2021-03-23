import React from "react";
import {Nav} from "../nav/Nav";
import { Search } from "../search/Search";
import './header.sass'

export const Header: any = () => {

    return (
        <header>
            <h1>Liste de jeux vidéos</h1>
            <Search />
            <Nav/>
        </header>
    );
}
