import React from "react";
import { useState } from "react";
import axios from "axios";

const NewGame = () => {



    return (
        <div>
            <form action="">
                <h3>Add a new Game to The Asylum</h3>
                <br />
                <h5>Name: </h5>
                <input type="text" id="name" />
                <br />
                <h5>Description: </h5>
                <input type="text" id="description" />
                <br />
                <h5>Genre: </h5>
                <select>
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
            </form>
        </div>
    )
}

export default NewGame