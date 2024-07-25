const nodemailer = require('nodemailer');
const mensagem = require('../Helpers/msgEmailTitulosAvencerTeste');
const { SelectConfigEnvEmail } = require('../db/SQL/Configurações/Configurações-de-Email/SELECT/configuracoesEnvEmail');
const sqlQuery = require('../db/SQL/query/query')





class SendEmailTeste {

    

    static cobranca = async (contasAreceber, mensagemCobranca) =>{

    }
    
    static titulosAvencer = async (emailDestino) => {

        // Query nas consfigurações de e-mail
        const result = await sqlQuery(SelectConfigEnvEmail.configTitulosAvencer());

        const configEmail = result[0];


        // Configurações do transporte SMTP 
        const transporter = nodemailer.createTransport({
            host: configEmail.SMTPServerTitAVenc,
            port: configEmail.SMTPServerPort,
       
            auth: {
                user: configEmail.SMTPUsuarioTitAVenc, 
                pass: configEmail.SMTPSenhaTitAVenc
            }
        });
    
        // Configurações do e-mail
        const opcaoEmail = {
            from: configEmail.SMTPUsuarioTitAVenc, // Origem "De"
            to: emailDestino, // Destino "Para"
            subject: configEmail.MailAssuntoTitAVenc,
            html: mensagem()
            //text:'Ola teste email'
        };
    
        
        try {
            // Envia o e-mail
            const info = await transporter.sendMail(opcaoEmail);
            console.log(`E-mail Teste enviado !!!${info.messageId}`);
            return 'E-mail teste enviado com sucesso !!!'
        } catch (error) {
            console.error(`Erro ao enviar e-mail`, error);
            return error;
        }

    }

    static aniversario = async () => {

    }

    static marketing = async () => {

    }

    static gestor = async () => {

    }

}




module.exports = { SendEmailTeste };


