const sqlQuery = require('../../db/SQL/query');


class AnaliseEstoqueObsoletoDesnecesarioRepository {


    static consultaEstoqueObsoletoDesnecesario = async () => {

        const data = await sqlQuery(
        `
            /*

            Deleta a view de analise de estoque e depois insere novamente
            Alimenta a tabela de analise de estoque obsoleto

            */

            DELETE FROM MonitorBlue..cons_vmAnaliseEstq 
            WHERE CodFuncLogin = '00001';

            INSERT INTO MonitorBlue..cons_vmAnaliseEstq 
            SELECT * 
            FROM (
                SELECT 
                    CodEmpr,
                    CodItem,
                    DescrItem,
                    CodMarca,
                    CodGrpItem,
                    CodSubGrpItem,
                    DescrMarca,
                    QtdEstqDisp = QtdEstqDisp,
                    DtUltVnd, 
                    DtUltVndAux,
                    QtdUltCmp, 
                    DtUltCmp, 
                    CodRedCt, 
                    FornecUltCmp,
                    CONVERT(Numeric(18, 2), (
                        SELECT ISNULL(SUM(QtdVndItem), 0)
                        FROM vmAnaliseEstqVnd qtdSai
                        WHERE 
                            CodEmpr = vmAnaliseEstqItem.CodEmpr 
                            AND CodItem = vmAnaliseEstqItem.CodItem 
                            AND DtVnd >= '2024-06-18'  -- PASSAR VARIAVEL AQUI
                            AND DtVnd <= '2024-09-16' -- PASSAR VARIAVEL AQUI
                            AND CodPlanoVnd NOT IN ('036', '029', '050')
                    )) AS QtdVndItem,
                    CustoRepProd,
                    VlrEstq,
                    DiasSemVnd,
                    QtdPendPedCmp, 
                    CodFuncLogin = '00001'
                FROM dbo.vmAnaliseEstqItem
                WHERE CodEmpr IN ('2') -- PASSAR VARIAVEL AQUI
            ) AS TbAux
            WHERE CodEmpr IN (0, '1', '2', '3');

            
            /*SELECT NA VIEW PARA APRESENTAR OS PRODUTOS COM ESTOQUE OBSOLETO E DESNECESSÁRIO*/

            SELECT 
                CodEmpr,
                CodItem,
                DescrItem,
                DescrMarca,
                QtdPendPedCmp,
                QtdUltCmp,
                convert(char(23),DtUltCmp,121) as DtUltimaCompra,
                FornecUltCmp,
                convert(char(23),DtUltVnd,121) as DtUltimaVenda,
                DiasSemVnd,
                QtdEstqDisp,
                CustoRepProd,
                VlrEstq,
                QtdVndItem,
                CodMarca,
                CodGrpItem,
                CodSubGrpItem,
                convert(char(23),DtUltVndAux,121)
            FROM 
                MonitorBlue..cons_vmAnaliseEstq
            WHERE 
                CodFuncLogIN = '00001'
            ORDER BY 
                CodEmpr asc, CodItem asc
        
        `);
        

        return data;

    }

    static filtrosRelatorio = async () => {

        const grupoItem = await sqlQuery(
        `
            SELECT 
                CodGrpItem, 
                DescrGrpItem  
            FROM 
                TbGrpItem  
            ORDER BY 
                DescrGrpItem
        `);

        const subGrupoItem = await sqlQuery(
        `
            SELECT 
                CodSubGrpItem, 
                DescrSubGrpItem  
            FROM 
                TbSubGrpItem 
            where 
                CodGrpItem  IN ('''')  -- PASSAR VARIAVEL
            ORDER BY 
                DescrSubGrpItem                            
        `);

        const marca = await sqlQuery(
        `
            SELECT 
                CodMarca, 
                DescrMarca  
            FROM
                TbMarca  
            ORDER BY 
                DescrMarca                
        `);

        const alocacaoEstoque = await sqlQuery(
        `
            SELECT 
                distinct CodAloc, 
                NomeAloc  
            FROM 
                TbAlocProdPatr  
            ORDER BY 
                NomeAloc
        `);


        const codEmpr = await sqlQuery(
        `
            SELECT 
                rtrim(ltrim(Convert(varchar, CodEmpr))) as codigoEmpr, 
                UndEmpr 
            FROM
                TbEmpr  
            ORDER BY 
                CodEmpr        

        `);
        
        return { grupoItem, subGrupoItem, marca, alocacaoEstoque, codEmpr }

    }


}



module.exports = AnaliseEstoqueObsoletoDesnecesarioRepository;