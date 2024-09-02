import { Box, Icon  } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { SearchIcon, EmailIcon, PlusSquareIcon, PhoneIcon, SmallAddIcon } from '@chakra-ui/icons';

import styles from './Navbar.module.css';


const Navbar = () => {

  return (

    <Box className={styles.navbar} >

        <ul>

          <li>
            <NavLink to="/home">Home</NavLink>
          </li>

          <li> 
            <NavLink to="/clientes">Clientes</NavLink>
          </li>

          <li>
            <NavLink to="/financeiro">Financeiro</NavLink>
          </li>

          <li>
            <NavLink to="/configurações">Configurações</NavLink>
          </li>

      </ul>

      

    </Box>
  )
}



export default Navbar;