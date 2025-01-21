import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Stack,
    HStack,
    useDisclosure,
    Box,
    RadioGroup,
    Radio,
    Divider,
    useToast
}
from '@chakra-ui/react'


// API
import api from '../../../../helpers/api-instance'



// Components
import MyEditor from '../../../../components/EditorDeTexto/MyEditor'
import ModalEnviarEmailTeste from './ModalEnviarEmailTesteCobranca'
import ErrorServer from '../../../../components/Error/ErrorServer';



const ConfiguracaoCobranca = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const [emEdicaoConfigMensagem, setEmEdicaoConfigMensagem] = useState(false);
    const [emEdicaoServerSMTP, setEmEdicaoServerSMTP] = useState(false);

    const [serverSMTP, setServerSMTP] = useState('');
    const [portSMTP, setPortSMTP] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [envEmailAutCobr, setEnvEmailAutCobr] = useState('');
    const [hrsIniEmailAutCobr, setHrsIniEmailAutCobr] = useState('');
    const [hrsIntEmailAutCobr, setHrsIntEmailAutCobr] = useState('');
    const [diasVencEmailAutCobr, setDiasVencEmailAutCobr] = useState('');
    const [mailAssuntoCobr, setMailAssuntoCobr] = useState('');
    const [mailMsgCobr, setMailMsgCobr] = useState('');



 











    

  /*-----------------Chamada para buscar as configurações de envio de email cobranca do banco de dados--------------- */
    const { data, error, isLoading } = useQuery({
        queryKey: ['configuracao-cobranca'],
        queryFn: async () => {
            const response = await api.get('/configuracoes/envio-de-emails/cobranca');
            return response.data[0];
        },
        refetchOnWindowFocus: false,
    });
  /*-----------------------------------FIM------------------------------------------ */


 

    useEffect(() => {


        if (data) {



            setEmail(data.SMTPUsuarioCobr)
            setPassword(data.SMTPSenhaCobr || '');
            setServerSMTP(data.SMTPServerCobr || '');
            setPortSMTP(data.PortaCobr || '');


            setMailAssuntoCobr(data.MailAssuntoCobr || '');
            setEnvEmailAutCobr(data.EnvEmailAutCobr || '');
            setHrsIntEmailAutCobr(data.HsIntEmailAutCobr || '');
            setHrsIniEmailAutCobr(data.HrsIniEmailAutCobr || '');
            setDiasVencEmailAutCobr(data.DiasVencEmailAutCobr || '');
            setMailMsgCobr(data.MailMsgCobr || '');


        }

    }, [data]);



    


    const handleTestarConexao = async () => {

        try {

            const response = await api.get('/configuracoes/envio-de-emails/cobranca/teste-conexao-server');

            toast({
                title: response.data.message,
                variant: 'left-accent',
                status: 'success',
                isClosable: true,
            })
            

          } catch (err) { 

            toast({
                title: 'Erro ao conectar com o servidor SMTP',
                variant: 'left-accent',
                status: 'error',
                isClosable: true,
            })

          }
   
    }

    const handleEnviarEmailTeste = () => {

    }




    const handleSalvarConexaoSMTP = () => {

    }

    const handleEditarConexaoSMTP = () => {

        setEmEdicaoServerSMTP(!emEdicaoServerSMTP);
        

    }





    const handleSalvarConfigMensagem = () => {

    }

    const handleEditarConfigMensagem = () => {
        setEmEdicaoConfigMensagem(!emEdicaoConfigMensagem);

    }
    
    




    if (error) return <ErrorServer mensagem='Ocorreu um erro e não foi possível carregar as configurações'/>;





    return (

        <Box>

            {/*--------------------------- CONFIGURAÇÕES DE SERVIDOR SMTP -------------------------- */}
            <form onSubmit={handleSalvarConexaoSMTP}>
                <FormControl  p="2" width="100%" borderWidth="1px" borderColor="#cbd5e1" borderRadius='5px' marginBottom={2}>

                    <Stack direction='row' width='100%'>

                        <Stack direction='column' spacing={0} width='30%'>

                            <FormLabel fontSize='sm'>SMTP Server</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                isDisabled={!emEdicaoServerSMTP}
                                value={serverSMTP}
                                onChange={(e) => setServerSMTP(e.target.value)}
                                placeholder="Informe o servidor SMTP"
                            />

                        </Stack>

                        <Stack direction='column' spacing={0} width='30%'>

                            <FormLabel fontSize='sm'>SMTP Usuário</FormLabel>
                            <Input
                                size='sm'
                                type='e-mail'
                                isDisabled={!emEdicaoServerSMTP}
                                border='1px'
                                borderColor='#cbd5e1'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Informe o e-mail"
                            />

                        </Stack>

                        <Stack direction='column' spacing={0} width='30%'>

                            <FormLabel fontSize='sm' >SMTP Senha</FormLabel>
                            <Input
                                size='sm'
                                type='password'
                                isDisabled={!emEdicaoServerSMTP}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Informe a Senha"
                            />

                        </Stack>


                        <Stack direction='column' spacing={0}>

                            <FormLabel fontSize='sm'>Porta</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                isDisabled={!emEdicaoServerSMTP}
                                width="4rem"
                                value={portSMTP}
                                onChange={(e) => setPortSMTP(e.target.value)}
                            />

                        </Stack>



                    </Stack>



                    <HStack marginTop={6} justifyContent='end'>

                        <Button 
                            fontWeight='none'
                            size='sm' 
                            colorScheme='blue' 
                            onClick={handleTestarConexao}
                            isDisabled={emEdicaoServerSMTP}
                        >
                            Testar Conexão
                        </Button>

                        <Button  
                            fontWeight='none'
                            size='sm' 
                            colorScheme={emEdicaoServerSMTP ? 'red' : 'yellow'} 
                            marginLeft={2} 
                            onClick={handleEditarConexaoSMTP}
                        >
                            {emEdicaoServerSMTP ? 'Cancelar' : 'Editar'}
                        </Button>

                        <Button  
                            fontWeight='none'
                            size='sm' 
                            colorScheme='green'
                            isDisabled={!emEdicaoServerSMTP}
                            onClick={handleSalvarConexaoSMTP}
                        >
                            Salvar
                        </Button>

                    </HStack>


                </FormControl>
            </form>



            {/*------------- CONFIGURAÇÕES DE EMAIL (MENSAGEM, HORÁRIO, DIA E ETC)------------------ */}
            <form>
                <FormControl marginTop={12} p="2" width="100%" borderWidth="1px" borderColor="#cbd5e1" borderRadius='5px' >

                    <HStack width='100%' alignItems='start' marginBottom={5} gap={5}>

                        <Stack direction='column' spacing={0}>

                            <FormLabel fontSize='sm' >Enviar e-mail automático ?</FormLabel>

                            <RadioGroup value={envEmailAutCobr} onChange={setEnvEmailAutCobr} size='md' isDisabled={!emEdicaoConfigMensagem}>
                                <Stack direction='row'>
                                    <Radio size='sm' value='N'>Não</Radio>
                                    <Radio size='sm' value='D'>Diário</Radio>
                                    <Radio size='sm' value='H'>Horas</Radio>
                                </Stack>
                            </RadioGroup>

                        </Stack>


                        <Stack direction='column' spacing={0} >

                            <FormLabel fontSize='sm'>Intervalo para repetir Dia/Horas</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                width="4rem"
                                isDisabled={!emEdicaoConfigMensagem}
                                value={hrsIntEmailAutCobr}
                                onChange={(e) => setHrsIntEmailAutCobr(e.target.value)}
                            />

                        </Stack>

                        <Stack direction='column' spacing={0} >

                            <FormLabel fontSize='sm'>Horário agendamento</FormLabel>
                            <Input
                                type='time'
                                size='sm'
                                width="100%"
                                isDisabled={!emEdicaoConfigMensagem}
                                value={hrsIniEmailAutCobr}
                                onChange={(e) => setHrsIniEmailAutCobr(e.target.value)}
                            />

                        </Stack>


                        <Stack direction='column' spacing={0}>

                            <FormLabel fontSize='sm'>Dias vencido</FormLabel>
                            <Input
                                size='sm'
                                type='number'
                                width="4rem"
                                isDisabled={!emEdicaoConfigMensagem}
                                value={diasVencEmailAutCobr}
                                onChange={(e) => setDiasVencEmailAutCobr(e.target.value)}
                            />

                        </Stack>



                    </HStack>

                    <Divider />


                    <Stack direction='column' spacing={0} width='30rem' marginY={5}>
                        <FormLabel fontSize='sm' >Assunto do e-mail cobrança</FormLabel>
                        <Input
                            type='text'
                            size='sm'
                            isDisabled={!emEdicaoConfigMensagem}
                            value={mailAssuntoCobr}
                            onChange={(e) => setMailAssuntoCobr(e.target.value)}
                            placeholder="Informe o assunto do E-mail"
                        />
                    </Stack>

                    <Divider />

                    <Stack direction='column' spacing={0} width='100%' marginTop={5} marginBottom={5}>

                        <FormLabel fontSize='sm'>Mensagem padrão cobrança</FormLabel>

                        <MyEditor  
                            initialValue={mailMsgCobr}
                            emAlteracao={!emEdicaoConfigMensagem} 
                        />

                    </Stack>



                    <HStack justifyContent='space-between'>

                        <Button
                            fontWeight='none'
                            size='sm'
                            colorScheme='blue'
                            marginTop={2} marginLeft={2}
                            isDisabled={emEdicaoConfigMensagem}
                            loadingText='Enviando...'
                            onClick={handleEnviarEmailTeste}
                        >
                            Enviar e-mail Teste
                        </Button>


                        <Box>

                            <Button 
                                fontWeight='none'
                                size='sm' 
                                width='5.2rem' 
                                colorScheme={emEdicaoConfigMensagem ? 'red' : 'yellow'} 
                                marginTop={2}
                                onClick={handleEditarConfigMensagem}
                            >
                                {emEdicaoConfigMensagem ? 'Cancelar' : 'Editar'}
                            </Button>

                            <Button 
                                type='submit' 
                                fontWeight='none'
                                size='sm' 
                                colorScheme='green' 
                                marginTop={2} 
                                marginLeft={2} 
                                isDisabled={!emEdicaoConfigMensagem} 
                                onClick={handleSalvarConfigMensagem}
                            >
                                Salvar
                            </Button>
                        </Box>


                    </HStack>

                 


                </FormControl>
            </form>


            <ModalEnviarEmailTeste
                isOpen={isOpen}
                onClose={onClose}
            />
        </Box>
    )


}

export default ConfiguracaoCobranca