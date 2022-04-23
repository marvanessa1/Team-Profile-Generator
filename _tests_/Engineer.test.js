const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initial Properties', () => {
        it('should create an engineer object containing the following properties; name, id, email, and email, as well as github if valid arguments for that proterty were included', () =>{
            const gollum = {
                name: 'Gollum',
                id: 1,
                email: 'myPrecious@theFellowship',
                github: 'SmeagolOrGollum'
            }

            const employee = new Engineer('Gollum', 1, 'myPrecious@theFellowship', 'SmeagolOrGollum');

            expect(employee.name).toEqual(gollum.name);
            expect(employee.id).toEqual(gollum.id);
            expect(employee.email).toEqual(gollum.email);
            expect(employee.github).toEqual(gollum.github);
        });
    });
    describe('getName', () =>{
        it('should return the name property from the engineer object', ()=>{
            const name = 'Gollum';

            const employee = new Engineer ('Gollum', 1, 'myPrecious@theFellowship', 'SmeagolOrGollum');
            const getNameMethod = employee.getName()

            expect(getNameMethod).toEqual(name);
        });
    })
    describe('getID', () =>{
        it('should return the id property from the engineer object', ()=>{
            const id = 1;

            const employee = new Engineer ('Gollum', 1, 'myPrecious@theFellowship', 'SmeagolOrGollum');
            const getIdMethod = employee.getId()

            expect(getIdMethod).toEqual(id);
        });
    })
    describe('getEmail', () =>{
        it('should return the email property from the engineer object', ()=>{
            const email = 'myPrecious@theFellowship';

            const employee = new Engineer ('Gollum', 1, 'myPrecious@theFellowship', 'SmeagolOrGollum');
            const getEmailMethod = employee.getEmail()

            expect(getEmailMethod).toEqual(email);
        });
    })
    describe('getGithub', () =>{
        it('should return the github property from the engineer onject', ()=>{
            const github = 'SmeagolOrGollum';
            
            const employee = new Engineer ('Gollum', 1, 'myPrecious@theFellowship', 'SmeagolOrGollum');
            const getGithubMethod = employee.getGithub()
            
            expect(getGithubMethod).toEqual(github);
        });
    });
    describe('getRole', () =>{
        it('should return engineer role as a string', ()=>{
            const role = 'Engineer';
    
            const employee = new Engineer ('Gollum', 1, 'myPrecious@theFellowship', 'SmeagolOrGollum');
            const getRoleMethod = employee.getRole()
    
            expect(getRoleMethod).toEqual(role);
        });
    });
});