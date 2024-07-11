const cron = require('node-cron');

const sqlQuery = require('../db/SQL/query/query');

const filtraHoraMinutosDoDateTime = require('../utils/Formats/filtraHoraMinutosDoDateTime')

const emailAutomationService = require('../services/emailAutomationService');
const { SelectConfigEnvEmail } = require('../db/SQL/Configurações/Configurações-de-Email/SELECT/configuracoesEnvEmail')



const verificaServicoAtivo = async () =>{

    // Query nas consfigurações de e-mail
    const result = await sqlQuery(SelectConfigEnvEmail.todasConfig());
    const configEnvEmail = result[0];


    // Verifica se o envio de e-mail automatico para titulos a receber esta ATIVO, se tiver, envia os email de acordo com as configurações
    if(configEnvEmail.EnvEmailAutAVenc !== "N" && configEnvEmail.configEnvEmail !== null) {

        const result =  filtraHoraMinutosDoDateTime( configEnvEmail.HsIniEmailAutAVenc).split(":"); 

        const horas = result[0]
        const minutos = result[1]

        console.log(configEnvEmail.EnvEmailAutAVenc)

        console.log(horas, minutos)

        if(configEnvEmail.EnvEmailAutAVenc === "D") {
            cron.schedule(`${minutos} ${horas} * * *`, () => {
                emailAutomationService.titulosAVencer();
                console.log('Teste!!!');
            });
        }

        if(configEnvEmail.EnvEmailAutAVenc === "H") {
            cron.schedule('26 18 * * *', () => {
                emailAutomationService.titulosAVencer();
                console.log('Teste!!!');
            });
        }

    }

    // Verifica se o envio de e-mail automatico para Cobrança esta ATIVO, se tiver, envia os email de acordo com as configurações
    if(configEnvEmail.EnvEmailAutCobr !== "N" && configEnvEmail.EnvEmailAutCobr !== null) {

    }

    // Verifica se o envio de e-mail automatico para Gestor esta ATIVO, se tiver, envia os email de acordo com as configurações
    if(configEnvEmail.EnvEmailAut !== "N" && configEnvEmail.EnvEmailAut !== null) {

    }
    
 
}



module.exports = verificaServicoAtivo;