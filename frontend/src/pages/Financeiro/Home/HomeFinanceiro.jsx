import { NavLink } from "react-router-dom";

import {
    Card,
    CardHeader,
    Box,
    CardBody,
    CardFooter,
    Text,
    Heading,
    Divider,
    ButtonGroup,
    Button,
    Flex

} from '@chakra-ui/react'
import Grafico from "../../../components/Financeiro/Grafico";
import CardRotinasFinanceiro from "../CardRotinasFinanceiro/CardRotinasFinanceiro";


const Financeiro = () => {

  return (

    <Box marginLeft={5} marginRight={5}>
        

        <Box marginTop={20}>
            <Heading marginBottom={4} size='md'>Monitor Financeiro</Heading>
            <CardRotinasFinanceiro/>
        </Box>
        

        <Heading marginTop={5} size='md'>Analise anual</Heading>
    
        <Box marginTop={5} boxShadow='md'>
            <Grafico/>
        </Box>
       
    </Box>
   
    
  )
}


export default Financeiro;

