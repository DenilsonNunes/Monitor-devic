const ConfiguracaoParametrosRepository= require('../../../repositories/configuracoes/ConfiguracaoParametrosRepository');




class ConfiguracaoParametrosService {


    static getAllParameters = async () => {

        return await ConfiguracaoParametrosRepository.getAllParameters();

        
    }




   

}




module.exports = ConfiguracaoParametrosService;


















