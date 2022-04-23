const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('Initial Properties', () => {
        it('should create an employee object containing the following properties; name, id, and email', () =>{
            const gollum = {
                name: 'Gollum',
                id: 1,
                email: 'myPrecious@theFellowship'
            }

            const employee = new Employee ('Gollum', 1, 'myPrecious@theFellowship');

            expect(employee.name).toEqual(gollum.name);
            expect(employee.id).toEqual(gollum.id);
            expect(employee.email).toEqual(gollum.email);
        });
    });
    describe('getName', () =>{
        it('should return the name property from the employee object', ()=>{
            const name = 'Gollum';

            const employee = new Employee ('Gollum', 1, 'myPrecious@theFellowship');
            const getNameMethod = employee.getName()

            expect(getNameMethod).toEqual(name);
        });
    })
    describe('getID', () =>{
        it('should return the id property from the employee object', ()=>{
            const id = 1;

            const employee = new Employee ('Gollum', 1, 'myPrecious@theFellowship');
            const getIdMethod = employee.getId()

            expect(getIdMethod).toEqual(id);
        });
    })
    describe('getEmail', () =>{
        it('should return the email property from the employee object', ()=>{
            const email = 'myPrecious@theFellowship';

            const employee = new Employee ('Gollum', 1, 'myPrecious@theFellowship');
            const getEmailMethod = employee.getEmail()

            expect(getEmailMethod).toEqual(email);
        });
    })
    describe('getRole', () =>{
        it('should return employee role as a string', ()=>{
            const role = 'Employee';

            const employee = new Employee ('Gollum', 1, 'myPrecious@theFellowship');
            const getRoleMethod = employee.getRole()

            expect(getRoleMethod).toEqual(role);
        });
    });
});