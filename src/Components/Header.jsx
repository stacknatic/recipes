import React from "react";
import { NavLink } from "react-router-dom";

import "../assets/css/Header.css";

const Header = () => {
  return (
    <header>
      <a href="/" className="site-title">TasteIT</a>
      <nav>
        <ul>
          <li>
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/recipes">
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/add-recipe">
              Add new recipe
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
