import React from 'react';

const Recipes = (props) => {
    return(
        <div className='recipes'>
          <h2>Recipe {props.id}</h2>
        

          <p>Good soup</p>
          <p> <a href="#"> See more</a></p>
          
                      {/* <li>{props.fname}</li>
                      <li>{props.lname}</li>
                      <li>{props.phone}</li>
                      <li>{props.role}</li>
                      <li>{props.message}</li> */}
        </div>
    )

};

export default Recipes