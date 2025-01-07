import { Link } from 'react-router-dom';

import {
    Card,
    CardHeader,
    CardBody,
    SimpleGrid,
    Heading,
    Image


} from '@chakra-ui/react'



const rotinasFinanceiro = [
    {
        label: 'Gestão de Cobrança e Inadimplencia',
        path: '/financeiro/gestao-de-cobranca-inadimplencia',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Resumo de Recebimentos e Contas a Receber em Aberto',
        path: '/financeiro/resumo-de-recebimentos-e-contas-a-receber-em-aberto',
        image: '/img/ResumoRecebimentoContasReceber-2-48.png'
    },
    {
        label: 'Disponivel em Caixas e Bancos',
        path: '/financeiro/disponivel-em-caixas-e-bancos',
        image: '/img/Disponivel-caixa-banco.png'
    },
    {
        label: 'Análise de Recebimentos por Quitação',
        path: '/financeiro/analise-recebimento-quitacao',
        image: '/img/AnaliseRecebimentoQuitacao-48.png'
    },
    {
        label: 'Posição Financeira',
        path: '/financeiro/posicao-financeira',
        image: '/img/posicao-financeira.png'
    },
    {
        label: 'Calendário Financeiro',
        path: '/financeiro/calendario-financeiro',
        image: '/img/calendario-financeiro.png'
    },
    {
        label: 'Email informativo resumo diário',
        path: '/financeiro/email-informativo-resumo-diario',
        image: '/img/email-informativo-diario.png'
    },
    {
        label: 'Resumo a Receber x Pagar',
        path: '/financeiro/resumo-receber-x-pagar',
        image: '/img/calendario-financeiro.png'
    },
    {
        label: 'Análise Credito de Clientes',
        path: '/financeiro/analise-credito-clientes',
        image: '/img/credito-de-cliente.png'
    },
    {
        label: 'Movimento de Caixa / Banco',
        path: '/financeiro/movimento-caixa-banco',
        image: '/img/movimento-caixa-banco.png'
    },
    {
        label: 'Receber 20 x 20 Dias',
        path: '/financeiro/receber-20-x-20-dias',
        image: '/img/calendario-financeiro.png'
    },
    
]






const CardRotinasFinanceiro = () => {

    return (

        <SimpleGrid spacing={4} templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(auto-fill, minmax(300px, 1fr))' }}>

            {rotinasFinanceiro.map((item, index) => (


            <Link to={item.path} key={index}>

                <Card bg='white' height='100%' _hover={{ cursor: 'not-allowed'}} >

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

export default CardRotinasFinanceiro