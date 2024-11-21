import axios from 'axios'

const apiInstance = axios.create({
    baseURL: 'http://192.168.18.95:3000/api',
})


export default apiInstance;