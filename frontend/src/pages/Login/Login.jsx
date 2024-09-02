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


const Login = () => {


  
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
        

        <FormLabel  margin={0}>Usuário</FormLabel>
        <Input 
          variant='flushed'
          type='email' 
          placeholder='Digite seu usuário Ex: João' 
        />
        {/*isErrorEmail && <FormErrorMessage>Email is required.</FormErrorMessage> */}
          
        <Box marginTop={2}>

          <FormLabel margin={0} >Senha</FormLabel>
          <Input
            variant='flushed'
            type='password' 
            placeholder='Digite sua senha'
          />
          {/*isErrorSenha && <FormErrorMessage>Informe a Senha</FormErrorMessage> */}
        </Box>


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

export default Login