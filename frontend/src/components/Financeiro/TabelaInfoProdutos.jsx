import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Checkbox,
    IconButton,

} from '@chakra-ui/react'



import React from 'react'

const TabelaInfoProdutos = () => {
    return (
        <TableContainer border='1px' borderColor='#cbd5e1'>

            <Table variant="unstyled" size='sm'>

                <Thead height='20px'>
                    <Tr >
                        <Th fontSize='sm' >Código</Th>
                        <Th fontSize='sm' padding='0'>Descrição</Th>
                        <Th fontSize='sm' padding='0'>Und</Th>
                        <Th fontSize='sm' padding='0'>Qtd</Th>
                        <Th fontSize='sm' padding='0'>Valor</Th>
                        <Th fontSize='sm' padding='0'>Preço Unit</Th>
                        <Th fontSize='sm' padding='0'>Desc. Total</Th>
                        <Th fontSize='sm' padding='0'>Valor Total</Th>
                    </Tr>
                </Thead>

                <Tbody>

                    <Tr>
                        <Td>2435</Td>
                        <Td padding='0'>item.NrLctoCtRec</Td>
                        <Td padding='0'>item.CodEspDocCtRec</Td>
                        <Td padding='0'>item.NomeFantCli</Td>
                        <Td padding='0'>item.ValCtRec</Td>
                        <Td padding='0'>R$ 49.90</Td>
                        <Td padding='0'>R$ 25</Td>
                        <Td padding='0'>R$ 400</Td>
                    </Tr>
                </Tbody>

                <Tfoot>
                    <Tr >
                        <Th fontSize="15px">Total</Th>
                        <Th></Th>
                        <Th></Th>
                        <Th></Th>
                        <Th></Th>
                        <Th fontSize="15px" isNumeric>R$ 4.000,00</Th>
                        <Th></Th>
                        <Th></Th>
                    </Tr>
                </Tfoot>

            </Table>
        </TableContainer>
    )
}

export default TabelaInfoProdutos


