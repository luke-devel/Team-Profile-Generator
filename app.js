var inquirer = require('inquirer');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
// return inquirer.prompt([
//     {
//         message: 'What is your ID?:',
//         name: 'id'
//     }
// ]).then(({ id }) => {
//     this.id = id;
// });

var x = new Manager();

x.addManager();