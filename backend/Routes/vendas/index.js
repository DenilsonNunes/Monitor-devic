const express = require('express');
const router = express.Router();

// Importa as rotas das subrotinas
const topVendasProdutosRoutes = require('./topVendasProdutosRoutes');



// Define as rotas principais da rotina financeiro
router.use('/top-vendas-produtos', topVendasProdutosRoutes);




module.exports = router;
