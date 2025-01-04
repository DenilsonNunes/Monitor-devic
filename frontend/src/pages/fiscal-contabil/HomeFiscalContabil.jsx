

import {
    Heading,
} from '@chakra-ui/react'


import PageLayout from '../../components/PageLayout/PageLayout';
import CardRotinasFiscalContabil from './card-rotinas-fiscal-contabil/CardRotinasFiscalContabil';


const HomeFiscalContabil = () => {

  return (

    <PageLayout>
                    
        <Heading marginBottom={4} size='md'>Monitor Fiscal/Contábil</Heading>
        <CardRotinasFiscalContabil/>

    </PageLayout>

       
  )
}


export default HomeFiscalContabil;

