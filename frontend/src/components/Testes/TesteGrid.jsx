import React from 'react'

import { Grid, GridItem } from '@chakra-ui/react'

const TesteGrid = () => {
  return (
    <div>
        <Grid templateColumns='repeat(3, 1fr)' gap={1}>
            <GridItem w='100%' h='10' bg='blue.500'
            />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
        </Grid>
    </div>
  )
}

export default TesteGrid