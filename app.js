// TODO: Include packages needed for this application
const fs = require('fs');
// Install the `inquirer` dependency HERE
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
//const questions = [];
const promptUser = () => {
    
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your application? (Required)',
            validate: titleInput => {
                if (titleInput) {
                return true;
                } else {
                console.log('Please enter your title!');
                return false;
            }
            }
        },

        {
            type: 'input',
            name: 'Description',
            message: 'Enter your description here (Required)',
            validate: descInput => {
                if (descInput) {
                return true;
                } else {
                console.log('Please enter your description!');
                return false;
                }
            }
        },

        {
            type: 'input',
            name: 'instructions',
            message: 'Enter install instructions please. (Required)',
            validate: instructionInput => {
                if (instructionInput) {
                return true;
                } else {
                console.log('Please enter instructions to continue!');
                return false;
                }
            }
        },

        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you make this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],
            validate: answersInput => {
                if (answersInput) {
                    return true;
                } else {
                    console.log('Please enter at least one choice!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                return true;
                } else {
                console.log('You need to enter a project GitHub link!');
                return false;
                }
            }
        },

        {
            type: 'input',
            name: 'link',
            message: 'Test Instructions',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Enter test instructions for application here!');
                    return false;
                }
            }
        }
        
    ])
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
