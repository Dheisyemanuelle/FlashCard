document.addEventListener('DOMContentLoaded', () => {
    const flashcardsData = [
        ["Biotecnologia", "Quais os objetivos da modificação genética em animais?"],
        ["Biotecnologia", "Como a modificação genética afetou o gorila albino, o lobo, e o jacaré?"],
        ["Biotecnologia", "Quais os riscos éticos da criação de animais geneticamente modificados?"],
        ["Biotecnologia", "Como esses animais podem afetar o ecossistema se soltos?"],
        ["Biotecnologia", "O que ocorreu no caso das gêmeas que foram alteradas geneticamente na China?"],
        ["Biotecnologia", "Quais são os principais métodos de modificação genética?"],
        ["Biotecnologia", "Quais são os riscos associados à modificação genética?"],
        ["Biotecnologia", "O que é a edição de genes?"],
        ["Biotecnologia", "Quais são as aplicações da modificação genética na agricultura?"],
        ["Biotecnologia", "Quais são as implicações éticas da modificação genética em humanos?"],
    ];

    function criarFlashcards() {
        const container = document.querySelector('.flashcards-container');
        flashcardsData.forEach(data => {
            const card = document.createElement('div');
            card.classList.add('flashcard');

            const front = document.createElement('div');
            front.classList.add('front');
            const titulo = document.createElement('h3');
            titulo.textContent = data[0];
            const pergunta = document.createElement('p');
            pergunta.textContent = data[1];
            front.appendChild(titulo);
            front.appendChild(pergunta);

            card.appendChild(front);
            container.appendChild(card);

            card.addEventListener('click', () => {
                card.classList.toggle('flip');
            });
        });
    }

    criarFlashcards();
});
