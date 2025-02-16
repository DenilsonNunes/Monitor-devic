
//Financeiro
import HomeFinanceiro from '../pages/Financeiro/Home/HomeFinanceiro';
import HomeGestaoDeCobrancaInadimplencia from '../pages/Financeiro/Gestao-de-cobranca-inadimplencia/HomeGestaoDeCobrancaInadimplencia';
import ResumoRecebimentosEcontasAreceberEmAberto from '../pages/Financeiro/ResumoRecebimentosEcontasAreceberEmAberto/ResumoRecebimentosEcontasAreceberEmAberto';
import HomeDisponivelEmCaixasEbancos from '../pages/Financeiro/DisponivelEmCaixasEbancos/HomeDisponivelEmCaixasEbancos';




export const routesFinanceiro = [

    {
      path: '/financeiro',
      component: HomeFinanceiro,
      private: true,
      title: 'Home'
    },
    {
      path: '/financeiro/gestao-de-cobranca-inadimplencia',
      component: HomeGestaoDeCobrancaInadimplencia,
      private: true,
      title: 'Home'
    },
    {
      path: '/financeiro/resumo-de-recebimentos-e-contas-a-receber-em-aberto',
      component: ResumoRecebimentosEcontasAreceberEmAberto,
      private: true,
      title: 'Home'
    },
    {
      path: '/financeiro/disponivel-em-caixas-e-bancos',
      component: HomeDisponivelEmCaixasEbancos,
      private: true,
      title: 'Home'
    }

]