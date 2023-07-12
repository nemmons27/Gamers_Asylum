import Client from './api'

export const GetGame = async () => {
    try {
        const res = await Client.get('/games')
        return res.data
    } catch (error){
        throw error
    }
}