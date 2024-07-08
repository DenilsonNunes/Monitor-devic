const express = require('express');
const router = express.Router()


const TesteApiKey = require('../controllers/TesteApiKey');





router.get('/teste',TesteApiKey.ApiKey);



module.exports = router;




