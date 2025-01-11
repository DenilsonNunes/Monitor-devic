import { useState, useEffect } from 'react'

import {
    VStack,
    FormLabel,
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




const SelectOption = ({ onDateChange }) => {


    const [selectedOption, setSelectdOption] = useState('');






    const renderSwitchContent = (selecionado) => {


        switch (selecionado) {

            case 'mes_Atual':

                return (
                    <></>
                )

            case 'ano':

                return (
                    <>

                        <NumberInput defaultValue={2024} min={1900} max={2999} size='sm' width={20} >
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
                    <Input type="date" size='sm' />
                )

            case 'numero_dias':

                return (
                    <Input type="number" size='sm' />
                )


        }

    }




    const handleSelectChange = (selecionado) => {
        setSelectdOption(selecionado);

    }



    return (
        <HStack alignItems="end">

            <VStack spacing={0} alignItems='start'>

                <Select 
                    size='sm' 
                    onChange={(e) => handleSelectChange(e.target.value)}
                    placeholder='--selecione--'
                >
                    <option value='mesAtual'>Mês Atual</option>
                    <option value='ano'>Ano</option>
                    <option value='data'>Data</option>
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