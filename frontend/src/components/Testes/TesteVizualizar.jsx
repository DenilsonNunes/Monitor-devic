

import React from 'react';
import { ChakraProvider, Box, Table, Thead, Tbody, Tr, Th, Td, Button, IconButton } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';

const data = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  // Adicione mais dados conforme necessário
];

const TesteVizualizar = () => {
  const handleView = (id) => {
    alert(`Visualizar item com ID: ${id}`);
    // Aqui você pode adicionar a lógica para visualizar o item
  };

  return (
    <ChakraProvider>
      <Box maxW="800px" mx="auto" mt="10">
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{item.email}</Td>
                <Td>
                  <IconButton
                    aria-label="Visualizar"
                    icon={<ViewIcon />}
                    onClick={() => handleView(item.id)}
                  />
                    <IconButton marginLeft={1}
                    aria-label="Visualizar"
                    icon={<ViewIcon />}
                    onClick={() => handleView(item.id)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </ChakraProvider>
  );
};

export default TesteVizualizar;
