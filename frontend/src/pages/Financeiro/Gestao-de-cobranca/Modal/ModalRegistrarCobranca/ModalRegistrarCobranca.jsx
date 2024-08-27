import { useEffect, useState } from 'react'

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
  Input,
  Box,
  TableContainer,
  FormControl,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Checkbox,
  IconButton,
  Tag,
  TagLabel,
  Tooltip,
  Stack,
  VStack,
  Select,
  Icon,
  useDisclosure
} from '@chakra-ui/react'

// Instancia API
import api from '../../../../../helpers/api-instance'


// Components
import Loader from '../../../../../components/Loading/Loader';



const ModalRegistrarCobranca = ({ isOpen, onClose }) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);



  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size=''>
        <ModalOverlay />
        <ModalContent width={1500}>
          <ModalHeader>Registro de cobrança</ModalHeader>
          <ModalCloseButton />

          <ModalBody>

            <FormControl>

              <FormLabel>Cliente</FormLabel>
              <Input type='email' />

              <FormLabel>Funcionário Cobrança</FormLabel>
              <Input type='text' />

              <FormLabel>Data/Hora Cobrança</FormLabel>
              <Input type='datetime'/>

              <FormLabel>Nome Contato Cliente</FormLabel>
              <Input type='text'/>

              <FormLabel>Histórico da Cobrança</FormLabel>
              <Input type='text'/>


            </FormControl>


          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>

        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalRegistrarCobranca