const GestaoDeCobrancaRepository = require('../../repositories/financeiro/gestaoDeCobrancaRepository');


class GestaoDeCobrancaClientesEmDebitoService {

    static getClientesEmDebito = async (search) => { 

  

        let searchNew;
        // se a pesquisa vir como undefined, colocar % para buscar todos
        if (search === undefined  || search === ''){
            searchNew = '%';
        } else if (!isNaN(search)) {
            searchNew = Number(search);
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

    static excluirCobranca = async (codCliente, idLctoCobr) => {

        return await GestaoDeCobrancaRepository.excluirCobranca(codCliente, idLctoCobr);

    }

    static consultarHistoricoDeCobranca = async (codCliente) => {

        return await GestaoDeCobrancaRepository.consultarHistoricoDeCobranca(codCliente);
    
    }


}




module.exports = GestaoDeCobrancaClientesEmDebitoService;