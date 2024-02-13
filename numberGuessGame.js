import inquirer from 'inquirer';
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
async function guessNumber() {
    const userGuess = await inquirer.prompt({
        name: 'guess',
        type: 'input',
        message: 'Guess the secret number (between 1 and 100):',
        validate(input) {
            const number = parseInt(input, 10);
            return !isNaN(number) && number >= 1 && number <= 100 ? true : 'Please enter a valid number between 1 and 100.';
        },
    });
    const guess = parseInt(userGuess.guess, 10);
    attempts++;
    if (guess === secretNumber) {
        console.log(`Congratulations! You guessed the correct number (${secretNumber}) in ${attempts} attempts.`);
    }
    else {
        console.log(`Incorrect guess. Try again!`);
        await guessNumber();
    }
}
async function main() {
    console.log('Welcome to the Number Guessing Game!');
    console.log('I have selected a random number between 1 and 100. Can you guess it?');
    await guessNumber();
    console.log('Game Over. Thanks for playing!');
}
main();
