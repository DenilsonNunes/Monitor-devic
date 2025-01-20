import { useNavigate, NavLink, Link } from "react-router-dom";
import { useBreakpointValue, VStack } from "@chakra-ui/react";

import {
  Box,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Text
} from "@chakra-ui/react";

import { LuUserCircle, LuLogOut } from "react-icons/lu";
import { HamburgerIcon } from '@chakra-ui/icons'

import styles from './Navbar.module.css';





import { useAuth } from "../../hooks/auth";




const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()


  const { nameUser, signOut } = useAuth();
  const navigate = useNavigate();


  
  const rotas = [
    {
      nameRota: 'Vendas',
      rota: '/vendas'
    },
    {
      nameRota: 'Financeiro',
      rota: '/financeiro'
    },
    {
      nameRota: 'Estoque',
      rota: '/estoque'
    },
    {
      nameRota: 'Fiscal / Contábil',
      rota: '/fiscal-contabil'
    },
    {
      nameRota: 'Comissão / Outros',
      rota: '/fiscal-contabil'
    },
    {
      nameRota: 'Configuracões',
      rota: '/configuracoes/usuarios'
    },
  ]



  const handleSignOut = () => {

    signOut();

    navigate('/login');

  }





  const display = useBreakpointValue({
    base: (
      <>
        <Box display='flex' justifyContent='space-between' marginLeft={2} alignItems='center' w='100%'>
          {/* MENU HAMBURGUER PARA TELAS MENORES */}
          <IconButton
            bg='#112D9C'
            color='white'
            fontSize='24px'
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            onClick={onOpen}
          />

          {nameUser && 
            <Heading 
              size='sm' 
              justifyContent='center' 
              color='white'
            >
              Bem vindo, {nameUser}!
            </Heading>
          }

        </Box>

        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent >
            <DrawerCloseButton  />

            <DrawerBody marginTop={10} padding={0}>
              <VStack spacing={2} align="stretch" marginTop={5}>

                {rotas.map((item, index) => (

                  <Box key={index}>
                    <Button
                      borderRadius='none'
                      _hover='none'
                      as={Link}
                      to={item.rota}
                      width='100%'
                      justifyContent="start"
                      onClick={onClose}
                    >
                      {item.nameRota}
                    </Button>
                  </Box>

                ))}

              </VStack>
            </DrawerBody>

            <DrawerFooter padding={4}>
              <Button variant='outline'  onClick={handleSignOut}>
                Sair
              </Button>
            </DrawerFooter>

          </DrawerContent>
        </Drawer>

      </>
    ),
    md: (
      <Box display='flex' justifyContent='space-between' alignItems='center' w='100%'>

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
            <NavLink to="/comissao-outros">Comissao/Outros</NavLink>
          </li>

          <li>
            <NavLink to="/configuracoes/usuarios">Configurações</NavLink>
          </li>

        </ul>

        <HStack>
          {nameUser && <Heading size='sm' justifyContent='center' color='white'>Bem vindo, {nameUser}!</Heading>}

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
                <Box>
                  <LuLogOut/>
                  Sair
                </Box>

                
              </MenuItem>

            </MenuList>

          </Menu>

        </HStack>

      </Box>
    )
  })

  return (



    <Box className={styles.navbar} bg='primary'>

      {display}

    </Box>
  )
}



export default Navbar;