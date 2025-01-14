import { useEffect, useState } from 'react'
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
  Input,
  Box,
  Checkbox,
  useBreakpointValue,
  Tag,
  TagLeftIcon,
  TagLabel
} from '@chakra-ui/react'


import { CheckIcon, WarningTwoIcon } from '@chakra-ui/icons'




// API INSTANCE
import api from '../../../../helpers/api-instance';






const ModalEditarUsuario = ({ isOpen, onClose, usuario }) => {



  const queryClient = useQueryClient();


  const [func, setFunc] = useState(usuario.CodFunc)
  const [telaInicial, setTelaInicial] = useState(null || usuario.idAplicacao)
  const [empresas, setEmpresas] = useState({})
  const [visualizarCustoProd, setVisualizarCustoProd] = useState(usuario.CustoRel)
  const [visualizarVendas, setVisualizarVendas] = useState(usuario.SomenteVendaSuperVnd)
  const [empresasAcessoFunc, setEmpresasAcessoFunc] = useState(null)
  
  const [isDisabledForm, setIsDisabledForm] = useState(false);





  // Carrega os filtros para edição do usuário
  const fetchCarregarFiltros = async () => {
    
    const response = await api.get(`/configuracoes/usuarios/filtros-relatorio/${usuario.CodFunc}`)

    return response.data;

    
  };
  
  const { data, error, isLoading, refetch } = useQuery({
    
    queryKey: ['CarregarFiltrosEditarUsuario'], // se os valore mudar, busca novamente
    queryFn: () => fetchCarregarFiltros(),
    refetchOnWindowFocus: false
 
  });




  useEffect(() => {

    if (data) {
      const result = data.empresaAcessoFunc
        .filter(item => item.acessoEmpresa === 'S') // Filtra os itens com acessoEmpresa === 'S'
        .map(item => item.CodEmpr.trim()); // Retorna apenas CodEmpr com trim aplicado
  
      setEmpresas(result);
      setEmpresasAcessoFunc(data.empresaAcessoFunc)
    }
  }, [data]); // Reexecuta o efeito quando "data" muda





  const handleCheckboxEmpresas = (e) => {

    
    const { value, checked } = e.target;

    const trimmedValue = value.trim(); // Remove espaços em branco extras

    setEmpresas((prev) =>
      checked 
        ? [...prev, trimmedValue] 
        : prev.filter((empresa) => empresa !== trimmedValue)
    );

  };




  
  const handleCloseModal = () => {
    
    setEmpresas({})
    setEmpresasAcessoFunc(null)
    refetch();
    onClose();
    
  }





  const { mutate, isPending, isSuccess, isError, reset } = useMutation({

    mutationFn: async () => {
      
     setIsDisabledForm(true)
      // Um atraso de 2 seguntos para exibir o loading na tela
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await api.patch(`/configuracoes/usuarios/editar/${func}`, {
        telaInicial, 
        custoRel: visualizarCustoProd, 
        somenteVendaSuperVnd: visualizarVendas, 
        empresas
      })
      return response.data
      
    },
    onSuccess: () => {
      // Se der sucesso, recagerra os filtros e atualiza a lista de usuarios cadastrados
      queryClient.invalidateQueries('Filtros-Cadastro-Usuarios', 'usuarios', 'CarregarFiltrosEditarUsuario')
      setIsDisabledForm(true)
 
    },
    onError: (error) => {
      // Se der erro, exibi erro na tela
      console.log('Deu erro', error.response.data)
      setEmpresas('');


    }


  })











  const handleEditarUsuario = (e) => {

    e.preventDefault()

    mutate()

  }








  const display = useBreakpointValue({
    base: (
      <Modal 
        closeOnOverlayClick={false} 
        onClose={handleCloseModal} 
        isOpen={isOpen} 
        isCentered size='' 
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
              Editar acesso de usuário
            </Text>

          </ModalHeader>

          <ModalCloseButton color='white' />

          <ModalBody marginTop={5} paddingX={4}>

            <form onSubmit={handleEditarUsuario}>

              <VStack >

                <Stack direction='row' width='100%' spacing={0} justifyContent='start' gap={2}>


                  <Stack direction='column' spacing={0} maxW='20%'>

                    <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Codigo</FormLabel>
                    <Input type='text'size='sm' value={usuario.CodFunc} isReadOnly/>

                  </Stack>

                  <Stack direction='column' spacing={0} width='80%'>

                    <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Usuário</FormLabel>
                    <Input type='text'size='sm' value={usuario.NomeFunc} isReadOnly/>

                  </Stack>


                </Stack>

                <Stack direction='column' spacing={0} width='100%'>

                  <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Tela Inicial</FormLabel>

                  <Select 
                    size='sm' 
                    placeholder={usuario.descrAplicacao} 
                    onChange={(e) => setTelaInicial(e.target.value)} 
                  >

                    {data && data.telaInicial.map((item, index) => (

                      <option value={item.idAplicacao} key={index}>
                        {item.NomeAmigavelAplic}
                      </option>

                    ))}

                  </Select>

                </Stack>

                <Stack direction='column' spacing={0} width='100%'>

                  <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Empresa(s) para acesso</FormLabel>

                  <Box
                    marginTop={1} 
                    overflowY="auto"   
                    border='1px'
                    borderColor='gray.300'                               
                    >

                    {empresasAcessoFunc && empresasAcessoFunc.map((item, index) => (

                      <HStack marginLeft={1} key={index}>

                        <Checkbox 
                          colorScheme='green' 
                          value={item.CodEmpr}                        
                          isChecked={empresas.includes(item.CodEmpr.trim())}
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

                <Stack direction='column' spacing={0}  width='100%'>

                  <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Visualiza custos dos produtos?</FormLabel>

                  <RadioGroup value={visualizarCustoProd}>
                    <Stack 
                      onChange={(e) => setVisualizarCustoProd(e.target.value)}
                      direction='row'>
                      <Radio value='S' size='sm'>Sim</Radio>
                      <Radio value='N' size='sm'>Não</Radio>
                    </Stack>
                  </RadioGroup>

                </Stack>

                <Stack direction='column' spacing={0}  width='100%'>

                  <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Visualizar vendas?</FormLabel>

                  <RadioGroup value={visualizarVendas}>
                    <Stack direction='row'  onChange={(e) => setVisualizarVendas(e.target.value)}>
                      <Radio value='S' size='sm'>Sim</Radio>
                      <Radio value='N' size='sm'>Apenas vendedores do supervisor</Radio>
                    </Stack>
                  </RadioGroup>

                </Stack>
            
                <HStack width='100%' justifyContent='end'>


                  <Button
                    size='sm'
                    variant='outline'
                    colorScheme='red'
                    type='submit'
                    fontWeight='bold'
                    onClick={handleCloseModal}
                  >
                    Cancelar
                  </Button>

                  <Button
                    size='sm'
                    colorScheme='green'
                    color='white'
                    type='submit'
                    fontWeight='none'
                  >
                    Salvar
                  </Button>

                </HStack>


              </VStack>

            </form>

          </ModalBody>

        </ModalContent>

      </Modal>
    ),
    md:(
      <Modal 
        closeOnOverlayClick={false} 
        onClose={handleCloseModal} 
        isOpen={isOpen} 
        isCentered size='' 
      >

        <ModalOverlay />

        <ModalContent width='50%'>
          <ModalHeader
            bg='primary'
            color='white'
            paddingY={2}
            borderBottomRadius='10px'
          >
            <Text fontWeight='500'>
              Editar acesso de usuário
            </Text>

          </ModalHeader>

          <ModalCloseButton color='white' />

          <ModalBody marginTop={5}>
        

            {isError ?
              <VStack>
                  <WarningTwoIcon boxSize={28} color="red.500" />
                  <Text color='red'>Erro ao editar usuário, tente novamente mais tarde.</Text>
              </VStack>

            :
            
              <form onSubmit={handleEditarUsuario}>

                <VStack>

                  <Stack direction='row' width='100%' spacing={0} justifyContent='start' gap={2}>


                    <Stack direction='column' spacing={0} maxW='15%'>

                      <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Codigo</FormLabel>
                      <Input type='text'size='sm' value={usuario.CodFunc} isReadOnly isDisabled={isDisabledForm}/>

                    </Stack>


                    <Stack direction='column' spacing={0} width='85%'>

                      <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Usuário</FormLabel>
                      <Input type='text'size='sm' value={usuario.NomeFunc} isReadOnly isDisabled={isDisabledForm}/>

                    </Stack>


                  </Stack>


                  <Stack direction='column' spacing={0} width='100%'>

                    <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Tela Inicial</FormLabel>

                    <Select 
                      size='sm' 
                      value={telaInicial ?? usuario.idAplicacao} // Usa o valor padrão se telaInicial for null ou undefined
                      isDisabled={isDisabledForm}
                      onChange={(e) => setTelaInicial(e.target.value || usuario.idAplicacao)} // Garante que o estado seja atualizado corretamente
                    >

                      {data && data.telaInicial.map((item, index) => (

                        <option value={item.idAplicacao} key={index}>
                          {item.NomeAmigavelAplic}
                        </option>

                      ))}

                    </Select>

                  </Stack>




                  <Stack direction='row' width='100%' spacing={0} marginTop={2} justifyContent='start' >


                    <Stack direction='column' spacing={0} width='100%'>

                      <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Empresa(s) para acesso</FormLabel>

                      <Box
                        marginTop={1} 
                        overflowY="auto"   
                        border='1px'
                        borderColor='gray.300'                               
                        >

                        {empresasAcessoFunc && empresasAcessoFunc.map((item, index) => (

                          <HStack marginLeft={1} key={index}>

                            <Checkbox 
                              colorScheme='green' 
                              value={item.CodEmpr}                        
                              isChecked={empresas.includes(item.CodEmpr.trim())}
                              isDisabled={isDisabledForm}
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



                  <Stack direction='row' width='100%' spacing={0} marginTop={2} justifyContent='start' gap={2} >

                    <Stack direction='column' spacing={0} >

                      <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Visualiza custos dos produtos?</FormLabel>

                      <RadioGroup value={visualizarCustoProd} isDisabled={isDisabledForm}>
                        <Stack 
                          onChange={(e) => setVisualizarCustoProd(e.target.value)}
                          direction='row'>
                          <Radio value='S' size='sm'>Sim</Radio>
                          <Radio value='N' size='sm'>Não</Radio>
                        </Stack>
                      </RadioGroup>

                    </Stack>

                  </Stack>

                  <Stack direction='row' width='100%' spacing={0} marginTop={2} justifyContent='start' gap={2} >


                    <Stack direction='column' spacing={0} >

                      <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Visualizar vendas?</FormLabel>

                      <RadioGroup value={visualizarVendas} isDisabled={isDisabledForm}>
                        <Stack direction='row' value='N' onChange={(e) => setVisualizarVendas(e.target.value)}>
                          <Radio value='S' size='sm'>Sim</Radio>
                          <Radio value='N' size='sm'>Apenas vendedores do supervisor</Radio>
                        </Stack>
                      </RadioGroup>

                    </Stack>


                  </Stack>


                  {isSuccess ? 
                  
                    <HStack width='100%' justifyContent='center'>

                      <Tag colorScheme='green' fontWeight='bold'>
                        <TagLeftIcon boxSize='12px' as={CheckIcon} />
                        <TagLabel>Alteração realizada com sucesso !!!</TagLabel>
                      </Tag>

                    </HStack>
                  
                  :
                                  
                    <HStack width='100%' justifyContent='end'>

                      <Button
                        size='sm'
                        variant='outline'
                        colorScheme='red'
                        type='submit'
                        fontWeight='bold'
                        isDisabled={isDisabledForm}
                        onClick={handleCloseModal}
                      >
                        Cancelar
                      </Button>

                      <Button
                        size='sm'
                        colorScheme='green'
                        color='white'
                        type='submit'
                        fontWeight='none'
                        isLoading={isDisabledForm}
                      >
                        Salvar
                      </Button>

                    </HStack>
                  
                  }

                </VStack>

              </form>
            
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
7
export default ModalEditarUsuario