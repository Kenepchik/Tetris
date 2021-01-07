var express = require("express");
var db = require("../database/index");
var router = express.Router();

router.post("/players", function (req, res, next) {
    const name = req.body.name;

    db("player")
        .select()
        .where("name", name)
        .then((result) => {
            if (result.length === 0) {
                return db("player").insert({name});
            }
        })
        .then(() => res.send("Updataed"))
        .catch((error) => res.send(error));
});

router.get("/ratings", function (req, res, next) {
    db({rt: "rating", pl: "player"})
        .select({playerName: "pl.name", points: "rt.point"})
        .where("rt.player_id", "=", db.ref("pl.id"))
        .orderBy("rt.point", "desc")
        .limit(10)
        .then((result) => res.send(result))
        .catch((error) => res.send(error));
});

router.get("/ratings/:name", function (req, res, next) {
    const playerName = req.params["name"];

    db("player")
        .select("id")
        .where("player.name", "=", playerName)
        .then((playerId) => {
            const id = playerId[0].id;

            return db({rt: "rating"})
                .select({points: "rt.point"})
                .where("rt.player_id", "=", id)
                .orderBy("rt.point", "desc")
                .limit(10);
        })
        .then((result) => res.send(result))
        .catch((error) => res.send(error));
});

router.post("/ratings/:name", function (req, res, next) {
    const date = new Date().toISOString("YYYY-MM-DD");
    const playerName = req.params["name"];
    const point = req.body.point;

    db("player")
        .select("id")
        .where("player.name", "=", playerName)
        .then((playerId) => {
            const id = playerId[0].id;
            return db("rating").insert({point, date, player_id: id});
        })
        .then(() => res.send("Updated"))
        .catch((error) => res.send(error));
});

module.exports = router;
