module.exports = (sequelize, Sequelize) => {
    const Petrol = sequelize.define("petrol", {
        monthlyPetrolDeposit: {
            type: Sequelize.INTEGER
        },
        date: {
            type: Sequelize.DATE
        }

    });

    return Petrol;
}