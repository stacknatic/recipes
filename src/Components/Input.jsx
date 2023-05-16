import React, { useEffect, useState } from 'react';
import {countriesList} from '../countriesList';



const countries = countriesList;
const Ingredients = () => {
    return (
        <>
        <div className='ingredients-input-container'>
            <div>
           <label htmlFor="quantity">Quantity</label>
            <input type="text" id="quantity"/>
                
            </div>

            <div>

            <label htmlFor="ingredient">Ingredient</label>
            <input type="text"id="ingredient" />
           </div>
            </div>
        </>    
    )
    
}

let ingredientsArray = [<Ingredients />]

const ingredientsMap = () => {
    const thelist = ingredientsArray.map(item => {
        return <Ingredients key={item.id}/>
    })
    return thelist
}

const Input = (props) => {
   
    const [loaded, setLoaded] = useState(false);
    const [ingredient, setIngredient] = useState(ingredientsMap())

    

    const ingredientHandler = (e) => {
        e.preventDefault();
        

        setIngredient(
            ingredientsArray = [...ingredientsArray, <Ingredients />]
            )
    }
 
    const Option = (props) => {
        return(
            <option value={props.origin}>{props.origin}</option>
            )
        }
        
        const origin = () => {
         return countries.map((country) => <Option key={country} origin={country}/>)
         
        }
    
        useEffect(() => {
            setLoaded(true);
              
            
    
          }, []);
    if(loaded){

        return(

            <form onSubmit={props.submit}>
                <fieldset>
                    <legend>Add new recipe</legend>

                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name'onInput={props.inputHandler}/>
                <label htmlFor="author">Author</label>
                <input type="text" id='author' name='lname'onInput={props.inputHandler}/>
               
                <label htmlFor="country">Recipe is from</label>
                <select name="country" id="country" onChange={props.inputHandler}>
               {origin()}
                </select>
               
               <label htmlFor="image">Image</label>
               <input type="text" id="image"/>

                <label htmlFor="ingredients">Ingredients</label>
              
                {/* {ingredient} */}
                {
                ingredientsArray.map((item, index) => <Ingredients key={index}/>)}
                <button onClick={ingredientHandler}>add more</button>
           

                <label htmlFor="message">Description</label>
                <textarea name="message" id="message" cols="30" rows="10" onChange={props.inputHandler}></textarea>
                <input className="submit-button" type="submit" value="SEND"/>
                </fieldset>
            </form>

)
}
}

export default Input;