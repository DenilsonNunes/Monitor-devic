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




const SelectOption = ({ onDateChange, disableInputOption, teste }) => {
    
    console.log("Como vem o teste",  teste )

    const [date, setDate] = useState('');
    const [ano, setAno] = useState(obterAnoAtual());
    const [numeroDias, setNumeroDias] = useState('');
    const [selectedOption, setSelectdOption] = useState('');



/*---------------Renderiza a opção que selecionei------------------------*/
    const renderSwitchContent = (option) => {

        switch (option) {

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
                    />
                )

            case 'numero_dias':

                return (
                    <Input 
                        type="number" 
                        size='sm' 
                        width={24} 
                    />
                )


        }

    }


    return (

       <>
        {renderSwitchContent(teste)}
       </>

    )



}

export default SelectOption