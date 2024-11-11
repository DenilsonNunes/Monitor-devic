import {Spinner, Text, VStack } from '@chakra-ui/react'

const Loader = () => {
    return (
        <VStack>
        
            <Spinner
                thickness='7px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                width="100px"
                height="100px"
            />

            <Text>Carregando...</Text>
        
        </VStack>
    )
}

export default Loader