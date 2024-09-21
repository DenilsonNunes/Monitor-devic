const userRepository = require('../repositories/userRepository');
const jwt = require('jsonwebtoken');



class AuthService {

  async login(user, password) {

    // Procura o usuário no repositório
    const userIdFunc = await userRepository.findByUser(user);


  
    if (Object.keys(userIdFunc).length === 0) {

      throw new Error('Usuário não encontrado');
      
    }

    const userCodFunc = userIdFunc[0].CodFunc;



    // Verifica a senha
    const isMatch = await userRepository.checkPassword(userCodFunc, password);

    console.log('e compativel', isMatch[0].password)

    if (isMatch[0].password === 'FALSE') {

      throw new Error('Senha incorreta');

    }


    // Gera o token JWT
    const token = jwt.sign({ id: userCodFunc }, 'secret_key', { expiresIn: '1h' });

    return { token, userIdFunc };

  }
}


module.exports = new AuthService();
