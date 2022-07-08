const db = require("../models");
const Petrol = db.petrol;

exports.create = async (req, res) => {
    const monthlyPetrolDeposit = req.body.monthlyPetrolDeposit;
    const date = req.body.date;

    Petrol.create({
        "monthlyPetrolDeposit": monthlyPetrolDeposit,
        "date": date
    })
    .then(res.status(200).send({ message: "Petrol Installment Created"}));
};

exports.update = async (req, res) => {
    const monthlyPetrolDeposit = req.body.monthlyPetrolDeposit;
    const date = req.body.date;

    Petrol.update({
        "monthlyPetrolDeposit": monthlyPetrolDeposit,
        "date": date
    }, { where : {id : req.params.petrolId} })
    .then(res.status(200).send({ message: "Petrol Installment Updated"}));
};

exports.delete = async (req, res) => {
    Petrol.destroy({
        where : { id : req.params.petrolId} })
    .then(res.status(200).send({ message: "Petrol Installment Deleted"}))
};

exports.findAll = (req, res) => {
    Petrol.findAll()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({ message: err.message || " error retrieving all deliveries." });
        });
};