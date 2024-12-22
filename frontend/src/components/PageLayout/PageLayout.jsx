import {
    Box,
  }
  from '@chakra-ui/react'
  
  const PageLayout = ({children}) => {
  
    return (

      <Box  
        marginTop='80px' 
        marginLeft={2} 
        marginRight={2} 
        height="calc(100vh - 60px)"
        >
       
        {children}
  
      </Box>
    )
  
  }
  
  export default PageLayout;