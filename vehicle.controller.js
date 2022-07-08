const db = require("../models");
const Vehicle = db.vehicle;

exports.create = async (req, res) => {
    const vehicleType = req.body.vehicleType;
    const registration = req.body.registration;
    const driver = req.body.driver;
    const tankSize = req.body.tankSize;

    Vehicle.create({
        "vehicleType": vehicleType,
        "registration": registration,
        "driver": driver,
        "tankSize": tankSize,
    })
    .then(res.status(200).send({message: "Vehicle Created"}));
};

exports.update = async (req, res) => {
    const vehicleType = req.body.vehicleType;
    const registration = req.body.registration;
    const driver = req.body.driver;
    const tankSize = req.body.tankSize;

    Vehicle.update({
        "vehicleType": vehicleType,
        "registration": registration,
        "driver": driver,
        "tankSize": tankSize,
    }, { where : {id : req.params.vehicleId} })
    .then(res.status(200).send({message: "Vehicle Updated"}));
};

exports.delete = async (req, res) => {
    Vehicle.destroy({
        where : { id : req.params.vehicleId} })
    .then(res.status(200).send({ message: "Vehicle Deleted"}))
};

exports.findAll = (req, res) => {
    Vehicle.findAll()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({ message: err.message || " error retrieving all deliveries." });
        });
    };