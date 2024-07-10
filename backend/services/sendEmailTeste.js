const nodemailer = require('nodemailer');
const mensagem = require('../Helpers/msgEmailTitulosAvencer');
const sqlQuery = require('../db/SQL/query/query')







class SendEmailTeste {

    static cobranca = async (contasAreceber, mensagemCobranca) =>{

    }
    
    static titulosAvencer = async () => {

            // Configurações do transporte SMTP 
        const transporter = nodemailer.createTransport({
            host: process.env.SERVER_EMAIL,
            port: process.env.SERVER_PORT,
       
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASSWORD
            }
        });
    
        // Configurações do e-mail
        const opcaoEmail = {
            from: 'denilsonnunes1605@gmail.com',
            to: 'denilson.barauna@blueti.com.br',//cliente.EMailCli,
            subject: 'TESTE APLICAÇÃO',
            html: '<p>Email Teste Titulos a vencer</>'
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

    static aniversario = async (clientes, mensagem) => {

    }


}




module.exports = { SendEmailTeste };


