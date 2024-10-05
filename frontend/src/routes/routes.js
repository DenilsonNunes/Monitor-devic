
import { routesEstoque } from "./routes-estoque"
import { routesConfiguracoes } from "./routes-configuracoes"
import { routesFinanceiro } from "./routes-financeiro"
import { routesFiscalContabil } from "./routes-fiscal-contabil"
import { routesHome } from "./routes-home"
import { routesLogin } from "./routes-login"
import { routesVendas } from "./routes-vendas"





// routes.js
export const routes = [

    ...routesFinanceiro, 
    ...routesVendas, 
    ...routesEstoque, 
    ...routesLogin, 
    ...routesHome, 
    ...routesFiscalContabil, 
    ...routesConfiguracoes

]
