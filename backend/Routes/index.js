
const express = require('express');
const router = express.Router()

// Importa as rotas de cada rotina
const financeiroRoutes = require('./financeiro/index');
const estoqueRoutes = require('./estoque/index');
const authRoutes = require('./auth/authRoutes');
const vendasRoutes = require('./vendas/index');



const authMiddleware = require('../middlewares/authMiddleware');


//const fiscalContabilRoutes = require('./fiscal-contabil');


// Define as rotas principais para cada rotina
//router.use('/financeiro', authMiddleware, financeiroRoutes);
router.use('/financeiro', financeiroRoutes);
router.use('/estoque', estoqueRoutes);
router.use('/vendas', authMiddleware, vendasRoutes);



router.use('/auth', authRoutes);

//router.use('/fiscal-contabil', fiscalContabilRoutes);



module.exports = router;
