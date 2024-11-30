import { useQuery } from '@tanstack/react-query';

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
    IconButton,
    useDisclosure,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightElement
} from '@chakra-ui/react'

import { AddIcon, EditIcon, DeleteIcon, SearchIcon } from '@chakra-ui/icons'

import { useState, useEffect } from 'react';


import api from '../../../helpers/api-instance';



import ModalCadastrarUsuario from './modal/ModalCadastrarUsuario';




const HomeConfigUsuario = () => {

    const { isOpen, onClose, onToggle } = useDisclosure();

    const [searchQuery, setSearchQuery] = useState('');

    const [filteredData, setFilteredData] = useState([]);







    const fetchUsuarios = async (filters) => {

        const response = await api.get('/configuracoes/usuarios')

        console.log('Chamando fetch', response.data)

        return response.data;

    };



    const { data, error, isLoading } = useQuery({

        queryKey: ['Usuarios'], // se os valore mudar, busca novamente
        queryFn: () => fetchUsuarios()

    });



    // Efeito para filtrar os dados sempre que os dados ou o searchQuery mudarem
    useEffect(() => {

        if (data && data.length > 0) {
            const results = data.filter(item =>
                item.NomeFunc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.IdFunc.toLowerCase().includes(searchQuery.toLowerCase())
            );

            setFilteredData(results);
        }

    }, [data, searchQuery]); // Executa quando data ou searchQuery mudar





    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value); // Atualiza o termo da busca
    };




    return (
        <Box>

            <HStack justifyContent='space-between'>

                <HStack spacing={0}>
                    <InputGroup size='sm'>
                      <Input 
                        width={340}
                        borderColor='#B9BBC6'
                        placeholder='Pesquise pelo usuário ou nome do funcionário'
                        onChange={handleSearchQuery}
                      />
                      <InputRightElement>
                        <SearchIcon color='gray.300' />
                      </InputRightElement>
                    </InputGroup>

                </HStack>

                <HStack>

                    <Button
                        leftIcon={<AddIcon />}
                        colorScheme='blue'
                        variant='solid'
                        fontWeight='200'
                        size='sm'
                        onClick={onToggle}
                    >
                        Cadastrar usuário
                    </Button>

                </HStack>

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

                        {filteredData && filteredData.map((item, index) => (

                            <Tr key={index}>
                                <Td textAlign='center'>{item.CodFunc}</Td>
                                <Td>{item.IdFunc}</Td>
                                <Td>{item.NomeFunc}</Td>
                                <Td textAlign='center'>{item.descrAplicacao}</Td>
                                <Td textAlign='center'>1,3,4,5</Td>
                                <Td textAlign='center'>

                                    <Tooltip label='Editar'>
                                        <IconButton
                                            size='xs'
                                            fontSize="14px"
                                            aria-label="Editar"
                                            bg='orange'
                                            icon={<EditIcon/>}
                                            color="white"
                                            _hover={false}
                                        />
                                    </Tooltip>

                                    <Tooltip label='Deletar Usuário'>
                                        <IconButton
                                            size='xs'
                                            marginLeft={2}
                                            fontSize="14px"
                                            aria-label="Editar"
                                            bg='red'
                                            color="white"
                                            _hover={false}
                                            icon={<DeleteIcon />}
                                        />
                                    </Tooltip>

                                </Td>
                            </Tr>


                        ))}


                    </Tbody>

                    <Tfoot>
                        {filteredData.length > 0 ?
                            <Tr>
                                <Th></Th>
                                <Th></Th>
                                <Th></Th>
                                <Th></Th>
                                <Th></Th>
                                <Th></Th>
                            </Tr>
                            :
                            <Tr>
                                <Td colSpan="6" textAlign="center" style={{ pointerEvents: 'none' }} color='red'>Nenhum registro encontrado</Td>
                            </Tr>
                        }

                    </Tfoot>
                </Table>
            </TableContainer>



            <ModalCadastrarUsuario
                isOpen={isOpen}
                onClose={onClose}
            />

        </Box>
    )
}

export default HomeConfigUsuario