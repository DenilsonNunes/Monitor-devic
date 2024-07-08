import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text
  } from '@chakra-ui/react'

import TabelaInfoProdutos from './TabelaInfoProdutos'


const ModalEnviarEmail = ({ isOpen, onClose, codEmpr, DtLctoCtRec, NrLctoCtRec }) => {

  console.log('ModalProdutos', codEmpr, DtLctoCtRec, NrLctoCtRec);
  
    return (
      <>  
        <Modal onClose={onClose} isOpen={isOpen} isCentered size=''>
          <ModalOverlay />
            <ModalContent width={1500}>
              <ModalHeader>Informações para envio de email</ModalHeader>
                <ModalCloseButton />

                  <ModalBody>

                    <Text>CodEmpr</Text>
                    <Text>Data Lançamento</Text>
                    <Text>NrDocumento</Text>

                  </ModalBody>
                  
                <ModalFooter>
                <Button onClick={onClose}>Fechar</Button>
              </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default ModalEnviarEmail