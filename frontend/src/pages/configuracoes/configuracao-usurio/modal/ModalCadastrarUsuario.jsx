import { useState } from 'react'
import { useQuery, useMutation  } from '@tanstack/react-query';


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
  InputLeftElement,
  Input,
  InputRightElement,
  Box,
  Checkbox
} from '@chakra-ui/react'


import { CheckIcon, SearchIcon } from '@chakra-ui/icons'


// API INSTANCE
import api from '../../../../helpers/api-instance';










const ModalCadastrarUsuario = ({ isOpen, onClose }) => {

  const [func, setFunc] = useState('')
  const [telaInicial, setTelainicial] = useState('')
  const [empresas, setEmpresas] = useState([])
  const [visualizarCustoProd, setVisualizarCustoProd] = useState('')
  const [visualizarVendas, setVisualizarVendas] = useState('')






  const handleCheckboxEmpresas = (e) => {
    const { value, checked } = e.target;

    setEmpresas((prev) =>
      checked ? [...prev, value] : prev.filter((empresa) => empresa !== value)
    );
  };





  const handleCadastrarUsuario = () => {

    mutate();

  }


  const fetchCarregarFiltros = async () => {

    const response = await api.get('/configuracoes/usuarios/filtros-relatorio')

    return response.data;

  };



  const { data, error, isLoading } = useQuery({

    queryKey: ['CarregarFiltros'], // se os valore mudar, busca novamente
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
      return response.data
      
    },
    onSuccess: (data) => {

      console.log('Deu sucesso', data)

    },
    onError: (error) => {

      console.log('Deu erro', error.response.data)

    }


  })






  return (
    <>
      <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} isCentered size='' >

        <ModalOverlay />

        <ModalContent width='50%'>
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



              <VStack>


                <Stack direction='row' width='100%' spacing={0} justifyContent='start' gap={2}>

                  <Stack direction='column' spacing={0} width='100%'>

                    <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Funcionário(a)</FormLabel>

                    <Select 
                      size='sm' 
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


                  <Stack direction='column' spacing={0} >

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



                <Stack direction='row' width='100%' spacing={0} marginTop={2} justifyContent='start' gap={2} >

                  <Stack direction='column' spacing={0} >

                    <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Visualiza custos dos produtos?</FormLabel>
                    <RadioGroup>
                      <Stack direction='row'onChange={(e) => setVisualizarCustoProd(e.target.value)} value={visualizarCustoProd}>
                        <Radio value='S' size='sm'>Sim</Radio>
                        <Radio value='N' size='sm'>Não</Radio>
                      </Stack>
                    </RadioGroup>

                  </Stack>

                </Stack>

                <Stack direction='row' width='100%' spacing={0} marginTop={2} justifyContent='start' gap={2} >


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
                    onClick={handleCadastrarUsuario}
                  >
                    Salvar
                  </Button>

                </HStack>


              </VStack>



          </ModalBody>

        </ModalContent>

      </Modal>
    </>
  )
}

export default ModalCadastrarUsuario