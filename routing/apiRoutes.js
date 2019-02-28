

var friends = require("../app/data/friends");

module.exports = function (app) {

	app.get("/api/friends", function (req, res) {
		res.json(friends);
	})
	app.post("/api/friends", function (req, res) {
		// res.json(true);
		var bestmatch = { name: "", photo: "", score: 40 }
		var smallestDifference = 40
		
		
		var scoresOfUser = (req.body.entered)
		console.log("===========================lksgdjklndsf====")
		// console.log(scoresOfUser)
	

		friends.forEach(function(friend){
			console.log(friend)
			var totalDifference = 0
			for (var i = 0; i < friend.entered.length; i++) {
				totalDifference += Math.abs(friend.entered[i]- scoresOfUser[i])
		}
		
		if (totalDifference < smallestDifference){
			smallestDifference = totalDifference
			bestmatch = friend
		}
			
		
	})
console.log("ss2",bestmatch)

		res.json(bestmatch)
		friends.push(req.body)
	});
};