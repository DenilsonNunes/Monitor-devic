import { Link } from 'react-router-dom';


import {
    Card,
    CardHeader,
    Box,
    Heading,
    CardBody,
    SimpleGrid,
    Image
} from '@chakra-ui/react'


const HomeVendas = () => {

  return (

    <Box marginLeft={5} marginRight={5}>
        
        <Box marginTop={20}>

            <Heading marginBottom={4} size='md'>Monitor de Vendas</Heading>

            <SimpleGrid spacing={4} templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(auto-fill, minmax(300px, 1fr))' }}>

                <Link to="/estoque/analise-estoque-obsoleto-desnecessario">

                    <Card bg='#f1f5f9' height='100%'>

                        <CardHeader display='flex' justifyContent='center' padding={2}>
                            <Image src='/img/ClientesEmDebito-48.png' maxH='4rem' maxW='4rem'  alt='Clientes em debito' />
                        </CardHeader>
                        <CardBody padding={2}>
                            <Heading textAlign='center' size='sm'>Vendas por vendedor</Heading>
                        </CardBody>

                    </Card>

                </Link>


                <Link to="">

                    <Card bg='#f1f5f9' height='100%'>

                        <CardHeader display='flex' justifyContent='center' padding={2}>
                            <Image src='/img/ResumoRecebimentoContasReceber-2-48.png' maxH='4rem' maxW='4rem'  alt='Clientes em debito' />
                        </CardHeader>
                        <CardBody padding={2}>
                            <Heading textAlign='center' size='sm'>Comparativo de vendas diário</Heading>
                        </CardBody>

                    </Card>

                </Link>


                <Link to="">

                    <Card bg='#f1f5f9' height='100%'>

                        <CardHeader display='flex' justifyContent='center' padding={2}>
                            <Image src='/img/AnaliseRecebimentoQuitacao-48.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                        </CardHeader>
                        <CardBody padding={2}>
                            <Heading textAlign='center' size='sm'>Vendas por plano de vendas</Heading>
                        </CardBody>

                    </Card>

                </Link>

                <Link to="">

                    <Card bg='#f1f5f9' height='100%'>

                        <CardHeader display='flex' justifyContent='center' padding={2}>
                            <Image src='/img/posicao-financeira.png' maxH='4rem' maxW='4rem' alt='Posição Financeira'/>
                        </CardHeader>
                        <CardBody >
                            <Heading textAlign='center' size='sm'>Vendas por conta de receita</Heading>
                        </CardBody>

                    </Card>

                </Link>

                <Link to="">

                    <Card bg='#f1f5f9' height='100%'>

                        <CardHeader display='flex' justifyContent='center' padding={2}>
                            <Image src='/img/disponivel-caixa-bancos.png' maxH='4rem' maxW='4rem'  alt='Disponível em caixa e banco'/>
                        </CardHeader>
                        <CardBody >
                            <Heading textAlign='center' size='sm'>Vendas por centro de custo</Heading>
                        </CardBody>

                    </Card>

                </Link>

                <Link to="">

                    <Card bg='#f1f5f9' height='100%'>

                        <CardHeader display='flex' justifyContent='center' padding={2}>
                            <Image src='/img/calendario-financeiro.png' maxH='4rem' maxW='4rem'  alt='Calendário Financeiro' />
                        </CardHeader>
                        <CardBody >
                            <Heading textAlign='center' size='sm'>Análise de vendas por produto</Heading>
                        </CardBody>

                    </Card>

                </Link>

                <Link to="">

                    <Card bg='#f1f5f9' height='100%'>

                        <CardHeader display='flex' justifyContent='center'  padding={2}>
                            <Image src='/img/email-informativo-diario.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                        </CardHeader>
                        <CardBody >
                            <Heading textAlign='center' size='sm'>Vendas por forma de pagamento</Heading>
                        </CardBody>

                    </Card>

                </Link>

                <Link to="">

                    <Card bg='#f1f5f9' height='100%'>

                        <CardHeader display='flex' justifyContent='center'  padding={2}>
                            <Image src='/img/calendario-financeiro.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                        </CardHeader>
                        <CardBody >
                            <Heading textAlign='center' size='sm'>Acompanhamento de meta por empresa x vendedor</Heading>
                        </CardBody>

                    </Card>

                </Link>

                <Link to="">

                    <Card bg='#f1f5f9' height='100%'>

                        <CardHeader display='flex' justifyContent='center'  padding={2}>
                            <Image src='/img/credito-de-cliente.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                        </CardHeader>
                        <CardBody >
                            <Heading textAlign='center' size='sm'>Meta x realizado por vendedor</Heading>
                        </CardBody>

                    </Card>

                </Link>

                <Link to="/gestao-de-cobranca/clientes-em-debito">

                    <Card bg='#f1f5f9' height='100%'>

                        <CardHeader display='flex' justifyContent='center'  padding={2}>
                            <Image src='/img/movimento-caixa-banco.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                        </CardHeader>
                        <CardBody >
                            <Heading textAlign='center' size='sm'>Meta x realizado da empresa</Heading>
                        </CardBody>

                    </Card>

                </Link>

                <Link to="">

                    <Card bg='#f1f5f9' height='100%'>

                        <CardHeader display='flex' justifyContent='center'  padding={2}>
                            <Image src='/img/calendario-financeiro.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                        </CardHeader>
                        <CardBody >
                            <Heading textAlign='center' size='sm'>Comparativo de Vendas Anual / Mês</Heading>
                        </CardBody>

                    </Card>

                </Link>


            </SimpleGrid>

        </Box>

    </Box>
   
    
  )
}


export default HomeVendas;

