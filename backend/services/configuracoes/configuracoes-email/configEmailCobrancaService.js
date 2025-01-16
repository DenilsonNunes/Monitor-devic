const ConfigEmailCobrancaRepository= require('../../../repositories/configuracoes/configuracoes-email/configEmailCobrancaRepository');




class ConfigEmailCobrancaService {


    static testConnection = async () => {

        return await ConfigEmailCobrancaRepository.testConnection();
        
    }



    static sendEmailTest = async () => {

        return await ConfigEmailCobrancaRepository.sendEmailTest();
        
    }




    static getConfig = async () => {

        return await ConfigEmailCobrancaRepository.getConfig();
        
    }



    static updateConfigServerSmtp = async () => {

        return await ConfigEmailCobrancaRepository.updateConfigServerSmtp();
        
    }



    static updateConfigMessage = async () => {

        return await ConfigEmailCobrancaRepository.updateConfigMessage();
        
    }

 



   

}




module.exports = ConfigEmailCobrancaService;


















