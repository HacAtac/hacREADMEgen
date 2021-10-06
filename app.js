// TODO: Include packages needed for this application
const fs = require('fs');
// Install the `inquirer` dependency HERE
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeReadMe } = require('./utils/writereadme');

// TODO: Create an array of questions for user input
//const questions = [];
const promptUser = () => {
    
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your README? (Required)',
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
            name: 'description',
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
            type: 'text',
            name: 'install',
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
            name: 'contribute',
            message: 'Contributing instructions here:'
        },

        {
            type: 'input',
            name: 'instructions',
            message: 'Test Instructions',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Enter test instructions for application here!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },

        {
            type: 'input',
            name: 'credits',
            message: 'Who contributed to making this project?'
        },

        {
            type: 'checkbox',
            name: 'licence',
            message: 'What is the license for this project?',
            choices: ['MIT', 'MIT', 'MIT', 'MIT']
        }
        
    ])
};



// TODO: Create a function to write README file
//function writeToFile(fileName, data) {
//}
// fs.writeFile('./dist/README.md', err => {
    //if (err) throw err;
    //console.log('File has been saved');
//})
// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(questionsData => {
            return generateMarkdown(questionsData);
        })
        .then(writeMarkDown => {
            return writeReadMe(writeMarkDown);
        })
}

// Function call to initialize app
init();
