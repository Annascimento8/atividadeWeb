

const mensagemEl = document.getElementById('mensagem');
const palpiteEl = document.getElementById('palpite');
const botao = document.getElementById('botaoPalpite');
const botaoReiniciar = document.getElementById('botaoReiniciar');

let secreto;

function iniciarJogo() {
    secreto = Math.floor(Math.random() * 20) + 1;
    palpiteEl.value = '';
    palpiteEl.disabled = false;
    botao.disabled = false;
    botao.style.display = 'inline';
    botaoReiniciar.style.display = 'none';
    mensagemEl.textContent = '';
}

iniciarJogo();

function verificarPalpite() {
    const valor = Number(palpiteEl.value);
    if (!valor || valor < 1 || valor > 20) {
        mensagemEl.textContent = 'Digite um número válido entre 1 e 20.';
        return;
    }

    if (valor === secreto) {
        mensagemEl.textContent = 'Parabéns! Você acertou o número secreto: ' + secreto + '.';
        botao.disabled = true;
        palpiteEl.disabled = true;
        botaoReiniciar.style.display = 'inline';
    } else if (valor < secreto) {
        mensagemEl.textContent = 'O número secreto é maior. Tente novamente.';
    } else {
        mensagemEl.textContent = 'O número secreto é menor. Tente novamente.';
    }
}

botao.addEventListener('click', verificarPalpite);

// permite enviar o palpite pressionando Enter
palpiteEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        verificarPalpite();
    }
});

botaoReiniciar.addEventListener('click', iniciarJogo);
