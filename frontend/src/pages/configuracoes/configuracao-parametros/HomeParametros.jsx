
import { useQuery } from '@tanstack/react-query';

import {
      Box,
      Tfoot,
      Td,
      Tbody,
      Th,
      Tr,
      Thead,
      TableContainer,
      Tooltip,
      Button,
      Table,
      Accordion,
      AccordionItem,
      AccordionButton,
      AccordionPanel,
      AccordionIcon,
      Text,
      Select,
      Input,
      NumberInput,
      NumberInputField,
      NumberInputStepper,
      NumberIncrementStepper,
      NumberDecrementStepper,
      IconButton
} from "@chakra-ui/react"


import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { LuSave } from "react-icons/lu";

// Components
import PageLayout from "../../../components/PageLayout/PageLayout"
import TabListConfiguracoes from "../components/TabListConfiguracoes"



import api from '../../../helpers/api-instance';
import SelectOption from './components/SelectOption';







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






  const handleSelectedOption = ({ dataInicio, dataFim, dataPeriodoSelecionado }) => {

    

  };










  return (
    <PageLayout>
      <TabListConfiguracoes />

      <Box marginTop={5} boxShadow='base' bg='white'>


        <Accordion allowToggle >

          <AccordionItem >
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left' fontWeight='bold'>
                  Vendas
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel padding={0}>

              <TableContainer
                boxShadow='base'
                overflowY
              >

                <Table variant="simple">

                  <Thead bg='gray.300'>
                    <Tr>
                      <Th fontSize='14px'>Código</Th>
                      <Th fontSize='14px'>Descrição</Th>
                      <Th fontSize='14px' textAlign='center'>Opção</Th>
                      <Th fontSize='14px'>Ação</Th>
                    </Tr>
                  </Thead>

                  <Tbody>

                    {data && data.map((item, index) => (

                      <Tr key={index} >
                        <Td fontSize='14px' textAlign='center'>{item.idConfig}</Td>
                        <Td fontSize='14px' maxW="800px" whiteSpace="normal" wordBreak="break-word">{item.DescrConfig}</Td>

                        <Td>
                          <SelectOption />
                        </Td>

                        <Td>

                          <Tooltip label='Editar'>
                            <IconButton
                              size='xs'
                              fontSize="14px"
                              aria-label="Editar"
                              bg='orange'
                              icon={<EditIcon />}
                              color="white"
                              _hover={false}

                            />
                          </Tooltip>

                          <Tooltip label='Salvar'>
                            <IconButton
                              size='xs'
                              marginLeft={2}
                              fontSize="16px"
                              aria-label="Editar"
                              bg='#10b981'
                              color="white"
                              _hover={false}
                              icon={<LuSave />}
                            
                            />
                          </Tooltip>
                        </Td>

             
                      </Tr>

                    ))}


                  </Tbody>

                  <Tfoot>

                    <Tr>
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
                <Box as='span' flex='1' textAlign='left' fontWeight='bold'>
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
                <Box as='span' flex='1' textAlign='left' fontWeight='bold'>
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