const express = require('express');
const router = express.Router()


const ConfiguracaoParametrosController = require('../../controllers/configuracoes/ConfiguracaoParametrosController');


router.get('/', ConfiguracaoParametrosController.getAllParameters);




module.exports = router;




