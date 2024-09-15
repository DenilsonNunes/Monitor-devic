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

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {


    api.get('financeiro/disponivel-em-caixa-e-banco')

      .then((response) => {

        console.log(response.data);


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

        console.log(response.data[0]);
        setDataSaldoDetalhadoConta(response.data[0]);


      })
      .catch((error) => {

        console.log('erro', error);


        if (error.message === 'Network Error') {

        } else {


        }

      });



  }


  return (
    <Box marginTop='60px' marginX={2} >

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
            rounded='md'
            shadow='md'
            border='1px solid #e2e8f0'
          >
            <HStack>

              <Stack direction='row' width='100%' spacing={0}>

                <Stack direction='column' width='20%' spacing={0}>

                  <FormLabel margin={0}>Empresa</FormLabel>
                  <Select placeholder='--Selecione--' size='xs'>
                    <option value='option1'>Empresa 1</option>
                    <option value='option1'>Empresa 2</option>
                    <option value='option1'>Empresa 3</option>

                  </Select>
                </Stack>

                <Stack direction='column' width='20%' spacing={0} marginLeft={2}>

                  <FormLabel margin={0}>Tipo Conta</FormLabel>
                  <Select placeholder='--Selecione--' size='xs'>
                    <option value='option1'>Caixas</option>
                    <option value='option1'>Contas Bancarias</option>
                    <option value='option1'>Applicação Financeira</option>

                  </Select>
                </Stack>

              </Stack>

            </HStack>

          </Box>
        </Collapse>
      </Box>




      {data && data.map((item) => (

        <Box display='flex' justifyContent='center'>


          <Card w='50%' marginTop={10} key={item.UndEmpresa} borderTopRadius={10} borderBottomRadius={10}>
            <CardHeader paddingY={2} bg='#0369a1' borderTopRadius={10}>
              <Heading size='md' color='white'>{item.UndEmpresa}</Heading>
            </CardHeader>

            <CardBody padding={0}>
              <Accordion allowMultiple>

                {item.Contas.map((item) => (

                  <AccordionItem key={item.Contas} >

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
                        <AccordionPanel p={0} marginX={5} >

                          {item.ContasDetalhadas.map((item) => (


                            <Box >

                              <HStack justifyContent='space-between' border='1px solid #e2e8f0' marginBottom={1} borderRadius={5}>

                                <VStack alignItems="flex-start" spacing={0} marginLeft={2}>
                                  <Text>{item.Conta.toLowerCase()}</Text>
                                  <Text fontSize='xs' color={item.SaldoDisp < 0 ? 'red' : 'green'} >R$ {formataDinheiro(item.SaldoDisp)}</Text>
                                </VStack>

                                <Button
                                  size='xs'
                                  colorScheme='blue'
                                  variant='outline'
                                  onClick={() => handleConsultarSaldoDetalhadoConta(item)}
                                >
                                  Visualizar
                                </Button>

                              </HStack>

                              <Collapse in={contaAberta === item.CodCxBco} animateOpacity >
                                <Box
                                  mt='1'
                                  mb='2'
                                  bg='#f1f5f9'
                                  rounded='md'
                                  shadow='md'
                                >
                                  {dataSaldoDetalhadoConta && (
                                    <Box>
                                      <Text>Saldo Detalhado</Text>
                                      <Text>Dinheiro: {dataSaldoDetalhadoConta.SaldoDinh}</Text>
                                      <Text>Cheque à vista: {dataSaldoDetalhadoConta.ChqAVista}</Text>
                                      <Text>Cheque Pre-Datado: {dataSaldoDetalhadoConta.ChqPre}</Text>
                                      <Text>Cheque Devolvido: {dataSaldoDetalhadoConta.ChqDev}</Text>
                                      <Text>Cheque Suspenso: {dataSaldoDetalhadoConta.ChqSusp}</Text>
                                      <Text>Cheque Juridico: {dataSaldoDetalhadoConta.ChqJurid}</Text>
                                      <Text>Cheque Custódia: {dataSaldoDetalhadoConta.ChqCustod}</Text>
                                      <Text>Cheque Contas a pagar parcial: {dataSaldoDetalhadoConta.ChqCtpParcial}</Text>
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
                  <Heading size='md' color='white'>Total (R$)</Heading>
                  <Heading size='md' color='white' marginRight={6}>{formataDinheiro(item.SaldoTotal)}</Heading>
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