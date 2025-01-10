import {
  Heading,
  Box,
  Image,
  VStack

} from '@chakra-ui/react'


import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'


import  notFound  from '../../../src/assets/images/not-found-404.png'
import PageLayout from '../../components/PageLayout/PageLayout'


const NotFound = () => {
  return (

    <PageLayout>

      <Navbar/>
      
      <Box  display='flex' justifyContent='center'>

        <VStack>

          <Image 
            src={notFound} alt='Not Found' 
            boxSize={['200px', '400px']}
          />
          <Heading size='xl' color='orange'>Pagina não encontrada!</Heading>



        <Link to='/home' style={{ color: 'blue', textDecoration: 'underline' }}>
          Voltar para home
        </Link>


        </VStack>



        
      </Box>

    </PageLayout>

  )
}

export default NotFound