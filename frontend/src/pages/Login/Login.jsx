import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


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



const Login = () => {

  const toast = useToast();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const handleSignIn = async (event) => {

  event.preventDefault();

    setLoading(true);

  
    try {

      await signIn({ user, password })

      toast({
        title: "Login realizado com sucesso.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setTimeout(() => {

        navigate("/home");

      }, 2000);


    } catch (error) {


      setLoading(false);
      setPassword("");

      toast({
        title: error.data.message, // A mensagem de erro da API
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }



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