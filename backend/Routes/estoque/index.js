const express = require('express');
const router = express.Router();


// Importa as rotas das subrotinas
const analiseEstoqueObsoletoDesnecesarioRoutes = require('./analiseEstoqueObsoletoDesnecesarioRoutes');


// Define as rotas principais da rotina ESTOQUE
router.use('/analise-estoque-obsoleto-desnecessario', analiseEstoqueObsoletoDesnecesarioRoutes);



module.exports = router;
