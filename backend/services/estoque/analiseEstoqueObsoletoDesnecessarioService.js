


const analiseEstoqueObsoletoDesnecesarioRepository = require('../../repositories/estoque/analiseEstoqueObsoletoDesnecesarioRepository');


class AnaliseEstoqueObsoletoDesnecessarioService {

    static filtrosRelatorio = async () => { 

        return await analiseEstoqueObsoletoDesnecesarioRepository.filtrosRelatorio();

    }


}




module.exports = AnaliseEstoqueObsoletoDesnecessarioService;