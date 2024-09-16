
const express = require('express');
const router = express.Router();

const DisponivelEmCaixaBancoController = require('../../controllers/financeiro/DisponivelEmCaixaBancoController');

// Define as rotas da subrotina Gestão de Cobrança

//disponivel-em-caixa-e-banco/
router.get('/', DisponivelEmCaixaBancoController.consultaSaldoGeralContas);
router.get('/caixa/:CodCxBco', DisponivelEmCaixaBancoController.consultaSaldoDetalhadoConta);



module.exports = router;
