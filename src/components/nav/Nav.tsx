import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.sass';

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
                <li><NavLink exact to="/rating" activeClassName="selected">Les mieux notés</NavLink></li>
                {/*<li><NavLink exact to="/created" activeClassName="selected">Par création</NavLink></li>*/}
                {/*<li><NavLink exact to='/platform' activeClassName='selected'>Par plateformes</NavLink></li>*/}
            </ul>
        </nav>
    );
}
