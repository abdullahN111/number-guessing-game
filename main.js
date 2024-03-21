import inquirer from "inquirer";
const generatedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([{
        type: "number",
        name: "userGuess",
        message: "Guess a number between 1 to 10: "
    }]);
const { userGuess } = answers;
console.log(userGuess, "userGuess:", generatedNo, 'original number:');
if (userGuess === generatedNo) {
    console.log("You guessed right!");
}
else {
    console.log("You guessed wrong!");
}
// console.log(generatedNo);
