import { Link } from 'react-router-dom';

import {
    Card,
    CardHeader,
    CardBody,
    SimpleGrid,
    Heading,
    Image


} from '@chakra-ui/react'


const rotinasEstoque = [
    {
        label: 'Análise de Estoque Obsoleto e Desncessário',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Analise Crítica de Produtos - Sugestão de Compras',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Resumo de Movimentação de Produto por Tipo',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Resumo de Movimentação por Produto / Vendedor',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Auditoria de Ajuste de Estoque',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Resumo de Movimentação de Produto Fiscal',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Conferência de Estoque x Retirada',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Relação de Produtos a Conferir / Retirar por Documento',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Resumo de Entradas por Produto - Compras',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Análise de Entrega Futura',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Análise de estoque com previsão de entrega',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Controle de Romaneio e Comissões por Transportador',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Resumo de Romaneio por Documento de Vendas',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Romaneio de Carga sobre a Conferência - Entrega',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Conferência de Romaneio por Código de Barras',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Análise de Transferência de Estoque Entre Empresas - Resumo',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Análise de Transferência de Estoque Entre Empresas - Detalhe',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Calendário Planejamento de Produção',
        path: '/estoque/analise-estoque-obsoleto-desnecessario',
        image: '/img/ClientesEmDebito-48.png'
    },

]





const CardRotinasEstoque = () => {
    return (
     
        <SimpleGrid spacing={4} templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(auto-fill, minmax(300px, 1fr))' }}>

            {rotinasEstoque.map((item, index) => (


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

export default CardRotinasEstoque