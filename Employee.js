
// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

class Employee {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  // Save a reference for `this` in `this` as `this` will change inside of inquirer

  constructor() {
    // this.emp = new employees();
    this.github = 'github';
  }

  // Sets the guesses to 10 and gets the next word
  getRole() {
    return this.role;
  }

  getEmail() {
    return this.email;
  }

  getId() {
    return this.id;
  }

}

module.export = Employee;
