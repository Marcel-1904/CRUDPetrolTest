var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(express.json());

//Simple route
app.use(express.static(__dirname + "/"));


const db = require("./models");

db.sequelize.sync();

require("./routes/driver.routes.js")(app);
require("./routes/petrol.routes.js")(app);
require("./routes/vehicle.routes.js")(app);

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
})