

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        //TODO: grab data froms frinds.js
    });

    app.post("/api/friends", function (req, res) {
        //TODO: put data in friends.jss
        console.log(req.body);
    });

}