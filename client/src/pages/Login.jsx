import React from "react";
import { useState } from "react";
import { LogInUser } from "../services/Auth";
import { useNavigate } from "react-router-dom";

const LogIn = (props) => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({ email: '', password: ''})

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await LogInUser(formValues)
        setFormValues({ email: '', password: ''})
        props.setUser(payload)
        navigate('/games')
    }


    return (
        <div className="login col"> 
            <div className="card-overlay centered">
                <form className="col" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <h4>Email: </h4>
                        <input 
                        onChange={handleSChange}
                        name="email"
                        type="email"
                        placeholder="example@example.com"
                        value={formValues.email}
                        required/>
                    </div>
                    <div className="input-wrapper">
                        <h4>Password: </h4>
                        <input 
                        onChange={handleSChange}
                        name="password"
                        type="password"
                        value={formValues.password}
                        required/>
                    </div>
                    <button disabled={!formValues.email || !formValues.password}> Log In</button>
                </form>
            </div>
        </div>
    )
}

export default LogIn