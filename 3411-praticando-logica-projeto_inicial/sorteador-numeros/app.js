function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    if (quantidade > ate) {
        alert("A quantidade de números sorteados não pode ser maior que o valor máximo.");
        return;
    }
    if (quantidade < 1) {
        alert("A quantidade de números sorteados deve ser um número positivo.");
        return;
    }
    if (de >= ate) {
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return;
  }

    let numeros = obterNumerosAleatorios(quantidade, de, ate);
    exibirNumeros(numeros);
}


function obterNumerosAleatorios(quantidade, de, ate) {
    let sorteados = [];
    for (let zero = 0; zero < quantidade; zero++) {
        let numero = Math.floor(Math.random() * (ate - de + 1)) + de;
        while (sorteados.includes(numero)) {
            numero = Math.floor(Math.random() * (ate - de + 1)) + de;
        }
        sorteados.push(numero);
    }
    return sorteados;
}
function exibirNumeros(numeros) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = numeros.join(", ");
    alterarStatusBotao();
}
function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    }
    else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}
function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = "";
    alterarStatusBotao();
}