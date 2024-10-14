import {
    Box,
  }
  from '@chakra-ui/react'
  
  const PageLayout = ({children}) => {
  
    return (

      <Box  marginTop='60px' marginLeft={5} marginRight={5} >
       
        {children}
  
      </Box>
    )
  
  }
  
  export default PageLayout;