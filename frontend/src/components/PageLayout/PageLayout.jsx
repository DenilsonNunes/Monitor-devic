import {
    Box,
  }
  from '@chakra-ui/react'
  
  const PageLayout = ({children}) => {
  
    return (

      <Box  marginTop='60px' marginLeft={2} marginRight={2} >
       
        {children}
  
      </Box>
    )
  
  }
  
  export default PageLayout;