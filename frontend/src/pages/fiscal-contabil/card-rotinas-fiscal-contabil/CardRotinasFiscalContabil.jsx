import { Link } from 'react-router-dom';

import {
    Card,
    CardHeader,
    CardBody,
    SimpleGrid,
    Heading,
    Image


} from '@chakra-ui/react'



const rotinasFiscalContabil = [
    {
        label: 'Importacao XML NFS-e / Lançar NFC Avulsa Expresso',
        path: '/financeiro/gestao-de-cobranca-inadimplencia',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Retenções de Serviços Entradas e Saídas',
        path: '/financeiro/gestao-de-cobranca-inadimplencia',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Retenções / Descontos de Serviços Prestados',
        path: '/financeiro/gestao-de-cobranca-inadimplencia',
        image: '/img/ClientesEmDebito-48.png'
    },
    {
        label: 'Restituição de Imposto com Vendas Outras UF',
        path: '/financeiro/gestao-de-cobranca-inadimplencia',
        image: '/img/ClientesEmDebito-48.png'
    },
]






const CardRotinasFiscalContabil = () => {

    return (

        <SimpleGrid spacing={4} templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(auto-fill, minmax(300px, 1fr))' }}>

            {rotinasFiscalContabil.map((item, index) => (

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

export default CardRotinasFiscalContabil