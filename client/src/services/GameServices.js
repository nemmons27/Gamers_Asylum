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
        return res.data
    } catch (error) {
        throw error
    }
}