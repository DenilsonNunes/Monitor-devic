const GestaoDeCobrancaRepository = require('../repositories/gestaoDeCobrancaRepository');


class GestaoDeCobrancaClientesService {

    static getClientesEmDebito = async (search) => { 

        let searchNew;
        // se a pesquisa vir como undefined, colocar % para buscar todos
        if (search === undefined) {
            searchNew = '%';
        } else {
            searchNew = search;
        }

        return await GestaoDeCobrancaRepository.getClientesEmDebito(searchNew);

    }

    static titulosDoClienteEmDebito = async (codCliente) => {
        return await GestaoDeCobrancaRepository.titulosDoClienteEmDebito(codCliente);
    }

    static criarCobranca = async (data) => {
        return await GestaoDeCobrancaRepository.criarCobranca(data);
    }

    static excluirCobranca = async () => {
        return await GestaoDeCobrancaRepository.excluirCobranca()
    }

    static consultarHistoricoDeCobranca = async (codCliente) => {

        return await GestaoDeCobrancaRepository.consultarHistoricoDeCobranca(codCliente);
    
    }


}




module.exports = GestaoDeCobrancaClientesService;