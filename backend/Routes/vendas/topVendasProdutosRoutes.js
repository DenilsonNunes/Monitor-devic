const express = require('express');
const router = express.Router()


const TopVendasProdutosController = require('../../controllers/vendas/TopVendasProdutosController');


// Vendas/
router.get('/', TopVendasProdutosController.consultaTopVendasGeral);



    

module.exports = router;




