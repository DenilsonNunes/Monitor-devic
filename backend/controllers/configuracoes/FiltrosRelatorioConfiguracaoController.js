// Services
const FiltrosRelatorioConfiguracaoService  = require('../../services/configuracoes/filtrosRelatorioConfiguracaoService');




class FiltrosRelatorioConfiguracaoController {
    
    async editarUsuario(req, res) {

        const { codFunc } = req.params
        
      
        try {
 
            const data = await FiltrosRelatorioConfiguracaoService.editarUsuario(codFunc);

            res.status(200).json(data);
 
        } catch(err) {
 
            res.status(500).json({ message: err.message });
 
        }
        
    }



    async cadastroUsuario(req, res) {


        try {
 
            const data = await FiltrosRelatorioConfiguracaoService.cadastroUsuario();

            res.status(200).json(data);
 
        } catch(err) {
 
            res.status(500).json({ message: err.message });
 
        }
        
    }

  

}



module.exports = new FiltrosRelatorioConfiguracaoController();



