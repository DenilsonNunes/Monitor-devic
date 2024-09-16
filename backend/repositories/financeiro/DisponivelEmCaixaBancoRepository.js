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
                SaldoDinh+ChqDisp as SaldoDinhChqDisp,
                CodCxBco, 
                SaldoCxBco, 
                SaldoDinh, 
                TipoCt, 
                rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)) as empresa 
            from tbSaldoCxBcoTmp 
                Join TbEmpr on (TbEmpr.CodEmpr=tbSaldoCxBcoTmp.CodEmpr) 
                where tbSaldoCxBcoTmp.CodEmpr in (0,'1','2','3') -- FILTRO POR EMPRESA
                --and TipoCt = '1-CONTAS CAIXAS' -- FILTRO POR TIPO DE CONTA
                order by rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)) asc, TipoCt asc    
        `);
        
        return data;

    }

    //Visualiza o saldo por tipo de cada conta ex: dinheiro e cheque
    static consultaSaldoDetalhadoConta = async (CodCxBco) => {
        
        const data = await sqlQuery(
        `
            SELECT TipoCt,
                    rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)) AS empresa,
                    CodCxBco,
                    DescrCxBco,
                    SaldoCxBco,
                    SaldoDinh,
                    SaldoDinh+ChqDisp AS dinh_chqdisp,
                    TotalChq,
                    ChqAVista,
                    ChqPre,
                    ChqDev,
                    ChqSusp,
                    ChqJurid,
                    ChqParc,
                    ChqCustod,
                    ChqCtpParcial
                FROM tbSaldoCxBcoTmp
            JOIN TbEmpr
                ON (TbEmpr.CodEmpr=tbSaldoCxBcoTmp.CodEmpr)
                WHERE CodCxBco = ${CodCxBco}    
        `)

        return data;
    }

    // Consulta por filtro
    static consultaSaldoGeralContasFiltro = async (empresa, tipoCt) => {

        let sqlFiltros;

        if(tipoCt === '') {
            sqlFiltros = '--'
        } else {
            sqlFiltros = ` AND TipoCt = '${tipoCt}' `;
        }

        const data = await sqlQuery(
        `
            SELECT 
                DescrCxBco, 
                SaldoDinh+ChqDisp as SaldoDinhChqDisp,
                CodCxBco, 
                SaldoCxBco, 
                SaldoDinh, 
                TipoCt, 
                rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)) as empresa 
            from tbSaldoCxBcoTmp 
                Join TbEmpr on (TbEmpr.CodEmpr=tbSaldoCxBcoTmp.CodEmpr) 
                where tbSaldoCxBcoTmp.CodEmpr in (${empresa}) -- FILTRO POR EMPRESA
                ${sqlFiltros} -- FILTRO POR TIPO DE CONTA
                order by rtrim(ltrim(tbSaldoCxBcoTmp.CodEmpr))+'-'+rtrim(ltrim(UndEmpr)) asc, TipoCt asc        
        `)

        return data;
    }



}




module.exports = DisponivelEmCaixaBancoRepository;