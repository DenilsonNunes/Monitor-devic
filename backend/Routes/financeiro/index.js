const express = require('express');
const router = express.Router();

// Importa as rotas das subrotinas
const gestaoDeCobranca = require('./gestaoDeCobranca');
const disponivelEmCaixaBancoRoutes = require('./disponivelEmCaixaBancoRoutes');




// Define as rotas principais da rotina financeiro
router.use('/gestao-de-cobranca', gestaoDeCobrancaClientesEmDebitoRoutes);
router.use('/disponivel-em-caixa-e-banco', disponivelEmCaixaBancoRoutes);




module.exports = router;
