// Repositories
const GestaoDeCobrancaRepository = require('../repositories/gestaoDeCobrancaRepository')


// Formats
const removeEspacoFinal = require('../utils/Formats/removeEspacoFinal');


class FinanceiroGestaoDeCobrancaController {
    

    async getClientesEmDebito(req, res) {

        const search = req.query.nome

     
        
        try {
 
            const result = await GestaoDeCobrancaRepository.getClientesEmDebito(search);
 
            const data = removeEspacoFinal(result);
 
            res.status(200).json(data);
 
        } catch(err) {
            console.log('Erro interno: ', err);
            res.status(500).json({ message: err.message });
        }
        
        
       

    
    }

    async titulosDoClienteEmDebito(req, res) {

        try {

            const result = await GestaoDeCobrancaRepository.titulosDoClienteEmDebito();

            const data = removeEspacoFinal(result);

            res.status(200).json(data);

        } catch(err) {

            res.status(500).json({ message: err.message });

        }
    }



    async criarCobranca(req, res) {
        
        try {

            const result = await GestaoDeCobrancaRepository.criarCobranca();

            res.status(200).json({ message: result });


        } catch(err) {
            console.log('Erro interno: ', err);
            res.status(500).json({ message: err.message });
        }
    
    }

    
    async excluirCobranca(req, res) {
        
        try {

            const result = await GestaoDeCobrancaRepository.excluirCobranca();

            res.status(200).json({ message: result });


        } catch(err) {
            console.log('Erro interno: ', err);
            res.status(500).json({ message: err.message });
        }
    
    }


}




module.exports = new FinanceiroGestaoDeCobrancaController();
