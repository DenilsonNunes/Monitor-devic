// Services
const { password } = require('../db/connection/conn');
const AuthService = require('../services/authService');


class AuthController {
    
  async login(req, res) {

    const { user, password }  = req.body;

      try {

          const { token, userCodFunc } = await AuthService.login(user, password);

          res.status(200).json({message: 'Login realizado com sucesso', token, userCodFunc});

      } catch (error) {

          res.status(422).json({ message: error.message });
      }              
        
     
  }
  
  
  async teste(req, res) {


      try {

        res.json({ message: 'Teste realizado com sucesso, passou do middleware!'});

      } catch (error) {

        res.status(422).json({ error: error.message });
      
      }              
        
     
  }    

}



module.exports = new AuthController();
