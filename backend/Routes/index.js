
const express = require('express');
const router = express.Router()

// Importa as rotas de cada rotina
const financeiroRoutes = require('./financeiro/index');
const estoqueRoutes = require('./estoque/index');
const authRoutes = require('./auth/authRoutes');


//const vendasRoutes = require('./vendas');
//const fiscalContabilRoutes = require('./fiscal-contabil');


// Define as rotas principais para cada rotina
router.use('/financeiro', financeiroRoutes);
router.use('/estoque', estoqueRoutes);



router.use('/auth', authRoutes);

//router.use('/vendas', vendasRoutes);
//router.use('/fiscal-contabil', fiscalContabilRoutes);



module.exports = router;
