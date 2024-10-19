// Services
const TopVendasProdutosService = require('../../services/vendas/topVendasProdutosService');




class TopVendasProdutosController {
    

    async consultaTopVendasGeral(req, res) {


        const userCodFunc = (req.userCodFunc)

        try {
 
            const data = await TopVendasProdutosService.consultaTopVendasProdutosGeral(userCodFunc);

 
            res.status(200).json(data);
 
        } catch(err) {
 
            res.status(500).json({ message: err.message });
 
        }
        
     
    }

   
   


}



module.exports = new TopVendasProdutosController();



