import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'


//COMPONENTS
import Navbar from './components/Navbar/Navbar'


function MainLayout () {

  const location = useLocation();
  const showNavbar = location.pathname !== '/login';


  return (
    <>
      { showNavbar && <Navbar/>} 
        
        <Routes>
            
            <Route path='/home' element={<Home/>}/>
            <Route path='/clientes' element={<Clientes/>}/>


            <Route path='*' element={<Navigate to="/home"/>}/>
        </Routes>
    </>
  )
}


function App() {
  return (
    <BrowserRouter>
      <MainLayout/>
    </BrowserRouter>
  );
}

export default App;
