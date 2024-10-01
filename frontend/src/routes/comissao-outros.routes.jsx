import { Routes, Route } from 'react-router-dom'



//Configuracoes
import Configuracoes from '../pages/Configuracoes/Configuracoes';


const ComissaoOutrosRoutes = () => {

    return (
  
      <Routes>
  
        {/* CONFIGURAÇÕES */}
        <Route path='/configurações' element={<Configuracoes/>}/>
        
      </Routes>
  
    )
  }
  
  export default ComissaoOutrosRoutes