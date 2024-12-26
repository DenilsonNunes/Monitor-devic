const sqlQuery = require('../../db/SQL/query/query');
const sqlQueryDelete = require('../../db/SQL/queryDelete');
const sqlQueryInsert = require('../../db/SQL/queryInsert');




class ConfigUsuariosRepository {

   
    static listarTodos = async (offSet, limitPage) => {

        let queryAddFiltros = '';

        if (limitPage >= 0 && offSet >= 0) {

            queryAddFiltros += `OFFSET ${offSet} ROWS FETCH NEXT ${limitPage} ROWS ONLY`;

        }

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
                    A.NomeAmigavelAplic as descrAplicacao,
                    STRING_AGG(CAST(FE.CodEmpr AS VARCHAR), ', ') AS EmpresasAcesso
                FROM 
                    tmConfigFunc as C
                INNER JOIN TbFunc as F ON C.CodFunc = F.CodFunc
                INNER JOIN tmAplicacoes as A ON A.idAplicacao = C.TelaInicial
                INNER JOIN tmConfigFuncEmpr as FE ON C.CodFunc = FE.CodFunc
                GROUP BY
                    C.CodFunc,
                    F.IdFunc,
                    F.Ativo,
                    F.NomeFunc,
                    C.CustoRel,
                    C.SomenteVendaSuperVnd,
                    A.idAplicacao,
                    A.NomeAmigavelAplic
                ORDER BY 
                    F.NomeFunc
                ${queryAddFiltros}
            `
        );

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

    
    static cadastrar = async (codFunc, telaInicial, custoRel, somenteVendaSuperVnd, empresas) => {
        
        let queryAddFuncEmpr = '';

        if(empresas.length > 1) {

            empresas.forEach((codEmpr) => {
                queryAddFuncEmpr += `
                  INSERT INTO tmConfigFuncEmpr (CodFunc, CodEmpr) 
                  VALUES ('${codFunc}', '${codEmpr}');
                `;
            });
               
        } else {

            queryAddFuncEmpr += `
                INSERT INTO tmConfigFuncEmpr (CodFunc, CodEmpr) 
                VALUES ('${codFunc}', '${empresas[0]}');
            `;
        }


        const result = await sqlQueryInsert(
            `                   
                INSERT INTO tmConfigFunc (CodFunc, TelaInicial, CustoRel, SomenteVendaSuperVnd) 
                VALUES ('${codFunc}', ${telaInicial}, '${custoRel}', '${somenteVendaSuperVnd}')

                ${queryAddFuncEmpr}
  
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




module.exports = ConfigUsuariosRepository;







