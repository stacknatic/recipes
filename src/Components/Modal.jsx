import React from 'react';


const Modal = (props) => {
    return(
      <div className="modal-container">
      <div className="modal-box">
        <span className="modal-close-button" onClick={props.click}>x</span>
        <h2 id="modal-heading">This is your note:</h2>
        <p className="feedback"></p>
        <div>
            <p className="fnameview">First name: {props.fname}</p>
            <p className='lnameview'>Last name: {props.lname}</p>
            <p className='phoneview'>Phone: {props.phone}</p>
            <p className='roleview'>Role: {props.role}</p>
            <p className='messageview'>Message: {props.message}</p>
            <button className='modal-button' onClick={props.submitHandler}>YES, I AM SURE</button>
            <button className="cancel" onClick={props.click}>NO, I DON'T WANT TO POST IT</button>
        
        </div>
      </div>

      </div>
    )
}

export default Modal;