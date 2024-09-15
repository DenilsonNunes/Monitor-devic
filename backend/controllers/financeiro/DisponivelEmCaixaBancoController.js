// Services
const DisponivelEmCaixaBancoService = require('../../services/financeiro/DisponivelEmCaixaBancoService');



class DisponivelEmCaixaBancoController {
    
    async consultarSaldoCaixaEbanco(req, res) {

        try {
 
            const result = await DisponivelEmCaixaBancoService.consultarSaldoCaixaEbanco();
 
            res.status(200).json(result);
 
        } catch(err) {
 
            res.status(500).json({ message: err.message });
 
        }
        
     
    }

    async consultaSaldoGeralContas(req, res) {

        try {
 
            const result = await DisponivelEmCaixaBancoService.consultaSaldoGeralContas();
 
            res.status(200).json(result);
 
        } catch(err) {
 
            res.status(500).json({ message: err.message });
 
        }
        
     
    }

    async consultarSaldoContasBancarias(req, res) {

        try {
 
            const result = await DisponivelEmCaixaBancoService.consultarSaldoContasBancarias();
 
            res.status(200).json(result);
 
        } catch(err) {
 
            res.status(500).json({ message: err.message });
 
        }
        
     
    }

    async consultarSaldoAplicacoesFinanceira(req, res) {

        try {
 
            const result = await DisponivelEmCaixaBancoService.consultarSaldoAplicacoesFinanceira();
 
            res.status(200).json(result);
 
        } catch(err) {
 
            res.status(500).json({ message: err.message });
 
        }
        
     
    }

}



module.exports = new DisponivelEmCaixaBancoController();
