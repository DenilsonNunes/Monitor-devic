const sqlQuery = require('../../db/SQL/query/query');
const sqlQueryUpate = require('../../db/SQL/queryUpdate');



class ConfiguracaoParametrosRepository {

   
    static getAllParameters = async () => {

        

        const data = await sqlQuery(
            `                   
                SELECT * FROM tmConfigteste
                WHERE Modulo = 'Vendas'
             `
        );

        return data
       
    } 
    
    static updateParameterById = async (codParametro, valorParametro, tipoParametro) => {

        let querySetUpdate;


        if(tipoParametro === 'mes_atual') {

            querySetUpdate = 'ValorConfigText'

        } else if(tipoParametro === 'ano'){

            querySetUpdate = 'ValorConfigText'
            
        } else if(tipoParametro === 'date'){

            querySetUpdate = 'ValorConfigDate'

        } else if(tipoParametro === 'inteiro'){

            querySetUpdate = 'ValorConfigInt'

        }


        const data = await sqlQueryUpate(
            `    
                UPDATE tmConfigteste
                SET ValorConfigText = null, ValorConfigDate = null, ValorConfigInt = null
                WHERE idConfig = '${codParametro}'


                UPDATE tmConfigteste
                SET ${querySetUpdate} = '${valorParametro}'
                WHERE idConfig = '${codParametro}'
             `
        );

        return data
       
    } 
    
            
   
    

    

 
}




module.exports = ConfiguracaoParametrosRepository;







