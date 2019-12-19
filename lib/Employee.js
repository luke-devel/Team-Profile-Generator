class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }

    addEmployee() {
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
        ]).then(({ name, id, email }) => {
            this.name = name;
            this.id = id;
            this.email = email;
        });
    }
}

module.exports = Employee;
