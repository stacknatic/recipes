import React from "react";
import "../assets/css/HomePage.css";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="video-wrapper">
        <video autoPlay muted loop id="myVideo">
          <source src="https://www.shutterstock.com/shutterstock/videos/1045260718/preview/stock-footage-close-up-view-of-a-man-chef-cooking-italian-pizza-the-process-of-making-pizza-at-table-fresh.webm" />
          Your browser does not support HTML5 video.
        </video>

        {/* </div> */}

        <NavLink className="browse-recipes" to="/recipes">
          Browse recipes
        </NavLink>
      </div>
      <div>
        <h2>Looking for recipes?</h2>
      </div>
      <div className="homepage-cards-container">
        <div className="homepage-card">
          <h3>Browse recipes</h3>
          <p>
            Find your favourites in this collection. You can search recipes
            based on name or country.
          </p>
          <NavLink className="navlink" to="/recipes">
            Browse recipes
          </NavLink>
        </div>
        <div className="homepage-card">
          <h3>Add recipes</h3>
          <p>Recipe from your country is missing? No worries, add one.</p>
          <NavLink className="navlink" to="/add-recipe">
            Add recipe
          </NavLink>
        </div>
        <div className="homepage-card">
          <h3>About TasteIT</h3>
          <p>
            TasteIT was created as a React basics project under a Full Stack
            development programme.
          </p>
          <a
            href="https://en.bc.fi/"
            target="_blank"
            rel="noreferrer"
            className="navlink"
          >
            Visit programme page
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
