const express = require('express');
const router = express.Router()


const FinanceiroController = require('../controllers/FinanceiroController');



router.get('/contas-a-receber', FinanceiroController.contasAreceber);
router.get('/disponivel-em-caixa-e-banco', FinanceiroController.disponivelEmCaixaEbanco);




    



module.exports = router;




