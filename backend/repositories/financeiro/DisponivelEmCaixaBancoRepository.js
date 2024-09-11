const sqlQuery = require('../../db/SQL/query/query');


class DisponivelEmCaixaBancoRepository {

    static disponivelEmCaixaEbanco = async () => {
    
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


        const caixasPorEmpresa = async (undEmpresa, tipoCt) => {
            
            const data = await sqlQuery(
            `
            SELECT 
                DescrCxBco, 
                SaldoDinh+ChqDisp as dinh_chqdisp, 
                CodCxBco, 
                SaldoCxBco, 
                SaldoDinh, 
                TipoCt, 
                rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)) as empresa 
            from tbSaldoCxBcoTmp 
                Join TbEmpr on (TbEmpr.CodEmpr=tbSaldoCxBcoTmp.CodEmpr) 
                where tbSaldoCxBcoTmp.CodEmpr in (0,'1','2','3') 
                and (rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)) = '1-MATRIZ' 
                and TipoCt = '1-CONTAS CAIXAS') 
                order by rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)) asc, TipoCt asc         
            `)

            return data;
        }

        const teste = caixasPorEmpresa();

      
        return { totalTodasEmpresas, totalPorEmpresa, teste};
    }
 


}




module.exports = DisponivelEmCaixaBancoRepository;