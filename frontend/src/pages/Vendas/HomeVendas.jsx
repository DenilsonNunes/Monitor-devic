import { Link } from 'react-router-dom';


import {
    Card,
    CardHeader,
    Heading,
    CardBody,
    SimpleGrid,
    Image,
} from '@chakra-ui/react'



import PageLayout from '../../components/PageLayout/PageLayout';




const rotinasVendas = [
    {
        label: 'Vendas por vendedor',
        path: '/financeiro/gestao-de-cobranca-inadimplencia',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Comparativo de vendas diário',
        path: '/financeiro/gestao-de-cobranca-inadimplencia',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Vendas por plano de vendas',
        path: '/financeiro/gestao-de-cobranca-inadimplencia',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Vendas por conta de receita',
        path: '/financeiro/gestao-de-cobranca-inadimplencia',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Vendas por centro de custo',
        path: '/financeiro/gestao-de-cobranca-inadimplencia',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Análise de vendas por produto',
        path: '/financeiro/gestao-de-cobranca-inadimplencia',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Vendas por forma de pagamento',
        path: '/financeiro/gestao-de-cobranca-inadimplencia',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Top Vendas Produtos',
        path: '/vendas/top-vendas-produtos',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Acompanhamento de meta por empresa X vendedor',
        path: '/vendas/top-vendas-produtos',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Meta x realizado por vendedor',
        path: '/vendas/top-vendas-produtos',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Meta x Realizado da Empresa',
        path: '/vendas/top-vendas-produtos',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Comparativo de vendas anual / mês',
        path: '/vendas/top-vendas-produtos',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Análise de lucro líquido',
        path: '/vendas/top-vendas-produtos',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Análise de clientes sem movimentação',
        path: '/vendas/top-vendas-produtos',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Análise de clientes mensal',
        path: '/vendas/top-vendas-produtos',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Analise de picos de vendas Hora/Dia semana/Mês',
        path: '/vendas/top-vendas-produtos',
        image: '/img/ClientesEmDebito-48.png'
    },


]










const HomeVendas = () => {

    return (

        <PageLayout>

            <Heading marginBottom={4} size='md'>Monitor de Vendas</Heading>


            <SimpleGrid spacing={4} templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(auto-fill, minmax(300px, 1fr))' }}>

                {rotinasVendas.map((item, index) => (


                    <Link to={item.path} key={index}>

                        <Card bg='white' height='100%' >

                            <CardHeader display='flex' justifyContent='center' padding={2}>
                                <Image src={item.image} maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                            </CardHeader>
                            <CardBody padding={2}>
                                <Heading textAlign='center' size='xs'>{item.label}</Heading>
                            </CardBody>

                        </Card>

                    </Link>


                ))}

            </SimpleGrid>


        </PageLayout>





    )
}


export default HomeVendas;

