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
  Flex,
  Textarea,
  FormControl,
  Thead,
  Tbody,
  Box,
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

// Utils
import dataAtualDDMMAAAA from '../../../../../utils/dataAtualDDMMAAAA';



const ModalRegistrarCobranca = ({ isOpen, onClose, cliente}) => {

  const [funcCobranca, setFuncCobranca] = useState("");
  const [nomeContatoCliente, setNomeContatoCliente] = useState("");
  const [dataHrCobranca, setDataHrCobranca] = useState("")
  const [agendarPara, setAgendarPara] = useState("");
  const [historicoCobranca, setHistoricoCobranca] = useState("");





  const [loading, setLoading] = useState(false);
  const [emEdicao, setEmEdicao] = useState(false);

  

  const handleRegistrarCobranca = (cliente) => {

    setEmEdicao(!emEdicao);

  }




  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size=''>
        <ModalOverlay />
        <ModalContent width='50%'>
          <ModalHeader>Registro de cobrança</ModalHeader>
          <ModalCloseButton />

          <ModalBody>

            <form onSubmit={handleRegistrarCobranca}>

            <FormControl>

              <Flex flexDirection='column'>

                <Stack direction='row' width='100%'>

                  <Stack direction='column' width='15%' spacing={0}>
                    <FormLabel>Cod Cliente</FormLabel>
                    <Input type='text' isReadOnly={true}  value={cliente.CodRedCt}/>
                  </Stack>

                  <Stack direction='column' width='85%' spacing={0}>
                    <FormLabel>Cliente</FormLabel>
                    <Input type='text'  isReadOnly={true} value={cliente.cliente}/>
                  </Stack>


                </Stack>

                <Stack direction='row' width='100%' marginTop={2}>

                  <Stack direction='column' width='60%' spacing={0}>
                    <FormLabel>Funcionário Cobrança</FormLabel>
                    <Input type='text' />
                  </Stack>


                  <Stack direction='column' spacing={0}>

                    <FormLabel>Data/Hora cobrança</FormLabel>

                    <Stack direction='row'>
                      <Input type='date' padding={2} value={dataAtualDDMMAAAA()}/>
                      <Input type='time' maxW='5.2em' padding={1} />
                    </Stack>

                  </Stack>

                </Stack>

                <Stack direction='row' width='100%' marginTop={2}>

                  <Stack direction='column' width='60%' spacing={0}>

                    <FormControl isRequired>
                      <FormLabel>Nome Contato Cliente</FormLabel>
                      <Input type='text' />
                    </FormControl>  
                  
                  </Stack>


                  <Stack direction='column' spacing={0}>
                    <FormLabel>Agendar para</FormLabel>

                    <Stack direction='row'>
                      <Input type='date' padding={2} />
                      <Input type='time' maxW='5.2em' padding={1} />
                    </Stack>
                  </Stack>

                </Stack>

                <Stack marginTop={2} spacing={0}>

                  <FormControl isRequired>
                    <FormLabel>Histórico da Cobrança</FormLabel>
                    <Textarea type='text' placeholder='informe o histórico da cobrança. "Ex: Cliente informou que vai realizar o pagamento dia 01/01/2050" ' />
                  </FormControl>

                </Stack>

              </Flex>

              <Flex justifyContent='flex-end' marginTop={4}>
               
                <Button width='5.2rem' colorScheme={emEdicao ? 'red' : 'blue'} onClick={handleRegistrarCobranca}>
                        {emEdicao ? 'Cancelar' : 'Incluir' }
                </Button>
                <Button colorScheme='green' marginLeft={2} isDisabled={!emEdicao} type='submit'>Salvar</Button>

              </Flex>

            </FormControl>

            </form>



          </ModalBody>
          {/*
          <ModalFooter>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
          */}

        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalRegistrarCobranca