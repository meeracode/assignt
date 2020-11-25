// Dependencies
// ===========================================================
var express = require("express");
// var indexd = require("./index")
var path = require("path");
var app = express();
var PORT = 3003;

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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//
// exposed module
// ===========================================================
const prof = require("./profile");

pofs = new prof(id = 1,
  profession = " Proejct cm \n", name = "John doe",
  numberOfyears = 29, website = "https://uci.edu");

pofs3 = new prof(id = 1,
  profession = " Proejct cm \n", name = "John doe2",
  numberOfyears = 29, website = "https://uci.edu");

//
// Routes
// ===========================================================
app.get("/", function (req, res) {
  // res.send("Welcome Profile server!");
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/profile1", function (req, res) {
  var str1 ={"profs":pofs.profession,
            "name": pofs.name,
            "website": pofs.website};
  res.send(str1);
});

app.get("/profile2", function (req, res) {
  var str1 = {
    "profs": pofs3.profession,
    "name": pofs3.name,
    "website": pofs3.website
  };
  res.json(str1);
});


// ===========================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
