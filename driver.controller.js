const db = require("../models");
const Driver = db.driver;

exports.create = async (req, res) => {
    const fullName = req.body.fullName;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const preverdVehicle = req.body.preverdVehicle;
    const hoursWorked = req.body.hoursWorked;
    
    Driver.create({
        "fullName": fullName,
        "firstName": firstName,
        "lastName": lastName,
        "age": age,
        "preverdVehicle": preverdVehicle,
        "hoursWorked": hoursWorked
    })
    .then(res.status(200).send({ message: "Driver Created"}));
}; 

exports.update = async (req, res) => {
    const fullName = req.body.fullName;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const preverdVehicle = req.body.preverdVehicle;
    const hoursWorked = req.body.hoursWorked;
    
    Driver.update({
        "fullName": fullName,
        "firstName": firstName,
        "lastName": lastName,
        "age": age,
        "preverdVehicle": preverdVehicle,
        "hoursWorked": hoursWorked
    }, { where : {id : req.params.driverId} })
    .then(res.status(200).send({ message: "Driver Updated"}));
};

exports.delete = async (req, res) => {
    Driver.destroy({
        where : { id : req.params.driverId} })
    .then(res.status(200).send({ message: "Vehicle Deleted"}))
};

exports.findAll = (req, res) => {
    Driver.findAll()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({ message: err.message || " error retrieving all deliveries." });
        });
};