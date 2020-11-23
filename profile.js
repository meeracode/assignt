class profile {
  constructor(id, profession = "death", name = "John doe", numberOfyears= 0, website = "https://website.com") {
    this.id = id;
    this.name = name;
    this.profession = profession;
    this.website = website;
  }

  printInfo() {
    console.log(`Number of years ${this.name} website development`);
    console.log(`Number of years ${this.name} website development`);
  }
}
module.exports = profile;
