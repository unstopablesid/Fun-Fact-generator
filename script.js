document.getElementById('generateFact').addEventListener('click', function() {
    const facts = [
        "You share your birthday with at least 9 million other people in the world.",
        "The Eiffel Tower can be 15 cm taller during the summer.",
        "Octopuses have three hearts.",
        "Butterflies taste with their feet."
    ];
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('funFact').textContent = facts[randomIndex];
});

