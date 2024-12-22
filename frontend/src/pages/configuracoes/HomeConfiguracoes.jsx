import { useNavigate, NavLink, Link, Route, Routes  } from "react-router-dom";


import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Box, Icon, Heading, useBreakpointValue, VStack, HStack, Button } from '@chakra-ui/react'
import { FcBusinessman } from "react-icons/fc";


import PageLayout from '../../components/PageLayout/PageLayout';
import HomeConfigUsuario from './configuracao-usuario/ConfigUsuario';
import ConfigUsuario from "./configuracao-usuario/ConfigUsuario";
import ConfigEnvioEmail from "./configuracao-envio-email/ConfigEnvioEmail";
import TabListConfiguracoes from "./components/TabListConfiguracoes";




const HomeConfiguracoes = () => {




    const rotasConfiguracoes = [
        { name: 'Usuários', rota: '/configuracoes/usuarios', componente: <ConfigUsuario /> },
        { name: 'Envio de Email', rota: '/configuracoes/envio-de-emails', componente: <ConfigEnvioEmail /> },
        //{ name: 'Envio de Email', rota: '/configuracoes/envio-de-email', componente: <ConfigEmail /> },
    ];


    const display = useBreakpointValue({
        base: (
            <PageLayout>

                <Button colorScheme='blue'

                    position="fixed"
                    bottom="20px"
                    right="20px"
                    borderRadius='full'

                >Adicionar</Button>

                <Box display='flex' alignItems='center' marginTop={20}>
                    <Heading fontSize='24px' color='#0C3854'>Configurações</Heading>
                </Box>

                <HStack boxShadow='base' paddingY={2} border='1px solid #cbd5e1' bg='white' overflowX='auto'>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                </HStack>

                <HStack boxShadow='base' borderRadius={10} padding={1} border='1px solid #cbd5e1' bg='white' overflowX='auto' marginTop={5}>
                    <VStack spacing={0} alignItems='start'>

                        <HStack>
                            <Text><strong>Usuário:</strong> Denilson</Text>
                        </HStack>
                        <HStack>
                            <Text>Denilson Nunes Barauna</Text>
                        </HStack>

                    </VStack>
                </HStack>


                <Tabs sx={{ position: 'static', display: 'initial' }} >

                    <TabList border='1px solid #cbd5e1' marginTop={2} bg='white' boxShadow='base' overflowX='auto' whiteSpace="nowrap">

                        <Tab display='flex' alignItems='center'>
                            <Icon as={FcBusinessman} />
                            Usuários
                        </Tab>
                        <Tab>Configurações Monitor</Tab>
                        <Tab>Configurações Envio de E-mails</Tab>
                        <Tab>Envio de E-mails automático</Tab>

                    </TabList>


                    <TabPanels border='1px solid #cbd5e1' marginTop={2} bg='white' boxShadow='base'>
                        <TabPanel>
                            <HomeConfigUsuario />
                        </TabPanel>

                        <TabPanel>
                            <p>Configurações do monitor</p>
                        </TabPanel>


                    </TabPanels>

                </Tabs>

            </PageLayout>
        ),

        md: (

            <PageLayout>

                <Box display='flex' alignItems='center' marginTop={20}>
                    <Heading fontSize='24px' color='#0C3854'>Configurações</Heading>
                </Box>

                <TabListConfiguracoes/>

            </PageLayout>
        )
    })




    return (

        <>
            {display}
        </>

    )
}

export default HomeConfiguracoes;