const nodemailer = require('nodemailer');



const testConnectionSMTP = async () => {
  // Configurações do transporte SMTP para o Gmail
  const transporter = nodemailer.createTransport({
    host: process.env.SERVER_EMAIL,
    port: process.env.SERVER_PORT,
    //secure: true,
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASSWORD
    },
  });

  const connected = await transporter.verify();

  if (!connected) {
    throw new Error('Erro ao conectar com o servidor SMTP');
  }
  return 'Conexão com o servidor SMTP Bem-sucedida';

}





module.exports = testConnectionSMTP;