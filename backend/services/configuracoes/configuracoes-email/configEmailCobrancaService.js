const ConfigEmailCobrancaRepository= require('../../../repositories/configuracoes/configuracoes-email/configEmailCobrancaRepository');


// UTILS
const testConnectionServerSMTP = require('../../../utils/testConnectionServerSMTP')


class ConfigEmailCobrancaService {


    static testConnection = async () => {

        const data = await ConfigEmailCobrancaRepository.testConnection();

        console.log('REsult', data)

        const host = data[0].SMTPServerCobr
        const port = data[0].PoraCobr
        const userEmail = data[0].SMTPUsuarioCobr
        const password = data[0].SMTPSenhaCobr


        const result = await testConnectionServerSMTP(host, port, userEmail, password);

        console.log('Rsult...:', result)

        return result;

        
        
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


















