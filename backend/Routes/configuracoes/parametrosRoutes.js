const express = require('express');
const router = express.Router()


const ConfiguracaoParametrosController = require('../../controllers/configuracoes/ConfiguracaoParametrosController');


router.get('/', ConfiguracaoParametrosController.getAllParameters);
router.put('/editar/:codParametro', ConfiguracaoParametrosController.updateParameterById);




module.exports = router;




