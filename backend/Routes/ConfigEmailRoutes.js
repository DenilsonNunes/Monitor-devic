const express = require('express');
const router = express.Router()


const ConfigEmailController = require('../controllers/ConfigEmailController');





router.get('/envio-email/titulo-a-vencer', ConfigEmailController.getConfigTitAvencer);

// Altera configurações servidor SMTP
router.patch('/envio-email/edit/config-smtp', ConfigEmailController.updateConfigServidorSMTPEmail);

// Altera opções para envio de email
router.patch('/envio-email/edit', ConfigEmailController.updateConfigEnvEmail);

// Testa conexão com o servidor SMTP
router.get('/envio-email/teste-conexao', ConfigEmailController.testConnection);


    



module.exports = router;




