const controller = require("../controllers/vehicle.controller");

module.exports = function(app){
    app.use(function(req, res, next){
        res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/vehicle", controller.findAll);
    app.post("/vehicle", controller.create);
    app.put("/vehicle/:vehicleId", controller.update);
    app.delete("/vehicle/:vehicleId", controller.delete);
}