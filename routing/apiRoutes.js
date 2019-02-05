// // Your apiRoutes.js file should contain two routes:
// // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// // requires path
// var path = require('path');

// // Import the list of friend entries
// var friends = require('../data/friends.js');

// // Export API routes
// module.exports = function(app) {
// 	// console.log('___ENTER apiRoutes.js___');

// 	// Total list of friend entries
// 	app.get('/api/friends', function(req, res) {
//         res.json(friends);
        
//     },
// };
// // HOW TO ADD FRIENDS AND THEIR STATS HERE

// add friends
// compare friends and their scores
// push BB player u r most like

__________________________

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var path = require("path");
var friends = require("../data/friendsData");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  })};

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    friends.push (req.body)
	  res.json(true);
	
    });
