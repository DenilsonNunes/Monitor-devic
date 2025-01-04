
import {
  Heading,
} from '@chakra-ui/react'


import PageLayout from '../../components/PageLayout/PageLayout';
import CardRotinasComissaoOutros from './card-rotinas-comissao-outros/CardRotinasComissaoOutros';


const HomeComissaoOutros = () => {

return (

  <PageLayout>
                  
    <Heading marginBottom={4} size='md'>Monitor Fiscal/Contábil</Heading>
    <CardRotinasComissaoOutros/>

  </PageLayout>

     
)
}


export default HomeComissaoOutros;

