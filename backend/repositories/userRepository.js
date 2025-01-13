const sqlQuery = require('../db/SQL/query')

class UserRepository {
    
    async findByUser(user) {
        
        return await sqlQuery(
        `
            SELECT 
                IdFunc,
                CodFunc,
                Ativo
            FROM 
                Tbfunc
            WHERE 
                IdFunc = '${user}'
        
        `);
        
    }


    async checkPassword(user, password) {

        return await sqlQuery(
        `
            Declare
            @CodFunc  char(5),
            @Senha  Varchar(8)


            Set @CodFunc = '${user}'  --'00042'
            Set @Senha = '${password}'  --'qw'

            Set @Senha = UPPER(@Senha)


            If (    SELECT CodFunc FROM Tbfunc
                    where CodFunc = @CodFunc and 
                    PWDCOMPARE(@Senha, SenhaFunc) = 1 ) = @CodFunc

            Select password  = 'TRUE'
            else
            Select password  = 'FALSE'                            
            
        `);
    
    }
  
    
}
  
module.exports = new UserRepository();