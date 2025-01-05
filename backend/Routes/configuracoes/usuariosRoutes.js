const express = require('express');
const router = express.Router()


const ConfigUsuariosController = require('../../controllers/configuracoes/ConfigUsuariosController');
const FiltrosRelatorioConfiguracaoController = require('../../controllers/configuracoes/FiltrosRelatorioConfiguracaoController');




router.get('/', ConfigUsuariosController.listarTodos);
router.delete('/:codFunc', ConfigUsuariosController.deletar);
router.post('/cadastrar', ConfigUsuariosController.cadastrar);
router.patch('/editar/:codFunc', ConfigUsuariosController.editar);



//--------------------------------------FILTROS DOS MODAIS CADASTRAR E EDITAR-----------------------------------------------
// Editar usuários
router.get('/filtros-relatorio/:codFunc', FiltrosRelatorioConfiguracaoController.editarUsuario);

// Cadastro de usuário
router.get('/filtros-relatorio', FiltrosRelatorioConfiguracaoController.cadastroUsuario);






module.exports = router;




