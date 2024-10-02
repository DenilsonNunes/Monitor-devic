import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';


import VendasRoutes from './vendas.routes';
import FinanceiroRoutes from './financeiro.routes';
import EstoqueoRoutes from './estoque.routes';
import FiscalContabilRoutes from './fiscal-contabil.routes';
import ComissaoOutrosRoutes from './comissao-outros.routes';
import ConfiguracoesRoutes from './configuracoes.routes';

import NotFound from '../pages/NotFound/NotFound';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';

//COMPONENTS
import Navbar from '../components/Navbar/Navbar'


const MainRoutes = () => {

  const location = useLocation();
  const showNavbar = location.pathname !== '/login';

  return (

    <>
          { showNavbar && <Navbar/>} 
    
          <Routes>

            <Route path='/login' element={<Login/>}/>

            <Route path="/home" element={<Home/>}/>
            <Route path="/vendas/*" element={<VendasRoutes/>}/>
            <Route path="/financeiro/*" element={<FinanceiroRoutes/>}/>
            <Route path="/estoque/*" element={<EstoqueoRoutes/>}/>
            <Route path="/fiscal-contabil/*" element={<FiscalContabilRoutes/>}/>
            <Route path="/comissao-outros/*" element={<ComissaoOutrosRoutes/>}/>
            <Route path="/configuracoes/*" element={<ConfiguracoesRoutes/>}/>


            <Route path="*" element={<NotFound/>}/>

            
          </Routes>  
    
    
    </>

    
  )
}


function AppRoutes() {
  return (
    <BrowserRouter>
      <MainRoutes/>
    </BrowserRouter>
  );
}



export default AppRoutes