import {
  Heading,
  Box,

} from '@chakra-ui/react'


import Navbar from '../../components/Navbar/Navbar'

const NotFound = () => {
  return (
    <Box marginLeft={5} marginRight={5}>
      <Navbar/>
      <Box marginTop={20}>
        <Heading marginBottom={4} size='md'>Pagina não encontrada</Heading>
      </Box>
    </Box>
  )
}

export default NotFound