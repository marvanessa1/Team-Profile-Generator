// Questions used to build role objects

// Manager Questions
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
        name: "number"
    },
]

// Engineer Questions
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
]

// Intern Questions
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
]
// Prompt: "What would you like to do next?"

// Build main question object that has all the role specific questions and prompts 

module.export = Questions;