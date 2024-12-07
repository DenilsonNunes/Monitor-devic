const sql = require('mssql');
const configDb = require('../connection/conn');




const queryDelete = async (dados) => {

        // Conecta ao banco de dados
        const pool = await sql.connect(configDb);

        // Executa a consulta
        const result = await pool.request()
            .query(dados);


        if (result.rowsAffected[1] > 0) {

            return "Registro deletado com sucesso"

        } else {

            return "Nenhum registro foi deletado"

        }
    
}


module.exports = queryDelete;