import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Box, Icon, Heading } from '@chakra-ui/react'
import { FcBusinessman } from "react-icons/fc";
import { SettingsIcon } from '@chakra-ui/icons'

import FormConfigServidorSMTPemail from "../../components/Configurações/FormConfigEmail/FormConfigServidorSMTPemail";
import FormConfigMsgEmail from '../../components/Configurações/FormConfigEmail/FormConfigMsgEmail';
import PageLayout from '../../components/PageLayout/PageLayout';
import HomeConfigUsuario from './configuracao-usurio/HomeConfigUsuario';




const HomeConfiguracoes = () => {

    return (

        <PageLayout>

            <Box display='flex'  alignItems='center'>
                <SettingsIcon w={5} h={5}/>
                <Heading size='md' color='#4a5568'>Top vendas produtos</Heading>
            </Box>


              
            <Tabs  sx={{ position: 'static', display: 'initial' }}>

                <TabList borderWidth="1px" borderColor="#cbd5e1" marginTop={5} >
                        
                    <Tab display='flex' alignItems='center'>
                        <Icon as={FcBusinessman}/>
                        Usuários
                    </Tab>

                    <Tab>Configurações Monitor</Tab>
                    <Tab>Configurações Envio de E-mails</Tab>
                    <Tab>Envio de E-mails automático</Tab>
                </TabList>






                <TabPanels borderWidth="1px" borderColor="#cbd5e1" marginTop={2}>
                    <TabPanel>
                        <HomeConfigUsuario/>
                    </TabPanel>

                    <TabPanel>
                        <p>Configurações do monitor</p>
                    </TabPanel>

                    {/*Configurações de E-mail*/}
                    <TabPanel>
        
                        <Tabs variant='enclosed' p='2'  sx={{ position: 'static', display: 'initial' }}>
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
                                    <FormConfigServidorSMTPemail/> 

                                    {/* CONFIGURAÇÕES MSG/E-MAIL */}
                                    <FormConfigMsgEmail/>
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
}

export default HomeConfiguracoes;