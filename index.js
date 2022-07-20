// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{   
    type: "input",
    name: 'projectName',
    message: "What the name of your project?",
   },
       {   
   type: "input",
   name: 'description',
   message: "Please give a description of your project:",
   },
   {   
   type: "input",
   name: 'installation',
   message: "What are the installation instruction for this project?",
   },
       {   
   type: "input",
   name: 'usage',
   message: "What is the usage information of this project?",
   },
   {   
   type: "list",
   name: 'license',
   message: "What license for this project?",
   choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
   },
   {   
   type: "input",
   name: 'Contributing',
   message: "Who contributed to the project?",
   },
   {   
   type: "input",
   name: 'Tests',
   message: "What are the test instructions for the project?",
   },
   {   
   type: "input",
   name: 'github',
   message: "What is your Github username?",
   },
   {
   type: "input",
   name: 'email',
   message: "What is your email address?",
   },];

// TODO: Create a function to write README file
function writeToFile(fileName, questions,) {
    fs.writeFile(fileName, questions, err =>{
        err ? console.error(err) : console.log('Success!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((responses) =>   writeToFile('README.md', generateMarkdown(responses)))
}

// Function call to initialize app
init();
