const FiltrosRelatorioConfiguracaoRepository = require('../../repositories/configuracoes/FiltrosRelatorioConfiguracaoRepository');




class FiltrosRelatorioConfiguracaoService {


    static editarUsuario = async (codFunc) => {

        const data = await FiltrosRelatorioConfiguracaoRepository.editarUsuario(codFunc);

        console.log('Como vem o data', data);


        const empresaAcessoFunc = data.empresaAcessoFunc.map(item => item.CodEmpr.trim())


        console.log('Qual o tipo de empresaAcesso func', empresaAcessoFunc)

    
        return { 
            codFunc: codFunc,
            empresaAcessoFunc 
        }
        
    }



    static cadastroUsuario = async () => {

        return await FiltrosRelatorioConfiguracaoRepository.cadastroUsuario();
        
    }

   

}




module.exports = FiltrosRelatorioConfiguracaoService ;


















