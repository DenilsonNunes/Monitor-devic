
import {
    Box,
    Heading,
} from '@chakra-ui/react'


import PageLayout from '../../components/PageLayout/PageLayout';
import CardRotinasEstoque from './card-rotinas-estoque/CardRotinasEstoque';



const HomeEstoque = () => {

  return (

    <PageLayout>

        <Box>
            <Heading marginBottom={4} size='md'>Monitor Estoque</Heading>
            <CardRotinasEstoque/>
        </Box>
    

    </PageLayout>

    
  )
}


export default HomeEstoque;

