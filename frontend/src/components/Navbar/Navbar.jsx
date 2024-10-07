import { Box, Icon  } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import styles from './Navbar.module.css';

import { useAuth } from "../../hooks/auth";





const Navbar = () => {

  const { name } = useAuth();

  return (

    <Box className={styles.navbar} bg='primary'>

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

       
          <p>{name}</p>
       

      </ul>

      

    </Box>
  )
}



export default Navbar;