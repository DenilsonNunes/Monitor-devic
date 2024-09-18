// Services
const analiseEstoqueObsoletoDesnecesarioService = require('../../services/estoque/analiseEstoqueObsoletoDesnecessarioService');



class AnaliseEstoqueObsoletoDesnecesarioController {
    

    async filtrosRelatorio(req, res) {

        try {
            const result = await analiseEstoqueObsoletoDesnecesarioService.filtrosRelatorio();
            
            res.status(200).json(result);
 
        } catch(err) {
 
            res.status(500).json({ message: err.message });
 
        }
        
     
    }



}



module.exports = new AnaliseEstoqueObsoletoDesnecesarioController();
