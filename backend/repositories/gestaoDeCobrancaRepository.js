const sqlQuery = require('../db/SQL/query/query');


class GestaoDeCobrancaRepository {

    static getClientesEmDebito = async (search) => {


        let searchNew;
        // se a pesquisa vir como undefined, colocar % para buscar todos
        if (search === undefined) {
            searchNew = '%';
        } else {
            searchNew = search;
        }

        
        const data = await sqlQuery(
        `
            SELECT 
                top 15
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
                            and RzsCli like '%${searchNew}%' 
                            and Coalesce(DtProrrogCtRec, DtVctoCtRec) < Convert(Varchar, GETDATE(),111)
                            and CodEmpr in (0,'1','2','3') and CtCredCtRec not in (8306,20768,8433,8400) -- verificar deve ser das outras empresas
                            GROUP by CtDevCtRec) 
            order by CodRedCt asc
            
            
        `);
      
        return data;
    }

    /*
              SELECT	
                    count(*),
                    sum(ValCtRec),
                    sum(Multa+Juros),
                    sum(ValCtRec+Multa+Juros)
                FROM 
                    dbo.vmClientesComDebitoDocs
                WHERE 
                    CtDevCtRec = 1942
                    AND Coalesce(DtProrrogCtRec, DtVctoCtRec) < Convert(Varchar, GETDATE(),111)
                    AND CodEmpr IN (0,'1','2','3')
                    AND CtCredCtRec NOT IN (8306,20768,8433,8400)
    
    */

    static titulosDoClienteEmDebito = async (codCliente) => {

        // Titulos do Cliente em aberto
        const data = await sqlQuery(
        `
            SELECT 
                CodEmpr,
                convert(char(23), DtLctoCtRec, 121) as DtLcto,
                convert(char(23), DtVctoCtRec, 121) as DtVcto,
                DiasAtr,
                CodEspDocCtRec,
                NrDocCtRec,
                Parc,
                ValCtRec,
                Multa+Juros AS multajuros,
                ValCtRec+Multa+Juros AS valorcorrigido,
                CtDevCtRec,
                TpCobrCtRec,
                CtCredCtRec,
                convert(char(23), DtProrrogCtRec, 121),
                TipoTitulo,
                Multa,
                Juros
            FROM 
                dbo.vmClientesComDebitoDocs
            WHERE 
                CtDevCtRec = ${codCliente} -- INFORMAR O CLIENTE
                AND Coalesce(DtProrrogCtRec, DtVctoCtRec) < Convert(Varchar, GETDATE(),111)
                AND CodEmpr IN (0,'1','2','3') -- INFORMAR EMPRESAS A SEREM ANALISADAS
                AND CtCredCtRec NOT IN (8306,20768,8433,8400)
            ORDER BY  TipoTitulo asc, DtVctoCtRec asc
            
        `);
    
        return data;
    }

    static criarCobranca = async (codCliente) => {

        const proxNumero = await sqlQuery(`
            select MAX(idLctoCobr)+1 as maiorNumero  from tmHistCobranca
        `);


        const insert = await sqlQuery(
        `
            INSERT INTO dbo.tmHistCobranca (idLctoCobr, CodCli, CodFuncCobr, DtHrLcto, DtHrAlt, DtHrCobr, DtHrAgenda, NomeCnttCli, HistCobranca) 
            VALUES (${proxNumero}, 1950, ''00001'', ''2024-08-15 19:17:09'', null, ''20240815 19:16:00:000'', ''20240816 00:00:00:000'', ''teste'', ''teste'')
        
        `);
    }

    static excluirCobranca = async () => {

       
    
    }

    static consultarHistoricoDeCobranca = async (codCliente) => {

        const data = await sqlQuery(
        `
            SELECT	
                idLctoCobr,
                CodFuncCobr,
                NomeCnttCli,
                HistCobranca,
                convert(char(23), DtHrCobr, 121) AS DtHrCobr,
                convert(char(23), DtHrAgenda, 121) AS DtHrAgenda,
                convert(char(23), DtHrLcto, 121) AS DtHrLcto,
                convert(char(23), DtHrAlt, 121) AS DtHrAlt,
                CodCli
            FROM 
                dbo.tmHistCobranca
            WHERE 
                (CodCli = ${codCliente}) -- INFORMAR CLIENTE
            ORDER BY  CodCli asc, DtHrCobr desc
            
        `);

        return data;
    
    
    }


}




module.exports = GestaoDeCobrancaRepository;