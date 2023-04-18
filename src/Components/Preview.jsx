import React from 'react';

const Preview = (props) => {
    return(
        <div className="preview">
        <h2>Preview</h2>
        <div class="lines"></div>

        <ul>
        <li className="fnameview">First name: {props.fname}</li>
            <li className='lnameview'>Last name: {props.lname}</li>
            <li className='phoneview'>Phone: {props.phone}</li>
            <li className='roleview'>Role: {props.role}</li>
            <li className='messageview'>Message: {props.message}</li>
        </ul>
            {/* <p className="fnameview">First name: {() => props.fnameHandler}</p>
            <p className='lnameview'>Last name: {() => props.lnameHandler}</p>
            <p className='phoneview'>Phone: {() => props.phoneHandler}</p>
            <p className='roleview'>Role: {() => props.roleHandler}</p>
            <p className='messageview'>Message: {() => props.messageHandler}</p> */}
        
        </div>
    )
}

export default Preview;