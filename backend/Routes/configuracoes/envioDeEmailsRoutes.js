const express = require('express');
const router = express.Router()


const ConfigEmailTitAvencerController = require('../../controllers/configuracoes/configuracoes-email/ConfigEmailTitAvencerController');


// titulos a vencer
router.get('/titulo-a-vencer', ConfigEmailTitAvencerController.getConfig);

// Testa conexão com o servidor SMTP
router.get('/envio-email/teste-conexao', ConfigEmailTitAvencerController.testConnection);


// Cobranca







module.exports = router;




