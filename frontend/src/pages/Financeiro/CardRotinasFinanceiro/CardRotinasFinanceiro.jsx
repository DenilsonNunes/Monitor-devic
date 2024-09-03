import { Link } from 'react-router-dom';

import {
    Card,
    CardHeader,
    CardBody,
    SimpleGrid,
    Heading,
    Image


} from '@chakra-ui/react'



const CardRotinasFinanceiro = () => {
    return (
        <SimpleGrid spacing={4} templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(auto-fill, minmax(300px, 1fr))' }}>

            <Link to="/financeiro/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center' padding={2}>
                        <Image src='/img/ClientesEmDebito-48.png' maxH='4rem' maxW='4rem'  alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody padding={2}>
                        <Heading textAlign='center' size='sm'>Gestão de Cobrança / Clientes em Débito</Heading>
                    </CardBody>

                </Card>

            </Link>


            <Link to="/financeiro/gestao-de-cobranca/inadimplencia">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center' padding={2}>
                        <Image src='/img/Gestão de Cobrança e Inadimplencia.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody padding={2}>
                        <Heading textAlign='center' size='sm'>Gestão de Cobrança e Inadimplencia</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/financeiro/resumo-de-Recebimentos-e-contas-a-receber-em-aberto">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center' padding={2}>
                        <Image src='/img/ResumoRecebimentoContasReceber-2-48.png' maxH='4rem' maxW='4rem'  alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody padding={2}>
                        <Heading textAlign='center' size='sm'>Resumo de Recebimentos e Contas a Receber em Aberto</Heading>
                    </CardBody>

                </Card>

            </Link>


            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center' padding={2}>
                        <Image src='/img/AnaliseRecebimentoQuitacao-48.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody padding={2}>
                        <Heading textAlign='center' size='sm'>Análise de Recebimentos por Quitação</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center' padding={2}>
                        <Image src='/img/posicao-financeira.png' maxH='4rem' maxW='4rem' alt='Posição Financeira'/>
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Posição Financeira</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center' padding={2}>
                        <Image src='/img/disponivel-caixa-bancos.png' maxH='4rem' maxW='4rem'  alt='Disponível em caixa e banco'/>
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Disponível em Caixas e Bancos</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center' padding={2}>
                        <Image src='/img/calendario-financeiro.png' maxH='4rem' maxW='4rem'  alt='Calendário Financeiro' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Calendário Financeiro</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'  padding={2}>
                        <Image src='/img/email-informativo-diario.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Email informativo resumo diário</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'  padding={2}>
                        <Image src='/img/receber_x_pagar.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Resumo a Receber x Pagar</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'  padding={2}>
                        <Image src='/img/credito-de-cliente.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Análise Credito de Clientes</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'  padding={2}>
                        <Image src='/img/movimento-caixa-banco.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Movimento de Caixa / Banco</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'  padding={2}>
                        <Image src='/img/calendario-financeiro.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Receber 20 x 20 Dias</Heading>
                    </CardBody>

                </Card>

            </Link>



        </SimpleGrid>
    )
}

export default CardRotinasFinanceiro