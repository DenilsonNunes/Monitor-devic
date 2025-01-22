const express = require('express');
const router = express.Router()


const ConfigEmailCobrancaController = require('../../controllers/configuracoes/configuracoes-email/ConfigEmailCobrancaController');




/*------------------------------- COBRANCA --------------------------------- */

router.get('/cobranca/teste-conexao-server', ConfigEmailCobrancaController.testConnection);
router.get('/cobranca', ConfigEmailCobrancaController.getConfig);
router.patch('/cobranca/server-smtp', ConfigEmailCobrancaController.updateConfigServerSmtp);

/*---------------------------------- FIM ----------------------------------- */






/*------------------------- TITULOS A VENCER ------------------------------- */



/*---------------------------------- FIM ----------------------------------- */







module.exports = router;




