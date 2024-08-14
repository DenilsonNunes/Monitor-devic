import {
    Box,
    TableContainer,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Checkbox,
    IconButton
} from '@chakra-ui/react'

import { SearchIcon, EmailIcon, PlusSquareIcon } from '@chakra-ui/icons';

const ClientesEmDebito = () => {
    return (

        <Box marginTop='60px' border='1px' borderColor='red'>

            <h2>Clientes em Débito</h2>

            <TableContainer >
                <Table size='md'>
                    <Thead>
                        <Tr>
                            <Th>
                                <Checkbox border='0.3px' borderColor='#cbd5e1' />
                            </Th>
                            <Th>Cliente</Th>
                            <Th isNumeric>Total Vencido</Th>
                            <Th isNumeric>Total a Vencer</Th>
                            <Th isNumeric>Total DE Débito</Th>
                            <Th isNumeric>Multas e Juros</Th>
                            <Th isNumeric>Vencido + Correção</Th>
                            <Th isNumeric>Total Acumulado</Th>
                            <Th isNumeric>Qtd de Títulos</Th>
                            <Th isNumeric>Mais Antigo</Th>
                            <Th isNumeric>Dias Vencido</Th>
                            <Th>Ações</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        <Tr>
                            <Td py={0} >
                                <Checkbox border='0.3px' borderColor='#cbd5e1' />
                            </Td>
                            <Td border='1px' borderColor='red'>Cliente teste</Td>
                            <Td border='1px' borderColor='red' isNumeric>150.000.000,00</Td>
                            <Td isNumeric>0</Td>
                            <Td isNumeric>1550</Td>
                            <Td isNumeric>50</Td>
                            <Td isNumeric>1550</Td>
                            <Td isNumeric>1550</Td>
                            <Td isNumeric>3</Td>
                            <Td>15/08/2022</Td>
                            <Td isNumeric>225</Td>
                            <Td>
                                <IconButton my={1}
                                    aria-label="Visualizar"
                                    icon={<SearchIcon />}
                                />
                                <IconButton my={1}
                                    aria-label="Enviar Email"
                                    icon={<EmailIcon />}
                                />
                                <IconButton my={1}
                                    aria-label="Visualizar"
                                    icon={<PlusSquareIcon/>}
                                />
                            </Td>


                        </Tr>

                        <Tr>
                            <Td py={0} >
                                <Checkbox border='0.3px' borderColor='#cbd5e1' />
                            </Td>
                            <Td>ELETRICA PARANA - COUTO MAGALHAES</Td>
                            <Td isNumeric>150.000.000,00</Td>
                            <Td isNumeric>0</Td>
                            <Td isNumeric>1550</Td>
                            <Td isNumeric>50</Td>
                            <Td isNumeric>1550</Td>
                            <Td isNumeric>1550</Td>
                            <Td isNumeric>3</Td>
                            <Td>15/08/2022</Td>
                            <Td isNumeric>225</Td>

                        </Tr>
                        <Tr>
                            <Td py={0} >
                                <Checkbox border='0.3px' borderColor='#cbd5e1' />
                            </Td>
                            <Td>Cliente teste</Td>
                            <Td isNumeric>150.000.000,00</Td>
                            <Td isNumeric>0</Td>
                            <Td isNumeric>1550</Td>
                            <Td isNumeric>50</Td>
                            <Td isNumeric>1550</Td>
                            <Td isNumeric>1550</Td>
                            <Td isNumeric>3</Td>
                            <Td>15/08/2022</Td>
                            <Td isNumeric>225</Td>
                        </Tr>
                    </Tbody>

                    <Tfoot>
                        <Tr>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>


        </Box>
    )
}

export default ClientesEmDebito