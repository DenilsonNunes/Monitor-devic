import {
  Box,
  Tfoot,
  Td,
  Tbody,
  Th,
  Tr,
  Thead,
  TableContainer,
  HStack,
  Button,
  Table,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Divider,
  VStack
} from "@chakra-ui/react"

import { useQuery } from '@tanstack/react-query';


// Components
import PageLayout from "../../../components/PageLayout/PageLayout"
import TabListConfiguracoes from "../components/TabListConfiguracoes"



import api from '../../../helpers/api-instance';




const HomeParametros = () => {




  // Chamada para buscar os usuários do banco de dados
  const fetchParametros = async () => {

    const response = await api.get(`/configuracoes/parametros`)
    return response.data;

  };

  const { data, error, isLoading } = useQuery({

    queryKey: ['parametros'], // se os valore mudar, busca novamente
    queryFn: () => fetchParametros(),
    refetchOnWindowFocus: false
  },);
















  return (
    <PageLayout>
      <TabListConfiguracoes />

      <Box marginTop={5} boxShadow='base' bg='white'>


        <Accordion allowToggle>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  Vendas
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>

              <TableContainer
                boxShadow='base'
                overflowY
              >

                <Table>

                  <Thead >
                    <Tr>
                      <Th fontSize='14px'>Código</Th>
                      <Th fontSize='14px'>Descrição</Th>
                      <Th fontSize='14px'>
                        <Text>Valor</Text>
                        <Text>texto</Text>
                      </Th>
                      <Th fontSize='14px'>Valor Data</Th>
                      <Th fontSize='14px'>
                        <Text>Valor</Text>
                        <Text>inteiro</Text>
                      </Th>
                    </Tr>
                  </Thead>

                  <Tbody>

                    {data && data.map((item, index) => (

                      <Tr key={index} >
                        <Td textAlign='center'>{item.idConfig}</Td>
                        <Td maxW="800px" whiteSpace="normal" wordBreak="break-word">{item.DescrConfig}</Td>
                        <Td>{item.ValorConfigText}</Td>
                        <Td>{item.ValorConfigDate}</Td>
                        <Td>{item.ValorConfigInt}</Td>
                      </Tr>

                    ))}


                  </Tbody>

                  <Tfoot>

                    <Tr>
                      <Th></Th>
                      <Th></Th>
                      <Th></Th>
                      <Th></Th>
                      <Th></Th>
                    </Tr>

                  </Tfoot>
                </Table>
              </TableContainer>
  
            </AccordionPanel>
          </AccordionItem>


          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  Financeiro
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
 


            </AccordionPanel>
          </AccordionItem>




          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  Estoque
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
 


            </AccordionPanel>
          </AccordionItem>



        </Accordion>

      </Box>


    </PageLayout>
  )
}

export default HomeParametros