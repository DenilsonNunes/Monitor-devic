import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';


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










const ModalEditarUsuario = ({ isOpen, onClose, usuario }) => {

  console.log("Usuarios.......", usuario)


  const [func, setFunc] = useState(usuario.CodFunc)
  const [telaInicial, setTelaInicial] = useState('')
  const [empresas, setEmpresas] = useState([])
  const [visualizarCustoProd, setVisualizarCustoProd] = useState(usuario.CustoRel)
  const [visualizarVendas, setVisualizarVendas] = useState(usuario.SomenteVendaSuperVnd)



  // Carrega os filtros para edição do usuário
  const fetchCarregarFiltros = async () => {
    
    const response = await api.get(`/configuracoes/usuarios/filtros-relatorio/${usuario.CodFunc}`)
    return response.data;

    
  };
  
  const { data, error, isLoading } = useQuery({

    queryKey: ['CarregarFiltros'], // se os valore mudar, busca novamente
    queryFn: () => fetchCarregarFiltros(),
    refetchOnWindowFocus: false
    
  });







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
    onClose();
  }


  const handleEditarUsuario = (e) => {

    e.preventDefault()

    console.log("Valor de func..:", func)
    console.log("Valor de empresas..:", empresas)
    console.log("Valor de tela Inicial..:", telaInicial)
    console.log("Valor de custo produto..:", visualizarCustoProd)
    console.log("Valor de visualizar vendas.:", visualizarVendas)

  }
  





  
  return (
    <>
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

            <form onSubmit={handleEditarUsuario}>

              <VStack>

                <Stack direction='row' width='100%' spacing={0} justifyContent='start' gap={2}>


                  <Stack direction='column' spacing={0} maxW='15%'>

                    <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Codigo</FormLabel>
                    <Input type='text'size='sm' value={usuario.CodFunc} isReadOnly/>

                  </Stack>


                  <Stack direction='column' spacing={0} width='85%'>

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




                <Stack direction='row' width='100%' spacing={0} marginTop={2} justifyContent='start' >


                  <Stack direction='column' spacing={0} width='100%'>

                    <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Empresa(s) para acesso</FormLabel>

                    <Box
                      marginTop={1} 
                      overflowY="auto"   
                      border='1px'
                      borderColor='gray.300'                   
                      >

                      {data && data.empresaAcessoFunc.map((item, index) => (

                        <HStack marginLeft={1} key={index}>

                          <Checkbox 
                            colorScheme='green' 
                            value={item.CodEmpr}
                            defaultChecked={item.acessoEmpresa === 'S'}
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

                    <RadioGroup value={visualizarCustoProd}>
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

                    <RadioGroup value={visualizarVendas}>
                      <Stack direction='row' value='N' onChange={(e) => setVisualizarVendas(e.target.value)}>
                        <Radio value='S' size='sm'>Sim</Radio>
                        <Radio value='N' size='sm'>Apenas vendedores do supervisor</Radio>
                      </Stack>
                    </RadioGroup>

                  </Stack>


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
    </>
  )
}
7
export default ModalEditarUsuario