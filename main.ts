#! /usr/bin/env node

import inquirer from "inquirer";

   type ansType = {
    userGuess: number
   }

const generatedNo = Math.floor(Math.random() * 10);
console.log("Welcome to number guessing game");

const answers: ansType = await inquirer.prompt([{

    type: "number",
    name: "userGuess",
    message: "Guess a number between 1 to 10: "
}])

const {userGuess} = answers;

console.log(userGuess, "userGuess:", generatedNo, 'original number:')

if (userGuess === generatedNo) {
    console.log("You guessed right!")

} else {
    console.log("You guessed wrong!")
}

// console.log(generatedNo);