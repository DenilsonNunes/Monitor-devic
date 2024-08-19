import { useEffect, useState } from 'react'

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
    useDisclosure
} from '@chakra-ui/react'

import { SearchIcon, EmailIcon, PlusSquareIcon, PhoneIcon } from '@chakra-ui/icons';


// Instancia API
import api from '../../../helpers/api-instance'

//Formats
import formataData from '../../../utils/formataData';


//CSS
import styles from './ClientesEmDebito.module.css'
import ModalTitulosEmDebito from './ModalTitulosDeClienteEmDebito';

const ClientesEmDebito = () => {

    const [data, setData] = useState();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedVerTitulos, setSelectedVerTitulos] = useState(false)
    const [titulosDoCliente, setTitulosDoCliente] = useState();
    const [buscaRapida, setBuscaRapida] = useState("");
    const [qtdVisualizar, setQtdVisualizar] = useState("");





    useEffect(() => {

        api.get('financeiro/gestao-de-cobranca/clientes-em-debito')

            .then((response) => {

                setData(response.data);

            })
            .catch((error) => {

                console.log('Tela contas a receber: Erro ao buscar dados: ', error);
            });

    }, []);


    const handleVisualizarTitulos = (item) => {

        setSelectedVerTitulos(item)

        setTitulosDoCliente(item)

        onOpen();

    };

    const handleBuscaRapida = (event) => {
        
        console.log('quantidade visualizar', qtdVisualizar)

        event.preventDefault();


        
        api.get('financeiro/gestao-de-cobranca/clientes-em-debito', {
            params:{
                search: buscaRapida
            }
        })
        .then((response) => {

            setData(response.data);
        

        })
        .catch((error) => {

            console.log('Erro:', error.response.data);

        });

    

    };

    const handleQtdVisualizar = (event) => {
        
        console.log('quantidade visualizar', event.target.value)
    
    };



    return (

        <Box marginTop='60px'  marginX={2} >

            <Text fontSize='xl' marginTop={16}>Gestão de Cobrança / Clientes em debito</Text>

            <Box display='flex' justifyContent='space-between' marginTop={5} >

                <Stack direction='row'>

                    <form style={{ display: 'flex', alignItems: 'center' }} onSubmit={handleBuscaRapida}>
                        <Input 
                            size='sm' 
                            variant='outline' 
                            placeholder='Busca Rápida' 
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
                            onChange={(e) => setQtdVisualizar(e.target.value)}
                        >
                            <option value='10'>10</option>
                            <option value='20'>20</option>
                            <option value='30'>30</option>
                            <option value='T'>Todos</option>
                        </Select>
                    </form>

                </Stack>

                
                <form style={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            size='sm'
                            type='submit'
                            colorScheme='gray'
                        >
                            Busca Avançada
                        </Button>
                </form>


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

            <TableContainer marginTop={2}>
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
                            <Th >Status</Th>
                            <Th>Ações</Th>
                        </Tr>
                    </Thead>

                    <Tbody className={styles.customtable}>

                        {data && data.map((item) => (

                            <Tr padding={0} key={item.CodRedCt}>
                                <Td padding={0} py={0} px={0}>
                                    <Checkbox border='0.3px' borderColor='#cbd5e1' />
                                </Td>
                                <Td>{item.CodRedCt}</Td>
                                <Td>
                                    <VStack align="start" spacing={0} marginTop={1} marginBottom={1} >
                                        <Text marginTop={0} fontSize='sm' textAlign='start' whiteSpace="normal" >{item.cliente}</Text>
                                        <Text margin={0} fontSize='14px'>
                                            <Icon as={PhoneIcon} boxSize={3} marginRight={1}/>
                                            {item.Fone1Cli} / {item.Fone2Cli}
                                        </Text>
                                        <Text margin={0} fontSize='14px'>
                                            <Icon as={EmailIcon} boxSize={3} marginRight={1}/>
                                            {item.EMailCli}
                                        </Text>
                                    </VStack>
                                </Td>

                                <Td color='#cc0000' fontWeight={600}>{item.ValCtRecVencido}</Td>
                                <Td>{item.totalavencer}</Td>
                                <Td color='#000099' >{item.TotalDebitoOrig}</Td>
                                <Td>{item.multajuros}</Td>
                                <Td>{item.TotalDebitoAtualiz}</Td>
                                <Td>{item.QtdTit}</Td>
                                <Td>{formataData(item.vencMaisAntigo)}</Td>
                                <Td color='#cc0000'>{item.DiasVcto}</Td>
                                <Td>
                                    <Tag size='sm' variant='solid' colorScheme={
                                        item.PrevVenc === 'N' ? 'green' :
                                        item.PrevVenc === 'S' ? 'gray' : 
                                        item.PrevVenc === 'H' ? 'red': 'yellow'
                                        
                                    }>
                                        
                                        <TagLabel fontWeight='bold'>
                                            {item.PrevVenc === 'N' ? 'Cobrança Realizada' :
                                             item.PrevVenc === 'S' ? 'teste' : 
                                             item.PrevVenc === 'H' ? 'Agendado Hoje' : 'Realizar Cobrança' }
                                        </TagLabel>
                                    </Tag>
                                </Td>

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

                                    <Tooltip label='Enviar email'>
                                        <IconButton
                                            marginLeft={1}
                                            width={25}
                                            height={5}
                                            aria-label="Enviar Email"
                                            icon={<EmailIcon />}
                                        />
                                    </Tooltip>

                                    <Tooltip label='Registrar Cobrança'>
                                        <IconButton
                                            marginLeft={1}
                                            width={25}
                                            height={5}
                                            aria-label="Registrar Cobrança"
                                            icon={<PlusSquareIcon />}
                                        />
                                    </Tooltip>

                                </Td>


                            </Tr>
                        ))}
    
                    </Tbody>

                </Table>

            </TableContainer>
            
            { selectedVerTitulos && 
                <ModalTitulosEmDebito
                    titulos={titulosDoCliente}
                    isOpen={isOpen}
                    onClose={onClose}
                />
            }
            
        </Box>
    )
}

export default ClientesEmDebito



/*


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
    IconButton,
    Tag,
    TagLabel,
    Tooltip,
    Input,
    Button,
    Stack,
    Heading,
    VStack,
    Text
} from '@chakra-ui/react'

import { SearchIcon, EmailIcon, PlusSquareIcon } from '@chakra-ui/icons';

//CSS
import styles from './ClientesEmDebito.module.css'

const ClientesEmDebito = () => {
    return (

        <Box marginTop='60px' border='1px' borderColor='red' marginX={5}>

            <Heading size='lg'>Clientes em Débito</Heading>

            <Box display='flex' justifyContent='space-between' marginTop={5}>

                <Stack direction='row'>

                    <form style={{ display: 'flex', alignItems: 'center' }}>
                        <Input variant='outline' placeholder='Busca Rápida' />
                        <Button
                            type='submit'

                            colorScheme='blue'
                        >
                            Buscar
                        </Button>
                    </form>

                </Stack>


                <Box>
                    <h1>Ações em Lote</h1>
                    <IconButton
                        marginLeft={1}
                        width={25}
                        height={5}
                        aria-label="Enviar Email"
                        icon={<EmailIcon />}
                    />
                </Box>

            </Box>

            <TableContainer marginTop={5}>
                <Table size='md'>
                    <Thead className={styles.cabecalho_table}>
                        <Tr >
                            <Th>
                                <Checkbox border='0.3px' borderColor='#cbd5e1' />
                            </Th>
                            <Th>Cod Cliente</Th>
                            <Th >Cliente</Th>
                            <Th >Total Vencido</Th>
                            <Th >Total a Vencer</Th>
                            <Th >Total de Débito</Th>
                            <Th >Multas e Juros</Th>
                            <Th >Vencido + Correção</Th>
                            <Th >Total Acumulado</Th>
                            <Th >Qtd de Títulos</Th>
                            <Th >Mais Antigo</Th>
                            <Th >Dias Vencido</Th>
                            <Th >Status</Th>
                            <Th>Ações</Th>
                        </Tr>
                    </Thead>

                    <Tbody className={styles.customtable}>
                        <Tr padding={0}>
                            <Td padding={0} py={0} px={0}>
                                <Checkbox border='0.3px' borderColor='#cbd5e1' />
                            </Td>
                            <Td>1234</Td>
                            <Td >Cliente teste</Td>
                            <Td >150.000.000,00</Td>
                            <Td >450.000.000,00</Td>
                            <Td >250.000.000,00</Td>
                            <Td >350.000.000,00</Td>
                            <Td >350.000.000,00</Td>
                            <Td >999.000.000,00</Td>
                            <Td >999</Td>
                            <Td >15/08/2022</Td>
                            <Td >225</Td>
                            <Td>
                                <Tag size='sm' variant='solid' colorScheme='green'>
                                    <TagLabel fontWeight='bold'>Cobrança Realizada</TagLabel>
                                </Tag>
                            </Td>

                            <Td>
                                <Tooltip label='Ver Títulos' >
                                    <IconButton
                                        width={25}
                                        height={5}
                                        aria-label="Visualizar"
                                        icon={<SearchIcon />}
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

                                <Tooltip label='Registrar Cobrança'>
                                    <IconButton
                                        marginLeft={1}
                                        width={25}
                                        height={5}
                                        aria-label="Registrar Cobrança"
                                        icon={<PlusSquareIcon />}
                                    />
                                </Tooltip>

                            </Td>


                        </Tr>

                        <Tr>
                            <Td py={0} >
                                <Checkbox border='0.3px' borderColor='#cbd5e1' />
                            </Td>
                           <Td>1234</Td>
                            <VStack align="start" spacing={0}>
                                <Text margin={0}>ELETRICA PARANA - COUTO MAGALHAES</Text>
                                <Text margin={0}>9 96855497</Text>
                                <Text margin={0}>eleparana@blueti.com.br</Text>
                            </VStack>
                            <Td>150.000.000,00</Td>
                            <Td>450.000.000,00</Td>
                            <Td>250.000.000,00</Td>
                            <Td>350.000.000,00</Td>
                            <Td>350.000.000,00</Td>
                            <Td>999.000.000,00</Td>
                            <Td>999</Td>
                            <Td>15/08/2022</Td>
                            <Td>225</Td>
                            <Td>
                                <Tag size='sm' variant='solid' colorScheme='yellow'>
                                    <TagLabel fontWeight='bold'>Realizar Cobrança</TagLabel>
                                </Tag>
                            </Td>

                            <Td>
                                <IconButton
                                    width={25}
                                    height={5}
                                    aria-label="Visualizar"
                                    icon={<SearchIcon />}
                                />
                                <IconButton
                                    marginLeft={1}
                                    width={25}
                                    height={5}
                                    aria-label="Enviar Email"
                                    icon={<EmailIcon />}
                                />
                                <IconButton
                                    marginLeft={1}
                                    width={25}
                                    height={5}
                                    aria-label="Visualizar"
                                    icon={<PlusSquareIcon />}
                                />


                            </Td>


                        </Tr>
                        <Tr>
                            <Td py={0} >
                                <Checkbox border='0.3px' borderColor='#cbd5e1' />
                            </Td>
                            <Td>1234</Td>
                            <Td>Cliente teste</Td>
                            <Td >150.000.000,00</Td>
                            <Td >0</Td>
                            <Td >1550</Td>
                            <Td >50</Td>
                            <Td >1550</Td>
                            <Td >1550</Td>
                            <Td >3</Td>
                            <Td>15/08/2022</Td>
                            <Td>1500</Td>
                            <Td>
                                <Tag size='sm' variant='solid' colorScheme='red'>
                                    <TagLabel fontWeight='bold'>Agendado Hoje</TagLabel>
                                </Tag>
                            </Td>

                            <Td>
                                <IconButton
                                    width={25}
                                    height={5}
                                    aria-label="Visualizar"
                                    icon={<SearchIcon />}
                                />
                                <IconButton
                                    marginLeft={1}
                                    width={25}
                                    height={5}
                                    aria-label="Enviar Email"
                                    icon={<EmailIcon />}
                                />
                                <IconButton
                                    marginLeft={1}
                                    width={25}
                                    height={5}
                                    aria-label="Visualizar"
                                    icon={<PlusSquareIcon />}
                                />


                            </Td>

                        </Tr>
                    </Tbody>


                    <Tfoot className={styles.cabecalho_table}>
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
                            <Th></Th>
                        </Tr>
                    </Tfoot>


                </Table>
            </TableContainer>


        </Box>
    )
}

export default ClientesEmDebito

*/