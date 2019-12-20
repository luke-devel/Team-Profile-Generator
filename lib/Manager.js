const Employee = require("../lib/Employee");
var inquirer = require('inquirer');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    addManager() {
        return inquirer.prompt([
            {
                message: 'Adding a Manager.\nWhat is their Name?:',
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
                message: 'What is their office number?:',
                name: 'officeNumber'
            },
        ]).then(({ name, id, email, officeNumber }) => {
            this.name = name;
            this.id = id;
            this.email = email;
            this.officeNumber = officeNumber;
            console.log(this);
        });
    }
}

module.exports = Manager;