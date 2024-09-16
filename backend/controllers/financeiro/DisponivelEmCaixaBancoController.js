// Services
const DisponivelEmCaixaBancoService = require('../../services/financeiro/DisponivelEmCaixaBancoService');

// Utils
const removeEspacoFinal = require('../../utils/formats/removeEspacoFinal');


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

    async consultaSaldoDetalhadoConta(req, res) {

        const { CodCxBco } = req.params


            try {
        
                const result = await DisponivelEmCaixaBancoService.consultaSaldoDetalhadoConta(CodCxBco);

                const data = removeEspacoFinal(result);
        
                res.status(200).json(data);
        
            } catch(err) {
        
                res.status(500).json({ message: err.message });
        
            }
        
     
    }
    
    async consultaSaldoGeralContasFiltro(req, res) {

        const { empresa, tipoConta } = req.query

            console.log('filtros', tipoConta, empresa)


            try {
        
                const result = await DisponivelEmCaixaBancoService.consultaSaldoGeralContasFiltro(empresa, tipoConta);

                const data = removeEspacoFinal(result);

        
                res.status(200).json(data);
        
            } catch(err) {
        
                res.status(500).json({ message: err.message });
        
            }
        
     
    }

}



module.exports = new DisponivelEmCaixaBancoController();
