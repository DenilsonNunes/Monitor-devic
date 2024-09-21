const sqlQuery = require('../db/SQL/query/query')

class UserRepository {

    async findByUser(user) {

        console.log('chegou aqui repository', user);


        return await sqlQuery(
        `
            SELECT 
                IdFunc
            FROM 
                Tbfunc
            WHERE 
                IdFunc = '${user}'
        
        `);

    }
  
    async createUser(data) {
      const user = new User(data);
      return await user.save();
    }

    
}
  
module.exports = new UserRepository();