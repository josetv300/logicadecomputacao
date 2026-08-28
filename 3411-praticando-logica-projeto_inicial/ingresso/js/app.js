function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidaDeCompra = parseInt(document.getElementById('qtd').value);
    if (isNaN(quantidaDeCompra) || quantidaDeCompra <= 0) {
        alert('Quantidade invalida tente novamente com numeros positivos');
        return;
    }


    if (tipo == 'pista') {
        comprarPista(quantidaDeCompra);
    }
    else if (tipo == 'superior') {
        comprarSuperior(quantidaDeCompra);
    }
    else if (tipo == 'inferior') {
        comprarInferior(quantidaDeCompra);
    }
}

function comprarSuperior(quantidaDeCompra) {
    let quantidadeDisSuperior = document.getElementById('qtd-superior');
    quantidadeDisSuperior = parseInt(quantidadeDisSuperior.textContent);
    if (quantidaDeCompra > quantidadeDisSuperior) {
        alert('Quantidade indisponível');
        return;
    }
    else {
        quantidadeDisSuperior -= quantidaDeCompra;
        document.getElementById('qtd-superior').textContent = quantidadeDisSuperior;
        alert(`Compra realizada com sucesso! Você comprou ${quantidaDeCompra} ingresso(s) para Superior.`);}
}

function comprarInferior(quantidaDeCompra) {
    let quantidadeDisInferior = document.getElementById('qtd-inferior');
    quantidadeDisInferior = parseInt(quantidadeDisInferior.textContent);
    if (quantidaDeCompra > quantidadeDisInferior) {
        alert('Quantidade indisponivel');
        return
    }
    else {
        quantidadeDisInferior -= quantidaDeCompra;
        document.getElementById('qtd-inferior').textContent = quantidadeDisInferior
        alert (`Compra realizada com sucesso! Você comprou ${quantidaDeCompra} ingresso(s) para Inferior.`);}
}

function comprarPista(quantidaDeCompra) {
    let quantidadeDisPista = document.getElementById('qtd-pista');
    quantidadeDisPista = parseInt(quantidadeDisPista.textContent);
    if (quantidaDeCompra > quantidadeDisPista) {
        alert('Quantidade indisponível');
        return;
    }
    else {
        quantidadeDisPista -= quantidaDeCompra;
        document.getElementById('qtd-pista').textContent = quantidadeDisPista;
        alert(`Compra realizada com sucesso! Você comprou ${quantidaDeCompra} ingresso(s) para a Pista.`);}
}