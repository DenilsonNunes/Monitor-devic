import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages
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
        <Navbar/>

          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/clientes' element={<Clientes/>}/>
            <Route path='/financeiro' element={<Financeiro/>}/>
            <Route path='/configurações' element={<Configuracoes/>}/>
            <Route path='/financeiro/contas-a-receber' element={<ContasAreceber/>}/>

          </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App;
