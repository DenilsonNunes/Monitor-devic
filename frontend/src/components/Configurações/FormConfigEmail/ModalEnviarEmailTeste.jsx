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
    Input
} from '@chakra-ui/react'


import api from '../../../helpers/api-instance'


const ModalEnviarEmailTeste = ({ isOpen, onClose }) => {


  const handleEnviarEmail = (event) => {

    event.preventDefault();


   
    api.post('configuracoes/envio-email/teste-titulos-a-vencer')

    .then((response) => {
  
        console.log('Email Teste enviado com sucesso: ', response.data)
  
   
    })
    .catch((error) => {
        // Adicione aqui a lógica para exibir uma mensagem de erro ou qualquer outra ação desejada em caso de falha no teste de conexão
        console.log('Erro ao Enviar Email Teste:', error.response);
  
   
    });


  }

  
    return (
   
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
        <ModalContent>
          <ModalHeader>Informe o e-mail</ModalHeader>
          <ModalCloseButton />
          
            <ModalBody pb={2}>
              {/*     
              <Input type='password' border='1px' borderColor='#cbd5e1' 
              //value={MailAssuntoTitAVenc}
              //onChange={(e) => setMailAssuntoTitAVenc(e.target.value)}
              />   
              */}
    
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='red'  mr={3} onClick={onClose}>Cancelar</Button>

              <Button colorScheme='blue' onClick={handleEnviarEmail}>Enviar</Button>

            </ModalFooter>
          
        </ModalContent>
    </Modal>
     
    )
}

export default ModalEnviarEmailTeste