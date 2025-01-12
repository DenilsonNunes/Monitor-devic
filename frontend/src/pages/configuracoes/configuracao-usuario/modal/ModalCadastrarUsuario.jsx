import { useState } from 'react'
import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query';


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
  Stack,
  FormLabel,
  Select,
  HStack,
  Button,
  Radio,
  RadioGroup,
  InputGroup,
  Input,
  InputRightElement,
  Box,
  Checkbox,
  useBreakpointValue
} from '@chakra-ui/react'


import { CheckCircleIcon, SearchIcon, WarningTwoIcon } from '@chakra-ui/icons'


// API INSTANCE
import api from '../../../../helpers/api-instance';
import Loader from '../../../../components/Loading/Loader';





const ModalCadastrarUsuario = ({ isOpen, onClose }) => {

  const queryClient = useQueryClient();

  const [func, setFunc] = useState('')
  const [telaInicial, setTelainicial] = useState('')
  const [empresas, setEmpresas] = useState([])
  const [visualizarCustoProd, setVisualizarCustoProd] = useState('')
  const [visualizarVendas, setVisualizarVendas] = useState('')





  const handleCheckboxEmpresas = (e) => {
    const { value, checked } = e.target;

    const trimmedValue = value.trim(); // Remove espaços em branco extras

    setEmpresas((prev) =>
      checked 
        ? [...prev, trimmedValue] 
        : prev.filter((empresa) => empresa !== trimmedValue)
    );
    console.log('Como fica quando aperta', empresas)
  };




  const handleCloseModal = () => {
    reset(); // Reseta o estado da mutação
    onClose();
  }

  // Carrega as informações para o cadastro do usuário
  const fetchCarregarFiltros = async () => {
    const response = await api.get('/configuracoes/usuarios/filtros-relatorio')
    return response.data;
  };



  const { data, error, isLoading } = useQuery({

    queryKey: ['Filtros-Cadastro-Usuarios'], // se os valore mudar, busca novamente
    queryFn: () => fetchCarregarFiltros(),
    refetchOnWindowFocus: false
  
  });



  
  const { mutate, isPending, isSuccess, isError, reset } = useMutation({

    mutationFn: async () => {
      
      const response = await api.post('/configuracoes/usuarios/cadastrar', {
        codFunc: func, 
        telaInicial, 
        custoRel: visualizarCustoProd, 
        somenteVendaSuperVnd: visualizarVendas, 
        empresas
      })

      // Um atraso de 2 seguntos para exibir o loading na tela
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return response.data
      
    },
    onSuccess: () => {
      // Se der sucesso, recagerra os filtros e atualiza a lista de usuarios cadastrados
      queryClient.invalidateQueries('Filtros-Cadastro-Usuarios', 'usuarios')
      setEmpresas('');

    },
    onError: (error) => {
      // Se der erro, exibi erro na tela
      console.log('Deu erro', error.response.data)
      setEmpresas('');

    }


  })


  const handleCadastrarUsuario = (e) => {
    e.preventDefault();
    mutate();

  }










  const display = useBreakpointValue({
    base: (
      <Modal 
        closeOnOverlayClick={false} 
        onClose={handleCloseModal}
        isOpen={isOpen} 
        isCentered 
        size='' 
      >

        <ModalOverlay />

        <ModalContent>
          <ModalHeader
            bg='primary'
            color='white'
            paddingY={2}
            borderBottomRadius='10px'
          >
            <Text fontWeight='500'>
              Cadastro de acesso usuário
            </Text>

          </ModalHeader>

          <ModalCloseButton color='white' />

          <ModalBody marginTop={5} padding={2}>

              {!isPending && !isSuccess && !isError &&

                <form onSubmit={handleCadastrarUsuario}>

                  <VStack>

                    <Stack direction='column' spacing={0} width='100%'>

                      <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Funcionário(a)</FormLabel>

                      <Select 
                        size='sm'
                        required
                        placeholder='--Selecione--'
                        onChange={(e) => setFunc(e.target.value)}   
                      >
                        {data && data.funcionarios.map((item, index) => (

                          <option value={item.CodFunc} key={index}>{item.NomeFunc}</option>

                        ))}
                      </Select>

                    </Stack>

                    <Stack direction='column' spacing={0} width='100%'>

                        <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Tela Inicial</FormLabel>

                        <Select 
                          size='sm' 
                          required
                          placeholder='--Selecione--'
                          onChange={(e) => setTelainicial(e.target.value)}
                        >

                          {data && data.telaInicial.map((item, index) => (

                            <option 
                              value={item.idAplicacao} 
                              key={index}                  
                              >
                                {item.NomeAmigavelAplic}
                              </option>

                          ))}

                        </Select>

                    </Stack>
              
                    <Stack direction='column' spacing={0} width='100%'>

                        <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Empresa(s) para acesso</FormLabel>

                        <InputGroup size='sm'>
                          <Input placeholder='Digite a empresa' />
                          <InputRightElement>
                            <SearchIcon color='gray.300' />
                          </InputRightElement>
                        </InputGroup>

                        <Box
                          marginTop={1}
                          maxHeight="100px" 
                          overflowY="auto"   
                          border='1px'
                          borderColor='gray.300'                   
                        >

                          {data && data.empresa.map((item, index) => (

                            <HStack marginLeft={1} key={index}>
                              <Checkbox 
                                colorScheme='green'  
                                value={item.CodEmpr}
                                onChange={handleCheckboxEmpresas}                       
                              >
                                <Text fontSize='sm'>
                                {item.CodEmpr} - {item.NomeFantEmpr}
                                </Text>

                              </Checkbox>
                            </HStack>

                          ))}

                        </Box>

                    </Stack>
             
                    <Stack direction='column' spacing={0} width='100%'>

                      <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Visualiza custos dos produtos?</FormLabel>
                      <RadioGroup>
                        <Stack 
                          direction='row'
                          onChange={(e) => setVisualizarCustoProd(e.target.value)}
                          >
                          <Radio value='S' size='sm'>Sim</Radio>
                          <Radio value='N' size='sm'>Não</Radio>
                        </Stack>
                      </RadioGroup>

                    </Stack>

                    <Stack direction='column' spacing={0} width='100%'>

                      <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Visualizar vendas?</FormLabel>

                      <RadioGroup >
                        <Stack direction='row' onChange={(e) => setVisualizarVendas(e.target.value)}>
                          <Radio value='S' size='sm'>Sim</Radio>
                          <Radio value='N' size='sm'>Apenas vendedores do supervisor</Radio>
                        </Stack>
                      </RadioGroup>

                    </Stack>

               

                    <HStack width='100%' justifyContent='end'>


                      <Button
                        size='sm'
                        colorScheme='green'
                        color='white'
                        type='submit'
                        fontWeight='none'
                        isLoading={isPending}
                      >
                        Salvar
                      </Button>

                    </HStack>


                  </VStack>              

                </form>
                                      
              }

              {isPending &&
              
                <Loader/>
              
              }

              {isSuccess &&
                <VStack>
                  <CheckCircleIcon boxSize={28} color="green.500" />
                  <Text color='green'>Usuário cadastrado com sucesso !!!</Text>
                </VStack>
              }

              {isError &&
                <VStack>
                  <WarningTwoIcon boxSize={28} color="red.500" />
                  <Text color='red'>Erro ao cadastrar usuário, tente novamente mais tarde.</Text>
                </VStack>
              }


          </ModalBody>

        </ModalContent>

      </Modal>
    ),
    md: (
      <Modal 
        closeOnOverlayClick={false} 
        onClose={handleCloseModal}
        isOpen={isOpen} 
        isCentered 
        size='' 
      >

        <ModalOverlay />

        <ModalContent width={{
            md: '80%', // 48em-80em,
            xl: '50%', // 80em+
        }}
        
        >
          <ModalHeader
            bg='primary'
            color='white'
            paddingY={2}
            borderBottomRadius='10px'
          >
            <Text fontWeight='500'>
              Cadastro de acesso usuário
            </Text>

          </ModalHeader>

          <ModalCloseButton color='white' />

          <ModalBody marginTop={5}>

              {!isPending && !isSuccess && !isError &&

                <form onSubmit={handleCadastrarUsuario}>

                  <VStack>


                    <Stack direction={{md: 'column', lg: 'row'}} width='100%' spacing={0} justifyContent='start' gap={2}>

                      <Stack direction='column' spacing={0} width='100%'>

                        <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Funcionário(a)</FormLabel>

                        <Select 
                          size='sm'
                          required
                          placeholder='--Selecione--'
                          onChange={(e) => setFunc(e.target.value)}   
                        >
                          {data && data.funcionarios.map((item, index) => (

                            <option value={item.CodFunc} key={index}>{item.NomeFunc}</option>

                          ))}
                        </Select>

                      </Stack>


                      <Stack direction='column' spacing={0} width='100%'>

                        <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Tela Inicial</FormLabel>

                        <Select 
                          size='sm' 
                          required
                          placeholder='--Selecione--'
                          onChange={(e) => setTelainicial(e.target.value)}
                        >

                          {data && data.telaInicial.map((item, index) => (

                            <option 
                              value={item.idAplicacao} 
                              key={index}                  
                              >
                                {item.NomeAmigavelAplic}
                              </option>

                          ))}

                        </Select>

                      </Stack>

                    </Stack>

                    <Stack direction='row' width='100%' spacing={0} marginTop={2} justifyContent='start' >


                      <Stack direction='column' width='100%' spacing={0} >

                        <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Empresa(s) para acesso</FormLabel>

                        <InputGroup size='sm'>
                          <Input placeholder='Digite a empresa' />
                          <InputRightElement>
                            <SearchIcon color='gray.300' />
                          </InputRightElement>
                        </InputGroup>

                        <Box
                          marginTop={1}
                          maxHeight="100px" 
                          overflowY="auto"   
                          border='1px'
                          borderColor='gray.300'                   
                        >

                          {data && data.empresa.map((item, index) => (

                            <HStack marginLeft={1} key={index}>
                              <Checkbox 
                                colorScheme='green'  
                                value={item.CodEmpr}
                                onChange={handleCheckboxEmpresas}                       
                              >
                                <Text fontSize='sm'>
                                {item.CodEmpr} - {item.NomeFantEmpr}
                                </Text>

                              </Checkbox>
                            </HStack>

                          ))}

                        </Box>

                      </Stack>


                    </Stack>



                    <Stack direction='column' width='100%' spacing={0} marginTop={2} justifyContent='start' gap={2} >

                      <Stack direction='column' spacing={0} >

                        <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Visualiza custos dos produtos?</FormLabel>
                        <RadioGroup>
                          <Stack 
                            direction='row'
                            onChange={(e) => setVisualizarCustoProd(e.target.value)}
                            >
                            <Radio value='S' size='sm'>Sim</Radio>
                            <Radio value='N' size='sm'>Não</Radio>
                          </Stack>
                        </RadioGroup>

                      </Stack>


                      <Stack direction='column' spacing={0} >

                        <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Visualizar vendas?</FormLabel>

                        <RadioGroup >
                          <Stack direction='row' onChange={(e) => setVisualizarVendas(e.target.value)}>
                            <Radio value='S' size='sm'>Sim</Radio>
                            <Radio value='N' size='sm'>Apenas vendedores do supervisor</Radio>
                          </Stack>
                        </RadioGroup>

                      </Stack>

                    </Stack>



                    <HStack width='100%' justifyContent='end'>


                      <Button
                        size='sm'
                        colorScheme='green'
                        color='white'
                        type='submit'
                        fontWeight='none'
                        isLoading={isPending}
                      >
                        Salvar
                      </Button>

                    </HStack>


                  </VStack>              

                </form>
                                      
              }

              {isPending &&
              
                <Loader/>
              
              }

              {isSuccess &&
                <VStack>
                  <CheckCircleIcon boxSize={28} color="green.500" />
                  <Text color='green'>Usuário cadastrado com sucesso !!!</Text>
                </VStack>
              }

              {isError &&
                <VStack>
                  <WarningTwoIcon boxSize={28} color="red.500" />
                  <Text color='red'>Erro ao cadastrar usuário, tente novamente mais tarde.</Text>
                </VStack>
              }


          </ModalBody>

        </ModalContent>

      </Modal>

    )
  })



  return (
    <>
      {display}
    </>
  )
}

export default ModalCadastrarUsuario