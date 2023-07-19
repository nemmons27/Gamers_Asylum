import Client from './api'

export const GetGames = async () => {
    try {
        const res = await Client.get('/games')
        return res.data
    } catch (error){
        throw error
    }
}

export const GetGame = async (id) => {
    try{
        const res = await Client.get(`/games/${id}`)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const UpdateGame = async (id) => {
    try {
        const res = await Client.put(`/games/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}
export const DeleteGame = async (id) => {
    try {
        const res = await Client.delete(`/games/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}
export const GetReviews = async () => {
    try{
        const res = await Client.get('/reviews')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetReview = async (id) => {
    try {
        const res = await Client.get('/reviews/${id}')
        return res.data
    } catch (error) {
        throw error
    }
}
export const DeleteReview = async (id) => {
    try {
        const res = await Client.delete('/reviews/${id}')
        return res.data
    } catch (error) {
        throw error
    }
}