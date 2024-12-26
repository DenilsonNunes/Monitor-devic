const FiltrosRelatorioConfiguracaoRepository = require('../../repositories/configuracoes/FiltrosRelatorioConfiguracaoRepository');




class FiltrosRelatorioConfiguracaoService {


    static editarUsuario = async (codFunc) => {

        return await FiltrosRelatorioConfiguracaoRepository.editarUsuario(codFunc);
        
    }

    static cadastroUsuario = async () => {

        return await FiltrosRelatorioConfiguracaoRepository.cadastroUsuario();
        
    }

   

}




module.exports = FiltrosRelatorioConfiguracaoService ;


















