import { Routes, Route } from 'react-router-dom'



//Pages
import HomeFiscalContabil from '../pages/fiscal-contabil/HomeFiscalContabil';


const FiscalContabilRoutes = () => {

    return (
  
      <Routes>
  
        {/* FISCAL/CONTÁBIL */}
        <Route path='/' element={<HomeFiscalContabil/>}/>
        
      </Routes>
  
    )
  }
  
  export default FiscalContabilRoutes