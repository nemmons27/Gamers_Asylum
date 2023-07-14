import React from "react";
import { useState } from "react";
import axios from "axios";

const NewGame = ({getGames}) => {

    const initialState = {
        name: '',
        description: '',
        genre: '',
    }

    const [formState, setFormState] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3001/games', formState)
        setFormState(initialState)
        getGames()
    }

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value})
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h3>Add a new Game to The Asylum</h3>
                <br />
                <h5>Name: </h5>
                <input type="text" id="name" />
                <br />
                <h5>Cover url: </h5>
                <input type="text" id="image" />
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
                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewGame