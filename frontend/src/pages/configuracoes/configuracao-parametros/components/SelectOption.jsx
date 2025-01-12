import { useState, useEffect } from 'react'

import {
    VStack,
    HStack,
    Input,
    Box,
    Select,
    Fade,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from '@chakra-ui/react'

// Utils
import obterAnoAtual from '../../../../utils/obterAnoAtual';




const SelectOption = ({ onDateChange, disableInput, disableInputOption }) => {


    const [date, setDate] = useState('');
    const [ano, setAno] = useState(obterAnoAtual());
    const [numeroDias, setNumeroDias] = useState('');
    const [selectedOption, setSelectdOption] = useState('');




/*--------------------------Eventos dos inputs--------------------------------*/
    const handleDateChange = (value) => {
        setDate(value);
        onDateChange({ type: 'date', value }); // Envia para o pai
    };

    const handleNumeroDiasChange = (value) => {
        setNumeroDias(value);
        onDateChange({ type: 'numero_dias', value }); // Envia para o pai
    };

    const handleAnoChange = (value) => {
        onDateChange({ type: 'ano', value }); // Envia para o pai
    };

/*----------------------------------FIM---------------------------------------*/



/*-----------------------Eventos da opção que selecionei-------------------------*/

    const handleSelectChange = (selecionado) => {

        setSelectdOption(selecionado);

        if (selecionado === 'ano') {

            onDateChange({ type: 'ano', value: ano});

        } else if (selecionado === 'mes_atual') {

            onDateChange({ type: 'mes_atual', value: 'M' });
        }
        
    }

/*-------------------------------------FIM---------------------------------------*/



/*---------------Renderiza a opção que selecionei------------------------*/

    const renderSwitchContent = (selecionado) => {


        switch (selecionado) {

            case 'mes_atual':
                return null
               
            case 'ano':

                return (
                    <>

                        <NumberInput 
                            defaultValue={ano} 
                            min={1900} 
                            max={2999} 
                            size='sm' 
                            width={20} 
                            isDisabled={!disableInputOption}
                            onChange={(valueString) => handleAnoChange(valueString)}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>

                    </>

                )


            case 'data':
                return (
                    <Input 
                        type="date" 
                        size='sm'
                        isDisabled={!disableInputOption}
                        onChange={(e)=> handleDateChange(e.target.value)}  
                    />
                )

            case 'numero_dias':

                return (
                    <Input 
                        type="number" 
                        size='sm' 
                        width={24} 
                        onChange={(e) => handleNumeroDiasChange(e.target.value)} 
                        isDisabled={!disableInputOption}
                    />
                )


        }

    }






    return (
        <HStack alignItems="end">

            <VStack spacing={0} alignItems='start'>

                <Select 
                    placeholder='--selecione--'
                    size='sm' 
                    onChange={(e) => handleSelectChange(e.target.value)}
                    isDisabled={!disableInputOption}
                >
                    <option value='mes_atual'>Mês Atual</option>
                    <option value='ano'>Ano</option>
                    <option value='data'>Data</option>
                    <option value='numero_dias'>Número "X" Dias</option>
                </Select>

            </VStack>


            <Fade in={true}>
                <Box
                    rounded='md'
                    minW='150px'
                    display="flex"
                    alignItems="end"
                >
                    {renderSwitchContent(selectedOption)}
                </Box>
            </Fade>

        </HStack>

    )




}

export default SelectOption