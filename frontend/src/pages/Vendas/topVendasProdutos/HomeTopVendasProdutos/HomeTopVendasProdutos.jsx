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
  TableContainer,
  Box,
  useDisclosure,
  VStack,
  HStack,
  Button,
  Flex,
  Text,
  Tooltip,
  IconButton

} from '@chakra-ui/react'

import { useSearchParams } from "react-router-dom";

import { LuFilter, LuFileSearch } from "react-icons/lu";


import ModalFiltroRelatorio from '../Modal/ModalFiltroRelatorio';
import api from '../../../../helpers/api-instance';
import Loader from '../../../../components/Loading/Loader';
import formataDinheiro from '../../../../utils/formataDinheiro';
import DualList from '../../../../components/DualListBox/DualList';




const HomeTopVendasProdutos = () => {

  const { isOpen, onClose, onToggle } = useDisclosure();

  const [searchParams] = useSearchParams();

  // Extrai os filtros da URL
  const empresa = searchParams.get('empresa');
  const top = searchParams.get('top') || 5;
  const codFunc = searchParams.get('CodFunc');
  const dataInicio = searchParams.get('dataInicio') || '2024-08-01';
  const dataFim = searchParams.get('dataFim') || '2999-01-01';
  const undProd = searchParams.get('undProd');




  const fetchTopVendasProdutos = async (filters) => {

    console.log('Dentro do Fetch', filters)

    const response = await api.get('/vendas/top-vendas-produtos', {

      params: filters

    });

    return response.data;

  };



  const { data, error, isLoading } = useQuery({

    queryKey: ['TopVendasProdutos',codFunc, top, empresa, dataInicio, dataFim, undProd], // se os valore mudar, busca novamente
    queryFn: () => fetchTopVendasProdutos({
      top,
      empresa, 
      codFunc,
      dataInicio,
      dataFim,
      undProd
    }),
    enabled: !!top
  });

  console.log('Dados recebendo ?', data)


  if (error) return <Box marginTop='200px'>Erro ao carregar dados: {error.response.data.message}</Box>;


  return (
    <PageLayout>

      <Heading size='md' color='#4a5568'>Top vendas produtos</Heading>


      <HStack justifyContent='space-between' marginBottom={2} marginTop={6}>

        <VStack spacing={0} alignItems='start'>
          <Text fontSize='sm' fontWeight='bold' color='#4a5568'>Período venda:</Text>
          <Text fontSize='sm' color='#4a5568'>Última semana({dataInicio} á {dataInicio})</Text>
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
              {data && data.data.map((item, index) => (
                <Tr key={index}>
                  <Td textAlign='center'>{item.Ordem}</Td>
                  <Td textAlign='center'>{item.CodItem}</Td>
                  <Td>{item.DescrItem}</Td>
                  <Td textAlign='center'>{item.UndItem}</Td>
                  <Td textAlign='center'>{item.QtdItem}</Td>
                  <Td textAlign='center' color='green' fontWeight='bold'>{formataDinheiro(item.TotalVnd)}</Td>
                  <Td textAlign='center'>10,03</Td>
                  <Td textAlign='center'>
                    <Tooltip label={`Cliente do produto ${item.CodItem}`} >
                      <IconButton
                        width={25}
                        height={6}
                        fontSize="20px"
                        aria-label="Visualizar"
                        icon={<LuFileSearch />}
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

      <HStack spacing={0} alignItems='start' marginTop={2}>
        <Text fontSize='sm' fontWeight='bold' color='#4a5568'>Vendedor:</Text>
        <Text fontSize='sm' color='#4a5568'>Todos</Text>
      </HStack>

      {data &&
        <ModalFiltroRelatorio
          isOpen={isOpen}
          onClose={onClose}
          dataFiltroRel={data && data.dataFiltroRel}
        />
      }



    </PageLayout>
  )
}

export default HomeTopVendasProdutos