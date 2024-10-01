import { Routes, Route } from 'react-router-dom'


// Estoque
import HomeEstoque from '../pages/Estoque/HomeEstoque';
import HomeEstoqueObsoletoDesncessario from '../pages/Estoque/EstoqueObsoletoDesnecessario/HomeEstoqueObsoletoDesncessario';


const EstoqueRoutes = () => {

    return (
  
      <Routes>

        {/* ESTOQUE */}
        <Route path='/estoque' element={<HomeEstoque/>}/>
        <Route path='/estoque/analise-estoque-obsoleto-desnecessario' element={<HomeEstoqueObsoletoDesncessario/>}/>
        
      </Routes>
  
    )
  }
  
  export default EstoqueRoutes