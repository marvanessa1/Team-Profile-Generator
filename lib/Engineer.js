// bringing in employee parent class to be extended
const Employee = require('./Employee');

// engineer class extending from employee class
class Engineer extends Employee {
    // engineer class all the same property names and methods as employee (this extending from employee) but github property and getGithub method
    constructor(name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    // get role method from employee parent class is overridden to return 'Engineer', a sublcass Employee's role
    getRole (){
        return `Engineer`
    }
};

// exporting to be later used in other js files
module.exports = Engineer;

