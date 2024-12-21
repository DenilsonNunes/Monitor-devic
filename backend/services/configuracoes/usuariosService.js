const UsuariosRepository = require('../../repositories/configuracoes/usuariosRepository');


class UsuariosService {


    static listarTodos = async (page, pageSize) => {

        
        // Receber o numero da pagina, quando não é enviado atribui o numero da pagina 1
        const currentPage = parseInt(page) || 1;


        
        // Limite de registro por pagina
        const limitPage = parseInt(pageSize) || 10;

        
        
    
        // Contar a quantidade de registros no banco
        let countUsers = await UsuariosRepository.listarTodos();
        countUsers = countUsers.length



        let lastPage
        if(countUsers !== 0) {
            // Calulcar ultima pagina
            lastPage = Math.ceil((countUsers / limitPage))

        }

    
        // Desvio da paginação  (1 * 10)=10    (10-10)=0
        const offSet = (currentPage * limitPage) - limitPage;



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




    static cadastrar = async (codFunc, telaInicial, custoRel, somenteVendaSuperVnd, empresas) => {

        if (!codFunc) {
            return { sucesso: false, message: "O campo 'codigo do funcionário' é obrigatório." };
        }

        if (!telaInicial) {
            return { sucesso: false, message: "O campo 'tela inicial' é obrigatório." };
        }

        if (!custoRel) {
            return { sucesso: false, message: "O campo 'visualizar custo do produto' é obrigatório." };
        }

        if (!somenteVendaSuperVnd) {
            return { sucesso: false, message: "O campo 'visualizar vendas' é obrigatório." };
        }

        if (empresas.length <= 0) {
            return { sucesso: false, message: "E necessário informar ao menos uma empresa para o acesso." };
        }





        try {

            const result  = await UsuariosRepository.cadastrar(codFunc, telaInicial, custoRel, somenteVendaSuperVnd, empresas);

            if(result.includes('sucesso')){

                return {sucesso: true, message: result}

            } else {

                return { sucesso: false, message: 'Houve um erro ao cadastrar usuário!!!'}

            }

        } catch (error){

            throw new Error("Erro ao cadastrar o usuário: " + error.message)

        }
    
       
     

    }

   


}




module.exports = UsuariosService;


















