const UsuariosRepository = require('../../repositories/configuracoes/usuariosRepository');


class UsuariosService {


    static listarTodos = async () => {

        const data  = await UsuariosRepository.listarTodos();

        return data
        
    }



    static deletar = async (codFunc) => {

        return await UsuariosRepository.deletar(codFunc);

    }

   


}




module.exports = UsuariosService;


















