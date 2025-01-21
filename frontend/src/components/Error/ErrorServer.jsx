import {Text, VStack } from '@chakra-ui/react'

const ErrorServer = ({mensagem}) => {
    return (
        <VStack>
    
            <Text color='red' fontSize='xl'>{mensagem}</Text>
        
        </VStack>
    )
}

export default ErrorServer