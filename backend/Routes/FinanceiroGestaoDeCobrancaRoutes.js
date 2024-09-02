const express = require('express');
const router = express.Router()


const FinanceiroGestaoDeCobrancaController = require('../controllers/FinanceiroGestaoDeCobrancaController');



router.get('/clientes-em-debito', FinanceiroGestaoDeCobrancaController.getClientesEmDebito);
router.get('/clientes-em-debito/:codCliente/titulos', FinanceiroGestaoDeCobrancaController.titulosDoClienteEmDebito);
router.get('/clientes-em-debito/:codCliente/historico-cobranca', FinanceiroGestaoDeCobrancaController.consultarHistoricoDeCobranca);

router.post('/clientes-em-debito/criar-cobranca', FinanceiroGestaoDeCobrancaController.criarCobranca);
router.delete('/clientes-em-debito/:codCliente/historico-cobranca/:idLctoCobr', FinanceiroGestaoDeCobrancaController.excluirCobranca);




    



module.exports = router;




