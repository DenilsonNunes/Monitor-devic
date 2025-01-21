const express = require('express');
const router = express.Router()


const ConfigEmailCobrancaController = require('../../controllers/configuracoes/configuracoes-email/ConfigEmailCobrancaController');




/*------------------------------- COBRANCA --------------------------------- */

router.get('/cobranca/teste-conexao-server', ConfigEmailCobrancaController.testConnection);
router.get('/cobranca', ConfigEmailCobrancaController.getConfig);


/*---------------------------------- FIM ----------------------------------- */






/*------------------------- TITULOS A VENCER ------------------------------- */



/*---------------------------------- FIM ----------------------------------- */







module.exports = router;




