const TopVendasProdutosRepository = require('../../repositories/vendas/topVendasProdutosRepository');


class TopVendasProdutosService {


    static consultaTopVendasProdutosGeral = async (userCodFunc) => {

        return  await TopVendasProdutosRepository.consultaTopVendasProdutosGeral(userCodFunc);

        
    }

   


}




module.exports = TopVendasProdutosService;


















