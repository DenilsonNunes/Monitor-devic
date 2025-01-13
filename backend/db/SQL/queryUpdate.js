const sql = require('mssql');
const configDb = require('../../db/connection/conn');



const query = async (dados) => {
    // Conecta ao banco de dados
    const pool = await sql.connect(configDb);
    // Executa a consulta
    const result = await pool.request()
        .query(dados);


    if (result.rowsAffected[0] > 0) {

        return 'O update afetou pelo menos uma linha no banco de dados.';

    } else {

        return 'O update não afetou nenhuma linha no banco de dados.';

    }

    
}



module.exports = query;