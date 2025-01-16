const ConfigEmailCobrancaService= require('../../../services/configuracoes/configuracoes-email/configEmailCobrancaService');


class ConfigEmailCobrancaController {


    // Testa Conexão com servidor de e-mail
    async testConnection(req, res) {
        
        try {

            const result = await testConnectionSMTP();

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
            
            const data = await query(SelectConfigEnvEmail.configTitulosAvencer());

            // Converte o DateTime  em Horas e minutos
            const newData = data.map((item)=>{
                return {
                    ...item,
                    HsIniEmailAutAVenc: filtraHoraMinutosDoDateTime(item.HsIniEmailAutAVenc)
                }
            })
            

            res.status(200).json(newData);

        } catch(err) {
            console.log(err);
            res.status(500).json({ message: err.message });
        }
    }


    // Edita as configurações do servidor SMTP
    async updateConfigServerSmtp(req, res) {

        const data = req.body;
       
        try {

            await sqlUpdate(UpdateConfigEnvEmail.titulosAvencer(data));

            res.status(200).json({message: 'Alteração realizada com sucesso!'});

        } catch (e) {

            console.log('Erro no controller: ', e.message);
            res.status(500).json({ "Erro ao alterar as configurações de email: ": e.message });

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