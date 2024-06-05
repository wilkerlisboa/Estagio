const express = require('express');
const nodemailer = require('nodemailer');
const { createTransport } = require('nodemailer');
const { OAuth2Client } = require('googleauth');
const app = express();
const port = 3000;

// Carregar credenciais da conta de serviço
const credentials = require('./credentials.json');

// Criar um cliente OAuth2
const oAuth2Client = new OAuth2Client(
  credentials.client_id,
  credentials.client_secret,
  credentials.redirect_uris[0]
);

// Criar um transporter com OAuth2
transporter = createTransport({
  serviceProvider: 'gmail',
  auth: {
    type: 'OAuth2',
    client: oAuth2Client
  }
});

// Carregar email de destino do arquivo de configuração (config.json)
const config = JSON.parse(fs.readFileSync('config.json'));
const emailDestinatario = config.emailDestinatario;

// Rota para receber o PDF do front-end
app.post('/enviar-pdf', function (req, res) {
  const pdfBlob = req.body; // Obter o blob do PDF da requisição

  // Enviar email com o PDF
  const mailOptions = {
    from: 'wilkersoares.wl@gmail.com', // Seu email de envio (Gmail)
    to: emailDestinatario,
    subject: 'PDF Canditado',
    attachment: pdfBlob, // Blob do PDF recebido
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.error('Erro ao enviar email:', error);
      res.status(500).send('Erro ao enviar PDF');
    } else {
      console.log('Email enviado com sucesso!');
      res.status(200).send('PDF enviado com sucesso');
    }
  });
});

// Iniciar servidor
app.listen(port, function () {
  console.log(`Servidor escutando na porta ${port}`);
});
