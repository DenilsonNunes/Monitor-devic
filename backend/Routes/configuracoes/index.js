const express = require('express');
const router = express.Router();

// Importa as rotas das subrotinas
const usuariosRoutes = require('./usuariosRoutes');
const envioDeEmailsRoutes = require('./envioDeEmailsRoutes');



// Define as rotas principais das subrotinas de configuracoes
router.use('/usuarios', usuariosRoutes);
router.use('/envio-de-emails', envioDeEmailsRoutes);





module.exports = router;
