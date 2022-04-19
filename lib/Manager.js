// bringing in employee parent class to be extended
const Employee = require('./Employee');

// Manager class extending from employee class
class Manager extends Employee {
    // Manager class has all the same property names and methods as employee (this extending from employee) but officeNumber property was added and getRole method overriden to return Manager
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getGithub() {
        return this.github;
    }
    // get role method from employee parent class is overridden to return 'Manager', a sublcass Employee's role
    getRole (){
        return `Manager`
    }
};

// exporting to be later used in other js files
module.exports = Manager;
