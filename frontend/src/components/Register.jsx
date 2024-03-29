import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import toast from 'react-hot-toast';
import api from "../Helpers/AxiosConfig";

const Register = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    const router = useNavigate();
    // console.log(userData,"userData")

    const handleChange = (event) => {
        // console.log(event.target.value, "value", event.target.value, "name")
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const sendDataToBackend = async (event) => {
        event.preventDefault();
        // alert("Data Submitted to Backend...")
        if (userData.name && userData.email && userData.password) {
            if (userData.password.length >= 8) {
                // const response = await axios.post("http://localhost:8000/register", { userData });
                // const response = { data: { success: true } };
                // if (response.data.success) {
                //     alert("Registeration successfull.")
                //     setUserData({ name: "", email: "", password: "" })
                //     router("/")
                // } else {
                //     alert(response.data.error)
                try {
                    const response = await api.post("/auth/register", { userData });
                    // const response = { data: { success: true } };
                    if (response.data.success) {
                        toast.success("Registeration successfull.")
                        setUserData({ name: "", email: "", password: "" })
                        router("/login")
                    } else {
                        throw new Error("Something went wrong..")
                    }
                } catch (error) {
                    toast.error(error?.message)
                    console.log(error, "error here")
                }
            } else {
                alert("Password must be 8 digit.")
            }
        } else {
            alert("Please fill the all values..")
        }
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
                <input type='submit' value="Register here" /> <br />
            </form>
        </div>
    )
}

export default Register