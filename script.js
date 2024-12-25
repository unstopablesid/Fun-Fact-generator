document.getElementById('generateFact').addEventListener('click', function() {
    const facts = [
        "Once I hacked my college database",
        "I am a web developer",
        "I am a student",
        "I have a YouTube channel",
        "I love hiking and outdoor adventures",
        "I can speak three languages fluently",
        "I have traveled to over 15 countries",
        "I am a certified scuba diver",
        "I enjoy cooking and trying out new recipes",
        "I am an avid reader and love mystery novels",
        "I have a black belt in karate",
    ];
    const randomIndex = Math.floor(Math.random() * facts.length);
    const funFactElement = document.getElementById('funFact');
    funFactElement.classList.remove('show'); // Remove the class to reset the animation
    setTimeout(() => {
        funFactElement.textContent = facts[randomIndex];
        funFactElement.classList.add('show'); // Add the 'show' class to make the fact visible
    }, 10); // Short delay to allow CSS to reset
});
