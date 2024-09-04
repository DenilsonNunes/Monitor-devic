const sqlQuery = require('../db/SQL/query/query');

const sqlQueryInsert = require('../db/SQL/query/queryInsert');
const sqlQueryDelete = require('../db/SQL/query/queryDelete');


class FinanceiroRepository {

    static disponivelEmCaixaEbanco = async (search) => {
    
        const totalTodasEmpresas = await sqlQuery(
        `
           /* Rotina de para verificar saldo disponível em Caixas e Bancos */

            /* Total de todas as empresas */

            SELECT count(*),
                    sum(SaldoDinh+ChqDisp) as SaldoDisp,
                    rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)) as UndEmpresa
                FROM tbSaldoCxBcoTmp
            JOIN TbEmpr
                ON (TbEmpr.CodEmpr=tbSaldoCxBcoTmp.CodEmpr)
                WHERE tbSaldoCxBcoTmp.CodEmpr IN (0,'1','2','3')
                GROUP BY  rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr))
            ORDER BY  rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr))





            /* Total por empresa e por tipo de conta */

            SELECT count(*),
                    sum(SaldoDinh+ChqDisp) as SaldoDisp,
                    rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)) as UndEmpresa,
                    TipoCt
                FROM tbSaldoCxBcoTmp
            JOIN TbEmpr
                ON (TbEmpr.CodEmpr=tbSaldoCxBcoTmp.CodEmpr)
                WHERE tbSaldoCxBcoTmp.CodEmpr IN (0, '1','2','3')
                GROUP BY  rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)), TipoCt
            ORDER BY  rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)), TipoCt
            
        `);

        const totalPorEmpresa = await sqlQuery(
        `
            /* Total por empresa e por tipo de conta */

            SELECT count(*),
                    sum(SaldoDinh+ChqDisp) as SaldoDisp,
                    rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)) as UndEmpresa,
                    TipoCt
                FROM tbSaldoCxBcoTmp
            JOIN TbEmpr
                ON (TbEmpr.CodEmpr=tbSaldoCxBcoTmp.CodEmpr)
                WHERE tbSaldoCxBcoTmp.CodEmpr IN (0, '1','2','3')
                GROUP BY  rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)), TipoCt
            ORDER BY  rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)), TipoCt
            
        `);
      
        return { totalTodasEmpresas, totalPorEmpresa};
    }
 


}




module.exports = FinanceiroRepository;