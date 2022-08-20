// import employee constructor
const Employee = require("./Employee");

// Manager constructor extends employee constructor

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        
        super (name, id, email);

        this.officeNumber = officeNumber;
    }
    // employee role to manager
    getRole () {
        return "Manager";
    }
}

// export
module.exports = Manager;