
// Pages
import HomeVendas from '../pages/Vendas/HomeVendas'
import HomeTopVendasProdutos from '../pages/Vendas/topVendasProdutos/HomeTopVendasProdutos/HomeTopVendasProdutos'




export const routesVendas = [

  {
    path: '/vendas',
    component: HomeVendas,
    private: true,
    title: 'Home'
  },
  {
    path: '/vendas/top-vendas-produtos',
    component: HomeTopVendasProdutos,
    private: true,
    title: 'Home'
  }
  
  
]