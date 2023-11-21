let personagem = document.querySelector('#personagem');
let quadrado = document.querySelector('#quadrado');

function pular() {
    let personagem = document.querySelector('#personagem');
let quadrado = document.querySelector('#quadrado');
    if (!personagem.classList.contains('animar')) {
        personagem.classList.add('animar');
    }

    setTimeout(function () {
        personagem.classList.remove('animar');
    }, 500);
}
