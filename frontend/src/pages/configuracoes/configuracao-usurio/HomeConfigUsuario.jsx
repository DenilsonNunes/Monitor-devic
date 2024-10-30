import {
    Tabs,
    Tfoot,
    Td,
    Tbody,
    Th,
    Tr,
    Box,
    Thead,
    TableContainer,
    HStack,
    Button,
    Table,
    Tooltip,
    IconButton
} from '@chakra-ui/react'


import { AddIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'




const HomeConfigUsuario = () => {
    return (
        <Box>
            <HStack justifyContent='end'>
                <Button leftIcon={<AddIcon/>} colorScheme='blue' variant='solid' fontWeight='200' size='sm'>
                    Cadastrar usuário
                </Button>
            </HStack>



            <TableContainer boxShadow='base' marginTop={5}>

                <Table>

                    <Thead >
                        <Tr>
                            <Th fontSize='14px'>Codigo</Th>
                            <Th fontSize='14px'>Usuário</Th>
                            <Th fontSize='14px'>Nome Funcionário</Th>
                            <Th fontSize='14px'>Tela Inicial</Th>
                            <Th fontSize='14px'>Acesso empresa(s)</Th>
                            <Th fontSize='14px'>Ações</Th>
                        </Tr>
                    </Thead>

                    <Tbody>

                        <Tr>
                            <Td textAlign='center'>00042</Td>
                            <Td textAlign='center'>Denilson</Td>
                            <Td textAlign='center'>Denilson Nunes Barauna</Td>
                            <Td textAlign='center'>Pagina Inicial</Td>
                            <Td textAlign='center'>1,3,4,5</Td>
                            <Td textAlign='center'>

                                <Tooltip label='Editar'>
                                    <IconButton
                                        width={25}
                                        height={6}
                                        fontSize="20px"
                                        aria-label="Editar"                            
                                        icon={<EditIcon />}
                                    />
                                </Tooltip>

                                <Tooltip label='Deletar Usuário'>
                                    <IconButton
                                        width={25}
                                        height={6}
                                        marginLeft={2}
                                        fontSize="20px"
                                        aria-label="Editar"
                                        bg='#f87171'
                                        icon={<DeleteIcon />}
                                    />
                                </Tooltip>
         
                            </Td>
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
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default HomeConfigUsuario