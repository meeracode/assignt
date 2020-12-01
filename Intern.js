const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const employees = require("./Employee");


class Intern {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer


  constructor() {
    this.role = 'Intern';
    this.name = 'name';
    this.email = '@email';
    this.id = 0;

    this.school = 'intern';
  }
  getName() {
    return this.emp.name;
  }

  // Sets the guesses to 10 and gets the next word
  getRole() {
    return this.emp.role;
  }


  getEmail() {
    return this.emp.email;
  }

  getId() {
    return this.emp.id;
  }


  getschool() {
    return this.school;
  }

}

module.export = Intern;
