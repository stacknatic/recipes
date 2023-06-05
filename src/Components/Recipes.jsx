import React from "react";
import "../assets/css/Recipes.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import { Link } from "react-router-dom";

const Recipes = () => {
 
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setIsLoading(true);

    axios.get("https://stacknatic.com/recipes/")
    .then((response) => {
      setData(response.data);
      setIsLoading(false);
    })
    .catch((e) => null)

    ;
  }, []);

  if (isLoading) {
    return <progress></progress>;
  }

  const Card = ({ id, name, country, image, flag }) => {
    return (
      <div className="recipes">
        <picture className="country-flag">
          <source
            className="country-flag"
            type="image/webp"
            srcSet={`https://flagcdn.com/w40/${flag}.webp,
      https://flagcdn.com/w80/${flag}.webp 2x`}
          />
          <source
            className="country-flag"
            type="image/png"
            srcSet={`https://flagcdn.com/w40/${flag}.png,
      https://flagcdn.com/w80/${flag}.png 2x`}
          />
          <img
            className="country-flag"
            src={`https://flagcdn.com/w40/${flag}.png`}
            width="40"
            alt={country}
          />
        </picture>

        <img className="recipe-photo" src={image} alt={name} />
        <h2>{name}</h2>

        <Link to={id.toString()} className="see-more">
          view recipe
        </Link>
      </div>
    );
  };

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchFilter = data.filter((recipe) => {
    return recipe.name.includes(searchInput);
  });

  const TheRecipes = () => {
    const therecipes = searchFilter.map((recipe) => {
      return (
        <Card
          key={recipe.id}
          id={recipe.id}
          name={recipe.name}
          image={recipe.image}
          flag={recipe.flag}
          country={recipe.country}
        />
      );
    });
    return therecipes;
  };

  if (isLoading) {
    return (
      <div className="preloader">
        <progress></progress>
      </div>
    );
  }

  return (
    <div>
      <Search searchHandler={searchInputHandler} />
      <main>
        <div className="recipes-container">
          <TheRecipes />
        </div>
      </main>
    </div>
  );
};

export default Recipes;
