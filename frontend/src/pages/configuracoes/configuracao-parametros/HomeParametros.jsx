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
  TableCaption,
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
            <AccordionPanel pb={4} border='1px solid red'>

              <VStack>
              {data && data.map((item, index) => (

                <>
                
                  <VStack>
                    <Text>Código</Text>  
                    <Text>{item.idConfig}</Text>  
                  </VStack>

                  <VStack>
                    <Text>Descrição</Text>  
                    <Text>{item.DescrConfig}</Text>  
                  </VStack>

                  <Text></Text>
                
                
                </>



              ))}

   
              </VStack>
              
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>






















        <TableContainer
          boxShadow='base'
          overflowY
        >

          <Table>

            <Thead >
              <Tr>
                <Th fontSize='14px'>ID</Th>
                <Th fontSize='14px'>Descrição</Th>
                <Th fontSize='14px'>Descrição</Th>
                <Th fontSize='14px'>Descrição</Th>
                <Th fontSize='14px'>Ações</Th>
              </Tr>
            </Thead>

            <Tbody>

              {data && data.map((item, index) => (

                <Tr key={index} >
                  <Td textAlign='center'>{item.idConfig}</Td>
                  <Td maxW="800px" isTruncated>{item.DescrConfig}</Td>
                  <Td>{item.ValorConfigText}</Td>
                  <Td>{item.ValorConfigDate}</Td>
                  <Td>{item.ValorConfigInt}</Td>
                  <Td>{item.NomeFunc}</Td>
                </Tr>

              ))}


            </Tbody>

            <Tfoot>

              <Tr>
                <Th></Th>
                <Th></Th>
                <Th></Th>
              </Tr>

            </Tfoot>
          </Table>
        </TableContainer>




      </Box>


    </PageLayout>
  )
}

export default HomeParametros