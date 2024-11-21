import { useState, useEffect } from 'react'

import {
    VStack,
    FormLabel,
    HStack,
    Input,
    Box,
    Select,
    Fade,
}  from '@chakra-ui/react'


import dataAtualInputAAAAMMDD from '../../utils/dataAtualInputAAAAMMDD'
import obterPeriodo from '../../utils/obterPeriodoData';



const InputDataFiltros = ({onDateChange, title}) => {


    const [selectedPeriodData, setSelectedPeriodData] = useState('');
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");
    const [dataHoje, setDataHoje] = useState(dataAtualInputAAAAMMDD());
    const [dataPeriodoSelecionado, setDataPeriodoSelecionado] = useState("");



    useEffect(() => {

      let periodo;


      if(!selectedPeriodData) {
        setSelectedPeriodData('maiorOuIgual')
      }


      // Define os períodos com base no valor selecionado
      switch (selectedPeriodData) {


        case 'intervalo':
          setDataInicio('')
          setDataFim('');
          periodo = 'intervalo';
          setDataPeriodoSelecionado(periodo)
          break;

        case 'maiorOuIgual':
          setDataInicio('')
          setDataFim('2999-12-30');
          periodo = 'maiorOuIgual';
          setDataPeriodoSelecionado(periodo)
          break;

        case 'ultimos7dias':
          periodo = obterPeriodo("ultimos7dias");
          setDataInicio(periodo.dataInicio);
          setDataFim(periodo.dataFim);
          setDataPeriodoSelecionado(periodo.tipoPeriodo)
          break;

        case 'ontem':
          periodo = obterPeriodo("ontem");

          setDataInicio(periodo.dataInicio);
          setDataFim(periodo.dataFim);
          setDataPeriodoSelecionado(periodo.tipoPeriodo)
          break;

        case 'hoje':
          periodo = 'hoje'
          setDataInicio(dataHoje)
          setDataFim(dataHoje)
          setDataPeriodoSelecionado(periodo)  
          break;

        case 'UltimoMes':
          periodo = obterPeriodo("ultimoMes");
          setDataInicio(periodo.dataInicio);
          setDataFim(periodo.dataFim);
          setDataPeriodoSelecionado(periodo.tipoPeriodo)
          break;

        case 'esteMesAteHoje':
          periodo = obterPeriodo("esteMesAteHoje");
          setDataInicio(periodo.dataInicio);
          setDataFim(periodo.dataFim);
          setDataPeriodoSelecionado(periodo.tipoPeriodo)
          break;

        case 'anoPassado':
          periodo = obterPeriodo("anoPassado");
          setDataInicio(periodo.dataInicio);
          setDataFim(periodo.dataFim);
          setDataPeriodoSelecionado(periodo.tipoPeriodo)
          break;

        // Outros casos, se necessário
        default:
          periodo = null;
      }


    
    }, [selectedPeriodData]);
  




    useEffect(() => {

      // Sempre que dataInicio ou dataFim mudarem, chama onDateChange para atualizar a data na página chamadora
      onDateChange({ dataInicio, dataFim, dataPeriodoSelecionado});
    }, [dataInicio, dataFim, dataPeriodoSelecionado]);






    const renderSwitchContent = (selecionado) => {

    
        if (selecionado === '') {
          selecionado = 'maiorOuIgual'

        }        
    
        switch (selecionado) {
    
          case 'intervalo':
            return (
              <HStack marginTop={1}>
    
                <VStack spacing={0} alignItems='start'>
    
                  <FormLabel margin={0} fontSize='14px' color='#4a5568'>De:</FormLabel>
                  <Input 
                    type='date' 
                    size='sm'
                    value={dataInicio} 
                    onChange={(e)=> setDataInicio(e.target.value)}
                    />
    
                </VStack>
    
                <VStack spacing={0} alignItems='start'>
    
                  <FormLabel margin={0} fontSize='14px' color='#4a5568'>Até:</FormLabel>
                  <Input 
                    type='date' 
                    size='sm' 
                    value={dataFim}
                    onChange={(e)=> setDataFim(e.target.value)}
                  />
    
                </VStack>
    
              </HStack>
            )
    
          case 'maiorOuIgual': 

            return (
              <Input 
                marginTop={6}  
                maxW='150px' 
                type='date' 
                size='sm'
                value={dataInicio} 
                onChange={(e)=> setDataInicio(e.target.value)}
              />
            )
    
    
          case 'hoje':        
            return (
              <Input 
                marginTop={6} 
                value={dataHoje}
                readOnly
                maxW='150px' type='date' size='sm' 
                />
            )


          case 'ontem': 

            return (
              <Input 
                marginTop={6} 
                value={obterPeriodo('ontem').dataInicio}
                maxW='150px' type='date' size='sm'
                readOnly 
                />
            )
    
    
          case 'ultimos7dias':
    
            return (
              <HStack marginTop={1}>
    
                <VStack spacing={0} alignItems='start'>
                  <FormLabel margin={0} fontSize='14px' color='#4a5568'>De:</FormLabel>
                  <Input 
                    type='date' 
                    size='sm' 
                    value={dataInicio}
                    readOnly
                    />
                </VStack>
                <VStack spacing={0} alignItems='start'>
                  <FormLabel margin={0} fontSize='14px' color='#4a5568'>Até:</FormLabel>
                  <Input 
                    type='date' 
                    size='sm' 
                    value={dataFim}
                    readOnly
                    />
                </VStack>
    
              </HStack>
            )
    
          case 'esteMesAteHoje':
    
            return (
              <HStack marginTop={1}>
    
                <VStack spacing={0} alignItems='start'>
                  <FormLabel margin={0} fontSize='14px' color='#4a5568'>De:</FormLabel>
                  <Input 
                    type='date' 
                    size='sm'  
                    value={dataInicio}
                    readOnly
                    />
                </VStack>
                <VStack spacing={0} alignItems='start'>
                  <FormLabel margin={0} fontSize='14px' color='#4a5568'>Até:</FormLabel>
                  <Input 
                    type='date' 
                    size='sm' 
                    value={dataFim}
                    readOnly
                    />
                </VStack>
    
              </HStack>
            )

          case 'UltimoMes':
    
            return (
              <HStack marginTop={1}>
    
                <VStack spacing={0} alignItems='start'>
                  <FormLabel margin={0} fontSize='14px' color='#4a5568'>De:</FormLabel>
                  <Input 
                    type='date' 
                    size='sm' 
                    value={dataInicio}
                    readOnly
                    />
                </VStack>
                <VStack spacing={0} alignItems='start'>
                  <FormLabel margin={0} fontSize='14px' color='#4a5568'>Até:</FormLabel>
                  <Input 
                    type='date' 
                    size='sm'
                    value={dataFim}
                    readOnly 
                    />
                </VStack>
    
              </HStack>
            )
    
          case 'anoPassado':

            return (
              <HStack marginTop={1}>
    
                <VStack spacing={0} alignItems='start'>
                  <FormLabel margin={0} fontSize='14px' color='#4a5568'>De:</FormLabel>
                  <Input 
                    type='date' 
                    size='sm' 
                    value={dataInicio}
                    />
                </VStack>
                <VStack spacing={0} alignItems='start'>
                  <FormLabel margin={0} fontSize='14px' color='#4a5568'>Até:</FormLabel>
                  <Input 
                    type='date' 
                    size='sm' 
                    value={dataFim}
                    />
                </VStack>
    
              </HStack>
            )
        }
    
    }
    



    const handleSelectChange = (selecionado) => {
      setSelectedPeriodData(selecionado);
  
    }
  


    return (
        <HStack alignItems="end">

            <VStack spacing={0} alignItems='start'>

              <FormLabel margin={0} fontWeight='bold' color='#4a5568'>{title}</FormLabel>

              <Select size='sm' onChange={(e) => handleSelectChange(e.target.value)}>
                  <option value='maiorOuIgual'>Maior ou igual a</option>
                  <option value='intervalo'>Intervalo</option>
                  <option value='hoje'>Hoje</option>
                  <option value='ontem'>Ontem</option>
                  <option value='ultimos7dias'>Últimos 7 dias</option>
                  <option value='esteMesAteHoje'>Este mês até hoje</option>
                  <option value='UltimoMes'>Último mês</option>
                  <option value='anoPassado'>Ano passado</option>
              </Select>

            </VStack>


            <Fade in={true}>
                <Box
                rounded='md'
                minW='300px'
                display="flex"
                alignItems="end" 
                >
                {renderSwitchContent(selectedPeriodData)}
                </Box>
            </Fade>

        </HStack>

    )




}

export default InputDataFiltros