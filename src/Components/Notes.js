import React from 'react';

const Notes = (props) => {
    return(
        <div className='notes'>
            <h2>Note {props.id}</h2>
            <ul>

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