// Mostra o preloader por alguns segundos e depois exibe o conteúdo da página
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.preloader').style.display = 'none';
        document.body.style.display = 'block';
    }, 1000); // Exibe o preloader por 3 segundos (3000 milissegundos)
});