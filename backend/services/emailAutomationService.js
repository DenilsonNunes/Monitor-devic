const sqlQuery = require('../db/SQL/query/query')


// Select configuações e-mail
const { SelectConfigEnvEmail } = require('../db/SQL/Configurações/Configurações-de-Email/SELECT/configuracoesEnvEmail');
// Select contas a receber
const queryContasAreceber = require('../db/SQL/Financeiro/SELECT/contasAreceber');


//const dataAtual = require('../utils/Formats/dataAtualMMDDAAAA');
const diasAVencer = require('../utils/Formats/dataAtualMaisAcrescimo');


// Serviços
const sendEmail = require('./sendEmail');


class EmailAutomationService {

    static cobranca = async () => {

    }

    static titulosAVencer = async () => {


        // Filtrando quais chaves desejo
        let filtros = ['CtDevCtRec','DtLctoCtRec','NrLctoCtRec','NrDocCtRec','NomeFantCli','ValCtRec','NrParcDocCtRec','DtVctoCtRec','TotParcDocCtRec','CodEspDocCtRec', 'EMailCli'];
    
        try {
            // Select na configuração de titulos a vencer
            const configTitulosAvencer = await sqlQuery(SelectConfigEnvEmail.configTitulosAvencer());
    
          
            // Faço um select no contas a receber que vai vencer
            const contasAreceber = await sqlQuery(queryContasAreceber( diasAVencer(configTitulosAvencer[0].DiasAVencEmailAutAVenc), diasAVencer(configTitulosAvencer[0].DiasAVencEmailAutAVenc)), filtros); // Data no formato MM-DD-AAAA
    
         
            //Verificar se tem contas a receber no dia
            if(contasAreceber.length > 0) {
    
                const data = await sendEmail(contasAreceber[0], configTitulosAvencer[0].MailMsgTitAVenc);
        
                return data;
    
            } else {
                console.log('Não tem titulos aberto no dia');
                return 'Não tem titulos em aberto no dia';
    
            }
    
            
    
        } catch (err) {
    
            throw new Error(err.message);
    
        }
    
    
    }

    static aniversario = async () => { 

    }

    static marketing = async () => {

    }

    static gestor = async () => {

    }
}




module.exports = EmailAutomationService;