import { useState } from 'react'


import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Box

  } from '@chakra-ui/react'


const MenuDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')
  
    return (
      <>
        <Button colorScheme='blue' size='xs' onClick={onOpen}>
          Abrir
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}  size='sm'>
          <DrawerOverlay />
          <DrawerContent bg='#e2e8f0'>
            <DrawerHeader borderBottomWidth='1px'>Gestão de Cobrança</DrawerHeader>
            <DrawerBody padding={0} >

                <Box borderBottom='1px solid white' paddingLeft={2}>
                    <a href="">Análise de inadimplência mensal</a>
                </Box>

                <Box borderBottom='1px solid white'  paddingLeft={2}>  
                    <a href="">Análise de inadimplência geral / titulos pendentes</a>
                </Box>
                
                <Box borderBottom='1px solid white'  paddingLeft={2}>  
                    <a href="">Acompanhamento evolução da inadimplência</a>
                </Box>

                <Box borderBottom='1px solid white'  paddingLeft={2}>  
                    <a href="">Análise para cobrança / contas a receber x recebido</a>
                </Box>

                <Box borderBottom='1px solid white'  paddingLeft={2}>  
                    <a href="">Gestão de cobrança / clientes em débito</a>
                </Box>

                <Box borderBottom='1px solid white'  paddingLeft={2}>  
                    <a href="">Previsão de cobrança</a>
                </Box>

                <Box borderBottom='1px solid white'  paddingLeft={2}>  
                    <a href="">Histórico de cobrança</a>
                </Box>

            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}


export default MenuDrawer