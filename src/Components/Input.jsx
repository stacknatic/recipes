import React from 'react';

const Input = (props) => {
    return(
            <form onSubmit={props.submit}>

                <label htmlFor="fname">First name</label>
                <input type="text" id='fname' name='fname'onInput={props.inputHandler}/>
                <label htmlFor="lname">Last name</label>
                <input type="text" id='lname' name='lname'onInput={props.inputHandler}/>
                <label htmlFor="phone">Phone</label>
                <input type="number" id='phone' name='phone' onInput={props.inputHandler}/>
                <label htmlFor="role">Role</label>
                <select name="role" id="role" onChange={props.inputHandler}>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
                <option value="Other">Other</option>
                </select>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" onChange={props.inputHandler}></textarea>
                <input className="submit-button" type="submit" value="SEND"/>
            </form>

    )
}

export default Input;