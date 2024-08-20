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



const ModalTitulosEmDebito = ({ isOpen, onClose, titulos}) => {



  useEffect(() => {




  }, []);

    console.log('ModalTitulosEmDebito', titulos);
  
    return (
      <>  
        <Modal onClose={onClose} isOpen={isOpen} isCentered size=''>
          <ModalOverlay />
            <ModalContent width={1500}>
              <ModalHeader>Títulos em aberto</ModalHeader>
                <ModalCloseButton />

                  <ModalBody>
                    
                    <TableContainer >
                      <Table size='md'>
                          <Thead >
                              <Tr >
                                  <Th>Empresa</Th>
                                  <Th>Data Lançamento</Th>
                                  <Th>Data Vencimento</Th>
                                  <Th>Dias Atraso</Th>
                                  <Th>Espécie</Th>
                                  <Th>Parcela</Th>
                                  <Th>Valor Original</Th>
                                  <Th >
                                      <Text>Multa E</Text>
                                      <Text>Juros</Text>
                                  </Th>
                                  <Th >Valor Corrigido</Th>
                                  <Th >Tipo Cobrança</Th>
                              </Tr>
                          </Thead>


                          <Tbody>
                                        
                            <Tr padding={0}>
                          
                                <Td>CodRedCt</Td>
                                <Td>multajuros</Td>
                                <Td>TotalDebitoAtualiz</Td>
                                <Td>QtdTit</Td>
                                <Td>QtdTit</Td>
                                <Td>QtdTit</Td>
                                <Td>QtdTit</Td>
                                <Td>QtdTit</Td>
                                <Td>QtdTit</Td>
                                <Td>QtdTit</Td>
                            </Tr>
                             
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

export default ModalTitulosEmDebito