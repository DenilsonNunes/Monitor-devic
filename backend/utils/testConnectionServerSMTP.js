const nodemailer = require('nodemailer');



const testConnectionServerSMTP = async (host, port, userEmail, password) => {
  // Configurações do transporte SMTP para o Gmail
  const transporter = nodemailer.createTransport({
    host: host,
    port: port,
    //secure: true,
    auth: {
      user: userEmail, 
      pass: password
    },
  });

  const connected = await transporter.verify();

  if (!connected) {
    throw new Error('Erro ao conectar com o servidor SMTP');
  }
  return 'Conexão com o servidor SMTP Bem-sucedida';

}





module.exports = testConnectionServerSMTP;