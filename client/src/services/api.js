import Axios from 'axios'

export const BASE_URL = 'http://localhost:3001'

const Client = Axios.create({ baseURL: BASE_URL})

Client.interceptors.request.use(
    (config) => {
        const Token = localStorage.getItem('Token')
        if (Token) {
            config.headers['Authorization'] = `Bearer ${Token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

export default Client