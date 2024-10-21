document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('.click', () => {
        card.classList.toggle('flip')
    })
})