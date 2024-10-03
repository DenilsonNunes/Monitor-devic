



export const routesComissaoOutros = [

    {
      path: '/comissao-outros',
      component: HomeFinanceiro,
      private: true,
      title: 'Home'
    },
    {
      path: '/comissao-outros/contas-a-receber',
      component: ContasAreceber,
      private: true,
      title: 'Home'
    },
    {
      path: '/comissao-outros/gestao-de-cobranca-inadimplencia',
      component: HomeGestaoDeCobrancaInadimplencia,
      private: true,
      title: 'Home'
    },
    {
      path: '/comissao-outros/resumo-de-Recebimentos-e-contas-a-receber-em-aberto',
      component: ResumoRecebimentosEcontasAreceberEmAberto,
      private: true,
      title: 'Home'
    },
    {
      path: '/comissao-outros/disponivel-em-caixas-e-bancos',
      component: HomeDisponivelEmCaixasEbancos,
      private: true,
      title: 'Home'
    }

]