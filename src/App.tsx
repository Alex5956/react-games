import React from 'react';
import './App';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Header} from './components/header/Header';
import {LastGames} from './components/last_games/LastGames';
import {getRating, getReleased} from "./services/http";
import { GameOne } from './components/game_one/GameOne';

function App() {
    return (
        <Router>
            <Header/>

            <Switch>
                <Route path="/" exact>
                    <LastGames func={getReleased} page={1} pageSize={40}/>
                </Route>
                <Route path="/rating" exact>
                    <LastGames func={getRating} page={1} pageSize={40}/>
                </Route>
                <Route path="/games/:gameId" component={GameOne} exact />
            </Switch>
        </Router>
    );
}

export default App;
