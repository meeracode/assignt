// Dependencies
// ===========================================================
var express = require("express");
// var indexd = require("./index")
var app = express();
var PORT = 3001;

// Data
// ===========================================================
var pf1 = {
  id:  "id",
  name:  "name",
  profession:  "profession",
  website: "website"

};

var pf2 = {
  id: "id",
  name: "name",
  profession: "profession",
  website: "website"

};

const prof = require("./profile");

pofs = new prof(id = 1,
  profession = " Proejct cm \n", name = "John doe",
  numberOfyears = 29, website = "https://uci.edu");

pofs3 = new prof(id = 1,
  profession = " Proejct cm \n", name = "John doe2",
  numberOfyears = 29, website = "https://uci.edu");

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE

//
// Routes
// ===========================================================
app.get("/", function (req, res) {

  res.send("Welcome Profile server!");
});

app.get("/profile1", function (req, res) {


  var str1 ={"profs":pofs.profession,
            "name": pofs.name,
            "website": pofs.website};

  res.json(str1);
});

app.get("/profile2", function (req, res) {

  var str1 = {
    "profs": pofs3.profession,
    "name": pofs3.name,
    "website": pofs3.website
  };
  res.json(str1);

});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
