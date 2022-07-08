const controller = require("../controllers/driver.controller");

module.exports = function(app){
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/driver", controller.findAll);
    app.post("/driver", controller.create);
    app.put("/driver/:driverId", controller.update);
    app.delete("/driver/:driverId", controller.delete);
}