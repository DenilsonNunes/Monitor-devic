
const express = require('express');
const router = express.Router();

const DisponivelEmCaixaBancoController = require('../../controllers/financeiro/DisponivelEmCaixaBancoController');

// Define as rotas da subrotina Gestão de Cobrança

//disponivel-em-caixa-e-banco/
router.get('/', DisponivelEmCaixaBancoController.consultaSaldoGeralContas);
router.get('/filtros', DisponivelEmCaixaBancoController.consultaSaldoGeralContasFiltro);
router.get('/caixa/:CodCxBco', DisponivelEmCaixaBancoController.consultaSaldoDetalhadoConta);
router.get('/banco/:CodCxBco', DisponivelEmCaixaBancoController.consultarSaldoCaixaEbanco);
router.get('/aplicacao-financeira/:CodCxBco', DisponivelEmCaixaBancoController.consultarSaldoCaixaEbanco);   







module.exports = router;
