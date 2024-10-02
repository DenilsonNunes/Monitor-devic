import { createContext, useContext } from "react";

import api from "../helpers/api-instance"





export const AuthContext = createContext({});



export const AuthProvider = ({ children }) => {

    const signIn = async ({user, password}) => {


        try {
            
            const response = await api.post('/auth/login', { 
                user, 
                password
            })

            const { token, userCodFunc } = response.data;
          
            localStorage.setItem('@Auth:user', userCodFunc);
            localStorage.setItem('@Auth:token', token);
            

        } catch (err) { 
            console.error(err);
        }
    }


    return (
        <AuthContext.Provider value={{ signIn }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    
    const context = useContext(AuthContext);

    return context;

}