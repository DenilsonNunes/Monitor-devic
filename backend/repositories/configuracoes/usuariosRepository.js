const sqlQuery = require('../../db/SQL/query/query');
const sqlQueryDelete = require('../../db/SQL/queryDelete');



class UsuariosRepository {

   
    static listarTodos = async ( ) => {
        

        const data = await sqlQuery(
            `                   
                SELECT
                    C.CodFunc,
                    F.IdFunc,
                    F.Ativo as AtivoBlue,
                    F.NomeFunc,
                    C.CustoRel,
                    C.SomenteVendaSuperVnd,
                    A.idAplicacao,
                    A.NomeAmigavelAplic as descrAplicacao
                FROM 
                    tmConfigFunc as C
                INNER JOIN TbFunc as F ON C.CodFunc = F.CodFunc
                INNER JOIN tmAplicacoes as A ON A.idAplicacao = C.TelaInicial

            `
        );


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


        return data

            
 
    } 
    

    static deletar = async (codFunc) => {
        

        const result = await sqlQueryDelete(
            `                   
                DELETE FROM 
                    tmConfigFuncEmpr 
                WHERE 
                    CodFunc = ${codFunc} 

                DELETE FROM 
                    tmConfigFunc
                WHERE 
                    CodFunc = ${codFunc} 
            `
        );

        return result

    }
    
    static editar = async (codFunc) => {
        

        const data = await sqlQuery(
            `                   
                DELETE FROM 
                    tmConfigFuncEmpr 
                WHERE 
                    CodFunc = ${codFunc} 
                AND CodEmpr = '3'

            `
        );

        return data

    }
    
    

 
}

/*

			SELECT 
				t1.CodEmpr,
				CASE 
					WHEN EXISTS (
						SELECT 
							1 
						FROM 
							tmConfigFuncEmpr t2 
						WHERE t2.CodEmpr = t1.CodEmpr and t2.CodFunc = 00001) THEN 'S'
					ELSE 'N'
				END AS ExisteEmTabela2
			FROM TbEmpr t1
			order by t1.CodEmpr



*/


module.exports = UsuariosRepository;







