import { createContext, useContext, useState, useEffect } from "react";

import api from "../helpers/api-instance"



export const AuthContext = createContext({});



export const AuthProvider = ({ children }) => {

    const [data, setData] = useState({});

    const signIn = async ({user, password}) => {


        try {
            
            const response = await api.post('/auth/login', { 
                user, 
                password
            })

            console.log('No Provider', response);
    

            if (response.status === 200) {

                const { nameUser, userCodFunc, token } = response.data;

          
                localStorage.setItem('@Auth:user', userCodFunc);
                localStorage.setItem('@Auth:token', token);

                // colocar padrão no cabeçalho das requisições
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                setData({ nameUser, userCodFunc, token });

            } else {
                throw new Error(response.data.error)
            }
          


        } catch (error) { 
         
            throw error.response
        }

    }

    useEffect(() => {
          
        const userCodFunc = localStorage.getItem('@Auth:user');
        const token = localStorage.getItem('@Auth:token');

        if (userCodFunc && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

        setData({ userCodFunc, token });

    }, []);


    return (
        <AuthContext.Provider value={{ signIn, name: "Denilson", user: data.nameUser }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    
    const context = useContext(AuthContext);

    return context;

}