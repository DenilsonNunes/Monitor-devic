
const express = require('express');
const router = express.Router();

const AnaliseEstoqueObsoletoDesnecesarioController = require('../../controllers/estoque/AnaliseEstoqueObsoletoDesnecesarioController');



//analise-estoque-obsoleto-desnecessario
router.get('/filtros-rel', AnaliseEstoqueObsoletoDesnecesarioController.filtrosRelatorio);



module.exports = router;
