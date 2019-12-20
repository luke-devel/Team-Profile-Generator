const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }

    addEngineer() {
        return inquirer.prompt([
            {
                message: 'Adding an Engineer.\nWhat is their Name?:',
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
                message: 'What is their github?:',
                name: 'github'
            },
        ]).then(({ name, id, email, github }) => {
            this.name = name;
            this.id = id;
            this.email = email;
            this.github = github;
        });
    }

}

module.exports = Engineer;