const ConfigEmailCobrancaService = require('../../../services/configuracoes/configuracoes-email/configEmailCobrancaService');




class ConfigEmailCobrancaController {


    // Testa Conexão com servidor de e-mail
    async testConnection(req, res) {
        
        try {

            const result = await ConfigEmailCobrancaService.testConnection();

            res.status(200).json({ message: result });

        } catch(err) {
            console.log('Erro interno: ', err.message);
            res.status(500).json({ message: err });
        }
    

    }
    

    // Enviar email teste
    async sendEmailTest(req, res) {

        const data = req.body;

        const emailDestino = data.emailDestino;
        
        console.log('Email destino', data.emailDestino);
        
        try {

            const result = await SendEmailTeste.titulosAvencer(emailDestino);

            res.status(200).json({ message: result });

        } catch(err) {
            console.log('Erro interno: ', err.message);
            res.status(500).json({ message: err });
        }
    

    }


    // Busca todoas configurações de e-mail
    async getConfig(req, res) {

        try {
            
            const data = await ConfigEmailCobrancaService.getConfig();

            res.status(200).json(data);

        } catch(err) {

            res.status(500).json({ message: err.message });
        }
    }


    // Edita as configurações do servidor SMTP
    async updateConfigServerSmtp(req, res) {

        const {
            serverSMTP, 
            portSMTP, 
            email, 
            password
        } = req.body;
       

        try {

            const result = await ConfigEmailCobrancaService.updateConfigServerSmtp(serverSMTP, portSMTP, email, password);

            if (!result.success) {
          
                return res.status(400).json({ success: false, message: result.message });

            }

            res.status(200).json(result);

        } catch (err) {

            res.status(500).json({ message: err.message });

        }
        
        



    }


    // Edita as configurações de Envio de e-mail
    async updateConfigMessage (req, res) {

        const data = req.body;
    
        try {

            await sqlUpdate(UpdateConfigServerSMTPEmail.titulosAvencer(data));
            

            res.status(200).json({message: 'Alteração realizada com sucesso!'});

        } catch (e) {

            console.log('Erro no controller: ', e.message);
            res.status(500).json({ "Erro ao alterar as configurações de email: ": e.message });

        }


    }




}


module.exports = new ConfigEmailCobrancaController ();