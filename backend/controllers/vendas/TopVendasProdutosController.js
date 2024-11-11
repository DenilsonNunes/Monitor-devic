// Services
const TopVendasProdutosService = require('../../services/vendas/topVendasProdutosService');




class TopVendasProdutosController {
    

    async consultaTopVendasProdutosGeral(req, res) {

        const userCodFunc = (req.userCodFunc)

        console.log('Qual o usuario', userCodFunc)

        const filtrosRel = req.query;


        try {
 
            const { data, dataFiltroRel } = await TopVendasProdutosService.consultaTopVendasProdutosGeral(userCodFunc, filtrosRel);

            res.status(200).json({ data, dataFiltroRel });
 
        } catch(err) {
 
            res.status(500).json({ message: err.message });
 
        }
        
     
    }

   
   


}



module.exports = new TopVendasProdutosController();



