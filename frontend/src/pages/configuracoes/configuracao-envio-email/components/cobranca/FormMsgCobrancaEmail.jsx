import { useState, useEffect } from 'react';

import {
    FormControl,
    FormLabel,
    Input,
    Button,
    useToast,
    Stack,
    RadioGroup,
    Radio,
    Box,
    useDisclosure,
    HStack,
    Divider,

} from '@chakra-ui/react'

//componentes
import ModalEnviarEmailTeste from './ModalEnviarEmailTesteCobranca';


// instacia API
import api from '../../../../../helpers/api-instance'
import MyEditor from '../../../../../components/EditorDeTexto/MyEditor';



const FormMsgCobrancaEmail = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const toast = useToast();

    const [MailAssuntoTitAVenc, setMailAssuntoTitAVenc] = useState("");
    const [HsIntEmailAutAVenc, setHsIntEmailAutAVenc] = useState("");
    const [HsIniEmailAutAVenc, setHsIniEmailAutAVenc] = useState("");
    const [EnvEmailAutAVenc, setEnvEmailAutAVenc] = useState("");
    const [MailMsgTitAVenc, setMailMsgTitAVenc] = useState("");
    const [DiasAVencEmailAutAVenc, setDiasAVencEmailAutAVenc] = useState("");
    const [EditorValue, setEditorValue] = useState("");

    const [infoEmEdicao, setInfoEmEdicao] = useState(false);
    const [emEdicao, setEmedicao] = useState(false);
    const [enviandoEmail, setEnviandoemail] = useState(false);




    useEffect(() => {

        api.get('configuracoes/envio-email/titulo-a-vencer')
            .then((response) => {
                const {
                    MailAssuntoTitAVenc,
                    MailMsgTitAVenc,
                    HsIniEmailAutAVenc,
                    HsIntEmailAutAVenc,
                    EnvEmailAutAVenc,
                    DiasAVencEmailAutAVenc
                } = response.data[0];


                setMailAssuntoTitAVenc(MailAssuntoTitAVenc);
                setMailMsgTitAVenc(MailMsgTitAVenc);
                setHsIntEmailAutAVenc(HsIntEmailAutAVenc);
                setHsIniEmailAutAVenc(HsIniEmailAutAVenc);
                setEnvEmailAutAVenc(EnvEmailAutAVenc);
                setDiasAVencEmailAutAVenc(DiasAVencEmailAutAVenc);

            })
            .catch((error) => {
                console.log('Erro ao buscar dados: ', error);
            });


    }, []);


    const handleEditar = () => {

        setEmedicao(!emEdicao);
        setInfoEmEdicao(!infoEmEdicao);

    }

    const handleEditorChange = (value) => {
        setMailMsgTitAVenc(value);
    }

    const handleEnviarEmailTeste = (event) => {

        event.preventDefault();
        onOpen();
       
        
    };

    const handleSalvarDados = (event) => {
        event.preventDefault();

        api.patch('configuracoes/envio-email/edit', {
            MailAssuntoTitAVenc,
            HsIntEmailAutAVenc,
            HsIniEmailAutAVenc,
            EnvEmailAutAVenc,
            DiasAVencEmailAutAVenc,
            MailMsgTitAVenc
        })
        .then((response) => {

            setEmedicao(!emEdicao);
            setInfoEmEdicao(false);

            toast({
                title: response.data.message, // apresenta a mensagem enviada pelo backend
                status: 'success',
                duration: 3000,
                isClosable: true,
            })


        })
        .catch((error) => {
            console.log('Erro ao atualizar informações: ', error.response.data);

            toast({
                title:'erro ao conecar com o banco de dados', // apresenta a mensagem enviada pelo backend
                status: 'error',
                duration: 3000,
                isClosable: true,
            })

        });

    }


    return (

        <form onSubmit={handleSalvarDados}>

            <FormControl px={30} p="2" width="100%" borderWidth="1px" borderColor="#cbd5e1" borderRadius='5px' >

                <HStack width='100%' alignItems='start' marginBottom={5} gap={5}>

                    <Stack direction='column' spacing={0}>

                        <FormLabel>Enviar e-mail automatico?</FormLabel>
                 
                        <RadioGroup value={EnvEmailAutAVenc} onChange={setEnvEmailAutAVenc} isDisabled={!emEdicao}>
                            <Stack direction='row'>
                                <Radio borderColor='#cbd5e1' value='N'>Não</Radio>
                                <Radio borderColor='#cbd5e1' value='D'>Diário</Radio>
                                <Radio borderColor='#cbd5e1' value='H'>Horas</Radio>
                            </Stack>
                        </RadioGroup>

                    </Stack>

                 
                    <Stack direction='column' spacing={0} >

                        <FormLabel >Intervalo para repetir Dia/Horas</FormLabel>
                        <Input 
                            size='sm'
                            type='text' 
                            width="4rem"  
                            isDisabled={!emEdicao}
                            value={HsIntEmailAutAVenc}
                            onChange={(e) => setHsIntEmailAutAVenc(e.target.value)}
                        />

                    </Stack>

                    <Stack direction='column' spacing={0} >

                        <FormLabel >Horário agendamento</FormLabel>
                        <Input 
                            type='time' 
                            size='sm' 
                            width="7rem" 
                            isDisabled={!emEdicao}
                            value={HsIniEmailAutAVenc}
                            onChange={(e) => setHsIniEmailAutAVenc(e.target.value)}
                        />

                    </Stack>


                    <Stack direction='column' spacing={0} >

                        <FormLabel >Dias Antes do vencimento</FormLabel>
                        <Input 
                            size='sm'
                            type='text' 
                            width="4rem" 
                            isDisabled={!emEdicao}
                            value={DiasAVencEmailAutAVenc}
                            onChange={(e) => setDiasAVencEmailAutAVenc(e.target.value)}
                        />

                    </Stack>



                </HStack>

                <Divider/>


                <Stack direction='column' spacing={0} width='23rem' marginY={5}>
                    <FormLabel >Assunto do e-mail titulos a vencer</FormLabel>
                    <Input 
                        type='text'
                        size='sm'
                        isDisabled={!emEdicao}
                        value={MailAssuntoTitAVenc}
                        onChange={(e) => setMailAssuntoTitAVenc(e.target.value)}
                        placeholder="Informe o assunto do E-mail"
                    />
                </Stack>

                <Divider/>

                <Stack direction='column' spacing={0} width='100%' marginTop={5} marginBottom={5}>

                    <FormLabel fontSize='xsmd'>Mensagem padrão titulos a vencer</FormLabel>

                    <MyEditor onChange={handleEditorChange} initialValue={MailMsgTitAVenc} emAlteracao={!emEdicao}></MyEditor>

                </Stack>



                <FormLabel>

                    <Box display='flex' justifyContent='space-between'>

                        <Box>
                            <Button size='sm' width='5.2rem' colorScheme={emEdicao ? 'red' : 'yellow'} marginTop={2} onClick={handleEditar}>
                                {emEdicao ? 'Cancelar' : 'Editar'}    
                            </Button>

                            <Button type='submit' size='sm' colorScheme='green' marginTop={2} marginLeft={2} isDisabled={!emEdicao} onClick={handleSalvarDados}>Salvar</Button>
                        </Box>

                        <Button 
                          
                            size='sm' 
                            width='9.2rem'
                            colorScheme='blue' 
                            marginTop={2} marginLeft={2} 
                            //isLoading={enviandoEmail}
                            // isDisabled={emEdicao}
                            loadingText='Enviando...' 
                            onClick={handleEnviarEmailTeste}
                        >
                            Enviar e-mail Teste
                        </Button>

                    </Box>

                    {infoEmEdicao && <p style={{ color: 'red', fontWeight: 'Bold' }}>Alterando...</p>}

                </FormLabel>


            </FormControl>

            <ModalEnviarEmailTeste
                isOpen={isOpen}
                onClose={onClose}
            />

        </form>
        
    )
}

export default FormMsgCobrancaEmail;