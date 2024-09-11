const express = require('express');
const router = express.Router();

// Importa as rotas das subrotinas
const disponivelEmCaixaBancoRoutes = require('./disponivelEmCaixaBancoRoutes');



// Define as rotas principais da rotina financeiro
router.use('/disponivel-em-caixa-e-banco', disponivelEmCaixaBancoRoutes);




module.exports = router;
