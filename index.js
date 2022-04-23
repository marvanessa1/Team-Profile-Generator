// required npm packages, js files, and modules
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML');

// array of emplyees to hold all the employees that are added to team
const employees = [];

// questions to be asked pertaining to the manager
const questionsManager = [
    {
        type: "input",
        message: "What is the team Manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the team Manager's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the team Manager's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the team Manager's office number?",
        name: "officeNumber"
    },
];

// questions prompts for engineer information 
const questionsEngineer = [
    {
        type: "input",
        message: "What is the Engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the Engineer's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the Engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the Engineer's github profile?",
        name: "github"
    },
];

// question prompts for intern information
const questionsIntern = [
    {
        type: "input",
        message: "What is the Intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the Intern's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the Intern's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What school is the Intern attending?",
        name: "school"
    },
];

// Question for user to select their next action.  Selecting either "add engineer" or "add intern" will prompt user to enter enginner and intern answers
const nextAction = [
    {
        type: "list",
        message: "What would you like to do next?",
        choices: [
            "Add Engineer to my team",
            "Add an Intern to my team",
            "Finish putting together my team"
        ],
        name: "nextAction"
    }
];

// init is used to start questions being asked based of employee role
const init = (role) => inquire(role);

// switch is used instead of multiple if else statements. Since all employee questions have the same type "input", switch  can be used since it uses strict comparisons (===)
async function inquire(role) {
    switch (role) {
        case 'Engineer':
            questions = questionsEngineer;
            break;
        case 'Intern':
            questions = questionsIntern;
            break;
        case 'Manager':
            questions = questionsManager;
    };
    // after a role is selected by user and questions have been aswered, inquired will then creare the employee onject as well as ask the user for the next choice of action.
    const answers = await inquirer
        .prompt(questions)
        .then((answers) => {
            createEmployeeObj(role, answers);
            askForNextAction();
        });
};

// creating employee object depending on employee role and answers from inquirer
const createEmployeeObj = (role, answers) => {
    const { name, id, email, officeNumber, github, school } = answers;// unstructuring inquirer reponses into different variables
    
    switch (role) { 
        // rebuilding each type of employee depending on their role and property types 
        case 'Engineer':
            employees.push(new Engineer(name, id, email, github));
            break;
        case 'Intern':
            employees.push(new Intern(name, id, email, school));
            break;
        case 'Manager':
            employees.push(new Manager(name, id, email, officeNumber));
    };
};

// async function to ask user that they want their next action to be
async function askForNextAction() {
    const answers = await inquirer
        .prompt(nextAction)
        .then((answers) => {
            // based on the the user's selection, switch case is used to trigger next action 
            switch (answers.nextAction) {
                case 'Add Engineer to my team':
                    role = 'Engineer';
                    inquire(role);
                    break;
                case 'Add an Intern to my team':
                    role = 'Intern';
                    inquire(role);
                    break;
                case 'Finish putting together my team':
                    writeFile(generateHTML(employees))
            };
        });
};

// function to write file to build the team profile html page from the generateHTML function
const writeFile = (data => {
    // data to be written in file names index.html inside dist folder
    fs.writeFile("./dist/index.html", data, (err) =>
        err ? console.error(err) : console.log("Your team html was successfully created!")
    );
})

// init function is called passing the manager role since the manager role questions are the first set of questions to be asked once the application starts 
init('Manager')