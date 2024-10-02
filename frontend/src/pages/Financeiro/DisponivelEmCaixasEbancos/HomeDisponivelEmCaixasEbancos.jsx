import { useEffect, useState } from 'react'

import {
  Box,
  Text,
  Heading,
  Stack,
  HStack,
  StackDivider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  FormLabel,
  Input,
  ScaleFade,
  useDisclosure,
  Collapse,
  VStack,
  Select,
  Flex

} from "@chakra-ui/react"

import { LuHistory, LuFilter } from "react-icons/lu";


import { AddIcon, MinusIcon, ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons'

// Instancia API
import api from '../../../helpers/api-instance'
import formataDinheiro from '../../../utils/formataDinheiro';

const HomeDisponivelEmCaixasEbancos = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [contaAberta, setContaAberta] = useState(null);

  const [data, setData] = useState(null);
  const [dataSaldoDetalhadoConta, setDataSaldoDetalhadoConta] = useState(null);

  const [filtroEmpresa, setFiltroEmpresa] = useState('');
  const [filtroTpConta, setFiltroTpConta] = useState('');

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    api.get('financeiro/disponivel-em-caixa-e-banco')

      .then((response) => {

        setData(response.data);
        setLoading(false);

      })
      .catch((error) => {
        if (error.message === 'Network Error') {

          setError("Não foi possível se conectar ao servidor. Verifique sua conexão ou tente novamente mais tarde.");
          setLoading(false);

        } else {

          setError(error.message);
          setLoading(false);

        }

      });

  }, []);


  const handleConsultarSaldoDetalhadoConta = (item) => {

    if (contaAberta === item.CodCxBco) {
      setContaAberta(null); // Fecha se já está aberta
    } else {
      setContaAberta(item.CodCxBco); // Abre a conta clicada
    }

    api.get(`financeiro/disponivel-em-caixa-e-banco/caixa/${item.CodCxBco}`)

      .then((response) => {

        setDataSaldoDetalhadoConta(response.data[0]);


      })
      .catch((error) => {

        console.log('erro', error);


        if (error.message === 'Network Error') {

        } else {


        }

      });



  }

  const handleConsultarSaldoDetalhadoContaFiltro = () => {

    api.get(`financeiro/disponivel-em-caixa-e-banco`, {
      params: {
        empresa: filtroEmpresa,
        tipoConta: filtroTpConta
      }
    })

    .then((response) => {

      setData(response.data);

    })
    .catch((error) => {

      console.log('erro', error);


      if (error.message === 'Network Error') {

      } else {


      }

    });

  }

  const handleLimparFiltros = () => {
    setFiltroEmpresa('');
    setFiltroTpConta('');

  };


  return (
    <Box marginTop='60px' marginX={2} key={1}>

      <Text>Disponivel em caixas e bancos</Text>

      <Box display='flex' justifyContent='center'>

        <Button
          size='sm'
          colorScheme='gray'
          onClick={onToggle}
        >
          <Flex align="center">
            <LuFilter />
            <Text ml={2}>Filtros</Text>
          </Flex>
        </Button>

      </Box>

      <Box>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p='10px'
            mt='4'
            shadow='md'
            border='1px solid #e2e8f0'
          >
           
            <VStack>

                <Stack direction='row' width='100%' spacing={0} justifyContent='center'>

                  <Stack direction='column' spacing={0}>

                    <FormLabel margin={0}>Empresa</FormLabel>
                    <Select placeholder='--Selecione--' size='xs' value={filtroEmpresa} onChange={(e) => setFiltroEmpresa(e.target.value)}>

                      {data && data.map((item, index) => (

                        <option value={item.UndEmpresa} key={index}>{item.UndEmpresa}</option>

                      ))}

                    </Select>
                  </Stack>

                  <Stack direction='column'  spacing={0} marginLeft={2}>

                    <FormLabel margin={0}>Tipo Conta</FormLabel>

                    <Select placeholder='--Selecione--' size='xs' value={filtroTpConta} onChange={(e)=> setFiltroTpConta(e.target.value)}>
                        <option value='1-CONTAS CAIXAS'>1-CONTAS CAIXAS</option>
                        <option value='2-CONTAS BANCÁRIAS'>2-CONTAS BANCÁRIAS</option>                
                        <option value='3-APLICAÇÕES FINANCEIRAS'>3-APLICAÇÕES FINANCEIRAS</option>                
                    </Select>
                  </Stack>

                </Stack>

                <HStack>

                  <Button 
                    size='sm' 
                    bg='primary' 
                    color='white' 
                    _hover={{bg: '#0369a1'}}
                    borderRadius={0}
                    onClick={handleConsultarSaldoDetalhadoContaFiltro}
                  >
                  Aplicar
                  </Button>

                  <Button 
                    size='sm' 
                    bg='primary' 
                    color='white' 
                    _hover={{bg: '#0369a1'}}
                    borderRadius={0}
                    onClick={handleLimparFiltros}
                  >
                  Limpar
                  </Button>

                </HStack>



            </VStack>

           
          </Box>
        </Collapse>
      </Box>


      {data && data.map((item, index) => (

        <Box display='flex' key={index} justifyContent='center'>


          <Card w='90%' marginTop={10}  borderTopRadius={10} borderBottomRadius={10}>
            <CardHeader paddingY={2} bg='#0369a1' borderTopRadius={10}>
              <Heading size='md' color='white'>{item.UndEmpresa}</Heading>
            </CardHeader>

            <CardBody padding={0}>
              <Accordion allowMultiple>

                {item.Contas.map((item, index) => (

                  <AccordionItem key={index} >

                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton _expanded={{ bg: '#94a3b8', color: 'white' }}>
                            {isExpanded ? (
                              <ChevronDownIcon fontSize='18px' />
                            ) : (
                              <ChevronRightIcon fontSize='18px' />
                            )}

                            <Box as='span' flex='1' textAlign='left' fontWeight='bold'>
                              {item.TipoCt.toLowerCase().slice(2)}
                            </Box>
                            <Box as='span' flex='1' textAlign='end' marginRight={2}>
                              125.696,25
                            </Box>
                          </AccordionButton>
                        </h2>
                        <AccordionPanel p={0} marginX={5} marginTop={1}>

                          {item.ContasDetalhadas.map((item, index) => (


                            <Box key={index}>

                              <HStack justifyContent='space-between' border='1px solid #e2e8f0' marginBottom={1} borderRadius={5}>

                                <VStack alignItems="flex-start" spacing={0} marginLeft={2}>
                                  <Text>{item.Conta.toLowerCase()}</Text>
                                  <Text fontSize='xs' color={item.SaldoDisp < 0 ? 'red' : 'green'} >R$ {formataDinheiro(item.SaldoDisp)}</Text>
                                </VStack>

                                <Button
                                  size='xs'
                                  colorScheme='blue'
                                  variant='outline'
                                  marginRight={2}
                                  onClick={() => handleConsultarSaldoDetalhadoConta(item)}
                                >
                                  Visualizar
                                </Button>

                              </HStack>

                              <Collapse in={contaAberta === item.CodCxBco} animateOpacity >
                                <Box
                                  mt='1'
                                  mb='2'
                                  p='2'
                                  bg='#f1f5f9'
                                  rounded='md'
                                  shadow='md'
                                >
                                  {dataSaldoDetalhadoConta && (
                                    <Box>
                                      <Text textAlign='center' fontWeight='bold'>Saldo Detalhado</Text>
                                      <Text><strong>Total:</strong> {formataDinheiro(dataSaldoDetalhadoConta.SaldoCxBco)}</Text>
                                      <Text><strong>Dinheiro:</strong> {formataDinheiro(dataSaldoDetalhadoConta.SaldoDinh)}</Text>
                                      <Text fontWeight='bold'>Cheques</Text>
                                      <Text> À vista: {dataSaldoDetalhadoConta.ChqAVista}</Text>
                                      <Text> Pre-Datado: {dataSaldoDetalhadoConta.ChqPre}</Text>
                                      <Text> Devolvido: {dataSaldoDetalhadoConta.ChqDev}</Text>
                                      <Text> Suspenso: {dataSaldoDetalhadoConta.ChqSusp}</Text>
                                      <Text> Juridico: {dataSaldoDetalhadoConta.ChqJurid}</Text>
                                      <Text> Custódia: {dataSaldoDetalhadoConta.ChqCustod}</Text>
                                      <Text> Contas a pagar parcial: {dataSaldoDetalhadoConta.ChqCtpParcial}</Text>
                                    </Box>
                                  )}
                                </Box>
                              </Collapse>

                            </Box>

                          ))}



                        </AccordionPanel>
                      </>
                    )}

                  </AccordionItem>

                ))}

              </Accordion>

              <CardFooter paddingY={2} bg='#0369a1' borderBottomRadius={10}>
                <Box display='flex' width='100%' justifyContent='space-between'>
                  <Heading size='sm' color='white'>Total R$  </Heading>
                  <Heading size='sm' color='white' marginRight={2} marginLeft={2}>{formataDinheiro(item.SaldoTotal)}</Heading>
                </Box>
              </CardFooter>

            </CardBody>

          </Card>


        </Box>


      ))}


    </Box>
  )


}

export default HomeDisponivelEmCaixasEbancos