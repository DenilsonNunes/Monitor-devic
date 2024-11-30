const express = require('express');
const router = express.Router()


const UsuariosController = require('../../controllers/configuracoes/UsuariosController');
const FiltrosRelatorioConfiguracaoController = require('../../controllers/configuracoes/FiltrosRelatorioConfiguracaoController');




router.get('/', UsuariosController.listarTodos);
router.get('/filtros-relatorio', FiltrosRelatorioConfiguracaoController.listarTodos);





module.exports = router;




