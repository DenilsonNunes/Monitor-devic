const UsuariosRepository = require('../../repositories/configuracoes/usuariosRepository');


class UsuariosService {


    static listarTodos = async () => {

        const data  = await UsuariosRepository.listarTodos();

        return data
        
    }



    static deletar = async (codFunc) => {

        
        
        try {

            const result  = await UsuariosRepository.deletar(codFunc);
            
            if(result.includes('sucesso')){

                return {sucesso: true, message: result}

            } else {

                return { sucesso: false, message: 'Nenhum usuário encontrado para deletar.'}

            }

        } catch (error){

            throw new Error("Erro ao tentar deletar o usuário: " + error.message)

        }


    }

   


}




module.exports = UsuariosService;


















