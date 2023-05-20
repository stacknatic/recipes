import React, { useEffect, useState } from "react";
import { countriesList } from "../countriesList";
import axios from "axios";
import Swal from "sweetalert2";

const countries = countriesList;

const Ingredients = ({ addQuantity, addIngredient, index }) => {
  return (
    <div className="ingredients-input-container">
      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          name="quantity"
          type="text"
          onChange={(e) => addQuantity(e, index)}
        />
      </div>

      <div>
        <label htmlFor="ingredient">Ingredient</label>
        <input
          name="ingredient"
          type="text"
          onChange={(e) => addIngredient(e, index)}
        />
      </div>
    </div>
  );
};

const RecipeForm = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [ingredients, setIngredients] = useState([
    { quantity: "", ingredient: "" },
  ]);
  const [recipeInfo, setRecipeInfo] = useState({
    name: "",
    author: "",
    country: "",
    description: "",
    image: "",
    flag: "",
    ingredients: [],

    instructions: "",
  });

  const Option = (props) => {
    return <option value={props.origin}>{props.origin}</option>;
  };

  let flag;
  const inputHandler = (e) => {
    if (e.target.name === "country") {
      for (const [key, value] of Object.entries(countries)) {
        if (e.target.value === value) {
          flag = key;          
          setRecipeInfo(recipeInfo.flag = flag.toLowerCase());
        }
    }
    }
    setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3015/posts/", recipeInfo)
      .then((response) => Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Recipe added successfully',
        showConfirmButton: false,
        timer: 2000
      }))
      .catch((error) => Swal.fire("Can't proceed"));
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  const ingredientHandler = (e, index) => {
    const updateIngredients = [...recipeInfo.ingredients];
    updateIngredients[index] = {
      ...updateIngredients[index],
      [e.target.name]: e.target.value,
    };
    setRecipeInfo({ ...recipeInfo, ingredients: updateIngredients });
  };

  const addMoreHandler = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, { quantity: "", ingredient: "" }]);
  };

  if (loaded) {
    return (
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>Add new recipe</legend>

          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={inputHandler} />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={inputHandler}
          />

          <label htmlFor="country">Recipe is from</label>
          <select
            name="country"
            value={recipeInfo.country}
            onChange={inputHandler}
          >
            {Object.values(countries).map((country) => (
              <Option key={country} origin={country} />
            ))}

          </select>
          <label htmlFor="descriptiom">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            onChange={inputHandler}
          />

          <label htmlFor="image">Image</label>
          <input type="text" id="image" name="image" onChange={inputHandler} />

          <label htmlFor="ingredients">Ingredients</label>

          {ingredients.map((ingredient, i) => (
            <Ingredients
              key={i}
              index={i}
              addQuantity={ingredientHandler}
              addIngredient={ingredientHandler}
            />
          ))}
          <button onClick={addMoreHandler}>add more</button>

          <label htmlFor="instructions">Instructions</label>
          <textarea
            name="instructions"
            id="instructions"
            cols="30"
            rows="10"
            onChange={inputHandler}
          />
          <input className="submit-button" type="submit" value="SUBMIT" />
        </fieldset>
      </form>
    );
  }
};

export default RecipeForm;
