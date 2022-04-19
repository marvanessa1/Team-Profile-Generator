// bringing in employee parent class to be extended
const Employee = require('./Employee');

// intern class extending from employee class
class Intern extends Employee {
    // intern class all the same property names and methods as employee (this extending from employee) but school property and getSchool method where added, and getRole overriden with Intern
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    // get role method from employee parent class is overridden to return 'Intern', a sublcass Employee's role
    getRole (){
        return `Intern`
    }
};

// exporting to be later used in other js files
module.exports = Intern;
