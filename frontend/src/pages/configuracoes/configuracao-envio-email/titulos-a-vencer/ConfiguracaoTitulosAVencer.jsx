import { useState } from 'react';
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
    Divider
}
from '@chakra-ui/react'


// API
import api from '../../../../helpers/api-instance'



// Components
import MyEditor from '../../../../components/EditorDeTexto/MyEditor'
import ModalEnviarEmailTeste from './ModalEnviarEmailTesteCobranca'



const ConfiguracaoTitulosAVencer = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [emEdicao, setEmEdicao] = useState('');

    const [serverSMTP, setServerSMTP] = useState('');
    const [portSMTP, setPortSMTP] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [envEmailAutAVenc, setEnvEmailAutAVenc] = useState('');
    const [hrsIntEmailAutAVenc, setHrsIntEmailAutAVenc] = useState('');
    const [diasAVencEmailAutAVenc, setDiasAVencEmailAutAVenc] = useState('');
    const [mailAssuntoTitAVenc, setMailAssuntoTitAVenc] = useState('');
    const [mailMsgTitAVenc, setmailMsgTitAVenc] = useState('');








    

  /*-----------------Chamada para buscar as configurações de envio de email cobranca do banco de dados--------------- */

  const { data, error, isLoading } = useQuery({

    queryKey: ['configuracao-titulos-vencer'], // Atualiza os dados se a chave mudar
    queryFn: async () => {

      const response = await api.get('/configuracoes/envio-de-emails/titulos-a-vencer');
      return response.data;

    },
    refetchOnWindowFocus: false,
  });
  /*-----------------------------------FIM------------------------------------------ */












    const handleTestarConexao = () => {

    }


    const handleEnviarEmailTeste = () => {

    }


    const handleSalvarDados = () => {

    }





    return (

        <Box>

            {/*--------------------------- CONFIGURAÇÕES DE SERVIDOR SMTP -------------------------- */}
            <form>
                <FormControl  p="2" width="100%" borderWidth="1px" borderColor="#cbd5e1" borderRadius='5px' marginBottom={2}>

                    <Stack direction='row' width='100%'>

                        <Stack direction='column' spacing={0} width='30%'>

                            <FormLabel fontSize='sm'>SMTP Server</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                isDisabled={emEdicao}
                                value={serverSMTP}
                                onChange={(e) => setServerSMTP(e.target.value)}
                                placeholder="Informe o servidor SMTP"
                            />

                        </Stack>

                        <Stack direction='column' spacing={0} width='30%'>

                            <FormLabel fontSize='sm' >SMTP Usuário</FormLabel>
                            <Input
                                size='sm'
                                type='e-mail'
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Informe a Senha"
                            />

                        </Stack>


                        <Stack direction='column' spacing={0}>

                            <FormLabel fontSize='sm' >Porta</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                width="4rem"
                                value={portSMTP}
                                onChange={(e) => setPortSMTP(e.target.value)}
                            />

                        </Stack>



                    </Stack>



                    <HStack marginTop={6}>

                        <Button type='submit' size='sm' colorScheme='blue' onClick={handleTestarConexao}>
                            Testar Conexão
                        </Button>


                        <Button type='submit' size='sm' colorScheme='green' marginLeft={2} onClick={handleSalvarDados}>Salvar</Button>

                    </HStack>


                </FormControl>
            </form>



            {/*------------- CONFIGURAÇÕES DE EMAIL (MENSAGEM, HORÁRIO, DIA E ETC)------------------ */}
            <form>
                <FormControl marginTop={12} p="2" width="100%" borderWidth="1px" borderColor="#cbd5e1" borderRadius='5px' >

                    <HStack width='100%' alignItems='start' marginBottom={5} gap={5}>

                        <Stack direction='column' spacing={0}>

                            <FormLabel fontSize='sm' >Enviar e-mail automático ?</FormLabel>

                            <RadioGroup value={envEmailAutAVenc} onChange={setEnvEmailAutAVenc} size='md'>
                                <Stack direction='row'>
                                    <Radio fontSize='sm' value='N'>Não</Radio>
                                    <Radio fontSize='sm' value='D'>Diário</Radio>
                                    <Radio  value='H'>Horas</Radio>
                                </Stack>
                            </RadioGroup>

                        </Stack>


                        <Stack direction='column' spacing={0} >

                            <FormLabel fontSize='sm'>Intervalo para repetir Dia/Horas</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                width="4rem"
                                value={hrsIntEmailAutAVenc}
                                onChange={(e) => setHrsIntEmailAutAVenc(e.target.value)}
                            />

                        </Stack>

                        <Stack direction='column' spacing={0} >

                            <FormLabel fontSize='sm' >Horário agendamento</FormLabel>
                            <Input
                                type='time'
                                size='sm'
                                width="7rem"
                                value={hrsIntEmailAutAVenc}
                                onChange={(e) => setHrsIntEmailAutAVenc(e.target.value)}
                            />

                        </Stack>


                        <Stack direction='column' spacing={0} >

                            <FormLabel fontSize='sm' >Dias Antes do vencimento</FormLabel>
                            <Input
                                size='sm'
                                type='text'
                                width="4rem"
                                value={diasAVencEmailAutAVenc}
                                onChange={(e) => setDiasAVencEmailAutAVenc(e.target.value)}
                            />

                        </Stack>



                    </HStack>

                    <Divider />


                    <Stack direction='column' spacing={0} width='30rem' marginY={5}>
                        <FormLabel fontSize='sm' >Assunto do e-mail titulos a vencer</FormLabel>
                        <Input
                            type='text'
                            size='sm'
                            value={mailAssuntoTitAVenc}
                            onChange={(e) => setMailAssuntoTitAVenc(e.target.value)}
                            placeholder="Informe o assunto do E-mail"
                        />
                    </Stack>

                    <Divider />

                    <Stack direction='column' spacing={0} width='100%' marginTop={5} marginBottom={5}>

                        <FormLabel fontSize='sm'>Mensagem padrão titulos a vencer</FormLabel>

                        <MyEditor  initialValue={mailMsgTitAVenc}></MyEditor>

                    </Stack>



                    <FormLabel fontSize='sm'>

                        <Box display='flex' justifyContent='space-between'>

                            <Box>
                                <Button size='sm' width='5.2rem' colorScheme={emEdicao ? 'red' : 'yellow'} marginTop={2}>
                                    {emEdicao ? 'Cancelar' : 'Editar'}
                                </Button>

                                <Button type='submit' size='sm' colorScheme='green' marginTop={2} marginLeft={2} isDisabled={!emEdicao} onClick={handleSalvarDados}>Salvar</Button>
                            </Box>

                            <Button

                                size='sm'
                                width='9.2rem'
                                colorScheme='blue'
                                marginTop={2} marginLeft={2}
                                loadingText='Enviando...'
                                onClick={handleEnviarEmailTeste}
                            >
                                Enviar e-mail Teste
                            </Button>

                        </Box>

                    </FormLabel>


                </FormControl>
            </form>


            <ModalEnviarEmailTeste
                isOpen={isOpen}
                onClose={onClose}
            />
        </Box>
    )


}

export default ConfiguracaoTitulosAVencer