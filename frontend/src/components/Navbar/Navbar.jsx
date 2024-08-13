import { Box, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


import styles from './Navbar.module.css';


const Navbar = () => {

  return (

    <div className={styles.navbar} >

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

    </div>
  )
}



export default Navbar;