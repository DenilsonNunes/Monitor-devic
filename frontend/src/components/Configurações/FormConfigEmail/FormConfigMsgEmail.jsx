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
    Box

} from '@chakra-ui/react'


// instacia API
import api from '../../../helpers/api-instance'
import MyEditor from '../../EditorDeTexto/MyEditor';



const FormConfigMsgEmail = () => {

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

        setEnviandoemail(true);

        api.post('configuracoes/envio-email/teste-titulos-a-vencer')

            .then((response) => {

                console.log('Email Teste Realizado com sucesso: ', response.data)

                setEnviandoemail(false);
                
                toast({
                    title: response.data.message,
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                })
            })
            .catch((error) => {
                // Adicione aqui a lógica para exibir uma mensagem de erro ou qualquer outra ação desejada em caso de falha no teste de conexão
                console.log('Erro ao Enviar Email Teste:', error.response);

                setEnviandoemail(false);
               
                toast({
                    title: 'Erro ao enviar e-mail teste !!!',
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                })
            });
        
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
                title: error, // apresenta a mensagem enviada pelo backend
                status: 'error',
                duration: 3000,
                isClosable: true,
            })

        });

    }


    return (

        <form onSubmit={handleSalvarDados}>

            <FormControl px={30} p="2" width="100%" borderWidth="1px" borderColor="#cbd5e1" borderRadius='5px' marginTop={10}>

                <Stack direction='row' width='100%'>


                    <Stack direction='column' spacing={0} >

                        <FormLabel>Enviar e-mail automatico?</FormLabel>
                        <Box height='40px' display='flex' alignItems='center'>
                            <RadioGroup value={EnvEmailAutAVenc} onChange={setEnvEmailAutAVenc} isDisabled={!emEdicao}>
                                <Stack direction='row'>
                                    <Radio borderColor='#cbd5e1' value='N'>Não</Radio>
                                    <Radio borderColor='#cbd5e1' value='D'>Diário</Radio>
                                    <Radio borderColor='#cbd5e1' value='H'>Horas</Radio>
                                </Stack>
                            </RadioGroup>

                        </Box>


                    </Stack>


                    <Stack direction='column' spacing={0} >

                        <FormLabel >Intervalo para repetir Dia/Horas</FormLabel>
                        <Input type='text' border='1px' borderColor='#cbd5e1' width="4rem" marginBottom={2} isDisabled={!emEdicao}
                            value={HsIntEmailAutAVenc}
                            onChange={(e) => setHsIntEmailAutAVenc(e.target.value)}
                        />

                    </Stack>

                    <Stack direction='column' spacing={0} >

                        <FormLabel >Horário agendamento</FormLabel>
                        <Input type='time' border='1px' borderColor='#cbd5e1' marginBottom={2} width="7rem" isDisabled={!emEdicao}
                            value={HsIniEmailAutAVenc}
                            onChange={(e) => setHsIniEmailAutAVenc(e.target.value)}
                        />

                    </Stack>


                    <Stack direction='column' spacing={0} >

                        <FormLabel >Dias Antes do vencimento</FormLabel>
                        <Input type='text' border='1px' borderColor='#cbd5e1' marginBottom={2} width="4rem" isDisabled={!emEdicao}
                            value={DiasAVencEmailAutAVenc}
                            onChange={(e) => setDiasAVencEmailAutAVenc(e.target.value)}
                        />

                    </Stack>



                </Stack>

                <Stack direction='column' spacing={0} width='23rem'>

                    <FormLabel >Assunto do e-mail titulos a vencer</FormLabel>
                    <Input type='text' border='1px' borderColor='#cbd5e1' marginBottom={2} isDisabled={!emEdicao}
                        value={MailAssuntoTitAVenc}
                        onChange={(e) => setMailAssuntoTitAVenc(e.target.value)}
                        placeholder="Informe o assunto do E-mail"
                    />

                </Stack>


                <Stack direction='column' spacing={0} width='100%'>

                    <FormLabel >Mensagem padrão titulos a vencer</FormLabel>

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
                            type='submit' 
                            size='sm' 
                            width='9.2rem'
                            colorScheme='blue' 
                            marginTop={2} marginLeft={2} 
                            isLoading={enviandoEmail}
                            isDisabled={emEdicao}
                            loadingText='Enviando...' 
                            onClick={handleEnviarEmailTeste}
                        >
                            Enviar e-mail Teste
                        </Button>

                    </Box>

                    {infoEmEdicao && <p style={{ color: 'red', fontWeight: 'Bold' }}>Alterando...</p>}

                </FormLabel>


            </FormControl>

        </form>
    )
}

export default FormConfigMsgEmail;