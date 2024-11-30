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
                    Where 
                        Ativo = 'S' 
                    ORDER BY NomeFunc
                
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







