const sql = require('mssql');
const configDb = require('../../connection/conn');

const removeEspaco = require('../../../utils/Formats/removeEspacoFinal');


const query = async (dados) => {
    // Conecta ao banco de dados
    const pool = await sql.connect(configDb);
    // Executa a consulta
    const result = await pool.request()
        .query(dados);

    /*
    if (result.rowsAffected[0] > 0) {
        console.log('A consulta afetou pelo menos uma linha no banco de dados.');
    } else {
        console.log('A consulta não afetou nenhuma linha no banco de dados.');
    }
    */

    const data = result.recordset;

    return data;
    
}



module.exports = query;