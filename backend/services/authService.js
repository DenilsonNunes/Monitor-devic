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

    // Verifica a senha é correta
    const isMatch = await userRepository.checkPassword(userIdFunc[0].CodFunc, password);


    if (isMatch[0].password === 'FALSE') {

      throw new Error('Senha incorreta');

    }

    const userCodFunc = userIdFunc[0].CodFunc;
    const nameUser = userIdFunc[0].IdFunc;


    // Gera o token JWT
    const token = jwt.sign(
      { 
        userCodFunc: userCodFunc 
      }, 
      process.env.SECRET,
      { 
        expiresIn: '5h' 
      }
    );

    return { token, userCodFunc, nameUser };

  }
}


module.exports = new AuthService();
