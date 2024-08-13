import { useState, useEffect } from 'react';

import api from '../../../helpers/api-instance'

import {
    FormControl,
    FormLabel,
    Input,
    Button,
    useToast,
    Stack,
}
    from '@chakra-ui/react'



const FormConfigEmail = () => {

    const toast = useToast();


    const [server, setServer] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [port, setPort] = useState("");

    const [desabilitarCampos, setdesabilitarCampos] = useState(true);
    const [botaoHabilitado, setbotaoHabilitado] = useState(false);
    const [emEdicao, setEmEdicao] = useState(true);


    // Para o Loading no botão
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        api.get('configuracoes/envio-email/titulo-a-vencer')
            .then((response) => {
                const {
                    PortaTitAVenc,
                    SMTPSenhaTitAVenc,
                    SMTPServerTitAVenc,
                    SMTPUsuarioTitAVenc,
                } = response.data[0];

                setServer(SMTPServerTitAVenc);
                setEmail(SMTPUsuarioTitAVenc);
                setPassword(SMTPSenhaTitAVenc);
                setPort(PortaTitAVenc);

            })
            .catch((error) => {
                console.log('Erro ao buscar dados: ', error);
            });


    }, []);

    const handleSalvarDados = (event) => {

        event.preventDefault();

        if(server === '') {
            toast({
                title: 'O campo server deve ser preenchido', // apresenta a mensagem enviada pelo backend
                status: 'error',
                duration: 4000,
                isClosable: true,
            })

            useEffect(() => {
        
            }, []);
            
            return
        }

        api.patch('configuracoes/envio-email/edit/config-smtp', {
            server,
            email,
            password,
            port
        })
            .then((response) => {

                
                setdesabilitarCampos(true);
                setbotaoHabilitado(false);
                setEmEdicao(!emEdicao);
                
                
                toast({
                    title: response.data.message, // apresenta a mensagem enviada pelo backend
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                })


            })
            .catch((error) => {
                console.log('Erro ao atualizar informações: ', error.response.data);

                toast({
                    title: error, // apresenta a mensagem enviada pelo backend
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                })

            });


    };


    const handleTestarConexao = () => {

        setLoading(true)

        api.get('configuracoes/envio-email/teste-conexao')

            .then((response) => {

                console.log('Resposta do teste de conexao: ', response.data)
                // Adicione aqui a lógica para exibir uma mensagem de sucesso ou qualquer outra ação desejada após o teste de conexão
                setLoading(false)
                toast({
                    title: response.data.message,
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                })
            })
            .catch((error) => {
                // Adicione aqui a lógica para exibir uma mensagem de erro ou qualquer outra ação desejada em caso de falha no teste de conexão
                console.log('Erro ao testar conexão:', error.response);
                setLoading(false)
                toast({
                    title: 'Erro ao Conectar com o servidor SMTP!',
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                })
            });
    }

    const handleEditarConexao = () => {
        setEmEdicao(!emEdicao)
        setdesabilitarCampos(!desabilitarCampos)
        setbotaoHabilitado(!botaoHabilitado)
    }

    return (



        <form onSubmit={handleSalvarDados}>

            <FormControl px={30} p="2" width="100%" borderWidth="1px" borderColor="#cbd5e1" borderRadius='5px'>

                <Stack direction='row' width='100%'>


                    <Stack direction='column' spacing={0} width='30%'>

                        <FormLabel>SMTP Server</FormLabel>
                        <Input type='text' border='1px' borderColor='#cbd5e1' isDisabled={emEdicao}
                            value={server}
                            onChange={(e) => setServer(e.target.value)}
                            placeholder="Informe o servidor SMTP"
                        />

                    </Stack>

                    <Stack direction='column' spacing={0} width='30%'>

                        <FormLabel >SMTP Usuário</FormLabel>
                        <Input type='e-mail' border='1px' borderColor='#cbd5e1' marginBottom={2} isDisabled={emEdicao}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Informe o e-mail"
                        />

                    </Stack>

                    <Stack direction='column' spacing={0} width='30%'>

                        <FormLabel >SMTP Senha</FormLabel>
                        <Input type='password' border='1px' borderColor='#cbd5e1' marginBottom={2} isDisabled={emEdicao}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Informe a Senha"
                        />

                    </Stack>


                    <Stack direction='column' spacing={0}>

                        <FormLabel >Porta</FormLabel>
                        <Input type='text' border='1px' borderColor='#cbd5e1' marginBottom={5} width="4rem" padding={2} isDisabled={emEdicao}
                            value={port}
                            onChange={(e) => setPort(e.target.value)}
                        />

                    </Stack>



                </Stack>

               

                <FormLabel>

                    <Button type='submit' size='sm' isLoading={loading} colorScheme='blue'  isDisabled={botaoHabilitado} onClick={handleTestarConexao}>
                        Testar Conexão
                    </Button>

                    <Button size='sm' marginLeft={2} width='5.2rem' colorScheme={emEdicao ? 'yellow' : 'red'}  onClick={handleEditarConexao}>
                        {emEdicao ? 'Editar' : 'Cancelar' }
                    </Button>

                    <Button type='submit' size='sm' colorScheme='green' marginLeft={2} isDisabled={desabilitarCampos} onClick={handleSalvarDados}>Salvar</Button>
        
                    {!emEdicao && <p style={{color: 'red'}}>Alterando...</p>}

                </FormLabel>


            </FormControl>

        </form>


    )
}

export default FormConfigEmail;


