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


var path = require("path");

var friends = require("../app/data/friends");

module.exports = function (app) {

	app.get("/api/friends", function (req, res) {
		res.json(friends);
	})
	app.post("/api/friends", function (req, res) {
		// res.json(true);
		var bestmatch = {name:"", photo:"", score:40}


	// linked to  
	// 	Name: $("#Name").val().trim(),
    // Photo: $("#Photo").val().trim(),
    // Scores: 

		var scoresOfUser = (req.body.Scores)
		for (var i = 0; i < friends.length; i++) {

			// is amount inside of this lower than bestmatch.score
			// if so then replace all 3 values inside of best match
		}

		 for (var j = 0; j < scoresOfUser.length; j++) {
			// absolute value of difference between responce of friends and baseball players
			// loop thru where 1 abolute value gets added to the sum of all previous values 
			// check previous for loop
		}




		friends.push(req.body)
	});
	
};