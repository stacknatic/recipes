import React from 'react';


const Modal = (props) => {
    return(
      <div class="modal-container">
      <div class="modal-box">
        <span class="modal-close-button">x</span>
        <h2 id="modal-heading">This is your note:</h2>
        <p class="feedback"></p>
        <div>
            <p className="fnameview">First name: {props.fname}</p>
            <p className='lnameview'>Last name: {props.lname}</p>
            <p className='phoneview'>Phone: {props.phone}</p>
            <p className='roleview'>Role: {props.role}</p>
            <p className='messageview'>Message: {props.message}</p>
            <button className='modal-button'>YES, I AM SURE</button>
            <span>NO, I DON'T WANT TO POST IT</span>
        
        </div>
      </div>

      </div>
    )
}

export default Modal;