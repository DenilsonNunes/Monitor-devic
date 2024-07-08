
//serviços
const sendEmailService = require('../services/sendEmailService')



class TarefasDiariaController {


    static async envioEmailTitulosAvencer(req, res) {


        try {

            const result = await sendEmailService();

            res.status(200).json({ message: result });


        } catch(err) {
            console.log('Erro interno: ', err);
            res.status(500).json({ message: err.message });
        }
    
    }

}


module.exports = TarefasDiariaController;