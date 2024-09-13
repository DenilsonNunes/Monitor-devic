
const express = require('express');
const router = express.Router();

const DisponivelEmCaixaBancoController = require('../../controllers/financeiro/DisponivelEmCaixaBancoController');

// Define as rotas da subrotina Gestão de Cobrança
router.get('/', DisponivelEmCaixaBancoController.consultarSaldoCaixaEbanco);
router.get('/caixas', DisponivelEmCaixaBancoController.disponivelEmCaixaEbanco);
router.get('/bancos', DisponivelEmCaixaBancoController.disponivelEmCaixaEbanco);
router.get('/aplicacao-financeira', DisponivelEmCaixaBancoController.disponivelEmCaixaEbanco);   







module.exports = router;
