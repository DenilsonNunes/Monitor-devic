import axios from 'axios'

const apiInstance = axios.create({
    //baseURL: 'http://192.168.100.80:3000/api',
    baseURL: 'http://192.168.18.95:3000/api', // meu pc
    //baseURL: 'http://192.168.18.250:3000/api'// com  VPN Maquina Bue


})


export default apiInstance;