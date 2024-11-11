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
  const [empresa, setEmpresa] = useState("");
  const [top, setTop] = useState(10);
  const [dataHoje, setDataHoje] = useState(dataAtualInputAAAAMMDD());
  const [vendedor, setVendedor] = useState("");
  const [unidadeProd, setUnidadeProd] = useState([]);




  const [filtroDate, setFiltroDate] = useState({ dataInicio: '', dataFim: '', dataPeriodoSelecionado: '' });



  const handleDateChange = ({ dataInicio, dataFim, dataPeriodoSelecionado }) => {

      setFiltroDate({ dataInicio, dataFim, dataPeriodoSelecionado});

  };


  const handleBuscar = () => {


    const params = {};

    if (empresa) {
      params.empresa = empresa;
      
      // Se nem uma empresa for selecionada, pega todas as empresas
    } else {
      const empresas = dataFiltroRel.codUndEmpr.map(empresa => `'${empresa.CodEmpr}'`).join(', ');
      params.empresa = empresas;
    }


    if (vendedor) params.CodFunc = vendedor;

    if (top) params.top = top;


    if(unidadeProd.length > 0) {
      
      const undProd = unidadeProd.map(und => `'${und}'`).join(', '); 
      params.undProd = undProd;

    }
    
    if(calculaPor) params.calculaPor = calculaPor;



    //se existe um periodo de data informado, adiciona na URL Ex, ultimo mes, ultimos 7 dias, ano passado e etc
    if(filtroDate.dataPeriodoSelecionado) {

        params.periodo =  filtroDate.dataPeriodoSelecionado;
        params.dataInicio = filtroDate.dataInicio;
        params.dataFim = filtroDate.dataFim;

   
    } 
    

    // Setando os parâmetros de busca com useSearchParams
    setSearchParams(params);

    onClose()

  }



  const handleSelectedUndProd = (newValues) => {

    setUnidadeProd(newValues);

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

                    {dataFiltroRel.codUndEmpr.map((item, index) => (
                      <option value={item.CodEmpr} key={index}>
                        {item.CodEmpr}-{item.UndEmpr}
                      </option>
                    ))}
                  </Select>
                </Stack>
                                              
                
                <Stack direction='column' spacing={0}>

                  <InputDataFiltros 
                    onDateChange={handleDateChange} 
                    title='Período de venda'
                  />

                </Stack>
  
                

              </Stack>



              <Stack direction='row' width='100%' spacing={0} marginTop={5} justifyContent='start' gap={2}>

                <Stack direction='column' spacing={0}>

                  <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Vendedor</FormLabel>

                  <Select size='sm' onChange={(e) => setVendedor(e.target.value)}>

                    <option value='T'>--Todos--</option>

                    {dataFiltroRel.codNomeFunc.map((item, index) => (
                      <option value={item.CodFunc} key={index}>
                        {item.NomeFunc}-{item.CodFunc}
                      </option>
                    ))}

                  </Select>

                  <FormLabel fontWeight='bold' color='#4a5568' margin={0}>Função do vendedor</FormLabel>

                  <Select size='sm' >

                    <option value='T'>--Todos--</option>
                    {dataFiltroRel.codFuncaoFunc.map((item, index) => (
                      <option key={index}>
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