import React, { useState } from "react";

const Form = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    // console.log(userData,"userData")

    const handleChange = (event) => {
        console.log(event.target.value, "value", event.target.value, "name")
    }

    const sendDataToBackend = () => {
        alert("Data Submitted to Backend...")
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={sendDataToBackend}>
                <label>Name :</label><br />
                <input name='name' type='text' onChange={handleChange} /> <br />
                <label>Email :</label><br />
                <input name='email' type='email' onChange={handleChange} /> <br />
                <label>Password :</label><br />
                <input name='password' type='password' onChange={handleChange} /> <br />
                <input type='submit' /> <br />
            </form>
        </div>
    )
}

export default Form