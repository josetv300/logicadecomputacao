let listaNomes = [];

function  adicionar() {
    let nome = document.getElementById('nome-amigo');
    if (nome.value == '') {
        alert('Digite um nome para adicionar');
        return;
    }
    if (listaNomes.includes(nome.value)) {
        alert('Este nome já foi adicionado');
        return;
    }
    let listaAmigos = document.getElementById('lista-amigos');
   listaNomes.push(nome.value);
    if (listaAmigos.textContent  == '') {
        listaAmigos.textContent = nome.value;
    }
    else {listaAmigos.textContent = listaAmigos.textContent + ', ' + nome.value;
    }
    nome.value = '';
    atualizarLista();
    atualizarSorteio()
}

function sortear() {
    if (listaNomes.length < 4) {
        alert('Tente com 4 nomes pelo menos');
        return;
    }
    embaralhar(listaNomes);
    let listaSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i <listaNomes.length; i++){
        if (i == listaNomes.length -1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaNomes[i] + ' ---> ' + listaNomes[0] + '</br>';
        }
        else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaNomes[i] + ' ---> ' + listaNomes[i + 1] + '</br>';
        }
        
    }
}

function atualizarSorteio() {
    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = '';
}

function excluirAmigo(index) {
    listaNomes.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < listaNomes.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = listaNomes[i];
       
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });

        lista.appendChild(paragrafo);
    }
}

function reiniciar() {
    listaNomes = [];
    document.getElementById('lista-amigos').innerHTML = '';
    listaSorteio = document.getElementById('lista-sorteio').innerHTML = '';
}

function embaralhar(lista) {

    for (let indice = lista.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}