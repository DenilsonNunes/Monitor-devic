import { useEffect, useState } from 'react'
import { LuHistory, LuFilter } from "react-icons/lu";
import { Link } from 'react-router-dom';


import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    VStack,
    Stack,
    FormLabel,
    Select,
    HStack,
    Button,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'

import { AddIcon, Search2Icon, ChevronRightIcon, ChevronUpIcon } from '@chakra-ui/icons'


// Instancia API
import api from '../../../helpers/api-instance'

//Formats
import formataData from '../../../utils/formataData';




const HomeEstoqueObsoletoDesncessario = () => {


    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);




    useEffect(() => {

        api.get('estoque/analise-estoque-obsoleto-desnecessario/filtros-rel')

            .then((response) => {

                setData(response.data);
                console.log(response.data);

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


    }, []);



    return (

        <Box marginTop='60px' marginX={2} >

            <Text fontSize='xl' marginTop={20}>
                <Link to='/estoque'>Monitor Estoque</Link> &gt;&gt;
                Análise de Estoque Obsoleto e Desncessário
            </Text>

            <Box >

                <Accordion allowToggle>

                    <AccordionItem border='1px solid #B9BBC6' >
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton bg='#E0E1E6' _expanded={{ bg: '#E0E1E6' }}>
                                        {isExpanded ? (
                                            <ChevronUpIcon fontSize='18px' />
                                        ) : (
                                            <Search2Icon fontSize='14px' />
                                        )}
                                        <Box as='span' flex='1' textAlign='left' marginLeft={1}>
                                            Filtros
                                        </Box>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>

                                    <VStack>

                                        <Stack direction='row' width='100%' spacing={0} justifyContent='center'>

                                            <Stack direction='column' spacing={0}>

                                                <FormLabel margin={0}>Dias de Obsolencia</FormLabel>

                                                <NumberInput size='xs' maxW={20} min={1} max={999}>
                                                    <NumberInputField />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>

                                            </Stack>

                                            <Stack direction='column' spacing={0} marginLeft={2}>

                                                <FormLabel margin={0}>Empresa</FormLabel>
                                                <Select placeholder='--Selecione--' size='xs' >

                                                    {data && data.codEmpr.map((item, index) => (

                                                        <option value='' key={index}>{item.codigoEmpr}-{item.UndEmpr}</option>

                                                    ))}

                                                </Select>

                                            </Stack>

                                            <Stack direction='column' spacing={0} marginLeft={2}>

                                                <FormLabel margin={0}>Grupo</FormLabel>

                                                <Select placeholder='--Selecione--' size='xs'>
                                                    {data && data.grupoItem.map((item, index) => (

                                                        <option value='' key={index}>{item.CodGrpItem}-{item.DescrGrpItem}</option>

                                                    ))}
                                                </Select>
                                            </Stack>

                                            <Stack direction='column' spacing={0} marginLeft={2}>

                                                <FormLabel margin={0}>SubGrupo</FormLabel>

                                                <Select placeholder='--Selecione--' size='xs'>
                                                    {data && data.grupoItem.map((item, index) => (

                                                        <option value='' key={index}>{item.CodGrpItem}-{item.DescrGrpItem}</option>

                                                    ))}
                                                </Select>
                                            </Stack>

                                            <Stack direction='column' spacing={0} marginLeft={2}>

                                                <FormLabel margin={0}>Marca</FormLabel>

                                                <Select placeholder='--Selecione--' size='xs'>
                                                    {data && data.marca.map((item, index) => (

                                                        <option value='' key={index}>{item.CodMarca}-{item.DescrMarca}</option>

                                                    ))}
                                                </Select>
                                            </Stack>

                                            <Stack direction='column' spacing={0} marginLeft={2}>

                                                <FormLabel margin={0}>Alocação de estoque</FormLabel>

                                                <Select placeholder='--Selecione--' size='xs'>
                                                    {data && data.alocacaoEstoque.map((item, index) => (

                                                        <option value='' key={index}>{item.CodAloc}-{item.NomeAloc}</option>

                                                    ))}
                                                </Select>
                                            </Stack>

                                            <Stack direction='column' spacing={0} marginLeft={2}>

                                                <FormLabel margin={0}>Outras Opções</FormLabel>

                                                <Select placeholder='--Selecione--' size='xs'>
                                                    <option value='1-CONTAS CAIXAS'>1-CONTAS CAIXAS</option>
                                                    <option value='2-CONTAS BANCÁRIAS'>2-CONTAS BANCÁRIAS</option>
                                                    <option value='3-APLICAÇÕES FINANCEIRAS'>3-APLICAÇÕES FINANCEIRAS</option>
                                                </Select>
                                            </Stack>

                                        </Stack>

                                        <HStack>

                                            <Button
                                                size='sm'
                                                bg='primary'
                                                color='white'
                                                _hover={{ bg: '#0369a1' }}
                                                borderRadius={0}
                                            >
                                                Aplicar
                                            </Button>

                                            <Button
                                                size='sm'
                                                bg='primary'
                                                color='white'
                                                _hover={{ bg: '#0369a1' }}
                                                borderRadius={0}
                                            >
                                                Limpar
                                            </Button>

                                        </HStack>

                                    </VStack>

                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>

                </Accordion>

            </Box>

        </Box>
    )
}

export default HomeEstoqueObsoletoDesncessario



