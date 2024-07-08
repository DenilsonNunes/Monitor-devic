import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, useBreakpointValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import clienteIcon from "../../img/cliente.png";

import styles from './Navbar.module.css';




const Navbar = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (

    <Box bg="blue.500">

      <Flex className={styles.navbar} justifyContent="start" alignItems="center" p={4}>

        {isMobile ? (
       
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Opções de navegação"
              icon={<HamburgerIcon />}
              variant="outline"
              colorScheme="whiteAlpha"
              display={{ base: "block", md: "none" }}
            />
            <MenuList bg='black'>
              <MenuItem as={NavLink}  to="/" color="blue.500">
                Home
              </MenuItem>
              <MenuItem as={NavLink}  to="/clientes" color="blue.500">
                Clientes
              </MenuItem>
              <MenuItem  as={NavLink} to="/financeiro" color="blue.500">
                Financeiro
              </MenuItem>
              <MenuItem as={NavLink}  to="/config-envio-email" color="blue.500">
                Configurações
              </MenuItem>
            </MenuList>
          </Menu>

        ):(

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

        )}

      </Flex>

    </Box>
  )
}




/*

    <nav className={styles.navbar}>

      <ul>

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/clientes">Clientes</NavLink>
        </li>
        <li>
          <NavLink to="/financeiro">Financeiro</NavLink>
        </li>
        <li>
          <NavLink to="/config-envio-email">Configurações</NavLink>
        </li>
      </ul>
    </nav>

  */

export default Navbar;