import { useEffect, useState } from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Text,
    TableContainer,
    Flex,
    Checkbox,
    Spinner,
    IconButton,
    useDisclosure,
    Box,
    FormControl,
    Stack,
    FormLabel,
    Input,
    Button,
    useToast,
    Menu,
    MenuButton,
    MenuList,
    MenuItem 

} from '@chakra-ui/react'

import { SearchIcon, EmailIcon, ChevronDownIcon } from '@chakra-ui/icons';


import api from '../../../helpers/api-instance'


import dataAtualMMDDAAAA from '../../../utils/dataAtualDDMMAAAA';

import ModalEnviarEmail from '../ModalEnviarEmail';
import ModalProdutos from '../ModalProdutos';




const ContasAreceber = () => {


    const toast = useToast();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState();

    // Para o Loading na tabela
    const [isLoading, setIsLoading] = useState(false);

    // Para pesquisa contas a receber
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');


    const [selectedItem, setSelectedItem] = useState(false)
    const [selectedItemEnviarEmail, setSelectedItemEnviarEmail] = useState(false)

    




    useEffect(() => {


        setDataInicio(dataAtualMMDDAAAA);
        setDataFim(dataAtualMMDDAAAA);
        setIsLoading(true);



        api.get('financeiro/contas-a-receber')

            .then((response) => {

                console.log('Verificando chamado do effect');


                setData(response.data);
                setIsLoading(false);


            })
            .catch((error) => {


                setIsLoading(false);

                console.log('Tela contas a receber: Erro ao buscar dados: ', error);
            });

    }, []);



    const handleVisualizarProdutos = (item) => {

        setSelectedItem(item);
        onOpen();

    };

    const handleEnviarEmail = (item) => {
        setSelectedItemEnviarEmail(item);
        onOpen();
    }

    const handleBuscarDados = (event) => {

        event.preventDefault();



        setIsLoading(true);

        api.get('financeiro/contas-a-receber', {
            params: {
                dataInicio,
                dataFim
            }
        })
            .then((response) => {


                setData(response.data);
                setIsLoading(false);



            })
            .catch((error) => {
                console.log('Erro ao buscar dados: ', error);
                setIsLoading(false);

            });


    }


    return (

        <Flex justifyContent='center' padding={5} flexDirection='column'>

            {/* Formulário Pesquisa*/}
            <Box>

                <form onSubmit={handleBuscarDados}>
                    <FormControl px={30} p="2" width="100%" borderWidth="1px" borderColor="#cbd5e1" borderRadius='5px' marginTop={10}>

                        <Text fontSize='3xl'>Período</Text>

                        <Stack direction='row' width='100%' alignItems='center' marginTop={5}>

                            <Stack direction='row' alignItems='end' >

                                <FormLabel>De:</FormLabel>
                                <Input type='date' border='1px' borderColor='#cbd5e1'  width="10rem" height={8}
                         
                                    value={dataInicio}
                                    onChange={(e) => setDataInicio(e.target.value)}
                                    required
                                />

                                <FormLabel>Até:</FormLabel>
                                <Input type='date' border='1px' borderColor='#cbd5e1' width="10rem" height={8}
                                    value={dataFim}
                                    onChange={(e) => setDataFim(e.target.value)}
                                    required
                                />

                            </Stack>


                            <Button size='md' colorScheme='blue' isDisabled={isLoading} height={8} onClick={handleBuscarDados}>Buscar</Button>

                        </Stack>


                    </FormControl>
                </form>

            </Box>

            {/* Deixa carregando até retornar os dados */}
            {isLoading ? (

                <Flex direction='column' alignItems='center' width='100%' marginTop='10%'>

                    <Spinner
                        thickness='8px'
                        speed='0.85s'
                        emptyColor='gray.200'
                        color='blue.500'
                        width='150px'
                        height='150px'

                    />
                    <Text fontSize='3xl'>Carregando...</Text>

                </Flex>


            ) : (

                <Box>
                    {/* Tabela contas a Recebr */}
                    <TableContainer border='1px' borderColor='#cbd5e1' marginTop={2} borderRadius={5}>
                        <Table variant="unstyled" >

                            <Thead height='50px'  >
                                <Tr >
                                    <Th>
                                        <Checkbox border='0.3px' borderColor='#cbd5e1' />
                                    </Th>
                                    <Th fontSize='md'>Data Lcto</Th>
                                    <Th fontSize='md'>Nr Lcto</Th>
                                    <Th fontSize='md'>Nr Documento</Th>
                                    <Th fontSize='md'>
                                        Cliente
                                        <Menu>
                                            <MenuButton
                                            as={IconButton}
                                            aria-label="Options"
                                            icon={<ChevronDownIcon />}
                                            size="sm"
                                            ml={2}
                                            />
                                            <MenuList px={2}>
                                            <Input type='text' padding={0} height={6}/>
                                                {data && data.map((item) => (
                                                    <Box display='flex'>
                                                        <Checkbox border='0.3px' borderColor='#cbd5e1' />
                                                        <MenuItem width={60}>{item.NomeFantCli}</MenuItem>
                                                    </Box>
                                                ))}
                                            </MenuList>
                                        </Menu>
                                    </Th>
                                    <Th fontSize='md'>Valor</Th>
                                    <Th fontSize='md'>Parcela</Th>
                                    <Th fontSize='md'>Data Vcto</Th>
                                    <Th fontSize='md'>Ações</Th>
                                </Tr>
                            </Thead>

                            <Tbody>

                                {data && data.map((item) => (
                                    <Tr key={item.NrDocCtRec}>
                                        <Td py={0} >
                                            <Checkbox border='0.3px' borderColor='#cbd5e1' />
                                        </Td>
                                        <Td py={0} >{item.DtLctoCtRec}</Td>
                                        <Td py={0} >{item.NrLctoCtRec}</Td>
                                        <Td py={0} >{item.CodEspDocCtRec} {item.NrDocCtRec}</Td>
                                        <Td py={0} >{item.NomeFantCli}</Td>
                                        <Td py={0} >R$ {item.ValCtRec}</Td>
                                        <Td py={0} >{item.NrParcDocCtRec} / {item.TotParcDocCtRec}</Td>
                                        <Td py={0} >{item.DtVctoCtRec}</Td>
                                        <Td py={0} >
                                            <IconButton my={1}
                                                aria-label="Visualizar"
                                                icon={<SearchIcon />}
                                                onClick={() => handleVisualizarProdutos(item)}

                                            />

                                            <IconButton marginLeft={1} my={1} padding={0}
                                                aria-label="Enviar"
                                                icon={<EmailIcon />}
                                                onClick={() => handleEnviarEmail(item.NomeFantCli)}
                                            />
                                        </Td>
                                    </Tr>
                                ))}

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
                                    <Th></Th>
                                </Tr>
                            </Tfoot>

                        </Table>
                    </TableContainer>

                </Box>

            )}

            {selectedItem && (
                <ModalProdutos
                    codEmpr='1'
                    DtLctoCtRec='2'
                    NrLctoCtRec='3'
                    isOpen={isOpen}
                    onClose={onClose}
                />
            )}

            {selectedItemEnviarEmail && (
                <ModalEnviarEmail
                    codEmpr='1'
                    DtLctoCtRec='2'
                    NrLctoCtRec='3'
                    isOpen={isOpen}
                    onClose={onClose}
                />
            )}

        </Flex>
    )
}

export default ContasAreceber



/*

{data && data.map((item) => (
    <Tr>
        <Td py={0} >
            <Checkbox border='0.3px' borderColor='#cbd5e1' />
        </Td>
        <Td py={0} >{item.DtLctoCtRec}</Td>
        <Td py={0} >{item.NrLctoCtRec}</Td>
        <Td py={0} >{item.CodEspDocCtRec} {item.NrDocCtRec}</Td>
        <Td py={0} >{item.NomeFantCli}</Td>
        <Td py={0} >{item.ValCtRec}</Td>
        <Td py={0} >{item.NrParcDocCtRec} / {item.TotParcDocCtRec}</Td>
        <Td py={0} >{item.DtVctoCtRec}</Td>
        <Td py={0} >
            <IconButton
                aria-label="Visualizar"
                icon={<SearchIcon />}
                onClick={()=> handleVisualizarProdutos(item)}

            />
           

            <IconButton marginLeft={1}
                aria-label="Enviar"
                icon={<EmailIcon />}
            //onClick={() => handleView(item.id)}
            />

        </Td>


    </Tr>
    
))}

*/