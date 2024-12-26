import axios from 'axios'

const apiInstance = axios.create({
    
    //baseURL: 'http://192.168.18.95:3000/api', //Meu Pc
    baseURL: 'http://192.168.100.80:3000/api', // Maquina BLUE
    //baseURL: 'http://192.168.18.250:3000/api'// Maquina Bue com VPN

})


export default apiInstance;