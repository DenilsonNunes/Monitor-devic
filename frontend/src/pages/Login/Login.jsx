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


import { useAuth } from '../../hooks/auth';

// Instancia API
import api from '../../helpers/api-instance'


const Login = () => {

  const toast = useToast();

  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const handleSignIn = (event) => {

    event.preventDefault();
    setLoading(true);

    signIn({ user, password })

    /*
    
    api.post('auth/login', {
      user: user,
      password: password
    })
    .then((response) => {
  
      localStorage.setItem('@Auth:token', response.data.token);
      localStorage.setItem('@Auth:user', response.data.token);
 
      setLoading(false);
 
      toast({
        title: response.data.message, // apresenta a mensagem enviada pelo backend
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    
    })
    .catch((error) => {
      
      if (error.message === 'Network Error') {
 
        setLoading(false);
 
        toast({
          title: 'Erro na rede, por favor tente mais tarde', // apresenta a mensagem enviada pelo backend
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
      }
 
      console.log('o erro', error.message);
 
      toast({
        title: error.response.data.error, // apresenta a mensagem enviada pelo backend
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
 
    });
    
    
    */


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

        <form onSubmit={handleSignIn}>
          <FormControl width={400} >
            
            <FormLabel  margin={0}>Usuário</FormLabel>
            <Input 
              variant='flushed'
              isDisabled={loading}
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
                isDisabled={loading}
                type='password' 
                placeholder='Digite sua senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/*isErrorSenha && <FormErrorMessage>Informe a Senha</FormErrorMessage> */}
            </Box>

              <Button 
                marginTop={10} 
                isLoading={loading}
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