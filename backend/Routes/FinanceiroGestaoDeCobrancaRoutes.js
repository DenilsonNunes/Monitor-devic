const express = require('express');
const router = express.Router()


const FinanceiroGestaoDeCobrancaController = require('../controllers/FinanceiroGestaoDeCobrancaController');



router.get('/clientes-em-debito', FinanceiroGestaoDeCobrancaController.getClientesEmDebito);
router.post('/criar-cobranca', FinanceiroGestaoDeCobrancaController.criarCobranca);
router.delete('/clientes-em-debito', FinanceiroGestaoDeCobrancaController.excluirCobranca);




    



module.exports = router;




