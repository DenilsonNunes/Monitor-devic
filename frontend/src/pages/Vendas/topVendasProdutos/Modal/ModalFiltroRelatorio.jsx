import { useState } from 'react'

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
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  RadioGroup,
  Fade,
  Box
} from '@chakra-ui/react'

import { useSearchParams } from "react-router-dom";

// Utils
import dataAtualInputAAAAMMDD from '../../../../utils/dataAtualInputAAAAMMDD';

//Components
import DualList from '../../../../components/DualListBox/DualList';
import InputDataFiltros from '../../../../components/InputDataFiltros/InputDataFiltros';


const ModalFiltroRelatorio = ({ isOpen, onClose, dataFiltroRel }) => {

  let [searchParams, setSearchParams] = useSearchParams();

  const [calculaPor, setCalculaPor] = useState("V")

  const [selectedValue, setSelectedValue] = useState('');


  const [empresa, setEmpresa] = useState("");
  const [top, setTop] = useState(10);
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [dataHoje, setDataHoje] = useState(dataAtualInputAAAAMMDD());

  const [vendedor, setVendedor] = useState("");
  const [periodo, setPeriodo] = useState("");

  const [unidadeProd, setUnidadeProd] = useState([]);





  const handleBuscar = () => {

    const params = {};


    if (empresa) {

      params.empresa = empresa;

    } else {

      const empresas = dataFiltroRel.codUndEmpr.map(empresa => `'${empresa.CodEmpr}'`).join(', ');
      params.empresa = empresas;

    }

    if (vendedor) params.CodFunc = vendedor;
    if (top) params.top = top;


    if (dataHoje) {
      params.dataInicio = dataHoje
      params.dataFim = dataHoje
    } 

    if (dataInicio) params.dataInicio = dataInicio;

    if(unidadeProd.length > 0) {
      
      const undProd = unidadeProd.map(und => `'${und}'`).join(', '); 
      params.undProd = undProd;

    }
    
    if(calculaPor) params.calculaPor = calculaPor;

    if(dataInicio && dataFim) {
      params.dataFim = dataFim;
    } 


    // Setando os parâmetros de busca com useSearchParams
    setSearchParams(params);

    onClose()

  }






  const handleSelectChange = (selecionado) => {

    setSelectedValue(selecionado);

  }



  const handleSelectedUndProd = (newValues) => {

    setUnidadeProd(newValues);

  }

  

  const renderSwitchContent = (selecionado) => {

    console.log('Qual selecionado no switch',  selecionado);

    if (selecionado === '') {
      selecionado = 'MaiorOuIgual'
    }



    switch (selecionado) {

      case 'Intervalo':
        return (
          <HStack marginTop={1}>

            <VStack spacing={0} alignItems='start'>

              <FormLabel margin={0} fontSize='14px' color='#4a5568'>De:</FormLabel>
              <Input 
                type='date' 
                size='sm' 
                onChange={(e)=> setDataInicio(e.target.value)}
                />

            </VStack>

            <VStack spacing={0} alignItems='start'>

              <FormLabel margin={0} fontSize='14px' color='#4a5568'>Até:</FormLabel>
              <Input 
                type='date' 
                size='sm' 
                onChange={(e)=> setDataFim(e.target.value)}
              />

            </VStack>

          </HStack>
        )

      case 'MaiorOuIgual':


        return (
          <Input 
            marginTop={6}  
            maxW='150px' 
            type='date' 
            size='sm' 
            onChange={(e)=> setDataInicio(e.target.value)}
          />
        )


      case 'Hoje':

       
        return (
          <Input 
            marginTop={6} 
            value={dataHoje}
            maxW='150px' type='date' size='sm' 
            />
        )


      case 'Ult7dias':

        return (
          <HStack marginTop={1}>

            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>De:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>
            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>Até:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>

          </HStack>
        )

      case 'EsteMesAteHoje':

        return (
          <HStack marginTop={1}>

            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>De:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>
            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>Até:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>

          </HStack>
        )
      case 'UltimoMes':

        return (
          <HStack marginTop={1}>

            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>De:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>
            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>Até:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>

          </HStack>
        )

      case 'AnoPassado':

        return (
          <HStack marginTop={1}>

            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>De:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>
            <VStack spacing={0} alignItems='start'>
              <FormLabel margin={0} fontSize='14px' color='#4a5568'>Até:</FormLabel>
              <Input type='date' size='sm' />
            </VStack>

          </HStack>
        )
    }

  }

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size=''>
        <ModalOverlay />
        <ModalContent width='fit-content'>
          <ModalHeader
            bg='primary'
            color='white'
            paddingY={2}
            borderBottomRadius='10px'
          >Filtros (Top vendas produtos)
          </ModalHeader>

          <ModalCloseButton color='white' />

          <ModalBody marginTop={5}>

            <VStack>

              <Stack direction='row' width='100%' spacing={0} justifyContent='start' gap={2} >

                <Stack direction='column' spacing={0}>

                  <FormLabel margin={0} fontWeight='bold' color='#4a5568'>Top</FormLabel>

                  <NumberInput  onChange={(value) => setTop(value)}  value={top} min={1} max={30} size='sm' maxW={24}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>

                </Stack>


                <Stack direction='column' spacing={0} >

                  <FormLabel margin={0} fontWeight='bold' color='#4a5568'>Empresa</FormLabel>

                  <Select size='sm' onChange={(e) => setEmpresa(e.target.value)}>

                    <option value="">--Todas--</option>

                    {dataFiltroRel.codUndEmpr.map((item) => (
                      <option value={item.CodEmpr}>
                        {item.CodEmpr}-{item.UndEmpr}
                      </option>
                    ))}
                  </Select>
                </Stack>



                <Stack direction='column' spacing={0}>

                  <FormLabel margin={0} fontWeight='bold' color='#4a5568'>Período de venda</FormLabel>

                  <Select size='sm' onChange={(e) => handleSelectChange(e.target.value)}>
                    <option value='MaiorOuIgual'>Maior ou igual a</option>
                    <option value='Intervalo'>Intevalo</option>
                    <option value='Hoje'>Hoje</option>
                    <option value='Ult7dias'>Últimos 7 dias</option>
                    <option value='EsteMesAteHoje'>Este mês até hoje</option>
                    <option value='UltimoMes'>Último mês</option>
                    <option value='AnoPassado'>Ano passado</option>
                  </Select>

                </Stack>

                <Stack spacing={0} >
                  <Fade in={true}>
                    <Box
                      rounded='md'
                      minW='300px'
                    >
                      {renderSwitchContent(selectedValue)}

                    </Box>
                  </Fade>
                </Stack>


              </Stack>



              <Stack direction='row' width='100%' spacing={0} marginTop={5} justifyContent='start' gap={2}>

                <Stack direction='column' spacing={0}>

                  <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Vendedor</FormLabel>

                  <Select size='sm' onChange={(e) => setVendedor(e.target.value)}>

                    <option value='T'>--Todos--</option>

                    {dataFiltroRel.codNomeFunc.map((item) => (
                      <option value={item.CodFunc}>
                        {item.NomeFunc}-{item.CodFunc}
                      </option>
                    ))}

                  </Select>

                  <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Função do vendedor</FormLabel>

                  <Select size='sm' >

                    <option value='T'>--Todos--</option>
                    {dataFiltroRel.codFuncaoFunc.map((item) => (
                      <option >
                        {item.NomeFuncaoFunc}
                      </option>
                    ))}
                  
                  </Select>



                </Stack>



                <Stack direction='column' spacing={0} maxW='380px'>

                  <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Unidade</FormLabel>
                  <DualList
                    filtros={dataFiltroRel.unidadeProd}
                    onSelectedChange={handleSelectedUndProd}
                  />

                </Stack>



              </Stack>

              <Stack direction='row' width='100%' spacing={0} marginTop={5} justifyContent='start'>

                <Stack direction='column' spacing={0}>

                  <FormLabel margin={0} fontWeight='bold' color='#4a5568'>Calcular por</FormLabel>
                  <RadioGroup onChange={setCalculaPor} value={calculaPor}>
                    <Stack direction='column'>
                      <Radio value='Q' size='sm'>Quantidade</Radio>
                      <Radio value='V' size='sm'>Valor</Radio>
                    </Stack>
                  </RadioGroup>

                </Stack>

                <InputDataFiltros/>


              </Stack>


              <HStack>

                <Button
                  size='sm'
                  bg='primary'
                  color='white'
                  _hover={{ bg: '#0369a1' }}
                  borderRadius={0}
                  onClick={handleBuscar}
                >
                  Buscar
                </Button>

                <Button
                  size='sm'
                  bg='gray.400'
                  color='white'
                  _hover={{ bg: 'gray.500' }}
                  borderRadius={0}
                >
                  Limpar
                </Button>

              </HStack>


            </VStack>


          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalFiltroRelatorio