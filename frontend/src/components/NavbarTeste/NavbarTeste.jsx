import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <Box display={{ base: 'block', md: 'none' }}>
        <Menu>
          <MenuButton onClick={toggleMenu}>☰ Menu</MenuButton>
          <MenuList>
            <MenuItem>
              <NavLink to="/">Home</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/clientes">Clientes</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/financeiro">Financeiro</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/config-envio-email">Configurações</NavLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box display={{ base: 'none', md: 'block' }}>
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
      </Box>
    </nav>
  );
};

export default Navbar;
