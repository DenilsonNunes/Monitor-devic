import { useQuery } from '@tanstack/react-query';



import PageLayout from '../../../../components/PageLayout/PageLayout'

import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Collapse,
  useDisclosure,
  VStack,
  Stack,
  FormLabel,
  CircularProgress,
  HStack,
  Button,
  Flex,
  Text,
  Tooltip,
  IconButton

} from '@chakra-ui/react'

import { LuFilter,  LuFileSearch } from "react-icons/lu";


import ModalFiltroRelatorio from '../Modal/ModalFiltroRelatorio';
import api from '../../../../helpers/api-instance';
import Loader from '../../../../components/Loading/Loader';
import formataDinheiro from '../../../../utils/formataDinheiro';
import DualList from '../../../../components/DualListBox/DualList';




const HomeTopVendasProdutos = () => {

  const { isOpen, onClose, onToggle } = useDisclosure();



  const fetchTopVendasProdutos = async () => {

    const response = await api.get('/vendas/top-vendas-produtos');

    return response.data;

  };



  const { data, error, isLoading } = useQuery({

    queryKey: ['TopVendasProdutos'], // Chave da query
    queryFn: fetchTopVendasProdutos  // Função que busca os dados

  });

  console.log('No fetch', data)


  if (error) return <Box marginTop='200px'>Erro ao carregar dados: {error.response.data.message}</Box>;



  return (
    <PageLayout>
     
      <Heading size='md' color='#4a5568'>Top vendas produtos</Heading>
     
      
      <HStack justifyContent='space-between' marginBottom={2} marginTop={6}>

        <VStack spacing={0} alignItems='start'>
          <Text fontSize='sm' fontWeight='bold' color='#4a5568'>Período venda:</Text>
          <Text fontSize='sm' color='#4a5568'>Última semana(16/05/24 á 20/05/24)</Text>
        </VStack>

        <Button
          size='sm'
          variant='outline'
          borderColor='#B9BBC6'
          colorScheme='gray'
          onClick={onToggle}
        >
          <Flex align="center">
            <LuFilter />
            <Text ml={2}>Filtros</Text>
          </Flex>
        </Button>

      </HStack>

      {isLoading ?

        <Box display='flex' justifyContent='center'>

          <Loader />

        </Box>

        :
        <TableContainer boxShadow='base'>

          <Table>

            <Thead >
              <Tr>
                <Th fontSize='14px'>Top</Th>
                <Th fontSize='14px'>Código</Th>
                <Th fontSize='14px'>Descrição</Th>
                <Th fontSize='14px'>Unidade</Th>
                <Th fontSize='14px'>Quantidade</Th>
                <Th fontSize='14px'>Total Venda (R$)</Th>
                <Th fontSize='14px'>% Período</Th>
                <Th fontSize='14px'>Clientes</Th>
              </Tr>
            </Thead>

            <Tbody>
              {data.map((item, index) => (
                <Tr key={index}>
                  <Td textAlign='center'>{item.Ordem}</Td>
                  <Td textAlign='center'>{item.CodItem}</Td>
                  <Td>{item.DescrItem}</Td>
                  <Td textAlign='center'>{item.UndItem}</Td>
                  <Td textAlign='center'>{item.QtdItem}</Td>
                  <Td textAlign='center'>{formataDinheiro(item.TotalVnd)}</Td>
                  <Td textAlign='center'>10,03</Td>
                  <Td textAlign='center'>
                    <Tooltip label='Clientes do produto' >
                      <IconButton
                        width={25}
                        height={6}
                        fontSize="20px"
                        aria-label="Visualizar"
                        icon={<LuFileSearch/>}                  
                      />
                    </Tooltip>
                  </Td>
                </Tr>
              ))}

            </Tbody>

            <Tfoot>
              <Tr>
                <Th fontSize='14px'>Total</Th>
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <Th fontSize='16px'>256.987,25</Th>
                <Th></Th>
                <Th></Th>

              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>

      }


      <ModalFiltroRelatorio
        isOpen={isOpen}
        onClose={onClose}
      />



    </PageLayout>
  )
}

export default HomeTopVendasProdutos