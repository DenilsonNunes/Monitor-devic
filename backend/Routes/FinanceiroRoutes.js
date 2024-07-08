const express = require('express');
const router = express.Router()


const FinanceiroController = require('../controllers/FinanceiroController');



router.get('/contas-a-receber', FinanceiroController.contasAreceber);



    



module.exports = router;




