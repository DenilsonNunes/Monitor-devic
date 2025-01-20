import { useState, } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

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
  useToast,
  IconButton,
  Fade,
  HStack
} from "@chakra-ui/react"

// Icones
import { EditIcon } from '@chakra-ui/icons'
import { LuSave, LuX } from "react-icons/lu";

// Components
import PageLayout from "../../../components/PageLayout/PageLayout"
import TabListConfiguracoes from "../components/TabListConfiguracoes"
import SelectOption from './components/SelectOption';



import api from '../../../helpers/api-instance';







const HomeParametros = () => {

  const toast = useToast()
  const queryClient = useQueryClient();

  const [selectedData, setSelectedData] = useState(null);

  const [parametroEmEdicao, setParametroEmEdicao] = useState(null);
  const [parameterOptionSelected, setParameterOptionSelected] = useState('');



  const [codParametro, setCodParametro] = useState('');
  const [valorParametro, setValorParametro] = useState('');
  const [tipoParametro, setTipoParametro] = useState('');












  




  /*-----------------Chamada para buscar os usuários do banco de dados--------------- */
  const fetchParametros = async () => {

    const response = await api.get(`/configuracoes/parametros`)
    return response.data;

  };

  const { data, error, isLoading } = useQuery({

    queryKey: ['parametros'], // se os valore mudar, busca novamente
    queryFn: () => fetchParametros(),
    refetchOnWindowFocus: false

  },);
  /*-----------------------------------FIM------------------------------------------ */




  /*------------------------------Ação de alteração no BD---------------------------- */
  const { mutate, isPending, isSuccess, isError, reset } = useMutation({


    mutationFn: async () => {

      const response = await api.put(`/configuracoes/parametros/editar/${codParametro}`, {
        valorParametro,
        tipoParametro

      })

      // Um atraso de 2 seguntos para exibir o loading na tela
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return response.data;

    },
    onSuccess: (data) => {
      // Se der sucesso, atualiza a lista de parametros
      queryClient.invalidateQueries('parametros')
      toast({
        title: data.message,
        status: 'success',
        variant: 'left-accent',
        position: 'bottom-center',
        isClosable: true,
      })

      setParametroEmEdicao(null);
      setOptionParametroEmEdicao(null);

    },
    onError: (error) => {

      // Se der erro, exibi erro na tela
      toast({
        title: error.response.data.message,
        status: 'error',
        variant: 'left-accent',
        position: 'bottom-center',
        isClosable: true,
        containerStyle: {
          display: 'inline-block', // Faz com que o tamanho seja ajustado ao conteúdo
          maxWidth: '90%',        // Limita a largura máxima para evitar overflow em telas menores
          whiteSpace: 'normal',   // Permite quebra de linha se o texto for longo
        },
      })

    }

  })













  const handleParameterOptionSelected = (option) => {

    console.log('Qual parametro estou selecionando', option )

    setParameterOptionSelected(option)

  };


  const handleSalvarParametro = (item) => {

    setCodParametro(item)
    setValorParametro(selectedData.value)
    setTipoParametro(selectedData.type)

    mutate();

  }

  const handleEditarParametro = (item) => {

    console.log('Qual o parametro em edicao??', item);

    setParametroEmEdicao(item);
    setOptionParametroEmEdicao(item);

  }


  const handleCancelarEdicaoParametro = () => {

    setParametroEmEdicao(null);
    setOptionParametroEmEdicao(null);

  }







  return (
    <PageLayout>
      <TabListConfiguracoes />



      <Box marginTop={5} boxShadow='base' bg='white'>


        <Accordion allowToggle gap={3}>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <AccordionIcon />
                <Box as='span' flex='1' textAlign='left' fontWeight='bold'>
                  Vendas
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel paddingY={2}>

              <TableContainer
                boxShadow='base'
                overflowY
              >

                <Table variant="simple">

                  <Thead bg='gray.300'>
                    <Tr>
                      <Th fontSize='14px' textAlign='center' paddingX={1}>Código</Th>
                      <Th fontSize='14px'>Descrição</Th>
                      <Th fontSize='14px'>Valor parâmetro</Th>
                      <Th fontSize='14px' textAlign='center'>Ação</Th>
                    </Tr>
                  </Thead>

                  <Tbody>

                    {data && data.map((item, index) => (

                      <Tr key={index}>

                        <Td fontSize='14px' textAlign='center' paddingY={2} paddingX={0}>{item.idConfig}</Td>
                        <Td fontSize='14px' maxW="900px" whiteSpace="normal" wordBreak="break-word" paddingY={2}>{item.DescrConfig}</Td>

                        <Td paddingY={2}>
                          {
                            [14, 15, 22, 23, 24, 25, 26, 27].includes(item.idConfig)
                              ? <Input
                                size="sm"
                                type="number"
                                isDisabled={parametroEmEdicao !== item.idConfig}
                              />
                              : /*                                
                                <SelectOption
                                  disableInputOption={optionParametroEmEdicao === item.idConfig} 
                                  disableInput={parametroEmEdicao !== null && parametroEmEdicao !== item.idConfig}
                                  onDateChange={handleDateChange}
                                />                                                 
                                */

                                <HStack>

                                  <Select 
                                      placeholder='--selecione--'
                                      size='sm'
                                      isDisabled={parametroEmEdicao === null && parametroEmEdicao !== item.idConfig}
                                      value={
                                        item.ValorConfigText === 'D' && item.ValorConfigDate ? 'data' : 
                                        item.ValorConfigText === 'Dias' && item.ValorConfigDate === null && item.ValorConfigInt ? 'numero_dias' : 
                                        item.ValorConfigText === 'M' && item.ValorConfigDate === null && item.ValorConfigInt === null ? 'mes_atual' : 
                                        item.ValorConfigText === 'MESES' && item.ValorConfigDate === null && item.ValorConfigInt ? 'meses' : null
                                      }
                                      onChange={(e) => handleParameterOptionSelected(e.target.value)}                                         
                                  >
                                      <option value='mes_atual'>Mês Atual</option>
                                      <option value='meses'>Meses</option>
                                      <option value='ano'>Ano</option>
                                      <option value='data'>Data</option>
                                      <option value='numero_dias'>Número "X" Dias</option>
                                  </Select>
                                  
                                  <Fade in={true}>
                                    <Box
                                        rounded='md'
                                        minW='150px'
                                        display="flex"
                                        alignItems="end"
                                    >
                                        <SelectOption
                                          disableInputOption={parametroEmEdicao !== null  &&  parametroEmEdicao === item.idConfig}
                                          optionSelected={parameterOptionSelected}
                                        />
                                        
                                    </Box>
                                  </Fade>
                                
                                </HStack>





                          }

                        </Td>

                        <Td textAlign='center' paddingY={2}>

                          {parametroEmEdicao !== item.idConfig && (

                            <Tooltip
                              label='Editar'
                              isDisabled={parametroEmEdicao !== null && parametroEmEdicao !== item.idConfig}
                              bg='orange'
                            >
                              <IconButton
                                size='xs'
                                fontSize="14px"
                                aria-label="Editar"
                                onClick={() => handleEditarParametro(item.idConfig)}
                                bg='orange'
                                isDisabled={parametroEmEdicao !== null && parametroEmEdicao !== item.idConfig}
                                icon={<EditIcon />}
                                color="white"
                                _hover={false}

                              />
                            </Tooltip>

                          )}



                          {parametroEmEdicao === item.idConfig && (

                            <Tooltip label='Salvar' bg='green.400'>
                              <IconButton
                                onClick={() => handleSalvarParametro(item.idConfig)}
                                size='xs'
                                marginLeft={2}
                                fontSize="16px"
                                aria-label="Editar"
                                bg='green.400'
                                color="white"
                                isLoading={isPending}
                                _hover={false}
                                isDisabled={parametroEmEdicao !== null && parametroEmEdicao !== item.idConfig}
                                icon={<LuSave />}
                              />
                            </Tooltip>

                          )}


                          {parametroEmEdicao === item.idConfig && (

                            <Tooltip label='Cancelar' bg='red.400'>
                              <IconButton
                                size='xs'
                                marginLeft={2}
                                fontSize="18px"
                                aria-label="Editar"
                                border='1px'
                                bg='white'
                                borderColor='red'
                                color="red"
                                _hover={false}
                                icon={<LuX />}
                                onClick={handleCancelarEdicaoParametro}
                                isLoading={isPending}
                                isDisabled={
                                  parametroEmEdicao !== null && parametroEmEdicao !== item.idConfig
                                }
                              />
                            </Tooltip>

                          )}


                        </Td>


                      </Tr>

                    ))}


                  </Tbody>

                </Table>
              </TableContainer>

            </AccordionPanel>
          </AccordionItem>


          <AccordionItem>
            <h2>
              <AccordionButton>
                <AccordionIcon />
                <Box as='span' flex='1' textAlign='left' fontWeight='bold'>
                  Financeiro
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>



            </AccordionPanel>
          </AccordionItem>


          <AccordionItem >
            <h2>
              <AccordionButton>
                <AccordionIcon />
                <Box as='span' flex='1' textAlign='left' fontWeight='bold'>
                  Estoque
                </Box>
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