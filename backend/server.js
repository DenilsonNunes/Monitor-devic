const express = require('express');
const cors = require('cors');


const verificaServicoAtivo = require('../backend/services/verificaServicoAtivo');



const app = express();

// Config JSON response
app.use(express.json());

// configura acesso o acesso a API na mesma rede ou dominio
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));


// Impotando rotas
const ClientesRoutes = require('./Routes/ClientesRoutes');
const ConfigEmailRoutes = require('./Routes/ConfigEmailRoutes');
const FinanceiroRoutes = require('./Routes/FinanceiroRoutes');
const TarefasDiariaController = require('./Routes/TarefasDiariaRoutes');


verificaServicoAtivo();






//Rotas
app.use('/clientes', ClientesRoutes);
app.use('/configuracoes', ConfigEmailRoutes);
app.use('/financeiro', FinanceiroRoutes);
app.use('/tarefas-diaria', TarefasDiariaController);



    


// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
  
  