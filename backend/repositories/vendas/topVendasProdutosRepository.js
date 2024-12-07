const sqlQuery = require('../../db/SQL/query/query');
const sqlQueryDelete = require('../../db/SQL/queryDelete');


class TopVendasProdutosRepository {

   
    static consultaTopVendasProdutosGeral = async (userCodFunc, filtroRel) => {
        

        const { top, empresa, codFunc, dataInicio, dataFim, undProd, calculaPor } = filtroRel;


        let calcularPorAddFiltros = ''
        let queryAddFiltros = '';



        if (dataInicio) {
            queryAddFiltros += `dtVnd >= '${dataInicio}'`;
        }
        if (dataFim) {
            queryAddFiltros += ` AND dtVnd <= '${dataFim}'`;
        }
        if (codFunc) {
            queryAddFiltros += ` AND CodVend = '${codFunc}'`;
        }
        if (empresa) {
            queryAddFiltros += ` AND Empresa IN (${empresa})`;
        }
        if (undProd) {
            queryAddFiltros += ` AND UndItem IN (${undProd})`;
        }

        // Verifica se o Calulcar por é "VALOR" ou "QUANTIDADE"
        if(calculaPor === "V") {
            calcularPorAddFiltros = "PrecoVndTotItem"
        } else {
            calcularPorAddFiltros = "QtdItem"
        }


        // Busca no parametros do monitor regras para a pesquisa, codigo de plano de venda
        const planoVnd = await sqlQuery(
        `    
            SELECT
                Idconfig,
                DescrConfig,
                ValorConfigText
            FROM 
                tmConfig
            WHERE 
                idConfig = 24                
        `
        );


        // Se o plano de venda possui regras para exclusão, adiciona esse filtro na query
        if(planoVnd[0].ValorConfigText.length > 0) {

            queryAddFiltros += ` AND CodPlanoVnd NOT IN (${planoVnd[0].ValorConfigText})`;
            
        } 


        console.log('No repository', queryAddFiltros)


        try {

           await sqlQueryDelete(
            `
                -- Deleta os dados existentes na tabela TOP10_Produtos para o usuário específico

                DELETE FROM MonitorBlue..TOP10_Produtos
                WHERE CodFuncLogin = '${userCodFunc}'; -- PASSAR VARIAVEL AQUI
    

                
                -- Insere os novos dados

                INSERT INTO MonitorBlue..TOP10_Produtos
                SELECT * 
                FROM (
                    SELECT 
                        ROW_NUMBER() OVER (ORDER BY SUM(${calcularPorAddFiltros}) DESC) AS Ordem, 
                        CodItem, 
                        DescrItem, 
                        UndItem, 
                        SUM(QtdItem) AS QtdItem, 
                        SUM(PrecoVndTotItem) AS PrecoVndTotItem, 
                        '${userCodFunc}' AS CodFuncLogin
                    FROM 
                        dbo.vmVndItemDoc
                    WHERE 
                        ${queryAddFiltros}           
                    GROUP BY 
                        CodItem, 
                        DescrItem, 
                        UndItem
                ) AS TbTopCliAux
                WHERE Ordem <= ${top} -- PASSAR VARIAVEL AQUI EX.: TOP 10, 20, 30 E ASSIM POR DIANTE
                ORDER BY ${calcularPorAddFiltros} DESC;
                
            `);


            // Retorna os dados para o Front
            const data = await sqlQuery(
                `                   
                    SELECT 
                        Ordem, 
                        CodItem, 
                        DescrItem, 
                        UndItem, 
                        QtdItem, 
                        TotalVnd 
                    from 
                        MonitorBlue..TOP10_Produtos  
                    where 
                        (CodFuncLogin = '${userCodFunc}') 
                    order by Ordem asc                    
            `);


            // Preenche os dados de filtros do relatório no front
            const filtroRel = async () => {

                const codUndEmpr = await sqlQuery(
                `                   
                    SELECT 
                        rtrim(ltrim(Convert(Varchar, CodEmpr))) as CodEmpr, 
                        UndEmpr  
                    FROM TbEmpr  
                        ORDER BY CodEmpr                
                `);
    
                const codNomeFunc = await sqlQuery(
                `                   
                    select 
                        CodFunc, 
                        NomeFunc
                    from 
                        TbFunc 
                    where 
                        CodFunc in ( Select CodFunc from TbFuncVnd) 
                        and  Ativo = 'S' order by NomeFunc            
                `);

                const codFuncaoFunc = await sqlQuery(
                `                   
                    SELECT 
                        CodFuncaoFunc, 
                        NomeFuncaoFunc  
                    FROM 
                        TbFuncaoFunc  
                    ORDER BY 
                        NomeFuncaoFunc         
                `);

                const unidadeProd = await sqlQuery(
                `           
                    SELECT 
                        CodUnd, 
                        DescrUnd  
                    FROM
                        TbUnd  
                    ORDER BY DescrUnd      
                `);

                return { codUndEmpr, codNomeFunc, codFuncaoFunc, unidadeProd }
    
            }

            const dataFiltroRel=  await filtroRel();

            return {data, dataFiltroRel};

            
        } catch (error) {
            throw new Error(`Erro ao executar consulta: ${error}`)
        }


 
    } 
    


 
}




module.exports = TopVendasProdutosRepository;




























/*
-- Deleta os dados existentes na tabela TOP10_Produtos para o usuário específico
DELETE FROM MonitorBlue..TOP10_Produtos
WHERE CodFuncLogin = '00001'; -- PASSAR VARIAVEL AQUI

-- Insere os novos dados
INSERT INTO MonitorBlue..TOP10_Produtos
SELECT * 
FROM (
    SELECT 
        ROW_NUMBER() OVER (ORDER BY SUM(PrecoVndTotItem) DESC) AS Ordem, 
        CodItem, 
        DescrItem, 
        UndItem, 
        SUM(QtdItem) AS QtdItem, 
        SUM(PrecoVndTotItem) AS PrecoVndTotItem, 
        '00001' AS CodFuncLogin
    FROM 
        dbo.vmVndItemDoc
    WHERE 
        dtVnd >= '2023-01-01' -- PASSAR VARIAVEL AQUI
        AND dtVnd <= '2999-01-01'
        AND CodPlanoVnd NOT IN (0) -- PASSAR VARIAVEL AQUI
        AND 1 = 1
    GROUP BY 
        CodItem, 
        DescrItem, 
        UndItem
) AS TbTopCliAux
WHERE Ordem <= 5 -- PASSAR VARIAVEL AQUI EX.: TOP 10, 20, 30 E ASSIM POR DIANTE
ORDER BY PrecoVndTotItem DESC;








//PESQUISA PRODUTOS VENDIDOS PARA UM CLIENTE 

SELECT 
    CodCli, 
    RzsCli, 
    SUM(QtdItem) AS qtditem, 
    SUM(CustoRepTotItem) AS custoreptotal, 
    SUM(PrecoVndTotItem) AS precovndtotal
FROM 
    vmVndItemDoc
WHERE 
    DtVnd >= '2023-01-01'
    AND DtVnd <= '2998-01-01'
    AND CodPlanoVnd NOT IN (0)
    AND 1 = 1
    AND CodItem = 00008 -- PASSAR VARIAVEL AQUI, CÓD DO PRODUTO
GROUP BY 
    CodCli, 
    RzsCli






*/
