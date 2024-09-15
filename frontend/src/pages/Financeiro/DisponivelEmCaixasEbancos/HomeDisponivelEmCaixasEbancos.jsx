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
  
} from "@chakra-ui/react"

import { SmallCloseIcon, Search2Icon  } from '@chakra-ui/icons'

// Instancia API
import api from '../../../helpers/api-instance'
import formataDinheiro from '../../../utils/formataDinheiro';

const HomeDisponivelEmCaixasEbancos = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [data, setData] = useState(null);
  const [dataSaldoGeral, setDataSaldoGeral] = useState(null);

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



  return (
    <Box marginTop='60px' marginX={2}>

    <Text>Disponivel em caixas e bancos</Text>

    <Box>
      <Accordion allowToggle >
        <AccordionItem>
          <h2>
            <AccordionButton >
              <Box as='span' flex='1' textAlign='left' >
                Filtros
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>


          <HStack>

            <Stack direction='row' width='100%'>

              <Stack direction='column' width='20%' spacing={0}>
                <FormLabel fontWeight='bold'>Empresa</FormLabel>
                <Input 
                  type='text' 
                  />
              </Stack>

              <Stack direction='column' width='20%' spacing={0}>
                <FormLabel fontWeight='bold'>Tipo</FormLabel>
                <Input 
                  type='text' 
                  />
              </Stack>

              <Stack direction='column' width='20%' spacing={0}>
                <FormLabel fontWeight='bold'>Banco</FormLabel>
                <Input 
                  type='text' 
                  />
              </Stack>

            </Stack>

          </HStack>



          </AccordionPanel>
        </AccordionItem>

      </Accordion>

    </Box>

    


    {data && data.map((item) => (

      <Card maxW='40%' marginTop={10} key={item.UndEmpresa}  borderTopRadius={10}>
        <CardHeader paddingY={2}  bg='#0369a1' borderTopRadius={10}>
          <Heading size='md' color='white'>{item.UndEmpresa}</Heading>
        </CardHeader>

        <CardBody padding={0}>
          <Accordion allowMultiple>

            {item.Contas.map((item) => (
                   
              <AccordionItem key={item.Contas} >
              <h2>
                <AccordionButton _hover={{bg:'#d1d5db'}}>

                  <Box as='span' flex='1' textAlign='left' fontWeight='bold'>
                    {item.TipoCt.toLowerCase().slice(2)}
                  </Box>
                  <Box as='span' flex='1' textAlign='end' marginRight={2}>
                    125.696,25
                  </Box>

                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel p={0}  marginX={5}>

              {item.ContasDetalhadas.map((item) => (

               
                <Box>

                  <HStack justifyContent='space-between' border='1px solid #e2e8f0' marginBottom={1} borderRadius={5}>
  
                    <VStack  alignItems="flex-start" spacing={0} marginLeft={2}>
                      <Text>{item.Conta.toLowerCase()}</Text>
                      <Text fontSize='xs' color={ item.SaldoDisp < 0 ? 'red': 'green'} >R$ {formataDinheiro(item.SaldoDisp)}</Text>
                    </VStack>
  
                    <Button size='xs' colorScheme='blue' variant='outline' onClick={onToggle}>Visualizar</Button>
  
                  </HStack>
  
                  <Collapse in={isOpen} animateOpacity>
                      <Box
                        p='40px'
                        color='white'
                        mt='4'
                        bg='teal.500'
                        rounded='md'
                        shadow='md'
                      >
                        Teste
                      </Box>
                    </Collapse>

                  </Box>

              ))}
  
              

              </AccordionPanel>

            </AccordionItem>

            ))}

          </Accordion>

          <CardFooter paddingY={2}  bg='#0369a1'>
            <Box display='flex' width='100%' justifyContent='space-between'>
              <Heading size='md' color='white'>Total</Heading>
              <Heading size='md' color='white' marginRight={6}>{formataDinheiro(item.SaldoTotal)}</Heading>
            </Box>
          </CardFooter>

        </CardBody>

      </Card>

    ))}

  
  </Box>
)

  
}

export default HomeDisponivelEmCaixasEbancos