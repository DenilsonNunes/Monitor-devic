const express = require('express');
const router = express.Router()

const ClientesController = require('../controllers/ClientesController');





// Rota para obter todos os clientes
router.get('/', ClientesController.getAll);



module.exports = router;