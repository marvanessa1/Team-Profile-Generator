const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initial Properties', () => {
        it('should create an intern object containing the following properties; name, id, email, and email, as well as school if valid arguments for that proterty were included', () =>{
            const gollum = {
                name: 'Gollum',
                id: 1,
                email: 'myPrecious@theFellowship',
                school: 'Mordor University'
            }

            const employee = new Intern('Gollum', 1, 'myPrecious@theFellowship', 'Mordor University');

            expect(employee.name).toEqual(gollum.name);
            expect(employee.id).toEqual(gollum.id);
            expect(employee.email).toEqual(gollum.email);
            expect(employee.school).toEqual(gollum.school);
        });
    });
    describe('getName', () =>{
        it('should return the name property from the intern object', ()=>{
            const name = 'Gollum';

            const employee = new Intern ('Gollum', 1, 'myPrecious@theFellowship', 'Mordor University');
            const getNameMethod = employee.getName()

            expect(getNameMethod).toEqual(name);
        });
    })
    describe('getID', () =>{
        it('should return the id property from the intern object', ()=>{
            const id = 1;

            const employee = new Intern ('Gollum', 1, 'myPrecious@theFellowship', 'Mordor University');
            const getIDMethod = employee.getID()

            expect(getIDMethod).toEqual(id);
        });
    })
    describe('getEmail', () =>{
        it('should return the email property from the intern object', ()=>{
            const email = 'myPrecious@theFellowship';

            const employee = new Intern ('Gollum', 1, 'myPrecious@theFellowship', 'Mordor University');
            const getEmailMethod = employee.getEmail()

            expect(getEmailMethod).toEqual(email);
        });
    })
    describe('getSchool', () =>{
        it('should return the school property from the intern object', ()=>{
            const school = 'Mordor University';
            
            const employee = new Intern ('Gollum', 1, 'myPrecious@theFellowship', 'Mordor University');
            const getSchoolMethod = employee.getSchool()
            
            expect(getSchoolMethod).toEqual(school);
        });
    });
    describe('getRole', () =>{
        it('should return intern role as a string', ()=>{
            const role = 'Intern';
    
            const employee = new Intern ('Gollum', 1, 'myPrecious@theFellowship', 'Mordor University');
            const getRoleMethod = employee.getRole()
    
            expect(getRoleMethod).toEqual(role);
        });
    });
});