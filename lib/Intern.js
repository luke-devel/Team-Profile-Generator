const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

    addIntern() {
        return inquirer.prompt([
            {
                message: 'Adding a manager.\nWhat is their Name?:',
                name: 'name'
            },
            {
                message: 'What is their id?:',
                name: 'id'
            },
            {
                message: 'What is their email?:',
                name: 'email'
            },
            {
                message: 'What is their school?:',
                name: 'school'
            },
        ]).then(({ name, id, email, school }) => {
            this.name = name;
            this.id = id;
            this.email = email;
            this.school = school;
        });
    }
}

module.exports = Intern;