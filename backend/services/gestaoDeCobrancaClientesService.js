const sqlQuery = require('../db/SQL/query/query')




class GestaoDeCobrancaClientesService {

    static getClientesEmDebito = async () => { 

    }

    static criarCobranca = async () => {
        const insert = `
        
            INSERT INTO dbo.tmHistCobranca (idLctoCobr, CodCli, CodFuncCobr, DtHrLcto, DtHrAlt, DtHrCobr, DtHrAgenda, NomeCnttCli, HistCobranca) 
            VALUES (7, 1950, ''00001'', ''2024-08-15 19:17:09'', null, ''20240815 19:16:00:000'', ''20240816 00:00:00:000'', ''teste'', ''teste'')'
        
        
        `;
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