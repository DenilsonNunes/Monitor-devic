import { Box, Heading, HStack, Icon  } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import styles from './Navbar.module.css';

import { useAuth } from "../../hooks/auth";



const Navbar = () => {

  const { name } = useAuth();

  return (

    <Box className={styles.navbar} bg='primary'>

      <Box display='flex' justifyContent='space-between' alignItems='center'  w='100%' >

          <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>

              <li>
                <NavLink to="/vendas">Vendas</NavLink>
              </li>

              <li>
                <NavLink to="/financeiro">Financeiro</NavLink>
              </li>

              <li>
                <NavLink to="/estoque">Estoque</NavLink>
              </li>

              <li>
                <NavLink to="/fiscal-contabil">Fiscal/Contábil</NavLink>
              </li>

              <li>
                <NavLink to="/configuracoes">Configurações</NavLink>
              </li>        

          </ul>

        <Box>
          <Heading size='sm' justifyContent='center'>{name}</Heading>
        </Box>


      </Box>



    </Box>
  )
}



export default Navbar;