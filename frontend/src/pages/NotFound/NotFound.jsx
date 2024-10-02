import {
  Heading,
  Box,

} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Box marginLeft={5} marginRight={5}>
      <Box marginTop={20}>
        <Heading marginBottom={4} size='md'>Pagina não encontrada</Heading>
      </Box>
    </Box>
  )
}

export default NotFound