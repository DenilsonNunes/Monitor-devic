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
        <SimpleGrid spacing={4}  templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>

            <Link to="/financeiro/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9'>

                    <CardHeader display='flex' justifyContent='center'>
                        <Image src='/img/ClientesEmDebito-48.png' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Gestão de Cobrança / Clientes em Débito</Heading>
                    </CardBody>

                </Card>

            </Link>


            <Link to="/gestao-de-cobranca/inadimplencia">

                <Card bg='#f1f5f9'>

                    <CardHeader display='flex' justifyContent='center'>
                        <Image src='/img/Gestão de Cobrança e Inadimplencia.png' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Gestão de Cobrança e Inadimplencia</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9'>

                    <CardHeader display='flex' justifyContent='center'>
                        <Image src='/img/ResumoRecebimentoContasReceber-2-48.png' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody>
                        <Heading textAlign='center' size='sm'>Resumo de Recebimentos e Contas a Receber em Aberto</Heading>
                    </CardBody>

                </Card>

            </Link>


            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9'>

                    <CardHeader display='flex' justifyContent='center'>
                        <Image src='/img/AnaliseRecebimentoQuitacao-48.png' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Análise de Recebimentos por Quitação</Heading>
                    </CardBody>

                </Card>

            </Link>

         
        </SimpleGrid>
    )
}

export default CardRotinasFinanceiro