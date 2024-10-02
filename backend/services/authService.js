const userRepository = require('../repositories/userRepository');
const jwt = require('jsonwebtoken');



class AuthService {

  async login(user, password) {


    // Verifica se usuário existe
    const userIdFunc = await userRepository.findByUser(user);

  
    if (Object.keys(userIdFunc).length === 0) {

      throw new Error('Usuário não encontrado!');
      
    }

    if(userIdFunc[0].Ativo === 'N') {

      throw new Error('Usuário inativo!');

    }

    if(!password) {

      throw new Error('A Senha é obrigatória!');

    }

    const userCodFunc = userIdFunc[0].CodFunc;


    // Verifica a senha é correta
    const isMatch = await userRepository.checkPassword(userCodFunc, password);

    //console.log('e compativel', isMatch[0].password)

    if (isMatch[0].password === 'FALSE') {

      throw new Error('Senha incorreta');

    }


    // Gera o token JWT
    const token = jwt.sign(
      { 
        userCodFunc: userCodFunc 
      }, 
      process.env.SECRET,
      { 
        expiresIn: '1h' 
      }
    );

    return { token, userCodFunc };

  }
}


module.exports = new AuthService();
