import React from 'react';

const Preview = (props) => {
    return(
        <div className="preview">
        <h2>Preview</h2>
        <div className="lines"></div>

        <ul>
        <li className="fnameview">First name: {props.fname}</li>
            <li className='lnameview'>Last name: {props.lname}</li>
            <li className='phoneview'>Phone: {props.phone}</li>
            <li className='roleview'>Role: {props.role}</li>
            <li className='messageview'>Message: <span className='messagepreview'>{props.message}</span></li>
        </ul>
           
        
        </div>
    )
}

export default Preview;