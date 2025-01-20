const sqlQuery = require('../../../db/SQL/query');
const sqlQueryUpate = require('../../../db/SQL/queryUpdate');



class ConfigEmailCobrancaRepository {

   
    static testConnection = async () => {
   

        const data = await sqlQuery(
            `                   
                SELECT 
                    SMTPServerCobr,
                    SMTPUsuarioCobr,
                    SMTPSenhaCobr,
                    PortaCobr,
                    TpConexaoCobr     
                FROM 
                    tmConfigEmail
             `
        );

        return data
       
    } 


    // Configurações de e-mail para teste
    static sendEmailTest = async () => {

        
        const data = await sqlQuery(
            `      
                SELECT 
                    SMTPServerCobr,
                    SMTPUsuarioCobr,
                    SMTPSenhaCobr,
                    PortaCobr,
                    TpConexaoCobr,
                    MailAssuntoCobr,
                    MailMsgCobr,
                    HsIniEmailAutCobr,
                    HsIntEmailAutCobr,
                    EnvEmailAutCobr,
                    DiasVencEmailAutCobr        
                FROM 
                    tmConfigEmail
             `
        );

        return data
       
    } 




    static getConfig = async () => {

        

        const data = await sqlQuery(
            `                   
                SELECT * FROM tmConfigteste
                WHERE Modulo = 'Vendas'
             `
        );

        return data
       
    } 




    static updateConfigServerSmtp = async () => {

        

        const data = await sqlQuery(
            `                   
                SELECT * FROM tmConfigteste
                WHERE Modulo = 'Vendas'
             `
        );

        return data
       
    } 



    static updateConfigMessage= async () => {

        

        const data = await sqlQuery(
            `                   
                SELECT * FROM tmConfigteste
                WHERE Modulo = 'Vendas'
             `
        );

        return data
       
    } 
    


 
}




module.exports = ConfigEmailCobrancaRepository;







