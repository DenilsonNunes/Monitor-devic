const express = require('express');
const router = express.Router()


const ConfiguracoesController = require('../controllers/ConfiguracoesController');





router.get('/envio-email/titulo-a-vencer', ConfiguracoesController.getConfigTitAvencer);

// Altera configurações servidor SMTP
router.patch('/envio-email/edit/config-smtp', ConfiguracoesController.updateConfigServidorSMTPEmail);

// Altera opções para envio de email
router.patch('/envio-email/edit', ConfiguracoesController.updateConfigEnvEmail);

// Testa conexão com o servidor SMTP
router.get('/envio-email/teste-conexao', ConfiguracoesController.testConnection);

router.post('/envio-email/teste-titulos-a-vencer', ConfiguracoesController.envioEmailTeste);



    



module.exports = router;




