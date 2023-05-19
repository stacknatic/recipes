import React, { useEffect, useState } from "react";
import { countriesList } from "../countriesList";
import axios from "axios";

const countries = countriesList;

// const Ingredients = (props) => {
//     return (
//         <div className='ingredients-input-container'>
//             <div>
//            <label htmlFor="quantity">Quantity</label>
//             <input name="quantity" type="text" onChange={props.handler}/>
//             </div>

//             <div>
//             <label htmlFor="ingredient">Ingredient</label>
//             <input name="ingredient" type="text" onChange={props.handler}/>
//            </div>
//             </div>
//     )

// }

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

// let ingredientsArray = [<Ingredients />];

const Input = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [ingredients, setIngredients] = useState([
    { quantity: "", ingredient: "" },
  ]);
  // let [ingredients, setIngredients] = useState([]);
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

          console.log(flag.toLowerCase());
          
          setRecipeInfo(recipeInfo.flag = flag.toLowerCase());
        }
    }
    }
    setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit clicked");

    console.log(recipeInfo);

    axios
      .post("http://localhost:3015/posts/", recipeInfo)
      .then((response) => console.log("response", response))
      .catch((error) => console.log("error", error));
  };

  // const ingredientHandler = (e) => {
  //     e.preventDefault();

  //     setIngredient(
  //         ingredientsArray = [...ingredientsArray, <Ingredients />]
  //         )
  // }

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

            {/* {Object.keys(countries).map((country, value) => <Option key={country} origin={value}/>)} */}
            {/* {() => {
                    for(const[ key, value] of countries) {
                        checker = <Option key={key} origin ={value} />
                    }
                }} */}

            {/* {countries.map(country => <Option key={country} origin={country}/>)} */}
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

          {/* {
                ingredientsArray.map((item, index) => {
                    return item=<Ingredients key={index} handler={(e) => addIngredient(e, index)}/>
                } )} */}
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

export default Input;
