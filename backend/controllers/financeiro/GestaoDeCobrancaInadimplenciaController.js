
// Services
const GestaoDeCobrancaInadimplenciaService = require('../../services/financeiro/GestaoDeCobrancaInadimplenciaService');

// Utils

const removeEspacoFinal = require('../../utils/formats/removeEspacoFinal');


class GestaoDeCobrancaInadimplenciaController {
    
    async getClientesEmDebito(req, res) {

        const search = req.query.nome;
     
        try {
 
            const result = await GestaoDeCobrancaInadimplenciaService.getClientesEmDebito(search);
            
            const data = removeEspacoFinal(result);
            

            res.status(200).json(data);
 
        } catch(err) {
            console.log('Erro interno: ', err);
            res.status(500).json({ message: err.message });
        }
        
        
    
    }

    async titulosDoClienteEmDebito(req, res) {

        const { codCliente } = req.params;


        try {
 
            const result = await GestaoDeCobrancaInadimplenciaService.titulosDoClienteEmDebito(codCliente);
 
            const data = removeEspacoFinal(result);
 
            res.status(200).json(data);
 
        } catch(err) {
 
            res.status(500).json({ message: err.message });
 
        }
        
     
    }



    async criarCobranca(req, res) {

        const data = req.body;
        
     
        try {
 
            const result = await GestaoDeCobrancaInadimplenciaService.criarCobranca(data);
            
            res.status(200).json({message: result});
 
 
        } catch(err) {
            console.log('Erro interno: ', err);
            res.status(500).json({ message: err.message });
        }
        
        
        
    
    }

    
    async excluirCobranca(req, res) {

        const { codCliente, idLctoCobr } = req.params;
        
        try {

            const result = await GestaoDeCobrancaInadimplenciaService.excluirCobranca(codCliente, idLctoCobr);

            res.status(200).json({message: result});


        } catch(err) {
            console.log('Erro interno: ', err);
            res.status(500).json({ message: err.message });
        }
    
    }

        
    async consultarHistoricoDeCobranca(req, res) {

        const { codCliente } = req.params;
        
        try {

            const result = await GestaoDeCobrancaInadimplenciaService.consultarHistoricoDeCobranca(codCliente);


            res.status(200).json(result);


        } catch(err) {
            console.log('Erro interno: ', err);
            res.status(500).json({ message: err.message });
        }
    
    }

}



module.exports = new GestaoDeCobrancaInadimplenciaController();
