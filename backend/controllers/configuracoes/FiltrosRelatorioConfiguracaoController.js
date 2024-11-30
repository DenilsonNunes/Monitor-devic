// Services
const FiltrosRelatorioConfiguracaoService  = require('../../services/configuracoes/filtrosRelatorioConfiguracaoService');




class FiltrosRelatorioConfiguracaoController {
    
    async listarTodos(req, res) {

        try {
 
            const data = await FiltrosRelatorioConfiguracaoService.listarTodos();

            res.status(200).json(data);
 
        } catch(err) {
 
            res.status(500).json({ message: err.message });
 
        }
        
    }

  

}



module.exports = new FiltrosRelatorioConfiguracaoController();



