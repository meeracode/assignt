// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const employees = require("./Employee");


class Engineer {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor(char1, num1, char1, char ) {
    // this.role = 'engineer';
    // this.name = 'name';
    // this.email ='@email';
    // this.id = 'id';
    this.officeNumber ='officeNumber';
    this.emp = new employees(char1, num1, char1 );
  }
  getName(){
    return this.emp.name;
  }

  // Sets the guesses to 10 and gets the next word
  getRole() {
    return this.emp.role;
  }


  getEmail(){
    return this.emp.email;
  }

  getId(){
    return this.emp.id;
  }


  getOfficeNumber(){
    return this.OfficeNumber;
  }

}

module.export = Engineer;
