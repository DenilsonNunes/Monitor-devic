const sqlQuery = require('../../db/SQL/query/query');



class ConfiguracaoParametrosRepository {

   
    static getAllParameters = async () => {

        

        const data = await sqlQuery(
            `                   
                SELECT * FROM tmConfigteste
                
            `
        );

        return data
       
    } 
    

    

    

 
}




module.exports = ConfiguracaoParametrosRepository;







