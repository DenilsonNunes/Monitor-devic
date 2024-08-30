const sql = require('mssql');
const configDb = require('../../connection/conn');




const queryInsert = async (dados) => {

        // Conecta ao banco de dados
        const pool = await sql.connect(configDb);
        // Executa a consulta
        const result = await pool.request()
            .query(dados);

        if (result.rowsAffected > 0) {

            return "insert realizado com sucesso"

        } else {

            return "Não foi possível realizar o insert"

        }
    
}


module.exports = queryInsert;