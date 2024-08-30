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
  Code,
  HStack,
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

import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';


// Instancia API
import api from '../../../../../helpers/api-instance'

// Components
import Loader from '../../../../../components/Loading/Loader';

// Utils
import dataAtualDDMMAAAA from '../../../../../utils/dataAtualDDMMAAAA';



const ModalRegistrarCobranca = ({ isOpen, onClose, cliente }) => {

  const [funcCobranca, setFuncCobranca] = useState("Denilson");
  const [nomeContatoCliente, setNomeContatoCliente] = useState("");
  const [dataCobranca, setDataCobranca] = useState(dataAtualDDMMAAAA())
  const [horaCobranca, setHoraCobranca] = useState("")
  const [agendarParaData, setAgendarParaData] = useState("");
  const [agendarParaHora, setAgendarParaHora] = useState("");

  const [msgHistoricoCobranca, setMsgHistoricoCobranca] = useState("");


  const [loading, setLoading] = useState(false);
  const [emEdicao, setEmEdicao] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);




  const handleRegistrarCobranca = (event) => {

    event.preventDefault();

    setLoading(!loading);

    api.post('financeiro/gestao-de-cobranca/clientes-em-debito/criar-cobranca', {
      codCliente: cliente.CodRedCt,
      nomeContatoCliente,
      dataCobranca: dataCobranca + ' ' + horaCobranca,
      agendarParaData: agendarParaData + ' ' + agendarParaHora,
      msgHistoricoCobranca
    })
      .then((response) => {

        console.log('Cobrança criada com sucesso: ', response.data);
        setSuccess(true);

      })
      .catch((error) => {

        console.log('Erro ao atualizar informações: ', error.response.data);
        setError(true);
      
      });


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

                    <Stack direction='column' width='20%' spacing={0}>
                      <FormLabel fontWeight='bold'>Cod Cliente</FormLabel>
                      <Input type='text' isReadOnly={true} value={cliente.CodRedCt} />
                    </Stack>

                    <Stack direction='column' width='100%' spacing={0}>
                      <FormLabel fontWeight='bold'>Cliente</FormLabel>
                      <Input type='text' isReadOnly={true} value={cliente.cliente} />
                    </Stack>


                  </Stack>

                  <Stack direction='row' width='100%' marginTop={2}>

                    <Stack direction='column' width='60%' spacing={0}>
                      <FormLabel fontWeight='bold'>Funcionário Cobrança</FormLabel>
                      <Input type='text' value={funcCobranca} />
                    </Stack>


                    <Stack direction='column' spacing={0}>
                      <FormControl isRequired>

                        <FormLabel fontWeight='bold'>Data/Hora cobrança</FormLabel>
                        <Stack direction='row'>
                          <Input
                            type='date'
                            padding={2}
                            value={dataCobranca}
                            onChange={(e) => setDataCobranca(e.target.value)}
                          />
                          <Input
                            type='time'
                            maxW='5.2em'
                            padding={1}
                            value={horaCobranca}
                            onChange={(e) => setHoraCobranca(e.target.value)}
                          />
                        </Stack>

                      </FormControl>

                    </Stack>

                  </Stack>

                  <Stack direction='row' width='100%' marginTop={2}>

                    <Stack direction='column' width='60%' spacing={0}>

                      <FormControl isRequired>
                        <FormLabel fontWeight='bold'>Nome Contato Cliente</FormLabel>
                        <Input
                          type='text'
                          value={nomeContatoCliente}
                          onChange={(e) => setNomeContatoCliente(e.target.value)}
                        />
                      </FormControl>

                    </Stack>


                    <Stack direction='column' spacing={0}>

                      <FormControl isRequired>

                        <FormLabel fontWeight='bold'>Agendar para</FormLabel>

                        <Stack direction='row'>
                          <Input
                            type='date'
                            padding={2}
                            value={agendarParaData}
                            onChange={(e) => setAgendarParaData(e.target.value)}
                          />
                          <Input
                            type='time'
                            maxW='5.2em'
                            padding={1}
                            value={agendarParaHora}
                            onChange={(e) => setAgendarParaHora(e.target.value)}
                          />
                        </Stack>

                      </FormControl>
                    </Stack>

                  </Stack>

                  <Stack marginTop={2} spacing={0}>

                    <FormControl isRequired>
                      <FormLabel fontWeight='bold'>Histórico da Cobrança</FormLabel>
                      <Textarea
                        type='text'
                        placeholder='informe o histórico da cobrança. "Ex: Cliente informou que vai realizar o pagamento dia 01/01/2050" '
                        value={msgHistoricoCobranca}
                        onChange={(e) => setMsgHistoricoCobranca(e.target.value)}
                      />
                    </FormControl>

                  </Stack>

                </Flex>

                <Flex justifyContent='flex-end' marginTop={4}>


                  {success &&
                    <HStack marginRight={40}>
                      <CheckCircleIcon color="green.500" />
                      <Code height='50%' colorScheme='green'>
                        Registro salvo com sucesso !!!
                      </Code>
                    </HStack>
                  }

                  {error &&
                    <HStack marginRight={20}>
                      <WarningIcon color="red.500" />
                      <Code height='50%' colorScheme='red'>
                        Erro ao salvar as informações !!!
                      </Code>
                    </HStack>
                  }


                  <Button
                    width='5.2rem'
                    colorScheme='red'
                    onClick={onClose}
                    isDisabled={loading}
                  >
                    Cancelar
                  </Button>

                  <Button colorScheme='green' marginLeft={2} type='submit'>Salvar</Button>

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