const sqlQuery = require('../../db/SQL/query/query');

const sqlQueryInsert = require('../../db/SQL/query/queryInsert');
const sqlQueryDelete = require('../../db/SQL/queryDelete');




class GestaoDeCobrancaRepository {

    static getClientesEmDebito = async (search) => {

        let CodCliente;
        let linhaSql;
        // Verifica se o que vem na pesquisa é um número. Se for, busco somente pelo código do cliente; se não, busco pelo nome.
        if(typeof search === 'number') {
            CodCliente = search;
            linhaSql = `CodRedCt = ${CodCliente}`
        } else {
            linhaSql = `RzsCli like '%${search}%'`
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
                            and CodRedCt not in (87) -- REMOVE CONSUMIDOR FINAL
                            and ${linhaSql}
                            and Coalesce(DtProrrogCtRec, DtVctoCtRec) < Convert(Varchar, GETDATE(),111)
                            and CodEmpr in (0,'1','2','3') and CtCredCtRec not in (8306,20768,8433,8400) -- verificar deve ser das outras empresas
                            GROUP by CtDevCtRec) 
            order by CodRedCt asc
            
        `);
      
        return data;
    }

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

    static criarCobranca = async (data) => {

        const { codCliente, nomeContatoCliente, dataCobranca, agendarParaData,  msgHistoricoCobranca } = data;

        // pega o proximo numero do idLctoCobr
        const [result] = await sqlQuery(
        `
            SELECT 
                COALESCE(MAX(idLctoCobr) + 1, 1) AS maiorNumero 
            FROM 
                tmHistCobranca
        `);
    
        // insere um novo registro na tmHistCobranca com o proximo numero obtido acima
        const insert = await sqlQueryInsert(
        `
            INSERT INTO dbo.tmHistCobranca (idLctoCobr, CodCli, CodFuncCobr, DtHrLcto, DtHrAlt, DtHrCobr, DtHrAgenda, NomeCnttCli, HistCobranca) 
            VALUES (${result.maiorNumero}, '${codCliente}', '00001', GETDATE(), null, '${dataCobranca}', '${agendarParaData}', '${nomeContatoCliente}', '${msgHistoricoCobranca}')
        
        `);
        
        return insert;
       
    }

    static excluirCobranca = async (CodCliente, idLctoCobr) => {

        const data = await sqlQueryDelete(
        `
            DELETE tmHistCobranca
            WHERE idLctoCobr = ${idLctoCobr}
            AND CodCli = ${CodCliente}
                
        `);
    
        return data;
       
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