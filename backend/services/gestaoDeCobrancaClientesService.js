const sqlQuery = require('../db/SQL/query/query')




class GestaoDeCobrancaClientesService {

    static getClientesEmDebito = async () => { 

    }

    static criarCobranca = async () => {

    }

    static excluirCobranca = async () => {

        // Filtrando quais chaves desejo
        let filtros = ['CtDevCtRec','DtLctoCtRec','NrLctoCtRec','NrDocCtRec','NomeFantCli','ValCtRec','NrParcDocCtRec','DtVctoCtRec','TotParcDocCtRec','CodEspDocCtRec', 'EMailCli'];
    

        try {
           
            
        } catch (err) {
    
            throw new Error(err.message);
    
        }
    
    
    }

    static consultarHistoricoDeCobranca = async () => {

        // Filtrando quais chaves desejo
        let filtros = ['CtDevCtRec','DtLctoCtRec','NrLctoCtRec','NrDocCtRec','NomeFantCli','ValCtRec','NrParcDocCtRec','DtVctoCtRec','TotParcDocCtRec','CodEspDocCtRec', 'EMailCli'];
    

        try {
           
            
        } catch (err) {
    
            throw new Error(err.message);
    
        }
    
    
    }


}




module.exports = GestaoDeCobrancaClientesService;