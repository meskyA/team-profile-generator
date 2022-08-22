// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Mesky', 77, 'mesky2015@gmail', 107);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Mesky', 77, 'mesky2015@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 