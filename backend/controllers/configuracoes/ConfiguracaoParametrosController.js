// Services
const ConfiguracaoParametrosService  = require('../../services/configuracoes/parametros/ConfiguracaoParametrosService');




class ConfiguracaoParametrosController {
    
    async getAllParameters(req, res) {

  
      
        try {
 
            const data = await ConfiguracaoParametrosService.getAllParameters();

            res.status(200).json(data);
 
        } catch(err) {
 
            res.status(500).json({ message: err.message });
 
        }
        
    }


  

}



module.exports = new ConfiguracaoParametrosController();



