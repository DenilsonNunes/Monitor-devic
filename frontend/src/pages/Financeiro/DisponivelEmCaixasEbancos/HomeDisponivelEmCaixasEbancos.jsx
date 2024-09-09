import { useEffect, useState } from 'react'

import {
  Box,
  Text,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  CardFooter
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
            setData(response.data.totalTodasEmpresas);
            setDataPorEmpresa(response.data.totalPorEmpresa);

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

        <Card maxW='50%' marginTop={10}>
          <CardHeader paddingY={2}  bg='#e5e7eb'>
            <Heading size='md'>{item.UndEmpresa}</Heading>
          </CardHeader>

          <CardBody padding={0}>
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>

                    <Box as='span' flex='1' textAlign='left'>
                      Contas caixas
                    </Box>
                    <Box as='span' flex='1' textAlign='end' marginRight={2}>
                      R$ 985.511.321,85
                    </Box>

                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>Caixa diario mtz 85</Text>
                  <Text>Caixa tesouraria mtz 86</Text>
                  <Text>Caixa financeiro mtz 26872</Text>
                  <Text>Caixa partidas dobradas</Text>
                  <Text>Caixa diario</Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      Contas Bancárias
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

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      Aplicações Financeiras
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

            <CardFooter paddingY={2}>
              <Box display='flex' width='100%' justifyContent='space-between'>
                <Heading size='md'>Total</Heading>
                <Heading size='md'>R$ {formataDinheiro(item.SaldoDisp)}</Heading>
              </Box>
            </CardFooter>

          </CardBody>

        </Card>

      ))}

    </Box>
  )
}

export default HomeDisponivelEmCaixasEbancos