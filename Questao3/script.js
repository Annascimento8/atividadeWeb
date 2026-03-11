// solicita número ao usuário e exibe tabuada de 1 a 10 com mensagem mais amigável
(function(){
    var numero = parseInt(prompt('Olá! Por favor, digite um número para calcular a tabuada:'), 10);
    var container = document.getElementById('resultado');
    if (isNaN(numero)) {
        container.textContent = 'Poxa, isso não parece ser um número válido. Tente novamente!';
        return;
    }
    var texto = 'Aqui está a tabuada do ' + numero + ':\n\n';
    for (var i = 1; i <= 10; i++) {
        texto += numero + ' x ' + i + ' = ' + (numero * i) + '\n';
    }
    container.textContent = texto;
})();