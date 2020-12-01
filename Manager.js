
const employees = require("./Employee");



class Manager {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer

 constructor() {

    this.emp = new employees();
    this.officeNumber ='officenumber';

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

module.export = Manager;
  // Sets the guesses to 10 and gets the next word
