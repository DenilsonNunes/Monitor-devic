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

// Utils
import obterPeriodo from '../../../../utils/obterPeriodoData';
import formataDinheiro from '../../../../utils/formataDinheiro';
import { useEffect, useState } from 'react';
import formataDataDeAAAAMMDDParaDDMMAAAA from '../../../../utils/formataDataDeAAAAMMDDParaDDMMAAAA';





const HomeTopVendasProdutos = () => {

  const { isOpen, onClose, onToggle } = useDisclosure();
  const [searchParams] = useSearchParams();

  const [descrPeriodo, setDescrPeriodo] = useState('');
  const [periodoDataInicioFim, setPeriodoDataInicioFim] = useState('');




  // Extrai os filtros da URL
  const empresa = searchParams.get('empresa');
  const top = searchParams.get('top') || 5;
  const codFunc = searchParams.get('codFuncVnd');
  const vendedor = searchParams.get('vendedor');
  let dataInicio = searchParams.get('dataInicio') || obterPeriodo('ultimoMes').dataInicio;
  let dataFim = searchParams.get('dataFim') || obterPeriodo('ultimoMes').dataFim;
  const undProd = searchParams.get('undProd');
  const calculaPor = searchParams.get('calculaPor') || "V";
  const periodo = searchParams.get('periodo') || obterPeriodo('ultimoMes').descrPeriodo;


  useEffect(() => {


    switch (periodo) {

      case 'hoje':
        setDescrPeriodo('Hoje');
        setPeriodoDataInicioFim({ dataInicio, dataFim })
        break

      case 'maiorOuIgual':
        setDescrPeriodo('Maior ou igual a');
        setPeriodoDataInicioFim({ dataInicio, dataFim })
        break

      case 'ontem':
        console.log('Entrei no ontem')
        setDescrPeriodo('Ontem');
        setPeriodoDataInicioFim({ dataInicio, dataFim })
        break

      case 'ultimos7dias':
        setDescrPeriodo('Últimos 7 dias');
        setPeriodoDataInicioFim({ dataInicio, dataFim })
        break

      case 'esteMesAteHoje':
        setDescrPeriodo('Este mês até hoje');
        setPeriodoDataInicioFim({ dataInicio, dataFim })
        break

      case 'intervalo':
        setDescrPeriodo('Intervalo');
        setPeriodoDataInicioFim({ dataInicio, dataFim })
        break

        
      default:
        const obterPeriodoData = obterPeriodo('ultimoMes')
        dataInicio =  obterPeriodoData.dataInicio
        dataFim = obterPeriodoData.dataFim
        setDescrPeriodo(obterPeriodoData.descrPeriodo);
        setPeriodoDataInicioFim(obterPeriodoData)

    }


  }, [periodo, dataInicio])





  const fetchTopVendasProdutos = async (filters) => {

    const response = await api.get('/vendas/top-vendas-produtos', {

      params: filters,
      timeout: 20000, // Configura 20 segundos de timeout

    });

    console.log('Chamando fetch', response.data)

    return response.data;

  };



  const { data, error, isLoading } = useQuery({

    queryKey: ['TopVendasProdutos', codFunc, top, empresa, dataInicio, dataFim, undProd, calculaPor], // se os valore mudar, busca novamente
    queryFn: () => fetchTopVendasProdutos({
      top,
      empresa,
      codFunc,
      dataInicio,
      dataFim,
      undProd,
      calculaPor
    }),
    enabled: !!top
  });




  if (error) return <PageLayout>Erro ao carregar dados: {error.response.data.message}</PageLayout>;



  if (isLoading) {

    return (

      <PageLayout >
        
        <Box display='flex' justifyContent='center' alignItems='center' h='100%'>

          <Loader />

        </Box>

      </PageLayout>
    ) 

  } 



  return (        
    <PageLayout>

      <Heading size='md' color='#4a5568'>Top vendas produtos</Heading>


        {data && 

          <HStack justifyContent='space-between' marginBottom={2} marginTop={6}>
            
              <VStack spacing={0} alignItems='start'>
                <Text fontSize='sm' fontWeight='bold' color='#4a5568'>Período venda</Text>
                <Text fontSize='sm' color='#4a5568'>
                  {descrPeriodo === 'Maior ou igual a'
                    ? `${descrPeriodo} ${formataDataDeAAAAMMDDParaDDMMAAAA(periodoDataInicioFim.dataInicio)}`
                    : descrPeriodo === 'Ontem'
                      ? `${descrPeriodo} ${formataDataDeAAAAMMDDParaDDMMAAAA(periodoDataInicioFim.dataInicio)}`
                      : descrPeriodo === 'Hoje'
                        ? `${descrPeriodo} ${periodoDataInicioFim.dataInicio}`
                        : `${descrPeriodo} ${periodoDataInicioFim.dataInicio} à ${periodoDataInicioFim.dataFim}`
                  }
                </Text>

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

        }


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
                  <Td fontWeight='bold' textAlign='center'>{item.Ordem}°</Td>
                  <Td textAlign='center'>{item.CodItem}</Td>
                  <Td >{item.DescrItem}</Td>
                  <Td textAlign='center'>{item.UndItem}</Td>
                  <Td fontWeight='bold'  textAlign='center'>{item.QtdItem}</Td>
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

            {data.data.length > 0 ? (
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
            ) : (
              <Tr>
                <Td colSpan="8" textAlign="center" style={{ pointerEvents: 'none' }} color='red'>Nenhum registro encontrado</Td>
              </Tr>
            )}
          </Table>

        </TableContainer>


      {data &&

        <HStack spacing={0} alignItems='start' marginTop={2}>
          <Text fontSize='sm' fontWeight='bold' color='#4a5568'>Vendedor(a):</Text>
          <Text fontSize='sm' color='#4a5568' marginLeft={1}>{vendedor ? vendedor : ' Todos'}</Text>
        </HStack>

      }


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