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

    async updateParameterById(req, res) {

        const {codParametro} = req.params;

        const {valorParametro, tipoParametro } = req.body;
      
  
        try {
 
            const data = await ConfiguracaoParametrosService.updateParameterById(codParametro, valorParametro, tipoParametro);
         
            // Verifica se houve erro no retorno
            if (!data.sucesso) {
                return res.status(400).json({ error: data.message });
            }

            res.status(200).json(data);
 
        } catch(err) {
            // Posso soltar o erro em...:  err.message);
            res.status(500).json({ message: "Erro ao alterar o parâmetro. Por favor, tente novamente mais tarde!" });
  
        }

        
    }


  

}



module.exports = new ConfiguracaoParametrosController();



