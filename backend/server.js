const express = require('express');
const cors = require('cors');

const app = express();


// Importa rotas principais
const routes = require('./routes/index');



// Config JSON response
app.use(express.json());

// configura acesso o acesso a API na mesma rede ou dominio
app.use(cors({ 

    credentials: true, 
    origin:'*', //process.env.SERVER_PORT_FRONT,
    methods: ["GET", "POST", 'PUT', "PATCH", "DELETE"] 

}));



//Rota principal
app.use('/api', routes);



// Inicia o servidor
app.listen(3000,  () => {
    console.log('Servidor iniciado na porta 3000');
});
  
  