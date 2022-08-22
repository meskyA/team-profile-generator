// using Intern constructor 
// const Intern = require("../lib/Intern");

// test("Set school via constructor", () => {
//   const testValue = "UCB";
//   const e = new Intern("Mesky", 77, "mesky2015@gmail", testValue);
//   expect(e.school).toBe(testValue);
// });

// test("getRole() should return \"Intern\"", () => {
//   const testValue = "Intern";
//   const e = new Intern("Foo", 1, "test@test.com", "UCLA");
//   expect(e.getRole()).toBe(testValue);
// });

// test("Can get school via getSchool()", () => {
//   const testValue = "UCLA";
//   const e = new Intern("Foo", 1, "test@test.com", testValue);
//   expect(e.getSchool()).toBe(testValue);
// });









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