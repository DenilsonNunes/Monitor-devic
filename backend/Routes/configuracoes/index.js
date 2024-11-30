const express = require('express');
const router = express.Router();

// Importa as rotas das subrotinas
const usuariosRoutes = require('./usuariosRoutes');


// Define as rotas principais das subrotinas de configuracoes
router.use('/usuarios', usuariosRoutes);





module.exports = router;
