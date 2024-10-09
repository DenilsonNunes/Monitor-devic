import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Heading } from '@chakra-ui/react'


import PageLayout from '../../components/PageLayout/PageLayout'
import Navbar from '../../components/Navbar/Navbar'



const NotAuthenticated = () => {
  return (
    <Box>
      <Navbar/>

      <PageLayout>
        <Heading marginBottom={4} size='md'>Não autorizado</Heading>
        
        <Link to='/login' style={{ color: 'blue', textDecoration: 'underline' }}>
          Clique aqui para fazer login
        </Link>

      </PageLayout>

    </Box>
  )
}

export default NotAuthenticated