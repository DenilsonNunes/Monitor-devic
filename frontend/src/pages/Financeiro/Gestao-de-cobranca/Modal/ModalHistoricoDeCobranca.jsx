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
  Text,
  Heading,
  Box,
  TableContainer,
  Table,
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
  Input,
  Stack,
  VStack,
  Select,
  Icon,
  useDisclosure
} from '@chakra-ui/react'

// Components
import Loader from '../../../../components/Loading/Loader';



const ModalHistoricoDeCobranca = ({ isOpen, onClose, cliente }) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size=''>
        <ModalOverlay />
        <ModalContent width={1500}>
          <ModalHeader>Histórico de cobrança</ModalHeader>
          <ModalCloseButton />

            <ModalBody>

                <TableContainer
                  maxHeight="600px"   // Define a altura máxima da tabela
                  maxWidth="100%"     // Define a largura máxima da tabela
                  overflowX="auto"    // Ativa o scroll horizontal
                  overflowY="auto"    // Ativa o scroll vertical
                  border='1px'
                  borderColor='#cbd5e1'

                >
                  <Table size='md'>
                    <Thead>
                      <Tr>
                        <Th>Funcionário</Th>
                        <Th>Nome Contato Cliente</Th>
                        <Th>Histórico</Th>
                        <Th>Data Hora Cobrança</Th>
                        <Th>Data Hora Agenda</Th>
                        <Th>Data Hora Lançamento</Th>
                        <Th>Data Hora Alteração</Th>
                      </Tr>
                    </Thead>


                    <Tbody>

                        <Tr >
                            <Td>item.CodEmpr</Td>
                            <Td>item.CodEspDocCtRec</Td>
                            <Td>item.CodEspDocCtRec</Td>
                            <Td>item.CodEspDocCtRec</Td>
                            <Td>item.CodEspDocCtRec</Td>
                            <Td>item.CodEspDocCtRec</Td>
                            <Td>item.CodEspDocCtRec</Td>
                          </Tr>

                      {/*
                      
                      
                      
                      {loading ? (

                        <Tr>
                          <Td colSpan={13} border='none'>
                            <Loader />
                          </Td>
                        </Tr>

                      ) : (

                        data && data.map((item) => (

                          <Tr >
                            <Td>item.CodEmpr</Td>
                            <Td>item.CodEspDocCtRec</Td>
                            <Td>item.CodEspDocCtRec</Td>
                            <Td>item.CodEspDocCtRec</Td>
                            <Td>item.CodEspDocCtRec</Td>
                            <Td>item.CodEspDocCtRec</Td>
                            <Td>item.CodEspDocCtRec</Td>
                          </Tr>

                        ))

                      )}
                      
                      */}


                    </Tbody>

                  </Table>

                </TableContainer>


            </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>

        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalHistoricoDeCobranca