import { Box, Icon  } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { SearchIcon} from '@chakra-ui/icons';

import styles from './Navbar.module.css';


const Navbar = () => {

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

      </ul>

      

    </Box>
  )
}



export default Navbar;