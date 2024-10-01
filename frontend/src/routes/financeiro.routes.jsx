import { Routes, Route } from 'react-router-dom'

//Financeiro
import Financeiro from '../pages/Financeiro/Home/HomeFinanceiro';
import HomeGestaoDeCobrancaInadimplencia from '../pages/Financeiro/Gestao-de-cobranca-inadimplencia/HomeGestaoDeCobrancaInadimplencia';
import ContasAreceber from '../pages/Financeiro/ContasAreceber';
import ResumoRecebimentosEcontasAreceberEmAberto from '../pages/Financeiro/ResumoRecebimentosEcontasAreceberEmAberto/ResumoRecebimentosEcontasAreceberEmAberto';
import HomeDisponivelEmCaixasEbancos from '../pages/Financeiro/DisponivelEmCaixasEbancos/HomeDisponivelEmCaixasEbancos';



const FinanceiroRoutes = () => {

  return (

    <Routes>

        {/* FINANCEIRO */}
        <Route path='/financeiro' element={<Financeiro/>}/>
        <Route path='/financeiro/contas-a-receber' element={<ContasAreceber/>}/>
        <Route path='/financeiro/gestao-de-cobranca-inadimplencia' element={<HomeGestaoDeCobrancaInadimplencia/>}/>
        <Route path='/financeiro/resumo-de-Recebimentos-e-contas-a-receber-em-aberto' element={<ResumoRecebimentosEcontasAreceberEmAberto/>}/>
        <Route path='/financeiro/disponivel-em-caixas-e-bancos' element={<HomeDisponivelEmCaixasEbancos/>}/>
      
    </Routes>

  )
}

export default FinanceiroRoutes