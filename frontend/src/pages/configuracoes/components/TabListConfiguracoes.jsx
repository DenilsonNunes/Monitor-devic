import {Link, useLocation } from "react-router-dom";

import {Box, Heading, HStack, Button } from '@chakra-ui/react'

import ConfigUsuario from "../configuracao-usuario/HomeConfigUsuario";
import ConfigEnvioEmail from "../configuracao-envio-email/HomeConfigEnvioEmail";
import ConfigMonitor from "../configuracao-parametros/HomeParametros";
import HomeParametros from "../configuracao-parametros/HomeParametros";

const TabListConfiguracoes = () => {

    const location = useLocation();

    const rotasConfiguracoes = [
        { name: 'Usuários', rota: '/configuracoes/usuarios', componente: <ConfigUsuario /> },
        { name: 'Parâmetros', rota: '/configuracoes/parametros', componente: <HomeParametros/> },
        { name: 'Envio de Email', rota: '/configuracoes/envio-de-emails', componente: <ConfigEnvioEmail /> },
        { name: 'Integrações', rota: '/configuracoes/integracoes', componente: <ConfigEnvioEmail /> },
    ];




    return (
        <>      
            <Box display='flex' alignItems='center'>
                <Heading fontSize='24px' color='#0C3854'>Configurações</Heading>
            </Box>

            <HStack boxShadow='base' border='1px solid #cbd5e1' bg='white' overflowX='auto' marginTop={5} >

                {rotasConfiguracoes.map((item, index) => (
                    
                    <Box key={index}>
                        
                        <Button                    
                            bg={location.pathname === item.rota ? 'primary' : ''}
                            color={location.pathname === item.rota ? 'white' : ''}
                            borderRadius='none'
                            _hover='none'
                            as={Link}
                            to={item.rota}
                            justifyContent="start"
                        >
                            {item.name}
                        </Button>

                    </Box>

                ))}
            </HStack>      
        </>
    )
}

export default TabListConfiguracoes