import { useState, useEffect } from 'react';

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Box,
  Text
}
  from '@chakra-ui/react'


const FormLogin = () => {


  
    return (
      <Box 
        minHeight='100vh'
        minWidth='100vw' 
        display='flex' 
        flexDirection='column' 
        justifyContent='center' 
        alignItems='center'
        bg='#020617'
        color='white'
      >
        <Text fontSize={80}>DeVIC</Text>
        <FormControl  width={400} >
        

        <FormLabel>Usuário</FormLabel>
        <Input type='email' placeholder='Digite seu usuário...' />
        {/*isErrorEmail && <FormErrorMessage>Email is required.</FormErrorMessage> */}
          

        <FormLabel marginTop={2}>Senha</FormLabel>
        <Input type='password' placeholder='Digite sua senha...'/>
        {/*isErrorSenha && <FormErrorMessage>Informe a Senha</FormErrorMessage> */}



          <Button 
            marginTop={10} 
            type='submit' 
            width='100%'  
            colorScheme='blue'
          >
            ENTRAR
          </Button>
      

        </FormControl>
      </Box>
      
    )
  }

export default FormLogin;