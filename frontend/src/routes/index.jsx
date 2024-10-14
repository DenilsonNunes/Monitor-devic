import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { routes } from './routes';
import { PrivateRouter } from './private-route';

// Pagina nao encontrada
import NotFound from "../pages/NotFound/NotFound"





const MainRoutes = () => {


  return  ( 
    
    <Routes>
      {routes.map((route, index) => {
        if (route.private) {
          return (
            <Route key={index} path={route.path} element={(
              <PrivateRouter>
                <route.component/>
              </PrivateRouter>
            )} />
          )
        }

        return (
          <Route key={index} path={route.path} element={(<route.component/>)} />
        )
      })}

    <Route path="*" element={<NotFound/>} />
    
    </Routes>
  )

}


function AppRoutes() {
  return (
    <BrowserRouter>
      <MainRoutes/>
    </BrowserRouter>
  );
}



export default AppRoutes