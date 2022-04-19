const inquirer = require('inquirer');

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const Questions = require('./src/Questions')

// Actions need

// Ask them for manager info
    // Prompt the user for the data
        // THEN create and store an object for the Manager
        // THEN "Ask them what they would like to do next"

// Ask them for engineer info
    // Prompt the user for the data
        // THEN create and store an object for the Engineer
        // THEN "Ask them what they would like to do next"

// Ask them for intern info
    // Prompt the user for the data
        // THEN create and store an object for the Intern
        // THEN "Ask them what they would like to do next"

// Ask them what they would like to do next
    // Add Engineer, Add Intern, Be done
        // IF "Add Engineer" -> "Ask them for engineer info"
        // IF "Add Inter" -> "Ask them for intern info"
        // IF "Be done" -> "build an html page"
        
// Use all of the collected employee data to build an html page