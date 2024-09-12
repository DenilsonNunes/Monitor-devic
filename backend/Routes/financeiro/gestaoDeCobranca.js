const express = require('express');
const router = express.Router()


const GestaoDeCobrancaClientesEmDebitoController = require('../../controllers/financeiro/GestaoDeCobrancaClientesEmDebitoController');



router.get('/clientes-em-debito', GestaoDeCobrancaClientesEmDebitoController.getClientesEmDebito);
router.get('/clientes-em-debito/:codCliente/titulos', GestaoDeCobrancaClientesEmDebitoController.titulosDoClienteEmDebito);
router.get('/clientes-em-debito/:codCliente/historico-cobranca', GestaoDeCobrancaClientesEmDebitoController.consultarHistoricoDeCobranca);

router.post('/clientes-em-debito/criar-cobranca', GestaoDeCobrancaClientesEmDebitoController.criarCobranca);
router.delete('/clientes-em-debito/:codCliente/historico-cobranca/:idLctoCobr', GestaoDeCobrancaClientesEmDebitoController.excluirCobranca);




    

module.exports = router;




