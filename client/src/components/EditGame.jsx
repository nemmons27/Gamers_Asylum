import React from 'react'
import Client from '../services/api'
import { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { GetGame } from '../services/GameServices'

export const EditGame = ({}) => {
    let {gameId} = useParams()
    let navigate = useNavigate()

    const [game, setGame] = useState({})
    const [editState, setEditState] = useState({
        name: '',
        image: '',
        genre: '',
        description: ''
    })

    useEffect(() => {
        const handleGame = async () => {
            const data = await GetGame(gameId)
            setEditState(data)
        }
        handleGame()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Client.put(`/games/${gameId}`, editState)
        navigate(`/games/${gameId}`)
    }

    const handleChange = async (e) => {
        setEditState({...editState, [e.target.id]: e.target.value})
    }


    return (
    <div>EditGame</div>
  )
}
