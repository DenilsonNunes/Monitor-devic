const express = require('express');
const router = express.Router()


const TarefasDiariaController = require('../controllers/TarefasDiariaController');





router.get('/envio-email', TarefasDiariaController.envioEmailTitulosAvencer);



module.exports = router;




