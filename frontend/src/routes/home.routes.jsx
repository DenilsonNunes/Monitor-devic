import { Routes, Route } from 'react-router-dom'



//Pages
import Home from '../pages/Home/Home';


const HomeRoutes = () => {

    return (
  
      <Routes>
  
        {/* CONFIGURAÇÕES */}
        <Route path="/home" element={<Home/>}/>
        
      </Routes>
  
    )
  }
  
  export default HomeRoutes