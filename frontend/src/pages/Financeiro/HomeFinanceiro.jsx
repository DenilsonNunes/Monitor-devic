import { NavLink } from "react-router-dom";

import {
    Card,
    CardHeader,
    Box,
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
import CardRotinasFinanceiro from "./CardRotinasFinanceiro/CardRotinasFinanceiro";


const Financeiro = () => {

  return (

    <Box marginLeft={5} marginRight={5}>

        <Box marginTop={20}>
            <CardRotinasFinanceiro/>
        </Box>
        

        <Heading size='md'>Analise anual</Heading>
    
        <Box boxShadow='md'>
            <Grafico/>
        </Box>
       
    </Box>
   
    
  )
}


export default Financeiro;



      
    {/*
        <Box display='flex' marginTop='5rem'>
            

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
        </Box>
    */}