import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/css/RecipeDetails.css";

const RecipeDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [ingredientEntries, setIngredientEntries] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`http://localhost:3015/posts/${params.recipedetails}`)
      .then((response) => {
        setIngredientEntries(response.data.ingredients);
        setRecipe(response.data);
      });
    setIsLoading(false);
  }, [params]);

  if (isLoading) {
    return <progress></progress>;
  }
  const ingredients = () => {
    try {
      const mydata = Object.entries(ingredientEntries).map(([key, value]) => {
        return (
          <li key={key}>
            {value.ingredient}: {value.quantity}
          </li>
        );
      });
      return mydata;
    } catch (e) {
      return null;
    }
  };

  return (
    <>
      <div className="recipe-details-container">
        <div className="recipe-card">
          <picture className="country-flag">
            <source
              className="country-flag"
              type="image/webp"
              srcSet={`https://flagcdn.com/w40/za.webp,
      https://flagcdn.com/w80/${recipe.flag}.webp 2x`}
            />
            <source
              className="country-flag"
              type="image/png"
              srcSet={`https://flagcdn.com/w40/za.png,
      https://flagcdn.com/w80/${recipe.flag}.png 2x`}
            />
            <img
              className="country-flag"
              src={`https://flagcdn.com/w40/${recipe.flag}.png`}
              width="40"
              alt={recipe.country}
            />
          </picture>

          <figure>
            <img
              className="recipe-details-photo"
              src={recipe.image}
              alt={"image of: " + recipe.name}
            ></img>
            <figcaption>
              <h1>{recipe.name}</h1>
            </figcaption>
          </figure>
        </div>
        <div className="recipe-details">
          <h2>Description</h2>
          <p>{recipe.description}</p>
          <h2>Ingredients</h2>
          <ul className="ingredients-list">{ingredients()}</ul>
          <h2>Instruction</h2>
          <p>{recipe.instructions}</p>
        </div>
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        Back to recipes{" "}
      </button>
    </>
  );
};

export default RecipeDetails;
