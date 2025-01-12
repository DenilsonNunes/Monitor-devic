const ConfiguracaoParametrosRepository= require('../../../repositories/configuracoes/ConfiguracaoParametrosRepository');




class ConfiguracaoParametrosService {


    static getAllParameters = async () => {

        return await ConfiguracaoParametrosRepository.getAllParameters();
        
    }

    static updateParameterById = async (codParametro, valorParametro, tipoParametro) => {

        if (!codParametro) {
            return { sucesso: false, message: "O codigo do parametro é obrigatório!" };
        }

        if (!valorParametro) {
            return { sucesso: false, message: "O valor do parametro é obrigatório!" };
        }

        if (!tipoParametro) {
            return { sucesso: false, message: "O tipo do parametro é obrigatório!"};
        }




        try {

            const result = await ConfiguracaoParametrosRepository.updateParameterById(codParametro, valorParametro, tipoParametro);

            if(result.includes('não')){

                return { sucesso: false, message: 'Houve um erro ao editar o paranetro!'}
                
            } else {
                
                return {sucesso: true, message: "Parâmetro alterado com sucesso!!!"}

            }

        } catch (error) {

            throw new Error("Erro ao alterar parametro: " + error.message)

        }


        
    }




   

}




module.exports = ConfiguracaoParametrosService;


















