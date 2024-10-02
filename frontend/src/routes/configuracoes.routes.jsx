import { Routes, Route } from 'react-router-dom'



//Configuracoes
import Configuracoes from '../pages/Configuracoes/Configuracoes';


const ConfiguracoesRoutes = () => {

    return (
  
      <Routes>
  
        {/* CONFIGURAÇÕES */}
        <Route path='/' element={<Configuracoes/>}/>
        
      </Routes>
  
    )
  }
  
  export default ConfiguracoesRoutes