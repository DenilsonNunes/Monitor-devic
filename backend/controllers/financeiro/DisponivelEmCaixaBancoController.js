

// Services
const FinanceiroService = require('../../services/financeiro/FinanceiroService');




class DisponivelEmCaixaBancoController {
    

    async disponivelEmCaixaEbanco(req, res) {

        try {
 
            const result = await FinanceiroService.disponivelEmCaixaEbanco();

          
 
            //const data = removeEspacoFinal(result);
 
            res.status(200).json(result);
 
        } catch(err) {
 
            res.status(500).json({ message: err.message });
 
        }
        
     
    }

}



module.exports = new DisponivelEmCaixaBancoController();
