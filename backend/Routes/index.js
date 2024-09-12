
const express = require('express');
const router = express.Router()

// Importa as rotas de cada rotina
const financeiroRoutes = require('./financeiro/index');
//const vendasRoutes = require('./vendas');
//const estoqueRoutes = require('./estoque');
//const fiscalContabilRoutes = require('./fiscal-contabil');


// Define as rotas principais para cada rotina
router.use('/financeiro', financeiroRoutes);
//router.use('/vendas', vendasRoutes);
//router.use('/estoque', estoqueRoutes);
//router.use('/fiscal-contabil', fiscalContabilRoutes);



module.exports = router;
