const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initial Properties', () => {
        it('should create an manager object containing the following properties; name, id, email, and email, as well as officeNumber if valid arguments for that proterty were included', () =>{
            const gollum = {
                name: 'Gollum',
                id: 1,
                email: 'myPrecious@theFellowship',
                officeNumber: '589'
            }

            const employee = new Manager('Gollum', 1, 'myPrecious@theFellowship', '589');

            expect(employee.name).toEqual(gollum.name);
            expect(employee.id).toEqual(gollum.id);
            expect(employee.email).toEqual(gollum.email);
            expect(employee.officeNumber).toEqual(gollum.officeNumber);
        });
    });
    describe('getName', () =>{
        it('should return the name property from the manager object', ()=>{
            const name = 'Gollum';

            const employee = new Manager ('Gollum', 1, 'myPrecious@theFellowship', '589');
            const getNameMethod = employee.getName()

            expect(getNameMethod).toEqual(name);
        });
    })
    describe('getID', () =>{
        it('should return the id property from the manager object', ()=>{
            const id = 1;

            const employee = new Manager ('Gollum', 1, 'myPrecious@theFellowship', '589');
            const getIDMethod = employee.getID()

            expect(getIDMethod).toEqual(id);
        });
    })
    describe('getEmail', () =>{
        it('should return the email property from the manager object', ()=>{
            const email = 'myPrecious@theFellowship';

            const employee = new Manager ('Gollum', 1, 'myPrecious@theFellowship', '589');
            const getEmailMethod = employee.getEmail()

            expect(getEmailMethod).toEqual(email);
        });
    })
    describe('getNumber', () =>{
        it('should return the officeNumber property from the manager object', ()=>{
            const officeNumber = '589';
            
            const employee = new Manager ('Gollum', 1, 'myPrecious@theFellowship', '589');
            const getNumberMethod = employee.getNumber()
            
            expect(getNumberMethod).toEqual(officeNumber);
        });
    });
    describe('getRole', () =>{
        it('should return manager role as a string', ()=>{
            const role = 'Manager';
    
            const employee = new Manager ('Gollum', 1, 'myPrecious@theFellowship', '589');
            const getRoleMethod = employee.getRole()
    
            expect(getRoleMethod).toEqual(role);
        });
    });
});