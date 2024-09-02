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
        <SimpleGrid spacing={4} templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(auto-fill, minmax(250px, 1fr))' }}>

            <Link to="/financeiro/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'>
                        <Image src='/img/ClientesEmDebito-48.png' maxH={20} maxW={20}  alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Gestão de Cobrança / Clientes em Débito</Heading>
                    </CardBody>

                </Card>

            </Link>


            <Link to="/gestao-de-cobranca/inadimplencia">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'>
                        <Image src='/img/Gestão de Cobrança e Inadimplencia.png' maxH={20} maxW={20} alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody>
                        <Heading textAlign='center' size='sm'>Gestão de Cobrança e Inadimplencia</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'>
                        <Image src='/img/ResumoRecebimentoContasReceber-2-48.png' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody>
                        <Heading textAlign='center' size='sm'>Resumo de Recebimentos e Contas a Receber em Aberto</Heading>
                    </CardBody>

                </Card>

            </Link>


            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'>
                        <Image src='/img/AnaliseRecebimentoQuitacao-48.png' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Análise de Recebimentos por Quitação</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'>
                        <Image src='/img/PosicaoFinanceira-2-48.png' alt='Posição Financeira'/>
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Posição Financeira</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'>
                        <Image src='/img/AnaliseRecebimentoQuitacao-48.png' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Disponível em Caixas e Bancos</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'>
                        <Image src='/img/AnaliseRecebimentoQuitacao-48.png' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Calendário Financeiro</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'>
                        <Image src='/img/AnaliseRecebimentoQuitacao-48.png' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Email informativo resumo diário</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'>
                        <Image src='/img/AnaliseRecebimentoQuitacao-48.png' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Resumo a Receber x Pagar</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'>
                        <Image src='/img/AnaliseRecebimentoQuitacao-48.png' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Análise Credito de Clientes</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'>
                        <Image src='/img/AnaliseRecebimentoQuitacao-48.png' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Movimento de Caixa / Banco</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'>
                        <Image src='/img/AnaliseRecebimentoQuitacao-48.png' alt='Clientes em debito' />
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