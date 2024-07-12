import './App.css'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

// Pages
import Login from './pages/Login';
import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Financeiro from './pages/Financeiro/Financeiro';
import ContasAreceber from './pages/Financeiro/ContasAreceber';
import Configuracoes from './pages/Configuracoes';

//COMPONENTS
import Navbar from './components/Navbar/Navbar'


function App() {


  return (
    <>

      <BrowserRouter>

        {/* <NavbarTeste/>*/}
        

          <Routes>
           
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/clientes' element={<Clientes/>}/>
            <Route path='/financeiro' element={<Financeiro/>}/>
            <Route path='/configurações' element={<Configuracoes/>}/>
            <Route path='/financeiro/contas-a-receber' element={<ContasAreceber/>}/>
            <Route path='*' element={<Navigate to="/home"/>}/>


          </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App;
