document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const resultText = document.getElementById('result-text');
    const choicesArray = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    choices.forEach(choice => {
        choice.addEventListener('click', (e) => {
            const userChoice = e.target.id;
            const compChoice = choicesArray[Math.floor(Math.random() * 5)];
            const result = getResult(userChoice, compChoice);
            resultText.textContent = `You chose ${userChoice}, my code chose ${compChoice}. ${result}`;
        });
    });

    function getResult(userChoice, compChoice) {
        if (userChoice === compChoice) {
            return "It's a tie, try again. Insufficient facts always invite danger. - Mr.Spock";
        }
        if (
            (userChoice === 'rock' && compChoice === 'scissors') ||
            (userChoice === 'paper' && compChoice === 'rock') ||
            (userChoice === 'scissors' && compChoice === 'paper') ||
            (userChoice === 'rock' && compChoice === 'lizard') ||
            (userChoice === 'lizard' && compChoice === 'spock') ||
            (userChoice === 'spock' && compChoice === 'scissors') ||
            (userChoice === 'scissors' && compChoice === 'lizard') ||
            (userChoice === 'lizard' && compChoice === 'paper') ||
            (userChoice === 'paper' && compChoice === 'spock')) {
            return 'You win. Live long and prosper. - Mr.Spock';
        } else {
            return 'You lose. Computers make excellent and efficient servants, but I have no wish to serve under them. - Mr.Spock';
        }
    }
});
