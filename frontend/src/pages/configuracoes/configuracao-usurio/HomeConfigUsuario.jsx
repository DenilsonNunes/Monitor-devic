import { useQuery } from '@tanstack/react-query';

import { useSearchParams } from "react-router-dom";

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
    Text,
    Select,
    InputRightElement,
    Tag
} from '@chakra-ui/react'

import { AddIcon, EditIcon, DeleteIcon, SearchIcon, ChevronRightIcon, ChevronLeftIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

import { useState, useEffect } from 'react';


import api from '../../../helpers/api-instance';



// Modais
import ModalCadastrarUsuario from './modal/ModalCadastrarUsuario';
import ModalEditarUsuario from './modal/ModalEditarUsuario';
import ModalDeletarUsuario from './modal/ModalDeletarUsuario';
import Pagination from '../../../components/Pagination/Pagination';




const HomeConfigUsuario = () => {


    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [usuario, setUsuario] = useState(null);


    const { isOpen: isCreateUserOpen, onOpen: onCreateUserOpen, onClose: onCreateUserClose } = useDisclosure();
    const { isOpen: isDeleteUserOpen, onOpen: onDeleteUserOpen, onClose: onDeleteUserClose } = useDisclosure();
    const { isOpen: isEditUserOpen, onOpen: onEditUserOpen, onClose: onEditUserClose } = useDisclosure();


    const [searchParams] = useSearchParams();


    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1

    console.log('qual pagina pega do parametro', page)


    const fetchUsuarios = async (filters) => {

        const response = await api.get(`/configuracoes/usuarios?page=1&pageSize=3`)

        console.log('Chamando fetch', response.data)

        return response.data;

    };



    const { data, error, isLoading } = useQuery({

        queryKey: ['Usuarios'], // se os valore mudar, busca novamente
        queryFn: () => fetchUsuarios()

    });



    // Efeito para filtrar os dados sempre que os dados ou o searchQuery mudarem
    useEffect(() => {

        if (data && data.users.length > 0) {
            const results = data.users.filter(item =>
                item.NomeFunc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.IdFunc.toLowerCase().includes(searchQuery.toLowerCase())
            );

            setFilteredData(results);
        }

    }, [data, searchQuery]); // Executa quando data ou searchQuery mudar





    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value); // Atualiza o termo da busca
    };


    const handleEditarAcessoUsuario = (usuario) => {

        setUsuario(usuario);
        onEditUserOpen();

    }

    const handleDeletarUsuario = (usuario) => {

        setUsuario(usuario);
        onDeleteUserOpen();
    };





    return (
        <Box>

            <HStack justifyContent='space-between'>

                <HStack spacing={0}>

                    <Box>

                        <InputGroup size='sm'>
                            <Input
                                width={340}
                                placeholder='Pesquise pelo usuário ou nome do funcionário'
                                onChange={handleSearchQuery}
                            />
                            <InputRightElement>
                                <SearchIcon color='gray.300' />
                            </InputRightElement>
                        </InputGroup>

                    </Box>

                    <HStack marginLeft={2}>

                        <Text fontSize='14px' whiteSpace="nowrap">Mostrar Inativos</Text>
                        <Select
                            size='sm'
                            marginLeft={2}
                        >
                            <option value='N'>Não</option>
                            <option value='S'>Sim</option>
                        </Select>

                    </HStack>


                </HStack>

                <HStack>

                    <Button
                        leftIcon={<AddIcon />}
                        colorScheme='blue'
                        variant='solid'
                        fontWeight='200'
                        size='sm'
                        boxShadow='base'
                        onClick={onCreateUserOpen}
                    >
                        Cadastrar usuário
                    </Button>

                </HStack>

            </HStack>


            <TableContainer
                boxShadow='base'
                marginTop={5}
                maxH='500px'
                overflowY='scroll'
            >

                <Table>

                    <Thead >
                        <Tr>
                            <Th fontSize='14px'>Codigo</Th>
                            <Th fontSize='14px'>status</Th>
                            <Th fontSize='14px'>Usuário</Th>
                            <Th fontSize='14px'>Nome Funcionário</Th>
                            <Th fontSize='14px'>Tela Inicial</Th>
                            <Th fontSize='14px'>Acesso empresa(s)</Th>
                            <Th fontSize='14px'>Ações</Th>
                        </Tr>
                    </Thead>

                    <Tbody>

                        {filteredData && filteredData.map((item, index) => (

                            <Tr key={index} >
                                <Td textAlign='center'>{item.CodFunc}</Td>
                                <Td textAlign='center'>
                                    <Tag colorScheme={item.AtivoBlue === 'N' ? 'red' : 'green'} fontWeight='bold'>
                                        {item.AtivoBlue === 'N' ? 'INATIVO' : 'ATIVO'}
                                    </Tag>
                                </Td>
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
                                            icon={<EditIcon />}
                                            color="white"
                                            _hover={false}
                                            onClick={() => handleEditarAcessoUsuario(item)}

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
                                            onClick={() => handleDeletarUsuario(item)}
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
                                <Th></Th>
                            </Tr>
                            :
                            <Tr>
                                <Td colSpan="7" textAlign="center" style={{ pointerEvents: 'none' }} color='red'>Nenhum registro encontrado</Td>
                            </Tr>
                        }

                    </Tfoot>
                </Table>
            </TableContainer>



            <HStack marginTop={5} justifyContent='space-between'>

                {data && <Pagination pages={data.lastPage} currentPage={data.currentPage}/> }

            </HStack>



            {data &&
                (
                    <>

                        <ModalCadastrarUsuario
                            isOpen={isCreateUserOpen}
                            onClose={onCreateUserClose}
                        />

                        <ModalEditarUsuario
                            isOpen={isEditUserOpen}
                            onClose={onEditUserClose}
                            usuario={usuario}
                        />

                        <ModalDeletarUsuario
                            isOpen={isDeleteUserOpen}
                            onClose={onDeleteUserClose}
                            usuario={usuario}
                        />


                    </>
                )

            }

        </Box>
    )
}

export default HomeConfigUsuario