import React from "react";
import {RegisterUser} from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let navigate = useNavigate()
    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await RegisterUser({
            name: formValues.name,
            email: formValues.email,
            password: formValues.password
        }),
        setFormValues({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }),
        navigate('/register')
    }


    return (
        <div className="signin col">
            <div className="card-overlay centered">
                <form className="col" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <h4>Name</h4>
                        <input
                        onChange={handleChange}
                        name="name"
                        type="text"
                        placeholder="John Cena "
                        value={formValues.name}
                        required />
                    </div>
                    <div className="input-wrapper">
                        <h4>Email</h4>
                        <input
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="example@example.com"
                        value={formValues.email}
                        required />
                    </div>
                    <div className="input-wrapper">
                        <h4>Password</h4>
                        <input 
                        onChange={handleChange}
                        type="password"
                        name="confirmPassword"
                        value={formValues.password}
                        required/>
                    </div>
                    <div className="input-wrapper">
                        <h4>Confirm Password</h4>
                        <input 
                        onChange={handleChange}
                        type="password"
                        name="confirmPassword"
                        value={formValues.confirmPassword}
                        required/>
                    </div>
                    <button
                    disabled={
                        !formValues.email || (!formValues.password && formValues.confirmPassword === formValues.password)
                    }> Register </button>
                </form>
            </div>
        </div>
    )
}

export default Register