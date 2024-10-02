import { createContext } from "react";

import api from "../helpers/api-instance"

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const signIn = async ({email, password}) => {
        const response = await api.post('/login', { 
            email, 
            password
        })
    }


    return (
        <AuthContext.Provider value={{name: "Denilson"}}>
            {children}
        </AuthContext.Provider>
    )
}


