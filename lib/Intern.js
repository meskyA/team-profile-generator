// import employee constructor
const Employee = require("./Employee");

// intern constructor extentds employee constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
    // calling employee constructor

    super (name, id, email);

    this.school = school;
}
    // return school from input
    getSchool () {
        return this.school;
    }
    // role of intern
    getRole () {
        return "Intern";
    }
}

// to be exported

module.exports = Intern;