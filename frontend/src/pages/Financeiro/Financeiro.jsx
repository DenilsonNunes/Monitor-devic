import { NavLink } from "react-router-dom";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Stack,
    Heading,
    Divider,
    ButtonGroup,
    Button,
    Text,
    Flex

} from '@chakra-ui/react'
import Grafico from "../../components/Financeiro/Grafico";


const Financeiro = () => {
  return (
    <>
      <h1>Home Financeiro</h1>
      <Flex justifyContent='space-evenly'>

          <Card maxW='sm' boxShadow='lg' p='5' borderLeftWidth='5px' borderLeftColor='red'>

              <CardBody >
                  <Stack mt='0' spacing='3'>
                      <Heading size='md'>Contas a Pagar</Heading>
                      <Text color='red' fontSize='2xl'>
                          R$ 450.00
                      </Text>
                  </Stack>
              </CardBody>

              <Divider />

              <CardFooter justifyContent='center'>
                  <ButtonGroup spacing='2'>
                      <Button as={NavLink} to='' variant='solid' colorScheme='red'>
                          Vizualizar
                      </Button>
                  </ButtonGroup>
              </CardFooter>

          </Card>




          <Card maxW='sm' boxShadow='lg' p='5'  borderLeftWidth='5px' borderLeftColor='green' border='px'>

              <CardBody >
                  <Stack mt='0' spacing='3'>
                      <Heading size='md'>Contas a Receber</Heading>
                      <Text color='green' fontSize='2xl'>
                          R$ 450.00
                      </Text>
                  </Stack>
              </CardBody>

              <Divider />

              <CardFooter justifyContent='center'>
                  <ButtonGroup spacing='2'>
                      <Button as={NavLink} to='/financeiro/contas-a-receber' variant='solid' colorScheme='green'>
                          Vizualizar
                      </Button>
                  </ButtonGroup>
              </CardFooter>

          </Card>


      </Flex>

      <Grafico/>
  
    </>
      
  )
}


export default Financeiro;