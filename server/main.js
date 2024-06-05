const jsPDF = require('jspdf');
const axios = require('axios');

// Função para gerar e enviar PDF
function gerarEnviarPDF() {
  // 1. Coletar dados do usuário
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  // 2. Gerar o PDF
  const doc = new jsPDF();
  doc.text(20, 20, `Nome: ${nome}`);
  doc.text(20, 30, `Email: ${email}`);

  // 3. Fechar o PDF
  const pdfBlob = doc.output('blob');

  // 4. Enviar por email (requisição AJAX para o back-end)
  axios.post('/enviar-pdf', pdfBlob)
    .then(function (response) {
      console.log('PDF enviado com sucesso!');
    })
    .catch(function (error) {
      console.error('Erro ao enviar PDF:', error);
    });
}
