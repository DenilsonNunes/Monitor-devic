import {Box, Spinner } from '@chakra-ui/react'

const Loader = () => {
    return (
        <Box display='flex' justifyContent='center' border='1px' borderColor='red' width="100vh">

            <Spinner
                thickness='6px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                width="120px"
                height="120px"
            />

        </Box>
    )
}

export default Loader