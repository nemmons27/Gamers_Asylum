import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Client from "../services/api";

const NewGame = ({getGames, user}) => {

    const initialState = {
        name: '',
        image: '',
        description: '',
        genre: '',
    }

    const [formState, setFormState] = useState(initialState)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Client.post('/games', formState)
        setFormState(initialState)
        navigate('/games')
    }

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value})
    }

    return user ? (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h3>Add a new Game to The Asylum</h3>
                <br />
                <h5>Name: </h5>
                <input type="text" id="name" onChange={handleChange} value={formState.name}/>
                <br />
                <h5>Cover url: </h5>
                <input type="text" id="image" onChange={handleChange} value={formState.image}/>
                <br />
                <h5>Description: </h5>
                <input type="text" id="description" className="descriptionText" onChange={handleChange} value={formState.description}/>
                <br />
                <h5>Genre: </h5>
                <select id="genre" onChange={handleChange} value={formState.genre}>
                    <option value="Adventure">Adventure </option>
                    <option value="Action">Action </option>
                    <option value="Driving">Driving </option>
                    <option value="Fighting">Fighting </option>
                    <option value="Horror">Horror </option>
                    <option value="MMO">MMO </option>
                    <option value="Puzzle">Puzzle </option>
                    <option value="RPG">RPG </option>
                    <option value="Shooting">Shooting </option>
                    <option value="Sports">Sports </option>
                </select>
                <br />
                <br />
                <button className="button" type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    ) : (
        <div className='guard'>
            <h4>Log in to see more! </h4>
            <button className='button' onClick={() => navigate('/login')}>Log In</button>
        </div>
    )
}

export default NewGame