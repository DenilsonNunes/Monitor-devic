
import {
    Box,
    Heading,
} from '@chakra-ui/react'

import Grafico from "../../../components/Financeiro/Grafico";
import CardRotinasFinanceiro from "../CardRotinasFinanceiro/CardRotinasFinanceiro";

import PageLayout from '../../../components/PageLayout/PageLayout';


const Financeiro = () => {

  return (

    <PageLayout>

      <Box>
          <Heading marginBottom={4} size='md'>Monitor Financeiro</Heading>
          <CardRotinasFinanceiro/>
      </Box>
      
      <Heading marginTop={5} size='md'>Analise anual</Heading>
  
      <Box marginTop={5} boxShadow='md'>
          <Grafico/>
      </Box>
 
    </PageLayout>

    
  )
}


export default Financeiro;

