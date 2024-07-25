import { useState, useEffect } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  Spinner,
  Input,
  Box,
  Alert,
  AlertTitle,
  AlertIcon
} from '@chakra-ui/react'


import api from '../../../helpers/api-instance'


const ModalEnviarEmailTeste = ({ isOpen, onClose }) => {

  const [emailDestino, setEmaildestino] = useState('');

  //Para o Loading no envio do e-mail
  const [isLoading, setIsLoading] = useState(false);

  // Msg Email foi enviado 
  const [msgEmailEnviado , setMsgEmailEnviado] = useState(false);
  const [emailEnviado , setemailEnviado] = useState(true);


  useEffect(() => {
    if(!isOpen) {
      setEmaildestino('');
      setIsLoading(false);
      setMsgEmailEnviado(false);
      setemailEnviado(true);
    }

  }, [isOpen])



  const handleEnviarEmail = (event) => {

    event.preventDefault();

    console.log('Email destino', event.target.value);

    setIsLoading(true);

    /*
      setTimeout(() => {
      setIsLoading(false);
      setEmailenviado(true);
    }, 2000);


    setTimeout(() => {
      // Simula uma requisição de envio de e-mail
      setEmailenviado(false);
      console.log('Email enviado:', emailEnviado);

    }, 3000);

    
    
    */
     api.post('configuracoes/envio-email/teste-titulos-a-vencer', {
      emailDestino,
     })
     
     .then((response) => {
        console.log('Email Teste enviado com sucesso: ', response.data)
        setIsLoading(false);
        setMsgEmailEnviado(true);
     })
     .catch((error) => {
         // Adicione aqui a lógica para exibir uma mensagem de erro ou qualquer outra ação desejada em caso de falha no teste de conexão
        console.log('Erro ao Enviar Email Teste:', error.response);
        setIsLoading(false);
        setMsgEmailEnviado(true);
        setemailEnviado(false);
     });
    
  }


  return (

    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Informe o e-mail</ModalHeader>
        <ModalCloseButton />

        {/* Mostra snniper carregando ate enviar o e-mail*/}
        {isLoading ? (
          <Box display='flex' justifyContent='center' height={128}>
            <Spinner color='green' size='xl' thickness="4px" />
          </Box>

        // Mostra o retorno da solicitação do envio de email
        ) : msgEmailEnviado ? (

          //Email Enviado mostra sucesso
          emailEnviado ? (
            <Box>
            <ModalBody height={128}>

              <Alert
                status='success'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
              >
                <AlertIcon boxSize='30px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                  E-mail enviado com sucesso !!!
                </AlertTitle>
              </Alert>
            </ModalBody>
          </Box>
          //Email com falha mostra erro
          ) : (
            <Box>
            <ModalBody height={128}>

              <Alert
                status='error'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
              >
                <AlertIcon boxSize='30px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                  E-mail não enviado !!!
                </AlertTitle>
              </Alert>
            </ModalBody>
          </Box>
        )

        ) : (
        
            <Box>
              <ModalBody pb={2}>

                <Input type='email' border='1px' borderColor='#cbd5e1'
                  value={emailDestino}
                  required
                  onChange={(e) => setEmaildestino(e.target.value)}
                />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='red' mr={3} onClick={onClose}>Cancelar</Button>
                <Button type='submit' colorScheme='blue' onClick={handleEnviarEmail}>Enviar</Button>
              </ModalFooter>

            </Box>
            
      
        )}

      </ModalContent>
    </Modal>

  )
}

export default ModalEnviarEmailTeste