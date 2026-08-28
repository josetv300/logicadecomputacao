let total
limpar();
function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let precoUnidade = produto.split('R$')[1];
    let quantidadeProduto = document.getElementById('quantidade').value;
    if (quantidadeProduto <= 0) {
        alert('Quantidade inválida');
        return;
    }
    let precoTotal = precoUnidade * quantidadeProduto;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$ ${precoTotal}</span>
        </section>`;
    total = total + precoTotal;
    let totalValor = document.getElementById('valor-total');
    totalValor.textContent = `R$ ${total}`;4
    document.getElementById('quantidade').value = 1;
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    total = 0;
}