import {
    VStack,
    FormLabel,
    HStack,
    Input,
    Box,
} from '@chakra-ui/react'





const renderSwitchContent = (selecionado) => {


    switch (selecionado) {

        case 'Intervalo':
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

        case 'MaiorOuIgual':

            return (
                <Input marginTop={6} maxW='150px' type='date' size='sm' />
            )


        case 'Hoje':

            return (
                <Input marginTop={6} value={dataAtualInputDDMMAAAA()} maxW='150px' type='date' size='sm' />
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





const InputDataFiltros = (tipoInputData) => {

    return (
        <Box>

            <Select size='sm' onChange={handleSelectChange}>
                <option value='MaiorOuIgual'>Maior ou igual a</option>
                <option value='Intervalo'>Intevalo</option>
                <option value='Hoje'>Hoje</option>
                <option value='Ult7dias'>Últimos 7 dias</option>
                <option value='EsteMesAteHoje'>Este mês até hoje</option>
                <option value='UltimoMes'>Último mês</option>
                <option value='AnoPassado'>Ano passado</option>
            </Select>

            <Fade in={true}>
                <Box
                rounded='md'
                minW='300px'
                >
                {renderSwitchContent(selectedValue)}

                </Box>
            </Fade>

        </Box>

    )




}

export default InputDataFiltros