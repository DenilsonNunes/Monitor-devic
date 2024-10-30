const TopVendasProdutosRepository = require('../../repositories/vendas/topVendasProdutosRepository');


class TopVendasProdutosService {


    static consultaTopVendasProdutosGeral = async (userCodFunc, filtroRel) => {

        const data  = await TopVendasProdutosRepository.consultaTopVendasProdutosGeral(userCodFunc, filtroRel);


        console.log('no service do top 10', data);


        return data
        
    }

   


}




module.exports = TopVendasProdutosService;


















