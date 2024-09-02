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

import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

//CSS
import styles from './ModalHistoricoDeCobranca.module.css'


// Instancia API
import api from '../../../../../helpers/api-instance'

// Utils
import formatDateTime from '../../../../../utils/formataDateTimeDDMMAAAAHHMM';


// Components
import Loader from '../../../../../components/Loading/Loader';




const ModalHistoricoDeCobranca = ({ isOpen, onClose, cliente }) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    setLoading(true);


    api.get(`financeiro/gestao-de-cobranca/clientes-em-debito/${cliente.CodRedCt}/historico-cobranca`)

      .then((response) => {

        setData(response.data);
        setLoading(false);


      })
      .catch((error) => {

        console.log('Houve um erro', error);
        setLoading(false);

      });


  }, [cliente]);


  const handleExcluirCobranca = (item) => {

    console.log('Excluir', item);


    
    
    api.delete(`financeiro/gestao-de-cobranca/clientes-em-debito/${item.CodCli}/historico-cobranca/${item.idLctoCobr}`)
 
    .then((response) => {
 
      setData(response.data);
      setLoading(false);
 
 
    })
    .catch((error) => {
 
      console.log('Houve um erro', error);
      setLoading(false);
 
    });
    
    

    

  }



  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size=''>
        <ModalOverlay />
        <ModalContent width='95%'>
          <ModalHeader
            bg='primary'
            color='white'
            paddingY={2}
            borderBottomRadius='10px'
          >
            Histórico de cobrança
          </ModalHeader>

          <ModalCloseButton color='white' />

          <ModalBody marginTop={5}>

            <TableContainer
              maxHeight="600px"   // Define a altura máxima da tabela
              maxWidth="100%"     // Define a largura máxima da tabela
              overflowX="auto"    // Ativa o scroll horizontal
              overflowY="auto"    // Ativa o scroll vertical
            >
              <Table size='md'>
                <Thead className={styles.cabecalho_table}>
                  <Tr>
                    <Tooltip label='Selecionar Todos'>
                      <Th>
                        <Checkbox border='0.3px' borderColor='#cbd5e1' />
                      </Th>
                    </Tooltip>
                    <Th border='1px' borderColor='red'>Funcionário</Th>
                    <Th>Nome Contato Cliente</Th>
                    <Th>Histórico</Th>
                    <Th>Data Hora Cobrança</Th>
                    <Th>Data Hora Agenda</Th>
                    {/*<Th>Data Hora Lançamento</Th>*/}
                    <Th>Data Hora Alteração</Th>
                    <Th>Ações</Th>
                  </Tr>
                </Thead>


                <Tbody className={styles.customtable}>

                  {loading ? (

                    <Tr>
                      <Td colSpan={13} border='none'>
                        <Loader />
                      </Td>
                    </Tr>

                  ) : (

                    data && data.map((item) => (

                      <Tr key={item.idLctoCobr}>
                        <Td padding={0} py={0} px={0}>
                          <Checkbox border='0.3px' borderColor='#cbd5e1' />
                        </Td>
                        <Td >{item.CodFuncCobr}</Td>
                        <Td>{item.NomeCnttCli}</Td>
                        <Td isTruncated maxWidth="300px" >{item.HistCobranca}</Td>
                        <Td>{formatDateTime(item.DtHrCobr)}</Td>
                        <Td>{formatDateTime(item.DtHrAgenda)}</Td>
                        {/*<Td>{formatDateTime(item.DtHrLcto)}</Td>*/}
                        <Td>
                          {item.DtHrAlt === null ? 'sem alteração' : formatDateTime(item.DtHrAlt)}
                        </Td>
                        <Td>

                          <IconButton
                            width={25}
                            height={5}
                            aria-label='Editar'
                            icon={<EditIcon />}
                          />

                          <IconButton
                            width={25}
                            height={5}
                            marginLeft={1}
                            aria-label='Deletar'
                            icon={<DeleteIcon />}
                            onClick={() => handleExcluirCobranca(item)}
                          />

                        </Td>
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

export default ModalHistoricoDeCobranca