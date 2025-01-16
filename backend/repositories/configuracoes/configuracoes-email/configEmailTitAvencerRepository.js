const sqlQuery = require('../../../db/SQL/query');
const sqlQueryUpate = require('../../../db/SQL/queryUpdate');



class ConfigEmailTitAvencerRepository {

   
    static testConnection = async () => {
   

        const data = await sqlQuery(
            `                   
                SELECT * FROM tmConfigteste
                WHERE Modulo = 'Vendas'
             `
        );

        return data
       
    } 


    // Configurações de e-mail para teste
    static sendEmailTest = async () => {

        
        const data = await sqlQuery(
            `      
                SELECT 
                    SMTPServerTitAVenc,
                    SMTPUsuarioTitAVenc,
                    SMTPSenhaTitAVenc,
                    PortaTitAVenc,
                    TpConexaoTitAVenc,
                    MailAssuntoTitAVenc,
                    MailMsgTitAVenc,
                    HsIniEmailAutAVenc,
                    HsIntEmailAutAVenc,
                    EnvEmailAutAVenc,
                    DiasAVencEmailAutAVenc
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




module.exports = ConfigEmailTitAvencerRepository;







