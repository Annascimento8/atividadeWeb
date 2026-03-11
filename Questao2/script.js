// helper para logar no console e na página
function log(msg) {
    console.log(msg);
    const el = document.getElementById('log');
    if (el) {
        el.innerHTML += msg + '<br>';
    }
}

// etapa 1: solicitar escolha do usuário
log('Passo 1: o usuario deve inserir pedra, papel ou tesoura no prompt.');
const userChoice = prompt('Escolha pedra, papel ou tesoura:').toLowerCase().trim();

// passo 2: validar
const options = ['pedra', 'papel', 'tesoura'];
if (!options.includes(userChoice)) {
    log('Passo 2: entrada inválida.');
    log('Escolha inválida. Por favor, recarregue a página e tente novamente.');
} else {
    log(`Passo 2: entrada valida (${userChoice}).`);
    // passo 3: escolha do computador
    const randomIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex];
    log(`Passo 3: computador escolheu ${computerChoice}.`);

    // passo 4: determinar vencedor
    let result;
    if (userChoice === computerChoice) {
        result = 'Empate!';
    } else if (
        (userChoice === 'pedra' && computerChoice === 'tesoura') ||
        (userChoice === 'papel' && computerChoice === 'pedra') ||
        (userChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        result = 'Você venceu!';
    } else {
        result = 'Computador venceu!';
    }
    log(`Resultado: ${result}`);
}