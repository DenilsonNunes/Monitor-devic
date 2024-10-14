import { useAuth  } from "../hooks/auth";


import Navbar from "../components/Navbar/Navbar";
import NotAuthenticated from "../pages/notAuthenticated/NotAuthenticated";



export function PrivateRouter({children, rules}) {

    const { isAuthenticated } = useAuth()

    
    if (!isAuthenticated()) {
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

