import './App.css'

import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'


//COMPONENTS
import Navbar from './components/Navbar/Navbar'



// Pages
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Clientes from './pages/Clientes/Clientes';

// Vendas
import HomeVendas from './pages/Vendas/HomeVendas';


//Financeiro
import Financeiro from './pages/Financeiro/Home/HomeFinanceiro';
import HomeGestaoDeCobrancaInadimplencia from './pages/Financeiro/Gestao-de-cobranca-inadimplencia/HomeGestaoDeCobrancaInadimplencia';
import ContasAreceber from './pages/Financeiro/ContasAreceber';
import ResumoRecebimentosEcontasAreceberEmAberto from './pages/Financeiro/ResumoRecebimentosEcontasAreceberEmAberto/ResumoRecebimentosEcontasAreceberEmAberto';
import HomeDisponivelEmCaixasEbancos from './pages/Financeiro/DisponivelEmCaixasEbancos/HomeDisponivelEmCaixasEbancos';


// Estoque
import HomeEstoque from './pages/Estoque/HomeEstoque';
import HomeEstoqueObsoletoDesncessario from './pages/Estoque/EstoqueObsoletoDesnecessario/HomeEstoqueObsoletoDesncessario';



//Configuracoes
import Configuracoes from './pages/Configuracoes/Configuracoes';


function MainLayout () {

  const location = useLocation();
  const showNavbar = location.pathname !== '/login';


  return (
    <>
      { showNavbar && <Navbar/>} 
        
        <Routes>
            
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/clientes' element={<Clientes/>}/>

            {/* VENDAS */}
            <Route path='/vendas' element={<HomeVendas/>}/>


            {/* FINANCEIRO */}
            <Route path='/financeiro' element={<Financeiro/>}/>
            <Route path='/financeiro/contas-a-receber' element={<ContasAreceber/>}/>
            <Route path='/financeiro/gestao-de-cobranca-inadimplencia' element={<HomeGestaoDeCobrancaInadimplencia/>}/>
            <Route path='/financeiro/resumo-de-Recebimentos-e-contas-a-receber-em-aberto' element={<ResumoRecebimentosEcontasAreceberEmAberto/>}/>
            <Route path='/financeiro/disponivel-em-caixas-e-bancos' element={<HomeDisponivelEmCaixasEbancos/>}/>


            {/* ESTOQUE */}
            <Route path='/estoque' element={<HomeEstoque/>}/>
            <Route path='/estoque/analise-estoque-obsoleto-desnecessario' element={<HomeEstoqueObsoletoDesncessario/>}/>


            {/* FISCAL/CONTÁBIL */}
            <Route path='/fiscal-contábil' element={<ContasAreceber/>}/>


            {/* CONFIGURAÇÕES */}
            <Route path='/configurações' element={<Configuracoes/>}/>




            <Route path='*' element={<Navigate to="/home"/>}/>
        </Routes>
    </>
  )
}


function App() {
  return (
    <BrowserRouter>
      <MainLayout/>
    </BrowserRouter>
  );
}

export default App;
