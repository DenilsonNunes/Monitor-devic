import { useNavigate, NavLink } from "react-router-dom";


import { 
  Box, 
  Heading, 
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from "@chakra-ui/react";

import { LuUserCircle } from "react-icons/lu";

import styles from './Navbar.module.css';





import { useAuth } from "../../hooks/auth";




const Navbar = () => {

  const { nameUser, signOut  } = useAuth();

  const navigate = useNavigate();


  const handleSignOut = () => {

    signOut();

    navigate('/login');

  }




  return (

    <Box className={styles.navbar} bg='primary'>

      <Box display='flex' justifyContent='space-between' alignItems='center' w='100%' >

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
          {nameUser && <Heading size='sm' justifyContent='center' color='white'>Bem vindo, {nameUser}!</Heading>}
        </Box>
        
        <Box>
          <Menu>
            <MenuButton>
              <IconButton
              borderRadius={20}
              fontSize="24px"
              icon={<LuUserCircle />}
              />
            </MenuButton>

            <MenuList>

              <MenuItem>Meu Perfil</MenuItem>
              <MenuItem
                onClick={handleSignOut}
              >
                Sair
              </MenuItem>

            </MenuList>

          </Menu>

        </Box>

      </Box>

    </Box>
  )
}



export default Navbar;