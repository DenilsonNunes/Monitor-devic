const TopVendasProdutosRepository = require('../../repositories/vendas/topVendasProdutosRepository');


class TopVendasProdutosService {


    static consultaTopVendasProdutosGeral = async (userCodFunc, filtroRel) => {

        return  await TopVendasProdutosRepository.consultaTopVendasProdutosGeral(userCodFunc, filtroRel);

        
    }

   


}




module.exports = TopVendasProdutosService;


















