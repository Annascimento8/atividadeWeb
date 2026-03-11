// Questão 4: Triângulo - arquivo local
window.addEventListener('load', function() {
    var linhas = parseInt(prompt("Digite o número de linhas para o triângulo:"), 10);
    var outputEl = document.getElementById('output');
    if (!outputEl) {
        outputEl = document.createElement('pre');
        document.body.appendChild(outputEl);
    }
    if (!isNaN(linhas) && linhas > 0) {
        for (var i = 1; i <= linhas; i++) {
            var linha = "";
            for (var j = 0; j < i; j++) {
                linha += "*";
            }
            console.log(linha);
            outputEl.textContent += linha + "\n";
        }
    } else {
        console.log("Número inválido fornecido.");
        outputEl.textContent = "Número inválido fornecido.";
    }
});