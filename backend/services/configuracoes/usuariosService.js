const UsuariosRepository = require('../../repositories/configuracoes/usuariosRepository');


class UsuariosService {


    static listarTodos = async () => {

        const data  = await UsuariosRepository.listarTodos();

        return data
        
    }

   


}




module.exports = UsuariosService;


















