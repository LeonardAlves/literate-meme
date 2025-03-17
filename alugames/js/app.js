function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    // Alternar classe para indicar se está alugado ou não
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = "Alugar";
        nomeJogo.textContent = nomeJogo.textContent.replace(" (Alugado)", "");
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = "Devolver";
        nomeJogo.textContent += " (Alugado)";
    }
}
