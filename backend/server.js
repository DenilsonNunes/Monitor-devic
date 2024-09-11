const express = require('express');
const cors = require('cors');

// Importa rotas principais
const routes = require('./routes/index');


const verificaServicoAtivo = require('../backend/services/verificaServicoAtivo');



const app = express();

// Config JSON response
app.use(express.json());

// configura acesso o acesso a API na mesma rede ou dominio
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));



/*

const ClientesRoutes = require('./Routes/ClientesRoutes');
const ConfiguracoesRoutes = require('./Routes/ConfiguracoesRoutes');
const FinanceiroRoutes = require('./Routes/FinanceiroRoutes');
const FinanceiroGestaoDeCobrancaRoutes = require('./Routes/FinanceiroGestaoDeCobrancaRoutes');

const TarefasDiariaController = require('./Routes/TarefasDiariaRoutes');


*/



//verificaServicoAtivo();


//Rota principal
app.use('/api', routes);

/*

app.use('/clientes', ClientesRoutes);
app.use('/configuracoes', ConfiguracoesRoutes);
app.use('/financeiro', FinanceiroRoutes);
app.use('/financeiro/gestao-de-cobranca', FinanceiroGestaoDeCobrancaRoutes);
app.use('/tarefas-diaria', TarefasDiariaController);



*/




    


// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
  
  