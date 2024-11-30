const FiltrosRelatorioConfiguracaoRepository = require('../../repositories/configuracoes/FiltrosRelatorioConfiguracaoRepository');




class FiltrosRelatorioConfiguracaoService {


    static listarTodos = async () => {

        return await FiltrosRelatorioConfiguracaoRepository.listarTodos();
        
    }

   


}




module.exports = FiltrosRelatorioConfiguracaoService ;


















