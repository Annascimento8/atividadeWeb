function calcular() {
    const n = parseInt(document.getElementById('n').value);
    if (isNaN(n) || n < 1) {
        document.getElementById('resultado').innerHTML = 'Por favor, digite um número válido maior que 0.';
        return;
    }
    let serie = '';
    let soma = 0;
    let termo = 0;
    for (let i = 1; i <= n; i++) {
        termo = termo * 10 + 1; // Gera o próximo termo: 1, 11, 111, etc.
        soma += termo;
        serie += termo;
        if (i < n) {
            serie += ' + ';
        }
    }
    document.getElementById('resultado').innerHTML = serie + '<br>A soma é: ' + soma.toLocaleString('pt-BR');
}

// Adicionar event listener para o input
document.getElementById('n').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcular();
    }
});