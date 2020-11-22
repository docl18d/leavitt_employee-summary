// dependancies
const inquirer = require("./lib/inquirer");
const path = require("./lib/path");
const fs = require("./lib/fs");
const util = require("./lib/util");

// classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Cards
const managerCard = require('./templates/manager.html');
const internCard = require('./templates/intern.html');
const engineerCard = require('./templates/engineer.html');

const teamList = [];

// Initial Prompt
const mainApp = () => {
    console.log('Please build your team');
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: 'What is your Managers name?',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Please enter a name.';
          },
        },
        {
          type: 'input',
          name: 'managerId',
          message: 'What is the employee id?',
          validate(value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number.';
          },
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: 'What is your managers email?',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Please enter an email.';
          },
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: 'What is your managers office number?',
          validate(value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number.';
          },
        },
      ])
      .then(response => {
        const manager = new Manager(
          response.managerName,
          response.managerId,
          response.managerEmail,
          response.officeNumber
        );
        const managerCardHtml = managerCard(manager);
        fullTeam.push(managerCardHtml);
        addTeamMembers();
      });

init();