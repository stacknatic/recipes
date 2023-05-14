import React from 'react';

const Notes = (props) => {
    return(
        <div className='recipes'>
            <h2>Recipe {props.id}</h2>
            <ul>
            {/* <li>{props.name}</li>
            <li>{props.author}</li>
            <li>{props.country}</li>
            <li>{props.description}</li>
            <li>{props.image}</li>
            <li>{props.quantiy}</li>
            <li>{props.ingredient}</li>
            <li>{instructions}</li> */}

            <li>{props.fname}</li>
            <li>{props.lname}</li>
            <li>{props.phone}</li>
            <li>{props.role}</li>
            <li>{props.message}</li>
            </ul>
        </div>
    )

};

export default Notes