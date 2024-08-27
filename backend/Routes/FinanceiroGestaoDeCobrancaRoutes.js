const express = require('express');
const router = express.Router()


const FinanceiroGestaoDeCobrancaController = require('../controllers/FinanceiroGestaoDeCobrancaController');



router.get('/clientes-em-debito', FinanceiroGestaoDeCobrancaController.getClientesEmDebito);
router.get('/clientes-em-debito/:codCliente/titulos', FinanceiroGestaoDeCobrancaController.titulosDoClienteEmDebito);
router.get('/clientes-em-debito/historico-cobranca/:codCliente', FinanceiroGestaoDeCobrancaController.consultarHistoricoDeCobranca);

router.post('/criar-cobranca', FinanceiroGestaoDeCobrancaController.criarCobranca);
router.delete('/clientes-em-debito/historico-cobranca/excluir/:id', FinanceiroGestaoDeCobrancaController.excluirCobranca);




    



module.exports = router;




