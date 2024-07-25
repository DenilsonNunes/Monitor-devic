const query = require('../db/SQL/query/query');
const sqlUpdate = require('../db/SQL/query/queryUpdate');



// Services
const testConnectionSMTP = require('../services/testConnectionEmail');
const { SendEmailTeste } = require('../services/sendEmailTeste')

// Formats
const filtraHoraMinutosDoDateTime = require('../utils/Formats/filtraHoraMinutosDoDateTime')


const { SelectConfigEnvEmail } = require('../db/SQL/Configurações/Configurações-de-Email/SELECT/configuracoesEnvEmail');
const { UpdateConfigServerSMTPEmail } = require('../db/SQL/Configurações/Configurações-de-Email/UPDATE/updateConfigServerSMTPEmail');
const { UpdateConfigEnvEmail } = require('../db/SQL/Configurações/Configurações-de-Email/UPDATE/updateConfigEnvEmail');




class ConfiguracoesController {

    // Pesquisa todas configurações de e-mail
    async getConfigTitAvencer(req, res) {

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



    // Testa Conexão com servidor de e-mail
    async testConnection(req, res) {

        //testConnectionSMTP

        //res.json({ message:"teste realizado"})
        
        try {

            const result = await testConnectionSMTP();

            res.status(200).json({ message: result });

        } catch(err) {
            console.log('Erro interno: ', err.message);
            res.status(500).json({ message: err });
        }
    

    }

    // Envia email teste
    async envioEmailTeste(req, res) {

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



    
    // Edita as configurações do servidor SMTP
    async updateConfigEnvEmail (req, res) {

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
    async updateConfigServidorSMTPEmail (req, res) {

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


module.exports = new ConfiguracoesController();