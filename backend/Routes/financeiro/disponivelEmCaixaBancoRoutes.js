
const express = require('express');
const router = express.Router();

const DisponivelEmCaixaBancoController = require('../../controllers/financeiro/DisponivelEmCaixaBancoController');

// Define as rotas da subrotina Gestão de Cobrança
router.get('/', DisponivelEmCaixaBancoController.consultaSaldoGeralContas);
router.get('/caixas', DisponivelEmCaixaBancoController.consultarSaldoCaixaEbanco);
router.get('/bancos', DisponivelEmCaixaBancoController.consultarSaldoCaixaEbanco);
router.get('/aplicacao-financeira', DisponivelEmCaixaBancoController.consultarSaldoCaixaEbanco);   







module.exports = router;
