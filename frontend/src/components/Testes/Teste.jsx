
import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

const ResponsiveBox = () => {
  return (
    <Box
      width={{ base: "100%", sm: "50%", md: "33%", lg: "25%", xl: "20%" }}
      bg={{ base: "red.500", sm: "green.500", md: "blue.500", lg: "yellow.500", xl: "purple.500" }}
      p={4}
    >
       Caixa Responsiva
    </Box>
  );
};

export default ResponsiveBox;
