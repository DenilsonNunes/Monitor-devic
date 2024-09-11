import { useEffect, useState } from 'react'

import {
  Box,
  Text,
  Heading,
  Stack,
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
  Button
} from "@chakra-ui/react"

// Instancia API
import api from '../../../helpers/api-instance'
import formataDinheiro from '../../../utils/formataDinheiro';

const HomeDisponivelEmCaixasEbancos = () => {

  const [data, setData] = useState(null);
  const [dataPorEmpresa, setDataPorEmpresa] = useState(null);

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

      


      {data && data.map((item) => (

        <Card maxW='50%' marginTop={10} key={item.UndEmpresa}>
          <CardHeader paddingY={2}  bg='#e5e7eb'>
            <Heading size='md'>{item.UndEmpresa}</Heading>
          </CardHeader>

          <CardBody padding={0}>
            <Accordion allowMultiple>

              {item.Contas.map((item) => (
                     
                <AccordionItem key={item.Contas}>
                <h2>
                  <AccordionButton >

                    <Box as='span' flex='1' textAlign='left'>
                      {item.TipoCt.toLowerCase().slice(2)}
                    </Box>
                    <Box as='span' flex='1' textAlign='end' marginRight={2}>
                      {formataDinheiro(item.SaldoDisp)}
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

              ))}

            </Accordion>

            <CardFooter paddingY={2}>
              <Box display='flex' width='100%' justifyContent='space-between'>
                <Heading size='md'>Total</Heading>
                <Heading size='md'>{formataDinheiro(item.SaldoTotal)}</Heading>
              </Box>
            </CardFooter>

          </CardBody>

        </Card>

      ))}

      <Card bg='gray' w='50%'>
          <CardHeader>
            <Heading size='md'>1-MATRIZ</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>

    </Box>
  )
}

export default HomeDisponivelEmCaixasEbancos