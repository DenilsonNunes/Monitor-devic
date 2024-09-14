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
  useDisclosure
} from "@chakra-ui/react"

import { SmallCloseIcon, Search2Icon  } from '@chakra-ui/icons'

// Instancia API
import api from '../../../helpers/api-instance'
import formataDinheiro from '../../../utils/formataDinheiro';

const HomeDisponivelEmCaixasEbancos = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [data, setData] = useState(null);
  const [dataContaCaixa, setDataContaCaixa] = useState(null);

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


    api.get('financeiro/disponivel-em-caixa-')

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





  return (
    <Box marginTop='60px' marginX={2}>

      <Text>Disponivel em caixas e bancos</Text>

      <Box >
        
        {data && data.map((item) => (

          <Box>

            <Card w='50%' border="1px solid #d1d5db" marginTop={5}>

              <CardHeader borderBottom="1px solid #d1d5db" bg='#0369a1' padding={2}>
                <Heading size='md' color='white'>{item.UndEmpresa}</Heading>
              </CardHeader>

              <CardBody padding={0}>

                {item.Contas.map((item) => (
                  <Box display='flex'  alignItems='center' justifyContent='space-between'
                  _hover={{ bg: "#e5e7eb"}}
                  >
                    
                    <Text marginLeft={5}>{item.TipoCt.toLowerCase().slice(2)}</Text>

                    <Box as='span' flex='1' textAlign='end' marginRight={2}>
                      {formataDinheiro(item.SaldoDisp)}
                    </Box>

                    <Button colorScheme='blue' size='xs' margin={1}>Visualizar</Button>

                  </Box>
                ))}

              </CardBody>

              <CardFooter paddingY={2} bg='#e5e7eb'>
                <Box display='flex' width='100%' justifyContent='space-between'>
                  <Heading size='md'>Total</Heading>
                  <Heading size='md' marginRight={16}>{formataDinheiro(item.SaldoTotal)}</Heading>
                </Box>
              </CardFooter>

            </Card>

          </Box>

        ))}

        <Box>
          Teste
        </Box>


      </Box>





    </Box>
  )
}

export default HomeDisponivelEmCaixasEbancos