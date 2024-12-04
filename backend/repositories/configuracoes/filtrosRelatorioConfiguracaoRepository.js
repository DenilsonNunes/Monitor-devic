const sqlQuery = require('../../db/SQL/query/query');


class FiltrosRelatorioConfiguracaoRepository {

   
    static listarTodos = async ( ) => {


        try {


            const funcionarios = await sqlQuery(
                
                `                                        
                    SELECT 
                        CodFunc, 
                        NomeFunc  
                    FROM 
                        TbFunc  
                    WHERE 
                        Ativo = 'S'
                        AND CodFunc NOT IN (
                            SELECT CodFunc
                            FROM tmConfigFunc
                            WHERE CodFunc NOT IN (
                                SELECT CodFunc
                                FROM TbFunc
                                WHERE Ativo = 'N'
                            )
                        )
                    ORDER BY nomefunc
                
                `
            );

            const telaInicial = await sqlQuery(
                `
                    SELECT 
                        idAplicacao, 
                        NomeAmigavelAplic  
                    FROM
                        tmAplicacoes  
                    WHERE Tipo = 'A' or idAplicacao in (163,164) 
                    ORDER BY NomeAmigavelAplic
               
                `
            )

            const empresa = await sqlQuery(
                `
                    SELECT
                        CodEmpr,
                        NomeFantEmpr
                    FROM 
                        TbEmpr
                    order by CodEmpr             
                `
            )


            return {funcionarios, telaInicial, empresa}


        } catch (error) {

            throw new Error(`Erro ao executar consulta: ${error}`)

        }
        
            
    } 
    
}




module.exports = FiltrosRelatorioConfiguracaoRepository;







