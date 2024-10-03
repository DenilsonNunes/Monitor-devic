
import { routesEstoque } from "./routes-estoque"
import { routesFinanceiro } from "./routes-financeiro"
import { routesHome } from "./routes-home"
import { routesLogin } from "./routes-login"
import { routesVendas } from "./routes-vendas"







// routes.js
export const routes = [...routesFinanceiro, ...routesVendas, ...routesEstoque, ...routesLogin, ...routesHome]