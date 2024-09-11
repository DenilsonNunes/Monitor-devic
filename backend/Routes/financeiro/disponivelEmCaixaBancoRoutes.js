
const express = require('express');
const router = express.Router();
const DisponivelEmCaixaBancoController = require('../../controllers/financeiro/DisponivelEmCaixaBancoController');

// Define as rotas da subrotina Gestão de Cobrança
router.get('/', DisponivelEmCaixaBancoController.disponivelEmCaixaEbanco);   // Lista todas as cobranças

module.exports = router;
