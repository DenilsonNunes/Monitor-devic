import { useState, useEffect } from 'react';


import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Box,
  Text,
  useToast
}
from '@chakra-ui/react'


// Instancia API
import api from '../../helpers/api-instance'


const Login = () => {

  const toast = useToast();

  const [user, setUser] = useState(null);
  const [password, SetPassword] = useState(null);


  const handleSubmit = (event) => {

    event.preventDefault();

    api.post('auth/login', {
      user: user,
      password: password
    })
    .then((response) => {
  
      localStorage.setItem('@Auth:token', response.data.token);
      localStorage.setItem('@Auth:user', response.data.token);

      toast({
        title: response.data.message, // apresenta a mensagem enviada pelo backend
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    
    })
    .catch((error) => {
      
      console.log(error.response.data);
      toast({
        title: error.response.data.error, // apresenta a mensagem enviada pelo backend
        status: 'error',
        duration: 4000,
        isClosable: true,
      })

    });

  }

  
    return (
      <Box 
        height='100vh'
        Width='100vh' 
        display='flex' 
        flexDirection='column' 
        justifyContent='center' 
        alignItems='center'
        bg='#020617'
        color='white'
      >
        <Text fontSize={80}>DeVIC</Text>

        <form onSubmit={handleSubmit}>
          <FormControl width={400} >
            
            <FormLabel  margin={0}>Usuário</FormLabel>
            <Input 
              variant='flushed'
              type='text' 
              placeholder='Digite seu usuário Ex: João'
              value={user}
              onChange={(e) => setUser(e.target.value)}

            />
            {/*isErrorEmail && <FormErrorMessage>Email is required.</FormErrorMessage> */}
              
            <Box marginTop={2}>

              <FormLabel margin={0} >Senha</FormLabel>
              <Input
                variant='flushed'
                type='password' 
                placeholder='Digite sua senha'
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
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
        </form>


      </Box>
      
    )
  }

export default Login