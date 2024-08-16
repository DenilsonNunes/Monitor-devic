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
    Text
} from '@chakra-ui/react'

import { SearchIcon, EmailIcon, PlusSquareIcon } from '@chakra-ui/icons';


// Instancia API
import api from '../../../helpers/api-instance'

//Formats
import formataData from '../../../utils/formataData';


//CSS
import styles from './ClientesEmDebito.module.css'

const ClientesEmDebito = () => {

    const [data, setData] = useState();

    
    useEffect(() => {


        api.get('financeiro/gestao-de-cobranca/clientes-em-debito')

            .then((response) => {

                console.log('Verificando chamado do effect');
                console.log(response.data);

                setData(response.data);


            })
            .catch((error) => {

                console.log('Tela contas a receber: Erro ao buscar dados: ', error);
            });

    }, []);








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

                        {data && data.map((item) => (

                            <Tr padding={0}>
                                <Td padding={0} py={0} px={0}>
                                    <Checkbox border='0.3px' borderColor='#cbd5e1' />
                                </Td>
                                <Td>{item.CodRedCt}</Td>
                                <Td>
                                    <VStack align="start" spacing={0}>
                                        <Text margin={0}>{item.cliente}</Text>
                                        <Text margin={0}>9 96855497</Text>
                                        <Text margin={0}>eleparana@blueti.com.br</Text>
                                    </VStack>
                                </Td>
                               
                                <Td color='#cc0000' fontWeight={600}>{item.ValCtRecVencido}</Td>
                                <Td>{item.totalavencer}</Td>
                                <Td color='#000099' >{item.TotalDebitoOrig}</Td>
                                <Td>{item.multajuros}</Td>
                                <Td>{item.TotalDebitoAtualiz}</Td>
                                <Td>{item.QtdTit}</Td>
                                <Td >{item.DiasVcto}</Td>
                                <Td>{formataData(item.vencMaisAntigo)}</Td>
                                <Td color='#cc0000'>{item.DiasVcto}</Td>
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
                        ))}


                        <Tr>
                            <Td py={0} >
                                <Checkbox border='0.3px' borderColor='#cbd5e1' />
                            </Td>
                           <Td>1234</Td>
                            <VStack >
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