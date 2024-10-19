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

            if (response.status === 200) {

                const { dataUser } = response.data;

                localStorage.setItem('@Auth:user', dataUser.userCodFunc); 
                localStorage.setItem('@Auth:nameUser', dataUser.nameUser); 
                localStorage.setItem('@Auth:token', dataUser.token);

                // colocar padrão no cabeçalho das requisições
                api.defaults.headers.common['Authorization'] = `Bearer ${dataUser.token}`;
                

                setData({
                    nameUser: dataUser.nameUser
                });


            } else {
                throw new Error(response.data.error)
            }
          

        } catch (error) { 
         
            throw error.response
        }

    }

    const signOut = () => {

        localStorage.removeItem('@Auth:user');
        localStorage.removeItem('@Auth:nameUser');
        localStorage.removeItem('@Auth:token');

        setData({});
        api.defaults.headers.common['Authorization'] = '';

    }


    const isAuthenticated = () => {

        const userCodFunc = localStorage.getItem('@Auth:user');
        const token = localStorage.getItem('@Auth:token');


        if (userCodFunc && token) {
            
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            return  userCodFunc !== null && token !== null
        } 
        
    }

    useEffect(() => {
 
        const nameUser = localStorage.getItem('@Auth:nameUser');
        const userCodFunc = localStorage.getItem('@Auth:user');
        const token = localStorage.getItem('@Auth:token');

        if (nameUser && userCodFunc && token) {

            setData({ nameUser, userCodFunc });
            // Configurar token no cabeçalho
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }, []);



    return (
        <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, nameUser: data.nameUser, userCodFunc: data.userCodFunc }}>
            {children}
        </AuthContext.Provider>
    )

}


export const useAuth = () => {
    
    const context = useContext(AuthContext);

    return context;

}