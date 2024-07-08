
const query = require('../db/SQL/query/query');
//const clientes = require('../Helpers/Query/clientes');


class ClientesController  {

    async getAll(req, res) {

        try {
            const data = await query(clientes);

            res.status(200).json(data);
    
        } catch (err) {
            res.status(500).json({ message: err.message });

        }
    }
    
}


module.exports = new ClientesController();