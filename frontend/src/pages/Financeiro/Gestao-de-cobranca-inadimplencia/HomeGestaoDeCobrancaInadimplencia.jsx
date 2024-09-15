import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { LuHistory, LuFilter } from "react-icons/lu";


//CSS
import styles from './ClientesEmDebito.module.css'

import {
    Flex,
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
    IconButton,
    Tag,
    TagLabel,
    Tooltip,
    Input,
    Button,
    Stack,
    Heading,
    VStack,
    Text,
    Select,
    Icon,
    useDisclosure,
    HStack
} from '@chakra-ui/react'

import { SearchIcon, EmailIcon, PlusSquareIcon, PhoneIcon, SmallAddIcon } from '@chakra-ui/icons';


// Instancia API
import api from '../../../helpers/api-instance'

//Formats
import formataData from '../../../utils/formataData';

// Modal
import ModalHistoricoDeCobranca from './Modal/ModalHistoricoDeCobranca/ModalHistoricoDeCobranca';
import ModalTitulosEmDebito from './Modal/ModalTitulosDeClienteEmDebito/ModalTitulosDeClienteEmDebito';
import ModalRegistrarCobranca from './Modal/ModalRegistrarCobranca/ModalRegistrarCobranca';
import Loader from '../../../components/Loading/Loader';


// Utils
import formataDinheiro from '../../../utils/formataDinheiro';
import MenuDrawer from './MenuDrawer/MenuDrawer';




const ClientesEmDebito = () => {

    const [data, setData] = useState();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isOpenVerTitulos, setIsOpenVerTitulos] = useState(false);
    const [isOpenHistoricoCobranca, setIsOpenHistoricoCobranca] = useState(false);
    const [isOpenRegistrarCobranca, setIsOpenRegistrarCobranca] = useState(false);


    const onCloseVerTitulos = () => setIsOpenVerTitulos(false);
    const onCloseHistoricoCobranca = () => setIsOpenHistoricoCobranca(false);
    const onCloseRegistrarCobranca = () => setIsOpenRegistrarCobranca(false);


    const [titulosDoCliente, setTitulosDoCliente] = useState("");
    const [historicoDoCliente, setHistoricoDoCliente] = useState("");

    const [buscaRapida, setBuscaRapida] = useState("");
    const [qtdVisualizar, setQtdVisualizar] = useState("");
    const [loading, setLoading] = useState(false);
    const [msgInfo, setMsgInfo] = useState(false);
    const [error, setError] = useState(null);



    const [searchParams, setSearchParams] = useSearchParams();



    useEffect(() => {

        // Ao carregar o componete limpa a query params da url
        setSearchParams({});

        // Exibe carregando ao renderizar o componete
        setLoading(true);

        setTimeout(() => {

            api.get('financeiro/gestao-de-cobranca/clientes-em-debito')

                .then((response) => {
                    console.log(response.data);
                    setData(response.data);
                    setLoading(false);

                })
                .catch((error) => {
                    if (error.message === 'Network Error') {

                        setError("Não foi possível se conectar ao servidor. Verifique sua conexão ou tente novamente mais tarde.");
                        setLoading(false);

                    } else {

                        setError(error.message);
                        setLoading(false);

                    }

                });


        }, 1000);


    }, []);


    const handleVisualizarTitulos = (item) => {

        setIsOpenVerTitulos(true);

        setTitulosDoCliente(item)

        onOpen();

    };

    const handleVisualizarHistoricoCobranca = (item) => {

        setIsOpenHistoricoCobranca(true)

        setHistoricoDoCliente(item)

        onOpen();

    }

    const handleRegistrarCobranca = (item) => {

        setIsOpenRegistrarCobranca(true);

        setTitulosDoCliente(item)


        onOpen();
    }


    const handleBuscaRapida = (event) => {

        event.preventDefault();

        // Define mensagem "Nenhum resultado encontrado como falso"
        setMsgInfo(false);

        //Exibe carregando ao renderizar o componete
        setLoading(true);

        setTimeout(() => {

            api.get(`financeiro/gestao-de-cobranca/clientes-em-debito?nome=${buscaRapida}`)

                .then((response) => {

                    if (response.data.length === 0) {

                        setMsgInfo(true)

                    }
                    setData(response.data);
                    setLoading(false);

                })
                .catch((error) => {

                    setLoading(false);
                    console.log('Houve um erro', error);
                });


        }, 1000);


        setSearchParams({ search: buscaRapida })

    };

    const handleQtdVisualizar = (event) => {

        console.log('quantidade visualizar', event.target.value)

    };



    return (

        <Box marginTop='60px' marginX={2} >


            <Text fontSize='xl' marginTop={16}>Gestão de Cobrança / Inadimplencia</Text>
            <MenuDrawer/>

            <Box display='flex' justifyContent='space-between' marginTop={5} >

                <Stack direction='row'>

                    <form style={{ display: 'flex', alignItems: 'center' }} onSubmit={handleBuscaRapida}>
                        <Input
                            width={300}
                            size='sm'
                            variant='outline'
                            placeholder='Pesquise por código ou nome do cliente'
                            onChange={(e) => setBuscaRapida(e.target.value)}
                        />

                        <Button
                            size='sm'
                            type='submit'
                            colorScheme='blue'
                            borderRadius={0}
                        >
                            Buscar
                        </Button>



                    </form>

                    <form style={{ display: 'flex', alignItems: 'center' }} onSubmit={handleQtdVisualizar}>
                        <Text fontSize='md'>Visualizar</Text>
                        <Select size='sm' marginLeft={2}
                            value={qtdVisualizar}
                            onChange={(e) => handleQtdVisualizar(e)}
                        >
                            <option value='10'>10</option>
                            <option value='20'>20</option>
                            <option value='30'>30</option>
                            <option value='T'>Todos</option>
                        </Select>
                    </form>


                    <form style={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            size='sm'
                            type='submit'
                            colorScheme='gray'
                        >
                            <Flex align="center">
                                <LuFilter />
                                <Text ml={2}>Filtros</Text>
                            </Flex>
                        </Button>
                    </form>

                </Stack>




                <Box>
                    <h1>ações em lote</h1>
                    <Tooltip label='Enviar email para os títulos selecionados'>
                        <IconButton
                            marginLeft={1}
                            width={25}
                            height={5}
                            aria-label="Enviar Email"
                            icon={<EmailIcon />}
                        />
                    </Tooltip>
                </Box>

            </Box>



            <TableContainer
                marginTop={2}
                maxHeight="700px"   // Define a altura máxima da tabela
                maxWidth="100%"     // Define a largura máxima da tabela
                overflowX="auto"    // Ativa o scroll horizontal
                overflowY={loading ? 'hidden' : 'auto'}// Ativa o scroll vertical

            >
                <Table size='md'>
                    <Thead className={styles.cabecalho_table}>
                        <Tr >
                            <Tooltip label='Selecionar Todos'>
                                <Th>
                                    <Checkbox border='0.3px' borderColor='#cbd5e1' />
                                </Th>
                            </Tooltip>
                            <Th >Cod Cliente</Th>
                            <Th >Cliente</Th>
                            <Th>Status</Th>
                            <Th >Total Vencido</Th>
                            <Th >Total a Vencer</Th>
                            <Th >Total de Débito</Th>
                            <Th >Multas e Juros</Th>
                            <Th >
                                <Text>Vencido +</Text>
                                <Text>Correção</Text>
                            </Th>
                            <Th >Qtd de Títulos</Th>
                            <Th >Mais Antigo</Th>
                            <Th >Dias Vencido</Th>
                            <Th>Ações</Th>
                        </Tr>
                    </Thead>


                    <Tbody className={styles.customtable}>
                        {loading ? (

                            <Tr>
                                <Td colSpan={13} border='none'>
                                    <Loader />
                                </Td>
                            </Tr>


                        ) : (

                            error ? (
                                <Tr>
                                    <Td colSpan={13} textAlign="center" borderBottom='none' >
                                        <Text color='red'>{error}</Text>
                                    </Td>
                                </Tr >
                            ) : (

                                msgInfo ? (
                                    <Tr>
                                        <Td colSpan={13} textAlign="center" >
                                            <Text color='red'>Nenhum cliente encontrado</Text>
                                        </Td>
                                    </Tr>

                                ) : (
                                    data && data.map((item) => (

                                        <Tr padding={0} key={item.CodRedCt}>
                                            <Td padding={0} py={0} px={0}>
                                                <Checkbox border='0.3px' borderColor='#cbd5e1' />
                                            </Td>
                                            <Td>{item.CodRedCt}</Td>
                                            <Td>
                                                <VStack align="start" spacing={0} marginTop={1} marginBottom={1} >
                                                    <Text marginTop={0} fontSize='sm' textAlign='start' whiteSpace="normal">{item.cliente}</Text>
                                                    <Text margin={0} fontSize='14px'>
                                                        <Icon as={PhoneIcon} boxSize={3} marginRight={1} />
                                                        {item.Fone1Cli} / {item.Fone2Cli}
                                                    </Text>
                                                    <Text margin={0} fontSize='14px'>
                                                        <Icon as={EmailIcon} boxSize={3} marginRight={1} />
                                                        {item.EMailCli}
                                                    </Text>
                                                </VStack>
                                            </Td>
                                            <Td>
                                                <Tag borderRadius={0} size='sm' variant='solid' colorScheme={
                                                    item.PrevVenc === 'N' ? 'blue' :
                                                        item.PrevVenc === 'S' ? 'red' :
                                                            item.PrevVenc === 'H' ? 'green' : 'yellow'

                                                }>

                                                    <TagLabel fontWeight='bold'>
                                                        {item.PrevVenc === 'N' ? 'Cobrança Realizada' :
                                                            item.PrevVenc === 'S' ? 'Agendamento não pago' :
                                                                item.PrevVenc === 'H' ? 'Agendado para hoje' : 'Realizar Cobrança'}
                                                    </TagLabel>
                                                </Tag>
                                            </Td>
                                            <Td color='#cc0000'>{formataDinheiro(item.ValCtRecVencido)}</Td>
                                            <Td>{item.totalavencer}</Td>
                                            <Td color='#000099' >{formataDinheiro(item.TotalDebitoOrig)}</Td>
                                            <Td>{formataDinheiro(item.multajuros)}</Td>
                                            <Td color='#cc0000' fontWeight={600}>{formataDinheiro(item.TotalDebitoAtualiz)}</Td>
                                            <Td>{item.QtdTit}</Td>
                                            <Td>{formataData(item.vencMaisAntigo)}</Td>
                                            <Td color='#cc0000'>{item.DiasVcto}</Td>
                                            <Td>

                                                <Tooltip label='Ver Títulos' >
                                                    <IconButton
                                                        width={25}
                                                        height={5}
                                                        aria-label="Visualizar"
                                                        icon={<SearchIcon />}
                                                        onClick={() => handleVisualizarTitulos(item)}
                                                    />
                                                </Tooltip>

                                                <Tooltip label='Registrar Cobrança'>
                                                    <IconButton
                                                        marginLeft={1}
                                                        width={25}
                                                        height={5}
                                                        aria-label="Registrar Cobrança"
                                                        icon={<SmallAddIcon />}
                                                        onClick={() => handleRegistrarCobranca(item)}
                                                    />
                                                </Tooltip>


                                                <Tooltip label='Histórico de cobrança'>
                                                    <IconButton
                                                        width={25}
                                                        height={5}
                                                        marginLeft={1}
                                                        aria-label="Histórico de cobrança"
                                                        icon={<LuHistory />}
                                                        onClick={() => handleVisualizarHistoricoCobranca(item)}
                                                    />
                                                </Tooltip>


                                                <Tooltip label='Enviar email'>
                                                    <IconButton
                                                        marginLeft={1}
                                                        width={25}
                                                        height={5}
                                                        aria-label="Enviar Email"
                                                        icon={<EmailIcon />}
                                                    />
                                                </Tooltip>


                                            </Td>


                                        </Tr>

                                    ))

                                )

                            )

                        )}

                    </Tbody>

                </Table>

            </TableContainer>

            {/* Modal */}
            {isOpenVerTitulos &&
                <ModalTitulosEmDebito
                    cliente={titulosDoCliente}
                    isOpen={isOpenVerTitulos}
                    onClose={onCloseVerTitulos}
                />
            }

            {isOpenRegistrarCobranca &&
                <ModalRegistrarCobranca
                    cliente={titulosDoCliente}
                    isOpen={isOpenRegistrarCobranca}
                    onClose={onCloseRegistrarCobranca}
                />
            }

            {isOpenHistoricoCobranca &&
                <ModalHistoricoDeCobranca
                    cliente={historicoDoCliente}
                    isOpen={isOpenHistoricoCobranca}
                    onClose={onCloseHistoricoCobranca}
                />
            }

        </Box>
    )
}

export default ClientesEmDebito



