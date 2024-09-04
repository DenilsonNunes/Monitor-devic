const FinanceiroRepository = require('../repositories/financeiroRepository');


class FinanceiroService {


    static disponivelEmCaixaEbanco = async () => {

        return await FinanceiroRepository.disponivelEmCaixaEbanco();
        
    }



}




module.exports = FinanceiroService;