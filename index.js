const { prompt } = require('inquirer');
require ('console.table');
//const db = require('./db/connection');

function promptUser() {
    prompt(
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
        }
    ).then(answers => {
        console.log(answers.menu)
        if(answers.menu === 'View All Departments'){
            viewDepartments()
        } //else
    })
}

function viewDepartments() {
    //do that in here
}

promptUser();
