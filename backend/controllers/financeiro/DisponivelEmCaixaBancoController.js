// Services
const DisponivelEmCaixaBancoService = require('../../services/financeiro/DisponivelEmCaixaBancoService');



class DisponivelEmCaixaBancoController {
    

    async disponivelEmCaixaEbanco(req, res) {

        try {
 
            const result = await DisponivelEmCaixaBancoService.disponivelEmCaixaEbanco();

          
 
            //const data = removeEspacoFinal(result);
 
            res.status(200).json(result);
 
        } catch(err) {
 
            res.status(500).json({ message: err.message });
 
        }
        
     
    }

}



module.exports = new DisponivelEmCaixaBancoController();
