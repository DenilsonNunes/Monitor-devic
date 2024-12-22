import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Box, Icon, Heading, useBreakpointValue, VStack, HStack, Button } from '@chakra-ui/react'
import { FcBusinessman } from "react-icons/fc";
import { SettingsIcon } from '@chakra-ui/icons'

import FormConfigServidorSMTPemail from "../../components/Configurações/FormConfigEmail/FormConfigServidorSMTPemail";
import FormConfigMsgEmail from '../../components/Configurações/FormConfigEmail/FormConfigMsgEmail';
import PageLayout from '../../components/PageLayout/PageLayout';
import HomeConfigUsuario from './configuracao-usurio/HomeConfigUsuario';




const HomeConfiguracoes = () => {


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

                    <TabList border='1px solid #cbd5e1' marginTop={2} bg='white' boxShadow='base' overflowX='auto'  whiteSpace="nowrap">

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



                <Tabs sx={{ position: 'static', display: 'initial' }} >

                    <TabList border='1px solid #cbd5e1' marginTop={5} bg='white' boxShadow='base' >

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

                        {/*Configurações de E-mail*/}
                        <TabPanel>

                            <Tabs variant='enclosed' p='2' sx={{ position: 'static', display: 'initial' }}>
                                <TabList >
                                    <Tab fontWeight='bold' _selected={{ color: 'white', bg: '#0284c7' }} borderWidth="2px" borderColor="#cbd5e1" >Cobrança</Tab>
                                    <Tab fontWeight='bold' _selected={{ color: 'white', bg: '#0284c7' }} borderWidth="2px" borderColor="#cbd5e1" marginLeft="2px">Titulos a Vencer</Tab>
                                    <Tab fontWeight='bold' _selected={{ color: 'white', bg: '#0284c7' }} borderWidth="2px" borderColor="#cbd5e1" marginLeft="2px">Titulos Vencidos</Tab>
                                    <Tab fontWeight='bold' _selected={{ color: 'white', bg: '#0284c7' }} borderWidth="2px" borderColor="#cbd5e1" marginLeft="2px">Promoção</Tab>
                                    <Tab fontWeight='bold' _selected={{ color: 'white', bg: '#0284c7' }} borderWidth="2px" borderColor="#cbd5e1" marginLeft="2px">Aniversário</Tab>
                                </TabList>

                                <TabPanels borderWidth="1px" borderColor="#cbd5e1" borderBottomRadius='5px'>

                                    <TabPanel>
                                        <p>Titulos Vencidos</p>
                                    </TabPanel>

                                    <TabPanel>
                                        {/* CONFIGURAÇÕES PARA ENVIO E-MAIL  */}
                                        <FormConfigServidorSMTPemail />

                                        {/* CONFIGURAÇÕES MSG/E-MAIL */}
                                        <FormConfigMsgEmail />
                                    </TabPanel>

                                    <TabPanel>
                                        <p>Titulos Vencidos</p>
                                    </TabPanel>

                                    <TabPanel>
                                        <p>Promoção</p>
                                    </TabPanel>

                                    <TabPanel>
                                        <p>Aniversário</p>
                                    </TabPanel>

                                </TabPanels>

                            </Tabs>

                        </TabPanel>

                        {/* Envio de Email automático*/}
                        <TabPanel>
                            <Text>Enviar emais</Text>

                        </TabPanel>

                    </TabPanels>

                </Tabs>


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