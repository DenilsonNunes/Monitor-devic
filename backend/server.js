const express = require('express');
const cors = require('cors');

const app = express();


// Importa rotas principais
const routes = require('./routes/index');


const verificaServicoAtivo = require('../backend/services/verificaServicoAtivo');




// Config JSON response
app.use(express.json());

// configura acesso o acesso a API na mesma rede ou dominio
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));



//verificaServicoAtivo();


//Rota principal
app.use('/api', routes);



 


// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
  
  