document.addEventListener('DOMContentLoaded', () => {
    const flashcardsData = [
        ["Biotecnologia", "Quais os objetivos da modificação genética em animais?", "Aumentar o tamanho, melhorar características específicas ou resistência à doenças, podendo resultar em comportamento agressivo."],
        ["Biotecnologia", "Como a modificação genética afetou o gorila albino, o lobo, e o jacaré?", "As modificações causaram o crescimento excessivo e instabilidade emocional, levando os animais à agressividade."],
        ["Biotecnologia", "Quais os riscos éticos da criação de animais geneticamente modificados?", "Sofrimento animal, impacto nos ecossistemas, e possíveis consequências imprevistas na biodiversidade."],
        ["Biotecnologia", "Como esses animais podem afetar o ecossistema se soltos?", "Podem competir com espécies nativas, causar desequilíbrios ecológicos, e ameaçar a sobrevivência de outras espécies."],
        ["Biotecnologia", "O que ocorreu no caso das gêmeas que foram alteradas geneticamente na China?", "Um cientista anunciou que modificou geneticamente gêmeas para torná-las resistentes ao HIV, gerando controvérsias éticas."],
        ["Biotecnologia", "Quais são os principais métodos de modificação genética?", "Os principais métodos incluem CRISPR, clonagem e inserção de genes, que permitem alterar o DNA de organismos."],
        ["Biotecnologia", "Quais são os riscos associados à modificação genética?", "Os riscos incluem efeitos colaterais inesperados, impacto na biodiversidade e questões éticas sobre manipulação genética."],
        ["Biotecnologia", "O que é a edição de genes?", "Edição de genes é a alteração precisa do DNA de um organismo para corrigir mutações ou adicionar novas características."],
        ["Biotecnologia", "Quais são as aplicações da modificação genética na agricultura?", "Na agricultura, é usada para criar plantas resistentes a pragas, melhorar o rendimento e aumentar a resistência a condições climáticas adversas."],
        ["Biotecnologia", "Quais são as implicações éticas da modificação genética em humanos?", "As implicações éticas incluem preocupações sobre consentimento, desigualdade social e possíveis consequências imprevistas para a saúde e a sociedade."]
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

            const back = document.createElement('div');
            back.classList.add('back');
            const resposta = document.createElement('p');
            resposta.textContent = data[2];
            back.appendChild(resposta);

            card.appendChild(front);
            card.appendChild(back);
            container.appendChild(card);

            card.addEventListener('click', () => {
                card.classList.toggle('flip');
            });
        });
    }

    criarFlashcards();
});