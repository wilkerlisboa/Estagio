
document.addEventListener('DOMContentLoaded', function() {
    // CHAVE PUBLICA DO EMAILJS
    emailjs.init('gpfSHxRPb-NgFuJYP');

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // COLETANDO DADOS DO FORMULARIO
        var formData = {
            name: document.getElementById('nome').value,
            endereco: document.getElementById('endereco').value,
            email: document.getElementById('email').value,
            idade: document.getElementById('idade').value,
            contato: document.getElementById('contato').value,
            data_nascimento: document.getElementById('data_nascimento').value,
            ensino_medio: document.getElementById('ensino_medio').value,
            curso_tecnico: document.getElementById('curso_tecnico').value,
            curso_graduacao: document.getElementById('curso_graduacao').value,
            semestre: document.getElementById('semestre').value,
            formatura: document.getElementById('formatura').value,
            outra_graduacao: document.getElementById('outra_graduacao').value,
            outra_formacao: document.getElementById('outra_formacao').value,
            experiencia_profissional: document.getElementById('experiencia_profissional').value,
            curso_aperfeicoamento: document.getElementById('curso_aperfeicoamento').value,
            software: document.getElementById('software').value,
            idioma: document.getElementById('idioma').value,
            estado_civil: document.getElementById('estado_civil').value,
            filhos: document.getElementById('filhos').value,
            religiao: document.getElementById('religiao').value,
            fuma:  document.getElementById('fuma').value,
            bebida: document.getElementById('bebida').value,
            fisico: document.getElementById('fisico').value,
            facebook: document.getElementById('facebook').value,
            instagram: document.getElementById('instagram').value,
            linkdin: document.getElementById('linkdin').value,
            tiktok: document.getElementById('tiktok').value,
            kwai: document.getElementById('kwai').value,
            youtube: document.getElementById('youtube').value,
            hobby: document.getElementById('hobby').value,
            profissionalizante: document.getElementById('profissionalizante').value,
            escolha: document.getElementById('escolha').value,
            familia: document.getElementById('familia').value,
            humano: document.getElementById('humano').value,
            social: document.getElementById('social').value,
            horas: document.getElementById('horas').value,
            pontos_forte: document.getElementById('pontos_forte').value,
            pontos_fraco: document.getElementById('pontos_fraco').value,
            tuxtu: document.getElementById('tuxtu').value,
            office: document.getElementById('office').value,
            habilidade: document.getElementById('habilidade').value,
            pressao: document.getElementById('pressao').value,
            perspectiva: document.getElementById('perspectiva').value,
            video: document.getElementById('video').value
        };

        // 'ID DE SERVIÇO' E 'EMPLATE ID' DO EMAILJS
        emailjs.send('service_neekx8w', 'template_qwjcd2c', formData)
            .then(function(response) {
                console.log('E-mail enviado com sucesso!', response.status, response.text);
                window.location.href = 'https://estagio.tuxtu.com.br/page/sucesso.html';
            }, function(error) {
                console.error('Erro ao enviar e-mail:', error);
                window.location.href = 'https://estagio.tuxtu.com.br/page/erro.html';
            });
    });
});

// REALOAD
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.preloader').style.display = 'none';
        document.body.style.display = 'block';
    }, 4000); 
});
