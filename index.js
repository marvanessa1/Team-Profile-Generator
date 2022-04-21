// required npm packages, js files, and modules
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML');

const employees = [];

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


const nextAction = [
    {
        type:"list",
        message: "What would you like to do next?",
        choices:[
            "Add Engineer to my team",
            "Add an Intern to my team",
            "Finish putting together my team"
        ],
        name: "nextAction"
    }
];

const init = (role) => inquire(role);

async function inquire (role) {
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

    const answers = await inquirer
        .prompt(questions)
        .then((answers)=> {
            createEmployeeObj (role, answers);
            askForNextAction();
        });
};

const createEmployeeObj = (role, answers) => {
    const {name, id, email, officeNumber, github, school} = answers;

    switch (role) {
        case 'Engineer':
            employees.push(new Engineer (name, id, email, github));
            break;
        case 'Intern':
            employees.push(new Intern (name, id, email, school));
            break;
        case 'Manager':
            employees.push(new Manager (name, id, email, officeNumber));
    };
}

async function askForNextAction () {
    const answers = await inquirer
        .prompt(nextAction)
        .then((answers) =>{
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
            }
        })
}

const writeFile = (data => {
    fs.writeFile("./dist/index.html", data, (err) =>
    err? console.error(err) :console.log("Your team html was successfully created!")
    );
})

init('Manager')