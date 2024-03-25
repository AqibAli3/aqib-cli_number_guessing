#! /usr/bin/env node

import inquirer from "inquirer";


const randomNumber = Math.floor (Math.random() * 10 + 1)
//you can open this console if you want see what is randomNumber exactly for safe your time
// console.log(randomNumber);

const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess A number between 1 to 10: ",

    }
])

if (answers.userGuessNumber === randomNumber)
console.log("Your answer is number: "+ randomNumber + ", Congratulation! your answer is correct. " );

// i have added a function to return correct random number also if user putted wrong number
else {
    console.log("Sorry dear! your answer is wrong, Correct Number is "+ randomNumber +", Please try Again.");
} 