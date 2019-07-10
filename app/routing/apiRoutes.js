let friendData = require("../data/friends")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData)
    });

    app.post("/api/friends", function (req, res) {
        //TODO: put data in friends.jss
        friendData.push(req.body);
        res.json(true);
    });

}