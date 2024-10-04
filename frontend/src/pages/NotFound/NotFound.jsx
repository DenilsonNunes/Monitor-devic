import {
  Heading,
  Box,

} from '@chakra-ui/react'


import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Box marginLeft={5} marginRight={5}>
      <Navbar/>
      <Box marginTop={20}>
        <Heading marginBottom={4} size='md'>Pagina não encontrada</Heading>

        <Link to='/home' style={{ color: 'blue', textDecoration: 'underline' }}>
          Voltar para home
        </Link>
        
      </Box>
    </Box>
  )
}

export default NotFound