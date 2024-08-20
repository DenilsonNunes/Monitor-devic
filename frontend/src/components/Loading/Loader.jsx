import {Box, Spinner } from '@chakra-ui/react'

const Loader = () => {
    return (
        <Spinner
            thickness='7px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            width="100px"
            height="100px"
        />
       
    )
}

export default Loader