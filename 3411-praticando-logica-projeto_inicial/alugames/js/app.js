let alugueis = 0
let devolvido = 0
function alterarStatus(id) {
    let gameCLicado = document.getElementById(`game-${id}`);
    let imagem = gameCLicado.querySelector('.dashboard__item__img');
    let botao = gameCLicado.querySelector('.dashboard__item__button');
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm('deseja mesmo devolver o jogo?')) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            devolvido = devolvido + 1
        }
    }else {
        if (confirm('deseja mesmo alugar o jogo?')) {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
            alugueis = alugueis + 1
        }
    }
    console.log(`Alugueis: ${alugueis}, Devolvidos: ${devolvido}`);
}