import React from 'react';

const Input = (props) => {
    return(
        <div>
            <form onSubmit={props.submit}>

                <label htmlFor="fname">First name</label>
                <input type="text" id='fname' name='fname'onInput={(e) => props.fnameHandler(e)}/>
                <label htmlFor="lname">Last name</label>
                <input type="text" id='lname' name='lname'onInput={(e) => props.lnameHandler(e)}/>
                <label htmlFor="phone">Phone</label>
                <input type="number" id='phone' name='phone'onInput={(e) => props.inputHandler(e)}/>
                <label htmlFor="role">Role</label>
                <select name="role" id="role" onInput={(e) => props.inputHandler(e)}>
                <option value="mercedes">Teacher</option>
                <option value="saab">Student</option>
                <option value="volvo">Other</option>
                </select>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" onChange={() => props.inputHandler()}></textarea>
                <input className="submit-button" type="submit" value="SEND"/>
            </form>

        </div>
    )
}

export default Input;