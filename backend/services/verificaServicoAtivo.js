const cron = require('node-cron');

const sqlQuery = require('../db/SQL/query/query');
const sendEmailService = require('../services/sendEmailService');



const verificaServicoAtivo = async () =>{

    let envioEmailAut = await sqlQuery(
        `           
        select
            EnvEmailAutAVenc, --(Enviar email automatico ? "N" = não, "D" = diario, "H" = horas);
            EnvEmailAut,      --(Gestor "N" = não, "D" = diario, "H" = horas)
            EnvEmailAutCobr
        from tmConfigEmail

        `
    );

    envioEmailAut = envioEmailAut[0]


    // Verifica se o envio de e-mail automatico para titulos a receber esta ATIVO, se tiver, envia os email de acordo com as configurações
    if(envioEmailAut.EnvEmailAutAVenc !== "N" && envioEmailAut.envioEmailAut !== null) {
        cron.schedule('03 22 * * *', () => {
            sendEmailService();
            console.log('Teste!!!');
        });
    }

    // Verifica se o envio de e-mail automatico para Cobrança esta ATIVO, se tiver, envia os email de acordo com as configurações
    if(envioEmailAut.EnvEmailAutCobr !== "N" && envioEmailAut.EnvEmailAutCobr !== null) {

    }

    // Verifica se o envio de e-mail automatico para Gestor esta ATIVO, se tiver, envia os email de acordo com as configurações
    if(envioEmailAut.EnvEmailAut !== "N" && envioEmailAut.EnvEmailAut !== null) {

    }
    
 
}



module.exports = verificaServicoAtivo;