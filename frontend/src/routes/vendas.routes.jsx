import { Routes, Route } from 'react-router-dom'


// Pages
import HomeVendas from '../pages/Vendas/HomeVendas'



const VendasRoutes = () => {

  return (

    <Routes>

        {/* VENDAS */}
        <Route path="/" element={<HomeVendas/>}/>

    </Routes>
    
  )
}

export default VendasRoutes