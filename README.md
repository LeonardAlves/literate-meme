🎮 Gerenciador de Aluguel de Jogos
Este projeto da Alura contém uma função em JavaScript que permite alterar o status de um jogo na interface de um painel de gerenciamento.

📌 Funcionalidade
A função alterarStatus(id) permite que o usuário marque um jogo como "Alugado" ou "Disponível", alterando dinamicamente a classe da imagem, o texto do botão e o nome do jogo.

🔧 Como Funciona?
A função recebe o id do jogo como parâmetro.
Identifica o jogo correto usando document.getElementById().
Alterna a classe da imagem (dashboard__item__img--rented) para indicar se está alugado ou não.
Atualiza o texto do botão (Alugar ⇄ Devolver).
Modifica o nome do jogo, adicionando ou removendo (Alugado).
🛠 Exemplo de Uso
HTML Estruturado
html
Copiar
Editar
<div id="game-1" class="dashboard__item">
    <img class="dashboard__item__img" src="game.jpg" alt="Jogo">
    <p class="dashboard__item__name">Nome do Jogo</p>
    <button class="dashboard__item__button" onclick="alterarStatus(1)">Alugar</button>
</div>
Chamada da Função
javascript
Copiar
Editar
alterarStatus(1); // Alterna entre "Alugado" e "Disponível"
📝 Tecnologias Utilizadas
✅ HTML para estruturação do painel de jogos
✅ CSS para estilização e controle visual
✅ JavaScript para manipulação dinâmica do DOM
