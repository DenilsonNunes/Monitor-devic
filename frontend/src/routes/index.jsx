import { BrowserRouter } from 'react-router-dom';


import HomeRoutes from './home.routes';
import VendasRoutes from './vendas.routes';
import FinanceiroRoutes from './financeiro.routes';
import EstoqueoRoutes from './estoque.routes';
import FiscalContabilRoutes from './fiscal-contabil.routes';
import ComissaoOutrosRoutes from './comissao-outros.routes';



const Routes = () => {

  return (

    <BrowserRouter>
        <HomeRoutes/>
        <VendasRoutes/>
        <FinanceiroRoutes/>
        <EstoqueoRoutes/>
        <FiscalContabilRoutes/>
        <ComissaoOutrosRoutes/>

        

    </BrowserRouter>
  )
}

export default Routes