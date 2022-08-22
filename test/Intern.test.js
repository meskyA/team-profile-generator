const Intern = require('../lib/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Mesky', 77, 'mesky2015@gmail', 'UCB');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Mesky', 77, 'mesky2015@gmail', 'UCB');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//  role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Mesky', 77, 'mesky2015@gmail', 'UCB');

    expect(intern.getRole()).toEqual("Intern");
});

