import { Routes, Route } from 'react-router-dom'




const AppRoutes = () => {

  return (

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

  )
}

export default AppRoutes