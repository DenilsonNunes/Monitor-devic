const sqlQuery = require('../../db/SQL/query/query');


class DisponivelEmCaixaBancoRepository {

    // Rotina de para verificar saldo disponível em Caixas e Bancos (Total todas as empresas)
    static disponivelEmCaixaEbancoTodasEmpresas = async () => {

        const totalPorEmpresa = await sqlQuery(
        `
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

        const totalTodasEmpresas = await sqlQuery(
        `
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
            

        return { totalPorEmpresa, totalTodasEmpresas}
    } 
    

    // Rotina de para verificar saldo disponível em Caixas, Bancos e Aplicações (Total por empresa)
    static consultaSaldoGeralContas = async () => {

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
                order by rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)) asc, TipoCt asc    
        `);
        
        return data;

    }

    //Visualiza caixas por empresa
    static disponivelEmCaixasPorEmpresa1 = async (undEmpresa, tipoCt) => {
        
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
                order by rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)) asc, TipoCt asc       
        `)

        return data;
    }

    //Visualiza caixas por empresa
    static DisponivelEmBancosPorEmpresa1 = async (undEmpresa, tipoCt) => {
    
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
                and (rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)) = '1-MATRIZ' -- PASSAR VARIAVEL AQUI 
                and TipoCt = '1-CONTAS CAIXAS') -- PASSAR VARIAVEL AQUI 
                order by rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)) asc, TipoCt asc       
        `)

        return data;
    }



}




module.exports = DisponivelEmCaixaBancoRepository;