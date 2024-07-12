import TesteVizualizar from "../components/Testes/TesteVizualizar";
import Navbar from "../components/Navbar/Navbar";


const Home = () => {

  return (
    <div>
       <Navbar/>
      <h1>Pagina Home</h1>
      {/*
      <TesteDrawer/>
      <h1>Teste Grid</h1>
      <TesteGrid/>
      <h1>Teste Responsivo</h1>
      <Teste/>
      */}
   
      <TesteVizualizar></TesteVizualizar>
     

    </div>
  )

}

export default Home;