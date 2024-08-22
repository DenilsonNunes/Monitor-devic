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


//CSS
import styles from './ModalTitulosDeClienteEmDebito.module.css'


// Instancia API
import api from '../../../../helpers/api-instance'

// Componentes
import Loader from '../../../../components/Loading/Loader';
import formataData from '../../../../utils/formataData';
import formataDinheiro from '../../../../utils/formataDinheiro';


const ModalTitulosEmDebito = ({ isOpen, onClose, cliente }) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    setLoading(true);


    api.get(`financeiro/gestao-de-cobranca/clientes-em-debito/${cliente.CodRedCt}/titulos`)

      .then((response) => {

        setData(response.data);
        setLoading(false);


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

        
              <Text fontSize='md'><b>Cliente:   </b>{cliente.cliente}</Text>


            <TableContainer 
              maxHeight="600px"   // Define a altura máxima da tabela
              maxWidth="100%"     // Define a largura máxima da tabela
              overflowX="auto"    // Ativa o scroll horizontal
              overflowY="auto"    // Ativa o scroll vertical
              border='1px'
              borderColor='#cbd5e1'
            
            >
              <Table size='md'>
                <Thead  className={styles.cabecalho_table}>
                  <Tr>
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


                <Tbody className={styles.custom_table_body}>

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