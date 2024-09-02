const sql = require('mssql');
const configDb = require('../../connection/conn');

const filtraChaves = require('../../../utils/Formats/filtraChaveObj');


const query = async (dados, filtros) => {

     // Se vier filtros retornar o array de objetos com filtro
    if(filtros) {

        // Conecta ao banco de dados
        const pool = await sql.connect(configDb);
        // Executa a consulta
        const result = await pool.request()
            .query(dados);

        const data = result.recordset;
        //const data = removeEspaco(result.recordset);

        return filtraChaves(data, filtros);
        
    } else {
        
        // Conecta ao banco de dados
        const pool = await sql.connect(configDb);
        // Executa a consulta
        const result = await pool.request()
            .query(dados);


        console.log(result);

        const data = result.recordset;
        //const data = removeEspaco(result.recordset);

        

        return data;

    }
    
}




module.exports = query;