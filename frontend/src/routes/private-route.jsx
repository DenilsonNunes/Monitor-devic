import Navbar from "../components/Navbar/Navbar";

export function PrivateRouter({children}) {
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return (<h1>Nao autorizado</h1>)
    }

    return (
        <>
            <Navbar/>
            {children}
        </>
    )  
    
        
}

