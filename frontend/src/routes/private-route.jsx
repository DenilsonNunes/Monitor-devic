import { useAuth  } from "../hooks/auth";


import Navbar from "../components/Navbar/Navbar";
import NotAuthenticated from "../pages/notAuthenticated/NotAuthenticated";



export function PrivateRouter({children}) {

    const { user } = useAuth()


    const isAuthenticated = user;

    if (!isAuthenticated) {

        return (
            <NotAuthenticated/>
        )
    }

    return (
        <>
            <Navbar/>
            {children}
        </>
    )  
    
        
}

