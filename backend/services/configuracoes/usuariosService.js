const UsuariosRepository = require('../../repositories/configuracoes/usuariosRepository');


class UsuariosService {


    static listarTodos = async (page, pageSize) => {

        
        // Receber o numero da pagina, quando não é enviado atribui o numero da pagina 1
        const currentPage = parseInt(page) || 1;
        console.log('SERVICE: Qual o valor da pagina', currentPage)

        
        // Limite de registro por pagina
        const limitPage = parseInt(pageSize) || 10;
        console.log('SERVICE: Qual o valor do tamanho da pagina', limitPage)
        
        
    
        // Contar a quantidade de registros no banco
        let countUsers = await UsuariosRepository.listarTodos();
        countUsers = countUsers.length

        console.log('SERVICE: Quantos registros tem no banco', countUsers)

        let lastPage
        if(countUsers !== 0) {
            // Calulcar ultima pagina
            lastPage = Math.ceil((countUsers / limitPage))
            console.log('SERVICE: Calculo ultima pagina', lastPage)

        }

    
        // Desvio da paginação  (1 * 10)=10    (10-10)=0
        const offSet = (currentPage * limitPage) - limitPage;
        console.log('SERVICE: Qual o valor do desvio das paginas', offSet)


        const users = await UsuariosRepository.listarTodos(offSet, limitPage);

        const data = {
            currentPage,
            lastPage,
            prev_pag: currentPage - 1 >= 1 ? currentPage -1 : false,
            next_page: currentPage + 1 <= lastPage ? currentPage + 1 : false,
            users
        }

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


















