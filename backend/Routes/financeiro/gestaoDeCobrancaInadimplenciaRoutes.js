const express = require('express');
const router = express.Router()


const GestaoDeCobrancaInadimplenciaController = require('../../controllers/financeiro/GestaoDeCobrancaInadimplenciaController');



router.get('/clientes-em-debito', GestaoDeCobrancaInadimplenciaController.getClientesEmDebito);
router.get('/clientes-em-debito/:codCliente/titulos', GestaoDeCobrancaInadimplenciaController.titulosDoClienteEmDebito);
router.get('/clientes-em-debito/:codCliente/historico-cobranca', GestaoDeCobrancaInadimplenciaController.consultarHistoricoDeCobranca);

router.post('/clientes-em-debito/criar-cobranca', GestaoDeCobrancaInadimplenciaController.criarCobranca);
router.delete('/clientes-em-debito/:codCliente/historico-cobranca/:idLctoCobr', GestaoDeCobrancaInadimplenciaController.excluirCobranca);




    

module.exports = router;




