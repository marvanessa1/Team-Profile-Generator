// Parent employee class
class Employee {
    //class properties
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // class methods
    getName() {
        return this.name;
    }
    
    getID(){
        return this.id;
    }

    getEmail(){
        return this.Email;
    }
    
    getRole(){
        return `Employee`;
    }
}

// exporting to be later used in other js files, extending Employee class
module.exports = Employee;