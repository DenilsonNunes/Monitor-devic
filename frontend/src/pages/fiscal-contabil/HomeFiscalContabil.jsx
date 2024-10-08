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


import PageLayout from '../../components/PageLayout/PageLayout';


const HomeFiscalContabil = () => {

  return (

    <PageLayout>
                    
        <Heading marginBottom={4} size='md'>Monitor Fiscal/Contábil</Heading>

        <SimpleGrid spacing={4} templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(auto-fill, minmax(300px, 1fr))' }}>

            <Link to="/estoque/analise-estoque-obsoleto-desnecessario">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center' padding={2}>
                        <Image src='/img/ClientesEmDebito-48.png' maxH='4rem' maxW='4rem'  alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody padding={2}>
                        <Heading textAlign='center' size='sm'>Análise de Estoque Obsoleto e Desncessário</Heading>
                    </CardBody>

                </Card>

            </Link>


            <Link to="">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center' padding={2}>
                        <Image src='/img/ResumoRecebimentoContasReceber-2-48.png' maxH='4rem' maxW='4rem'  alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody padding={2}>
                        <Heading textAlign='center' size='sm'>Analise Crítica de Produtos - Sugestão de Compras</Heading>
                    </CardBody>

                </Card>

            </Link>


            <Link to="">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center' padding={2}>
                        <Image src='/img/AnaliseRecebimentoQuitacao-48.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody padding={2}>
                        <Heading textAlign='center' size='sm'>Resumo de Movimentação de Produto por Tipo</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center' padding={2}>
                        <Image src='/img/posicao-financeira.png' maxH='4rem' maxW='4rem' alt='Posição Financeira'/>
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Resumo de Movimentação por Produto / Vendedor</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center' padding={2}>
                        <Image src='/img/disponivel-caixa-bancos.png' maxH='4rem' maxW='4rem'  alt='Disponível em caixa e banco'/>
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Disponível em Caixas e Bancos</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center' padding={2}>
                        <Image src='/img/calendario-financeiro.png' maxH='4rem' maxW='4rem'  alt='Calendário Financeiro' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Auditoria de Ajuste de Estoque</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'  padding={2}>
                        <Image src='/img/email-informativo-diario.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Resumo de Movimentação de Produto Fiscal</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'  padding={2}>
                        <Image src='/img/calendario-financeiro.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Conferência de Estoque x Retirada</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'  padding={2}>
                        <Image src='/img/credito-de-cliente.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Relação de Produtos a Conferir / Retirar por Documento</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="/gestao-de-cobranca/clientes-em-debito">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'  padding={2}>
                        <Image src='/img/movimento-caixa-banco.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Resumo de Entradas por Produto - Compras</Heading>
                    </CardBody>

                </Card>

            </Link>

            <Link to="">

                <Card bg='#f1f5f9' height='100%'>

                    <CardHeader display='flex' justifyContent='center'  padding={2}>
                        <Image src='/img/calendario-financeiro.png' maxH='4rem' maxW='4rem' alt='Clientes em debito' />
                    </CardHeader>
                    <CardBody >
                        <Heading textAlign='center' size='sm'>Análise de Entrega Futura</Heading>
                    </CardBody>

                </Card>

            </Link>


        </SimpleGrid>
      
    </PageLayout>

       
  )
}


export default HomeFiscalContabil;

