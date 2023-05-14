import React from 'react';
import { NavLink } from 'react-router-dom';

import '../Header.css';

const Header = () => {
    return(
        <header>
            <h1>Recipes</h1>
            <nav>
                <ul>
                    <NavLink className="navlink" to="/">
                    Home
                    </NavLink>
                    <NavLink className="navlink" to="/results">
                    Recipes
                    </NavLink>
                    <NavLink className="navlink" to="/add-recipe">
                    Add new recipe
                    </NavLink>
                   
                </ul>
            </nav>
        </header>
    )
}

export default Header;