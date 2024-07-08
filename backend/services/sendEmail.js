const nodemailer = require('nodemailer');
const mensagem = require('../Helpers/msgEmailTitulosAvencer');




// Função para enviar e-mail
const sendEmail = async (contasAreceber, mensagemTituloAVencer) => {

    let cardMsg =  mensagem(contasAreceber);
    let mensagemFinal;

    if(mensagemTituloAVencer.includes('#Documentos#')) {

        mensagemFinal = mensagemTituloAVencer.replace('#Documentos#', cardMsg);

    } else {
        console.log('mensagem não encontrada')
    }

        // Configurações do transporte SMTP 
    const transporter = nodemailer.createTransport({
        host: process.env.SERVER_EMAIL,
        port: process.env.SERVER_PORT,
   
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASSWORD
        }
    });

    /*
        // Verificando a conexão
    transporter.verify(function(error, success) {
        if (error) {
        console.error('Erro ao verificar a conexão:', error);
        } else {
        console.log('Conexão com o servidor de e-mail bem-sucedida');
        }
    });
    */


    // Configurações do e-mail
    const opcaoEmail = {
        from: 'denilsonnunes1605@gmail.com',
        to: 'denilson.barauna@blueti.com.br',//cliente.EMailCli,
        subject: 'TESTE APLICAÇÃO',
        html: mensagemFinal
        //text:'Ola teste email'
    };

    
    try {
        // Envia o e-mail
        const info = await transporter.sendMail(opcaoEmail);
        console.log(`E-mail enviado para 'DENILSON: ${info.messageId}`);
        return 'E-mail enviado com sucesso!'
    } catch (error) {
        console.error(`Erro ao enviar e-mail`, error);
        return error;
    }
        
}


module.exports = sendEmail;


