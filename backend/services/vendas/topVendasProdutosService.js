const TopVendasProdutosRepository = require('../../repositories/vendas/topVendasProdutosRepository');


class TopVendasProdutosService {


    static consultaTopVendasProdutosGeral = async (userCodFunc, filtroRel) => {

        const data  = await TopVendasProdutosRepository.consultaTopVendasProdutosGeral(userCodFunc, filtroRel);

        return data
        
    }

   


}




module.exports = TopVendasProdutosService;


















