import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Heading
  } from '@chakra-ui/react'




const ModalTitulosEmDebito = ({ isOpen, onClose, titulos}) => {

    console.log('ModalTitulosEmDebito', titulos);
  
    return (
      <>  
        <Modal onClose={onClose} isOpen={isOpen} isCentered size=''>
          <ModalOverlay />
            <ModalContent width={1500}>
              <ModalHeader>Títulos em aberto</ModalHeader>
                <ModalCloseButton />

                  <ModalBody>
                    <Heading>Teste</Heading>
                  </ModalBody>
                  
                <ModalFooter>
                <Button onClick={onClose}>Fechar</Button>
              </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default ModalTitulosEmDebito