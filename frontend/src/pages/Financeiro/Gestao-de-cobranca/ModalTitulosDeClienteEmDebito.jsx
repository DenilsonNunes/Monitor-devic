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



// Instancia API
import api from '../../../helpers/api-instance'
import Loader from '../../../components/Loading/Loader';
import formataData from '../../../utils/formataData';
import formataDinheiro from '../../../utils/formataDinheiro';


const ModalTitulosEmDebito = ({ isOpen, onClose, cliente }) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {


    api.get(`financeiro/gestao-de-cobranca/clientes-em-debito/${cliente.CodRedCt}/titulos`)

      .then((response) => {

        setData(response.data);
        //setLoading(false);

      })
      .catch((error) => {

        console.log('Houve um erro', error);
        //setLoading(false);

      });


  }, [cliente]);



  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size=''>
        <ModalOverlay />
        <ModalContent width={1500}>
          <ModalHeader>Títulos em aberto</ModalHeader>
          <ModalCloseButton />

          <ModalBody>

            <Box display='flex' alignItems='end'>
              <Text fontSize='xl'>Cliente:</Text>
              <Text fontSize='md' marginLeft={2}>{cliente.cliente}</Text>
            </Box>
   


            <TableContainer >
              <Table size='md'>
                <Thead >
                  <Tr >
                    <Th>Empresa</Th>
                    <Th>Espécie</Th>
                    <Th>Nr Documento</Th>
                    <Th>Data Lançamento</Th>
                    <Th>Data Vencimento</Th>
                    <Th>Dias Atraso</Th>
                    <Th>Parcela</Th>

                    <Th>Valor Original</Th>
                    <Th >
                      <Text>Multa E</Text>
                      <Text>Juros</Text>
                    </Th>
                    <Th>Valor Corrigido</Th>
                    <Th>Tipo Cobrança</Th>
                  </Tr>
                </Thead>


                <Tbody>

                  {loading ? (

                    <Tr>
                      <Td colSpan={13} border='none'>
                        <Loader />
                      </Td>
                    </Tr>

                  ) : (

                    data && data.map((item) => (

                      <Tr >
                        <Td>{item.CodEmpr}</Td>
                        <Td>{item.CodEspDocCtRec}</Td>
                        <Td>{item.NrDocCtRec}</Td>
                        <Td>{formataData(item.DtLcto)}</Td>
                        <Td>{formataData(item.DtVcto)}</Td>
                        <Td>{item.DiasAtr}</Td>      
                        <Td>{item.Parc}</Td>
                        <Td>{formataDinheiro(item.ValCtRec)}</Td>
                        <Td>{formataDinheiro(item.multajuros)}</Td>
                        <Td>{formataDinheiro(item.valorcorrigido)}</Td>
                        <Td>{item.TpCobrCtRec}</Td>
                      </Tr>

                    ))

                  )}

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