// Your htmlRoutes.js file should include two routes:

// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.


// // requires path
// var path = require('path');

// Export HTML routes

//  how to link:
    
//     // Survey page

//     // Home page



_______________________________________________________________


var path = require("path");

module.exports = function(app) {

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
// failsafe
// if someone goes to any other page, they get sent to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
