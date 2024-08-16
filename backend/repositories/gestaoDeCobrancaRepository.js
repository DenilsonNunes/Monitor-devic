const sqlQuery = require('../db/SQL/query/query');


class GestaoDeCobrancaRepository {

    static getClientesEmDebito = async () => {
        
        const data = sqlQuery(
        `
            SELECT top 22 
                CodRedCt, 
                RzsCli as cliente, 
                0 as totalvencfiltro, 
                ValCtRecVencido, 
                TotalDebitoOrig - ValCtRecVencido as totalavencer, 
                TotalDebitoOrig, 
                TotalDebitoAtualiz - TotalDebitoOrig as multajuros, 
                TotalDebitoAtualiz, 
                QtdTit, 
                convert(char(23),VencMaisAntigo,121) as vencMaisAntigo, 
                DiasVcto, 
                RzsCli, 
                NomeFantCli, 
                Fone1Cli, 
                Fone2Cli, 
                EMailCli, 
                CGCCPFCli, 
                FaxCli as fone3cli, 
                CodSegCli, 
                MsgFin, MsgFin1, MsgFin2, MsgFin3, MsgFin4, MsgFin5, MsgFin6, 
                PrevVenc 
            from 
                dbo.vmClientesComDebito 
            where 
                CodRedCt in (Select 
                                CtDevCtRec 
                            from 
                                TbCtRec
                            where SitCtRec in ('R','T') 
                            and DtQuitCtRec is null 
                            and Coalesce(DtProrrogCtRec, DtVctoCtRec) < Convert(Varchar, GETDATE(),111)
                            and CodEmpr in (0,'1','2','3') and CtCredCtRec not in (8306,20768,8433,8400) -- verificar deve ser das outras empresas
                            GROUP by CtDevCtRec) 
            order by CodRedCt asc
        
        `);
        
        

        return data;
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




module.exports = GestaoDeCobrancaRepository;