const userRepository = require('../repositories/userRepository');
const jwt = require('jsonwebtoken');



class AuthService {

  async login( user, password) {

    // Procura o usuário no repositório
    const userBlue = await userRepository.findByUser(user);

  
    if (Object.keys(userBlue).length === 0) {

      throw new Error('Usuário não encontrado');
      
    }

    return userBlue

    /*
    
    
        // Verifica a senha
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
          throw new Error('Senha incorreta');
        }
    
    
    
        // Gera o token JWT
        const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });
        return { token, user };
    
    
    */

  }
}


module.exports = new AuthService();
