import React from 'react';
import '../Recipes.css'

const Recipes = (props) => {
    return(
        <div className='recipes'>
        

          <h2>Recipe {props.id}</h2>
          <p>{props.name}</p>
          
                      <p>{props.name}</p>
                      <p>{props.author}</p>
                      <p>{props.country}</p>
                      <img src={props.image} />
                      <p>{props.description}</p>
          <a className="see-more" href="#"> view full recipe</a>
        </div>
    )

};

export default Recipes