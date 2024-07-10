
//serviços
const emailAutomationService = require('../services/emailAutomationService')



class TarefasDiariaController {


    static async envioEmailTitulosAvencer(req, res) {


        try {

            const result = await emailAutomationService.titulosAVencer();

            res.status(200).json({ message: result });


        } catch(err) {
            console.log('Erro interno: ', err);
            res.status(500).json({ message: err.message });
        }
    
    }

}


module.exports = TarefasDiariaController;