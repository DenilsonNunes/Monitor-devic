const express = require('express');
const router = express.Router()


const ConfigEmailTitAvencerController = require('../../controllers/configuracoes/configuracoes-email/ConfigEmailTitAvencerController');




/*------------------------------- COBRANCA --------------------------------- */



/*---------------------------------- FIM ----------------------------------- */






/*------------------------- TITULOS A VENCER ------------------------------- */

router.get('/titulos-a-vencer', ConfigEmailTitAvencerController.getConfig);

// Testa conexão com o servidor SMTP
router.get('/teste-conexao', ConfigEmailTitAvencerController.testConnection);

/*---------------------------------- FIM ----------------------------------- */







module.exports = router;




