// Services
const AuthService = require('../services/authService');


class AuthController {
    

    async login(req, res) {

        const { user }  = req.body;

        console.log(user);

        try {

            console.log('chegou aqui controller', user);

            const  result = await AuthService.login(user);
 
            res.json({ message: 'Login realizado com sucesso', result });
 
          } catch (error) {
 
            res.status(400).json({ error: error.message });
 
          }
        
       

        
     
    }


    


}



module.exports = new AuthController();
