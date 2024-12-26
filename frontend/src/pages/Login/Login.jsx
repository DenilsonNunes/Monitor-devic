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
  useToast,
  HStack,
  VStack,
  InputGroup,
  InputRightElement,
  Icon
}
from '@chakra-ui/react'


import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'



import { useAuth } from '../../hooks/auth';



const Login = () => {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)






  const toast = useToast();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signIn, isAuthenticated } = useAuth();


  useEffect(() => {


    if (isAuthenticated()) {

      navigate("/home");
      return;

    }

  }, [])


  const handleSignIn = async (event) => {

    event.preventDefault();

    setLoading(true);


    try {

      await signIn({ user, password })

      toast({
        title: "Login realizado com sucesso.",
        status: "success",
        duration: 2000,
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
        duration: 2000,
        isClosable: true,
      });
    }



  }


  return (
    <HStack
      height='100vh'
    >

      <Box
        bg='primary'
        height='100%'
        flex='7'
        display='flex'
        alignItems='end'
        justifyContent='start'
      >
        <Text fontSize='sm' color='white' ><strong>Versão:</strong> 2.5.8</Text>
      </Box>

      <VStack flex='3' height='100%' align='center' justify='center'>

        <Text fontSize={80} color='primary'>DeVIC</Text>

        <Box width='80%'>

          <form onSubmit={handleSignIn}>
            <FormLabel margin={0} fontWeight='bold'>Usuário</FormLabel>
            <Input
              required
              borderBottom='1px'
              borderColor='primary'
              focusBorderColor="primary"
              variant='flushed'
              isDisabled={loading}
              type='text'
              placeholder='Digite seu usuário Ex: João'
              value={user}
              onChange={(e) => setUser(e.target.value)}

            />

            <FormLabel margin={0} fontWeight='bold' marginTop={6}>Senha</FormLabel>
            
            <InputGroup >
              <Input
                required
                borderBottom='1px'
                borderColor='primary'
                focusBorderColor="primary"
                variant='flushed'
                isDisabled={loading}
                type={show ? 'text' : 'password'}
                placeholder='Digite sua senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <InputRightElement>

                <Button  
                  size='sm' 
                  onClick={handleClick} 
                  _hover='none' 
                  _active={{bg:'transparent'}}
                >
                  {show ? <Icon as={ViewIcon} /> : <Icon as={ViewOffIcon}/>}
                </Button>

              </InputRightElement>

            </InputGroup>


            <Button
              marginTop={10}
              isLoading={loading}
              type='submit'
              width='100%'
              bg='primary'
              color='white'
              _hover='none'
              _active={{bg: '#112D9C'}}
            >
              ENTRAR
            </Button>


          </form>

        </Box>


      </VStack>

    </HStack>



  )
}

export default Login