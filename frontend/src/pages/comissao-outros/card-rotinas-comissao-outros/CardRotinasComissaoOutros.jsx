import { Link } from 'react-router-dom';

import {
    Card,
    CardHeader,
    CardBody,
    SimpleGrid,
    Heading,
    Image


} from '@chakra-ui/react'



const rotinasComissaoOutros = [
    {
        label: 'Comissão de Vendas por Recebimento / Quitação',
        path: '/financeiro/gestao-de-cobranca-inadimplencia',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Comissão de Vendas por Faturamento',
        path: '/financeiro/gestao-de-cobranca-inadimplencia',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Cadastro de Metas em Lote por Projeção de Vendas',
        path: '/financeiro/gestao-de-cobranca-inadimplencia',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Desempenho de Veículos - Abastecimento / Manutenções',
        path: '/financeiro/gestao-de-cobranca-inadimplencia',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Análise de Franquia X Utilizado Abastecimento Frota',
        path: '/financeiro/gestao-de-cobranca-inadimplencia',
        image: '/img/ClientesEmDebito-48.png'
    },
]






const CardRotinasComissaoOutros = () => {

    return (

        <SimpleGrid spacing={4} templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(auto-fill, minmax(300px, 1fr))' }}>

            {rotinasComissaoOutros.map((item, index) => (

                <Link to={item.path}>

                    <Card bg='white' height='100%' _hover={{ cursor: 'not-allowed'}}>

                        <CardHeader display='flex' justifyContent='center' padding={2}>
                            <Image src={item.image} maxH='4rem' maxW='4rem'  alt='Clientes em debito' />
                        </CardHeader>
                        <CardBody padding={2}>
                            <Heading textAlign='center' size='sm'>{item.label}</Heading>
                        </CardBody>

                    </Card>

                </Link>

            ))}

        </SimpleGrid>
    )
}

export default CardRotinasComissaoOutros